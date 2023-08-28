import { builder } from '../builder'
import { StripeInvoice, StripePaymentMethod } from '../types'
import { stripe } from '../utils'

builder.objectType('StripeSubscription', {
  description: '',
  fields: (t) => ({
    id: t.exposeString('id', {
      description: `Unique identifier for the object.`
    }),
    object: t.exposeString('object', {
      description: `String representing the object's type. Objects of the same type share the same value.`
    }),
    // todo: application
    applicationFeePercent: t.exposeFloat('application_fee_percent', {
      description: `A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.`,
      nullable: true
    }),
    automaticTax: t.expose('automatic_tax', {
      type: 'StripeSubscriptionAutomaticTax'
    }),
    billingCycleAnchor: t.exposeInt('billing_cycle_anchor', {
      description: `Determines the date of the first full invoice, and, for plans with \`month\` or \`year\` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.`
    }),
    billingThresholds: t.expose('billing_thresholds', {
      description: `Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period`,
      type: 'StripeSubscriptionBillingThresholds',
      nullable: true
    }),
    cancelAt: t.exposeInt('cancel_at', {
      description: `A date in the future at which the subscription will automatically get canceled`,
      nullable: true
    }),
    cancelAtPeriodEnd: t.exposeBoolean('cancel_at_period_end', {
      description: `If the subscription has been canceled with the \`at_period_end\` flag set to \`true\`, \`cancel_at_period_end\` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.`
    }),
    canceledAt: t.exposeInt('canceled_at', {
      description: `If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with \`cancel_at_period_end\`, \`canceled_at\` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.`,
      nullable: true
    }),
    collectionMethods: t.exposeString('collection_method', {
      description: `Either \`charge_automatically\`, or \`send_invoice\`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as \`active\`.`
    }),
    created: t.exposeInt('created', {
      description: `Time at which the object was created. Measured in seconds since the Unix epoch.`
    }),
    currency: t.exposeString('currency', {
      description: `Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).`
    }),
    currentPeriodEnd: t.exposeInt('current_period_end', {
      description: `End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.`
    }),
    currentPeriodStart: t.exposeInt('current_period_start', {
      description: `Start of the current period that the subscription has been invoiced for.`
    }),
    customer: t.exposeString('customer', {
      description: `ID of the customer who owns the subscription.`
    }),
    daysUntilDue: t.exposeInt('days_until_due', {
      description: `Number of days a customer has to pay invoices generated by this subscription. This value will be \`null\` for subscriptions where \`collection_method=charge_automatically\`.`,
      nullable: true
    }),
    defaultPaymentMethod: t.field({
      description: `ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over \`default_source\`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).`,
      type: 'StripePaymentMethod',
      nullable: true,
      resolve: async (subscription) => {
        const { default_payment_method } = subscription
        if (!default_payment_method) {
          return null
        }

        const paymentMethod = await stripe.paymentMethods.retrieve(default_payment_method as string)

        if (!paymentMethod) {
          return null
        }

        return paymentMethod as StripePaymentMethod
      }
    }),
    // todo: default source
    defaultTaxRates: t.expose('default_tax_rates', {
      description: `The tax rates that will apply to any subscription item that does not have \`tax_rates\` set. Invoices created will have their \`default_tax_rates\` populated from the subscription.`,
      type: ['StripeTaxRate'],
      nullable: true
    }),
    description: t.exposeString('description', {
      description: `The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.`,
      nullable: true
    }),
    // TODO: discount
    endedAt: t.exposeInt('ended_at', {
      description: `If the subscription has ended, the date the subscription ended.`,
      nullable: true
    }),
    items: t.expose('items', {
      description: `List of subscription items, each with an attached price.`,
      type: 'StripeSubscriptionItems'
    }),
    latestInvoice: t.field({
      description: `The most recent invoice this subscription has generated.`,
      type: 'StripeInvoice',
      nullable: true,
      resolve: async (subscription) => {
        const { latest_invoice } = subscription
        if (!latest_invoice) {
          return null
        }

        const invoice = await stripe.invoices.retrieve(latest_invoice as string)

        if (!invoice) {
          return null
        }

        return invoice as StripeInvoice
      }
    }),
    livemode: t.exposeBoolean('livemode', {
      description: `Has the value \`true\` if the object exists in live mode or the value \`false\` if the object exists in test mode.`
    }),
    metadata: t.expose('metadata', {
      description: `Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.`,
      type: 'JSON'
    }),
    nextPendingInvoiceItemInvoice: t.exposeInt('next_pending_invoice_item_invoice', {
      description: `Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at \`pending_invoice_item_interval\`.`,
      nullable: true
    }),
    pauseCollection: t.expose('pause_collection', {
      description: `If specified, payment collection for this subscription will be paused.`,
      type: 'StripeSubscriptionPauseCollection',
      nullable: true
    }),
    // todo: payment settings
    // todo: pending_invoice_item_interval
    // todo: pending_setup_intent
    // todo: pending_update
    // todo: schedule
    startDate: t.exposeInt('start_date', {
      description: `Date when the subscription was first created. The date might differ from the \`created\` date due to backdating.`
    }),
    status: t.exposeString('status', {
      description: `Possible values are \`incomplete\`, \`incomplete_expired\`, \`trialing\`, \`active\`, \`past_due\`, \`canceled\`, or \`unpaid\`.\n\nFor \`collection_method=charge_automatically\` a subscription moves into \`incomplete\` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an \`active\` state. If the first invoice is not paid within 23 hours, the subscription transitions to \`incomplete_expired\`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.\n\nA subscription that is currently in a trial period is \`trialing\` and moves to \`active\` when the trial period is over.\n\nIf subscription \`collection_method=charge_automatically\` it becomes \`past_due\` when payment to renew it fails and \`canceled\` or \`unpaid\` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.\n\nIf subscription \`collection_method=send_invoice\` it becomes \`past_due\` when its invoice is not paid by the due date, and \`canceled\` or \`unpaid\` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of \`unpaid\`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.`
    }),
    testClock: t.field({
      description: `ID of the test clock this subscription belongs to.`,
      type: 'StripeTestClock',
      nullable: true,
      resolve: async (subscription) => {
        const { test_clock } = subscription

        if (!test_clock) {
          return null
        }

        const testClock = await stripe.testHelpers.testClocks.retrieve(test_clock as string)

        if (!testClock) {
          return null
        }

        return testClock
      }
    }),
    // todo: transfer data
    trialEnd: t.exposeInt('trial_end', {
      description: `If the subscription has a trial, the end of that trial.`,
      nullable: true
    }),
    trialStart: t.exposeInt('trial_start', {
      description: `If the subscription has a trial, the beginning of that trial.`,
      nullable: true
    })
  })
})
