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
builder_1.builder.objectType('StripeCharge', {
    description: 'Stripe charge object',
    fields: function (t) { return ({
        id: t.exposeString('id'),
        customer: t.exposeString('customer'),
        amount: t.exposeInt('amount'),
        amountCaptured: t.exposeInt('amount_captured'),
        amountRefunded: t.exposeInt('amount_refunded'),
        applicationFeeAmount: t.exposeInt('application_fee_amount', { nullable: true }),
        calculatedStatementDescriptor: t.exposeString('calculated_statement_descriptor', {
            nullable: true
        }),
        billingDetails: t.expose('billing_details', { type: 'JSON', nullable: true }),
        captured: t.exposeBoolean('captured'),
        created: t.exposeInt('created', {
            nullable: true
        }),
        currency: t.exposeString('currency'),
        description: t.exposeString('description', { nullable: true }),
        disputed: t.exposeBoolean('disputed'),
        failureCode: t.exposeString('failure_code', { nullable: true }),
        invoice: t.field({
            type: 'StripeInvoice',
            nullable: true,
            resolve: function (charge) { return __awaiter(void 0, void 0, void 0, function () {
                var invoice, invoiceData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            invoice = charge.invoice;
                            if (!invoice) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, utils_1.stripe.invoices.retrieve(invoice)];
                        case 1:
                            invoiceData = _a.sent();
                            return [2 /*return*/, invoiceData];
                    }
                });
            }); }
        }),
        application: t.field({
            type: 'StripeConnectedAccount',
            nullable: true,
            resolve: function (charge) { return __awaiter(void 0, void 0, void 0, function () {
                var application, connectedAccount;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            application = charge.application;
                            if (!application)
                                return [2 /*return*/, null];
                            return [4 /*yield*/, utils_1.stripe.accounts.retrieve(application)];
                        case 1:
                            connectedAccount = _a.sent();
                            return [2 /*return*/, connectedAccount];
                    }
                });
            }); }
        }),
        livemode: t.exposeBoolean('livemode'),
        metadata: t.expose('metadata', { nullable: true, type: 'JSON' }),
        outcome: t.expose('outcome', { nullable: true, type: 'JSON' }),
        fraudDetails: t.expose('fraud_details', { nullable: true, type: 'JSON' }),
        paid: t.exposeBoolean('paid'),
        receiptEmail: t.exposeString('receipt_email', { nullable: true }),
        receiptNumber: t.exposeString('receipt_number', { nullable: true }),
        receiptUrl: t.exposeString('receipt_url', { nullable: true }),
        refunded: t.exposeBoolean('refunded'),
        shipping: t.expose('shipping', { nullable: true, type: 'JSON' }),
        statementDescriptor: t.exposeString('statement_descriptor', { nullable: true }),
        statementDescriptorSuffix: t.exposeString('statement_descriptor_suffix', { nullable: true }),
        status: t.exposeString('status'),
        transferData: t.expose('transfer_data', { nullable: true, type: 'JSON' }),
        transferGroup: t.exposeString('transfer_group', { nullable: true }),
        refunds: t.expose('refunds', { nullable: true, type: 'JSON' }),
        paymentMethodDetails: t.expose('payment_method_details', { nullable: true, type: 'JSON' }),
        paymentIntent: t.exposeString('payment_intent', { nullable: true }),
        paymentMethod: t.exposeString('payment_method', { nullable: true })
        // todo: add missing fields
        // application_fee
        // balance_transaction
        // on_behalf_of
        // failure_balance_transaction
        // source_transfer
    }); }
});
