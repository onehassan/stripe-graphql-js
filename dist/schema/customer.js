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
var builder_1 = require("../builder");
var utils_1 = require("../utils");
var payment_methods_1 = require("./payment-methods");
builder_1.builder.objectType('StripeCustomer', {
    description: 'This object represents a customer of your business. It lets you create recurring charges and track payments that belong to the same customer.',
    fields: function (t) { return ({
        id: t.exposeString('id', {
            description: "Unique identifier for the object."
        }),
        object: t.exposeString('object', {
            description: "String representing the object's type. Objects of the same type share the same value. "
        }),
        address: t.expose('address', {
            description: "The customer's address.",
            type: 'StripeAddress',
            nullable: true
        }),
        balance: t.exposeInt('balance', {
            description: "Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized."
        }),
        // TODO: cash_balance
        created: t.exposeInt('created', {
            description: "Time at which the object was created. Measured in seconds since the Unix epoch."
        }),
        currency: t.exposeString('currency', {
            description: "Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.",
            nullable: true
        }),
        // TODO: default_source
        delinquent: t.exposeBoolean('delinquent', {
            description: "When the customer's latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice's latest charge failed. When the customer's latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn't paid by its due date.\n\nIf an invoice is marked uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't get reset to `false`.",
            nullable: true
        }),
        description: t.exposeString('description', {
            description: "An arbitrary string attached to the object. Often useful for displaying to users.",
            nullable: true
        }),
        // TODO: discount
        email: t.exposeString('email', {
            description: "The customer's email address.",
            nullable: true
        }),
        // TODO: invoice_credit_balance
        invoicePrefix: t.exposeString('invoice_prefix', {
            description: "The prefix for the customer used to generate unique invoice numbers.",
            nullable: true
        }),
        // TODO: invoice_settings
        livemode: t.exposeBoolean('livemode', {
            description: "Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode."
        }),
        metadata: t.expose('metadata', {
            description: "Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.",
            type: 'JSON'
        }),
        name: t.exposeString('name', {
            description: "The customer's full name or business name.",
            nullable: true
        }),
        nextInvoiceSequence: t.exposeInt('next_invoice_sequence', {
            description: "The suffix of the customer's next invoice number, e.g., 0001.",
            nullable: true
        }),
        phone: t.exposeString('phone', {
            description: "The customer's phone number.",
            nullable: true
        }),
        preferredLocales: t.exposeStringList('preferred_locales', {
            description: "The customer's preferred locales (languages), ordered by preference.",
            nullable: true
        }),
        shipping: t.expose('shipping', {
            description: "Mailing and shipping address for the customer. Appears on invoices emailed to this customer.",
            type: 'StripeCustomerShipping',
            nullable: true
        }),
        // TODO: sources
        tax: t.expose('tax', {
            type: 'StripeCustomerTax',
            nullable: true
        }),
        // TODO: tax_exempt
        // type TaxExempt = 'exempt' | 'none' | 'reverse';
        // TODO: tax_ids
        // tax_ids?: ApiList<Stripe.TaxId>;
        subscriptions: t.field({
            description: "The customer's current subscriptions, if any.",
            type: 'StripeSubscriptions',
            nullable: false,
            resolve: function (customer) { return __awaiter(void 0, void 0, void 0, function () {
                var subscriptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, utils_1.stripe.subscriptions.list({
                                customer: customer.id
                            })];
                        case 1:
                            subscriptions = _a.sent();
                            return [2 /*return*/, subscriptions];
                    }
                });
            }); }
        }),
        invoices: t.field({
            type: 'StripeInvoices',
            nullable: false,
            resolve: function (customer) { return __awaiter(void 0, void 0, void 0, function () {
                var invoices;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, utils_1.stripe.invoices.list({
                                customer: customer.id
                            })];
                        case 1:
                            invoices = _a.sent();
                            return [2 /*return*/, invoices];
                    }
                });
            }); }
        }),
        paymentIntents: t.field({
            type: 'StripePaymentIntents',
            nullable: false,
            resolve: function (customer) { return __awaiter(void 0, void 0, void 0, function () {
                var paymentIntents;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, utils_1.stripe.paymentIntents.list({
                                customer: customer.id
                            })];
                        case 1:
                            paymentIntents = _a.sent();
                            return [2 /*return*/, paymentIntents];
                    }
                });
            }); }
        }),
        paymentMethods: t.field({
            type: 'StripePaymentMethods',
            args: {
                type: t.arg({
                    type: payment_methods_1.StripePaymentMethodTypes,
                    required: true,
                    defaultValue: 'card'
                }),
                startingAfter: t.arg.string({
                    required: false
                }),
                endingBefore: t.arg.string({
                    required: false
                }),
                limit: t.arg.int({
                    required: false
                })
            },
            nullable: false,
            resolve: function (customer, _a) {
                var type = _a.type, startingAfter = _a.startingAfter, endingBefore = _a.endingBefore, limit = _a.limit;
                return __awaiter(void 0, void 0, void 0, function () {
                    var paymentMethods;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, utils_1.stripe.customers.listPaymentMethods(customer.id, {
                                    type: type,
                                    starting_after: startingAfter || undefined,
                                    ending_before: endingBefore || undefined,
                                    limit: limit || undefined
                                })];
                            case 1:
                                paymentMethods = _b.sent();
                                return [2 /*return*/, paymentMethods];
                        }
                    });
                });
            }
        }),
        charges: t.field({
            type: 'StripeCharges',
            nullable: false,
            resolve: function (customer) { return __awaiter(void 0, void 0, void 0, function () {
                var charges;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, utils_1.stripe.charges.list({
                                customer: customer.id
                            })];
                        case 1:
                            charges = _a.sent();
                            return [2 /*return*/, charges];
                    }
                });
            }); }
        })
    }); }
});
