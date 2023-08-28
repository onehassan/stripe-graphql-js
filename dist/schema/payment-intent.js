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
builder_1.builder.objectType('StripePaymentIntent', {
    description: 'Payment intents',
    fields: (t) => ({
        id: t.exposeString('id'),
        object: t.exposeString('object'),
        amount: t.exposeInt('amount'),
        currency: t.exposeString('currency'),
        description: t.exposeString('description', {
            nullable: true
        }),
        metadata: t.expose('metadata', {
            type: 'JSON',
            nullable: true
        }),
        paymentMethodTypes: t.exposeStringList('payment_method_types'),
        statementDescriptor: t.exposeString('statement_descriptor', {
            nullable: true
        }),
        statementDescriptorSuffix: t.exposeString('statement_descriptor_suffix', {
            nullable: true
        }),
        receiptEmail: t.exposeString('receipt_email', {
            nullable: true
        }),
        customer: t.exposeString('customer'),
        amountCapturable: t.exposeInt('amount_capturable'),
        amountDetails: t.expose('amount_details', {
            nullable: true,
            type: 'JSON'
        }),
        amountReceived: t.exposeInt('amount_received'),
        applicationFeeAmount: t.exposeInt('application_fee_amount', {
            nullable: true
        }),
        canceledAt: t.exposeInt('canceled_at', {
            nullable: true
        }),
        transferGroup: t.exposeString('transfer_group', {
            nullable: true
        }),
        cancellationReason: t.exposeString('cancellation_reason', {
            nullable: true
        }),
        created: t.exposeInt('created', {
            nullable: true
        }),
        status: t.exposeString('status'),
        invoice: t.field({
            type: 'StripeInvoice',
            nullable: true,
            resolve: (paymentIntent) => __awaiter(void 0, void 0, void 0, function* () {
                const { invoice } = paymentIntent;
                if (!invoice) {
                    return null;
                }
                const invoiceData = yield utils_1.stripe.invoices.retrieve(invoice);
                return invoiceData;
            })
        })
        // todo: missing fields
        // capture_method
        // add charges
        // application
    })
});
//# sourceMappingURL=payment-intent.js.map