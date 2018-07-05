"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var remme_rest_1 = require("remme-rest");
var protobufs = require("remme-protobuf");
var remme_utils_1 = require("remme-utils");
var RemmeBlockchainInfo = /** @class */ (function () {
    function RemmeBlockchainInfo(remmeRest) {
        this._remmeRest = remmeRest;
    }
    RemmeBlockchainInfo.prototype.getBatchById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.batches, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBatches = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = this._checkQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.batches, "", query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBlockById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.blocks, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBlocks = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = this._checkQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.blocks, "", query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getPeers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.peers)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getReceipts = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.receipts, "", { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getState = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = this._checkQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.state, "", query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getStateByAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkAddress(address);
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.state, address)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getTransactionById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.transactions, id)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = this._prepareTransaction(apiResult.data);
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getTransactions = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = this._checkQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.ValidatorMethods.transactions, "", query)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = apiResult.data.map(function (item) {
                            return _this._prepareTransaction(item);
                        });
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype._checkId = function (id) {
        if (!id || id.search(/[a-f0-9]{128}/) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    };
    RemmeBlockchainInfo.prototype._checkAddress = function (address) {
        if (!address || address.search(/[a-f0-9]{70}/) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    };
    RemmeBlockchainInfo.prototype._checkQuery = function (query) {
        return Object.entries(query).reduce(function (prev, _a) {
            var key = _a[0], value = _a[1];
            var error;
            switch (key) {
                case "head":
                case "start":
                    if (value.search(/[a-f0-9]{128}/) === -1) {
                        error = "Parameter '" + key + "' need to a valid";
                    }
                    else {
                        return __assign({}, prev, (_b = {}, _b[key] = value, _b));
                    }
                    break;
                case "limit":
                    if (typeof value !== "number") {
                        error = "Parameter '" + key + "' need to be a number";
                    }
                    else {
                        return __assign({}, prev, (_c = {}, _c[key] = value, _c));
                    }
                    break;
                case "address":
                    if (value.search(/[a-f0-9]{70}/) === -1) {
                        error = "Given '" + key + "' is not a valid";
                    }
                    else {
                        return __assign({}, prev, (_d = {}, _d[key] = value, _d));
                    }
                    break;
                // case "reverse":
                //     if (typeof value !== "boolean") {
                //         error = `Parameter '${key}' need to be a boolean`;
                //     }
                //     break;
                default: return prev;
            }
            if (error) {
                throw new Error(error);
            }
            var _b, _c, _d;
        }, {});
    };
    // private _prepareAddress(): void {
    //
    // }
    RemmeBlockchainInfo.prototype._prepareBatch = function (batch) {
        var _this = this;
        batch.transactions = batch.transactions.map(function (transaction) {
            return _this._prepareTransaction(transaction);
        });
        return batch;
    };
    RemmeBlockchainInfo.prototype._prepareTransaction = function (transaction) {
        var family_name = transaction.header.family_name;
        if (family_name in RemmeBlockchainInfo.correspond) {
            var data = protobufs.TransactionPayload.decode(remme_utils_1.base64ToArrayBuffer(transaction.payload));
            return __assign({}, transaction, { transactionProtobuf: protobufs.TransactionPayload, protobuf: RemmeBlockchainInfo.correspond[family_name][data.method] });
        }
        return transaction;
    };
    RemmeBlockchainInfo.correspond = {
        account: [
            protobufs.TransferPayload,
            protobufs.GenesisPayload,
        ],
        AtomicSwap: [
            protobufs.AtomicSwapInitPayload,
            protobufs.AtomicSwapApprovePayload,
            protobufs.AtomicSwapExpirePayload,
            protobufs.AtomicSwapSetSecretLockPayload,
            protobufs.AtomicSwapClosePayload,
        ],
        pub_key: [
            protobufs.NewPubKeyPayload,
            protobufs.RevokePubKeyPayload,
        ],
    };
    return RemmeBlockchainInfo;
}());
exports.RemmeBlockchainInfo = RemmeBlockchainInfo;
//# sourceMappingURL=index.js.map