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
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
const utils_1 = require("../utils");
builder_1.builder.objectType('StripeCharge', {
    description: 'Stripe charge object',
    fields: (t) => ({
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
            resolve: (charge) => __awaiter(void 0, void 0, void 0, function* () {
                const { invoice } = charge;
                if (!invoice) {
                    return null;
                }
                const invoiceData = yield utils_1.stripe.invoices.retrieve(invoice);
                return invoiceData;
            })
        }),
        application: t.field({
            type: 'StripeConnectedAccount',
            nullable: true,
            resolve: (charge) => __awaiter(void 0, void 0, void 0, function* () {
                const { application } = charge;
                if (!application)
                    return null;
                const connectedAccount = yield utils_1.stripe.accounts.retrieve(application);
                return connectedAccount;
            })
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
    })
});
//# sourceMappingURL=charge.js.map