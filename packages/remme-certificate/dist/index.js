"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var remme_rest_1 = require("remme-rest");
var models_1 = require("./models");
var RemmeCertificate = /** @class */ (function () {
    function RemmeCertificate(remmeRest) {
        if (remmeRest === void 0) { remmeRest = new remme_rest_1.RemmeRest(); }
        this._rsaKeySize = 2048;
        this._remmeRest = remmeRest;
    }
    RemmeCertificate.prototype.createAndStoreCertificate = function (certificateDataToCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, subject, csr, certResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = this.generateKeyPair();
                        subject = this.createSubject(certificateDataToCreate);
                        csr = this.createSignRequest(subject, keys);
                        return [4 /*yield*/, this.signAndStoreCertificate(csr)];
                    case 1:
                        certResponse = _a.sent();
                        // certResponse.certificate.privateKey = keys.privateKey;
                        return [2 /*return*/, certResponse];
                }
            });
        });
    };
    RemmeCertificate.prototype.signAndStoreCertificate = function (signingRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, apiResult, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = new models_1.StorePayload(signingRequest);
                        return [4 /*yield*/, this._remmeRest
                                .putRequest(remme_rest_1.RemmeMethods.certificateStore, payload)];
                    case 1:
                        apiResult = _a.sent();
                        result = new models_1.CertificateTransactionResponse(this._remmeRest.socketAddress());
                        result.batchId = apiResult.batch_id;
                        result.certificate = remme_utils_1.forge.pki.certificateFromPem(apiResult.certificate);
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("Given certificate is not a valid");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // TODO
    RemmeCertificate.prototype.storeCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("not implemented");
            });
        });
    };
    RemmeCertificate.prototype.checkCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = new models_1.CheckPayload(certificate);
                        return [4 /*yield*/, this._remmeRest
                                .postRequest(remme_rest_1.RemmeMethods.certificate, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !result.revoked];
                    case 2:
                        e_2 = _a.sent();
                        throw new Error("Given certificate is not a valid");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemmeCertificate.prototype.revokeCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, apiResult, result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = new models_1.CheckPayload(certificate);
                        return [4 /*yield*/, this._remmeRest
                                .deleteRequest(remme_rest_1.RemmeMethods.certificate, payload)];
                    case 1:
                        apiResult = _a.sent();
                        result = new remme_utils_1.BaseTransactionResponse(this._remmeRest.socketAddress());
                        result.batchId = apiResult.batch_id;
                        return [2 /*return*/, result];
                    case 2:
                        e_3 = _a.sent();
                        throw new Error("Given certificate is not a valid");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemmeCertificate.prototype.getUserCertificates = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .getRequest(remme_rest_1.RemmeMethods.userCertificates, publicKey)];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, apiResult.certificates];
                }
            });
        });
    };
    RemmeCertificate.prototype.createSignRequest = function (subject, keys) {
        var csr = remme_utils_1.forge.pki.createCertificationRequest();
        csr.setSubject(subject);
        csr.publicKey = keys.publicKey;
        csr.sign(keys.privateKey, remme_utils_1.forge.md.sha256.create());
        return csr;
    };
    RemmeCertificate.prototype.createSubject = function (certificateDataToCreate) {
        if (!certificateDataToCreate.commonName) {
            throw new Error("Attribute commonName must have a value");
        }
        if (!certificateDataToCreate.validity) {
            throw new Error("Attribute validity must have a value");
        }
        return Object.entries(certificateDataToCreate).map(function (_a) {
            var key = _a[0], value = _a[1];
            var name;
            var type;
            switch (key) {
                case "email":
                    name = "emailAddress";
                    break;
                case "streetAddress":
                    name = "street";
                    break;
                case "stateName":
                    name = "ST";
                    break;
                case "generationQualifier":
                    name = "generation";
                    break;
                case "title":
                    name = "T";
                    break;
                case "serial":
                    name = "serialNumber";
                    break;
                default: name = key;
            }
            if (!(name in remme_utils_1.forge.pki.oids)) {
                type = name;
            }
            return {
                name: name,
                value: value,
                type: type,
            };
        });
    };
    RemmeCertificate.prototype.generateKeyPair = function () {
        return remme_utils_1.forge.pki.rsa.generateKeyPair(this._rsaKeySize);
    };
    return RemmeCertificate;
}());
exports.RemmeCertificate = RemmeCertificate;
//# sourceMappingURL=index.js.map