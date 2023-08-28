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
builder_1.builder.objectType('StripeSubscription', {
    description: '',
    fields: function (t) { return ({
        id: t.exposeString('id', {
            description: "Unique identifier for the object."
        }),
        object: t.exposeString('object', {
            description: "String representing the object's type. Objects of the same type share the same value."
        }),
        // todo: application
        applicationFeePercent: t.exposeFloat('application_fee_percent', {
            description: "A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.",
            nullable: true
        }),
        automaticTax: t.expose('automatic_tax', {
            type: 'StripeSubscriptionAutomaticTax'
        }),
        billingCycleAnchor: t.exposeInt('billing_cycle_anchor', {
            description: "Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format."
        }),
        billingThresholds: t.expose('billing_thresholds', {
            description: "Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period",
            type: 'StripeSubscriptionBillingThresholds',
            nullable: true
        }),
        cancelAt: t.exposeInt('cancel_at', {
            description: "A date in the future at which the subscription will automatically get canceled",
            nullable: true
        }),
        cancelAtPeriodEnd: t.exposeBoolean('cancel_at_period_end', {
            description: "If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period."
        }),
        canceledAt: t.exposeInt('canceled_at', {
            description: "If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.",
            nullable: true
        }),
        collectionMethods: t.exposeString('collection_method', {
            description: "Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`."
        }),
        created: t.exposeInt('created', {
            description: "Time at which the object was created. Measured in seconds since the Unix epoch."
        }),
        currency: t.exposeString('currency', {
            description: "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies)."
        }),
        currentPeriodEnd: t.exposeInt('current_period_end', {
            description: "End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created."
        }),
        currentPeriodStart: t.exposeInt('current_period_start', {
            description: "Start of the current period that the subscription has been invoiced for."
        }),
        customer: t.exposeString('customer', {
            description: "ID of the customer who owns the subscription."
        }),
        daysUntilDue: t.exposeInt('days_until_due', {
            description: "Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.",
            nullable: true
        }),
        defaultPaymentMethod: t.field({
            description: "ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).",
            type: 'StripePaymentMethod',
            nullable: true,
            resolve: function (subscription) { return __awaiter(void 0, void 0, void 0, function () {
                var default_payment_method, paymentMethod;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            default_payment_method = subscription.default_payment_method;
                            if (!default_payment_method) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, utils_1.stripe.paymentMethods.retrieve(default_payment_method)];
                        case 1:
                            paymentMethod = _a.sent();
                            if (!paymentMethod) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, paymentMethod];
                    }
                });
            }); }
        }),
        // todo: default source
        defaultTaxRates: t.expose('default_tax_rates', {
            description: "The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.",
            type: ['StripeTaxRate'],
            nullable: true
        }),
        description: t.exposeString('description', {
            description: "The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.",
            nullable: true
        }),
        // TODO: discount
        endedAt: t.exposeInt('ended_at', {
            description: "If the subscription has ended, the date the subscription ended.",
            nullable: true
        }),
        items: t.expose('items', {
            description: "List of subscription items, each with an attached price.",
            type: 'StripeSubscriptionItems'
        }),
        latestInvoice: t.field({
            description: "The most recent invoice this subscription has generated.",
            type: 'StripeInvoice',
            nullable: true,
            resolve: function (subscription) { return __awaiter(void 0, void 0, void 0, function () {
                var latest_invoice, invoice;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            latest_invoice = subscription.latest_invoice;
                            if (!latest_invoice) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, utils_1.stripe.invoices.retrieve(latest_invoice)];
                        case 1:
                            invoice = _a.sent();
                            if (!invoice) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, invoice];
                    }
                });
            }); }
        }),
        livemode: t.exposeBoolean('livemode', {
            description: "Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode."
        }),
        metadata: t.expose('metadata', {
            description: "Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.",
            type: 'JSON'
        }),
        nextPendingInvoiceItemInvoice: t.exposeInt('next_pending_invoice_item_invoice', {
            description: "Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.",
            nullable: true
        }),
        pauseCollection: t.expose('pause_collection', {
            description: "If specified, payment collection for this subscription will be paused.",
            type: 'StripeSubscriptionPauseCollection',
            nullable: true
        }),
        // todo: payment settings
        // todo: pending_invoice_item_interval
        // todo: pending_setup_intent
        // todo: pending_update
        // todo: schedule
        startDate: t.exposeInt('start_date', {
            description: "Date when the subscription was first created. The date might differ from the `created` date due to backdating."
        }),
        status: t.exposeString('status', {
            description: "Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.\n\nFor `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.\n\nA subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.\n\nIf subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.\n\nIf subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices."
        }),
        testClock: t.field({
            description: "ID of the test clock this subscription belongs to.",
            type: 'StripeTestClock',
            nullable: true,
            resolve: function (subscription) { return __awaiter(void 0, void 0, void 0, function () {
                var test_clock, testClock;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            test_clock = subscription.test_clock;
                            if (!test_clock) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, utils_1.stripe.testHelpers.testClocks.retrieve(test_clock)];
                        case 1:
                            testClock = _a.sent();
                            if (!testClock) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, testClock];
                    }
                });
            }); }
        }),
        // todo: transfer data
        trialEnd: t.exposeInt('trial_end', {
            description: "If the subscription has a trial, the end of that trial.",
            nullable: true
        }),
        trialStart: t.exposeInt('trial_start', {
            description: "If the subscription has a trial, the beginning of that trial.",
            nullable: true
        })
    }); }
});
