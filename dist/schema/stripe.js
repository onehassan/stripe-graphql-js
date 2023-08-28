"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
var graphql_1 = require("graphql");
var builder_1 = require("../builder");
var utils_1 = require("../utils");
builder_1.builder.objectType('Stripe', {
    fields: function (t) { return ({
        connectedAccounts: t.field({
            type: 'StripeConnectedAccounts',
            resolve: function (_parent, _, context) { return __awaiter(void 0, void 0, void 0, function () {
                var isAdmin, connectedAccounts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isAdmin = context.isAdmin;
                            if (!isAdmin)
                                throw new graphql_1.GraphQLError('Not allowed');
                            return [4 /*yield*/, utils_1.stripe.accounts.list()];
                        case 1:
                            connectedAccounts = _a.sent();
                            return [2 /*return*/, connectedAccounts];
                    }
                });
            }); }
        }),
        connectedAccount: t.field({
            type: 'StripeConnectedAccount',
            args: {
                id: t.arg.string({
                    required: true
                })
            },
            resolve: function (_parent, _a, context) {
                var id = _a.id;
                return __awaiter(void 0, void 0, void 0, function () {
                    var isAdmin, connectedAccount;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                isAdmin = context.isAdmin;
                                if (!isAdmin)
                                    throw new graphql_1.GraphQLError('Not allowed');
                                return [4 /*yield*/, utils_1.stripe.accounts.retrieve(id)];
                            case 1:
                                connectedAccount = _b.sent();
                                return [2 /*return*/, connectedAccount];
                        }
                    });
                });
            }
        }),
        customer: t.field({
            type: 'StripeCustomer',
            args: {
                id: t.arg.string({
                    required: true
                })
            },
            resolve: function (_parent, _a, context) {
                var id = _a.id;
                return __awaiter(void 0, void 0, void 0, function () {
                    var isAllowed, customer;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                isAllowed = context.isAllowed;
                                return [4 /*yield*/, isAllowed(id, context)];
                            case 1:
                                if (!(_b.sent())) {
                                    throw new graphql_1.GraphQLError('Not allowed');
                                }
                                return [4 /*yield*/, utils_1.stripe.customers.retrieve(id)];
                            case 2:
                                customer = _b.sent();
                                if (customer.deleted) {
                                    throw new graphql_1.GraphQLError('The Stripe customer is deleted');
                                }
                                return [2 /*return*/, customer];
                        }
                    });
                });
            }
        }),
        customers: t.field({
            type: 'StripeCustomers',
            args: {
                email: t.arg.string({
                    description: "A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.",
                    required: false
                }),
                endingBefore: t.arg.string({
                    description: 'A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.',
                    required: false
                }),
                limit: t.arg.int({
                    description: 'A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.',
                    required: false
                }),
                startingAfter: t.arg.string({
                    description: 'A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.',
                    required: false
                })
            },
            resolve: function (_parent, _a, context) {
                var email = _a.email, endingBefore = _a.endingBefore, limit = _a.limit, startingAfter = _a.startingAfter;
                return __awaiter(void 0, void 0, void 0, function () {
                    var isAllowed, customers, customerData, _i, _b, customer;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                isAllowed = context.isAllowed;
                                return [4 /*yield*/, utils_1.stripe.customers.list({
                                        email: email || undefined,
                                        limit: limit || undefined,
                                        ending_before: endingBefore || undefined,
                                        starting_after: startingAfter || undefined
                                    })];
                            case 1:
                                customers = _c.sent();
                                customerData = [];
                                _i = 0, _b = customers.data;
                                _c.label = 2;
                            case 2:
                                if (!(_i < _b.length)) return [3 /*break*/, 5];
                                customer = _b[_i];
                                return [4 /*yield*/, isAllowed(customer.id, context)];
                            case 3:
                                if (_c.sent()) {
                                    customerData.push(customer);
                                }
                                _c.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/, 2];
                            case 5:
                                customers.data = customerData;
                                return [2 /*return*/, customers];
                        }
                    });
                });
            }
        })
    }); }
});
builder_1.builder.objectType('StripeMutations', {
    fields: function (t) { return ({
        createBillingPortalSession: t.field({
            type: 'StripeBillingPortalSession',
            args: {
                customer: t.arg.string({
                    required: true
                }),
                configuration: t.arg.string({
                    required: false
                }),
                locale: t.arg.string({
                    required: false
                }),
                returnUrl: t.arg.string({
                    required: false
                })
            },
            resolve: function (_, _a, context) {
                var customer = _a.customer, configuration = _a.configuration, locale = _a.locale, returnUrl = _a.returnUrl;
                return __awaiter(void 0, void 0, void 0, function () {
                    var isAllowed, session;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                isAllowed = context.isAllowed;
                                return [4 /*yield*/, isAllowed(customer, context)];
                            case 1:
                                if (!(_b.sent())) {
                                    throw new graphql_1.GraphQLError('Not allowed');
                                }
                                return [4 /*yield*/, utils_1.stripe.billingPortal.sessions.create({
                                        customer: customer,
                                        configuration: configuration || undefined,
                                        locale: locale || undefined,
                                        return_url: returnUrl || undefined
                                    })];
                            case 2:
                                session = _b.sent();
                                return [2 /*return*/, session];
                        }
                    });
                });
            }
        })
    }); }
});
builder_1.builder.queryFields(function (t) { return ({
    stripe: t.field({
        type: 'Stripe',
        resolve: function () { return ({}); }
    })
}); });
builder_1.builder.mutationFields(function (t) { return ({
    stripe: t.field({
        type: 'StripeMutations',
        resolve: function () { return ({}); }
    })
}); });
