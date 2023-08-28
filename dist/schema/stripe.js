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
const graphql_1 = require("graphql");
const builder_1 = require("../builder");
const utils_1 = require("../utils");
builder_1.builder.objectType('Stripe', {
    fields: (t) => ({
        connectedAccounts: t.field({
            type: 'StripeConnectedAccounts',
            resolve: (_parent, _, context) => __awaiter(void 0, void 0, void 0, function* () {
                const { isAdmin } = context;
                if (!isAdmin)
                    throw new graphql_1.GraphQLError('Not allowed');
                const connectedAccounts = yield utils_1.stripe.accounts.list();
                return connectedAccounts;
            })
        }),
        connectedAccount: t.field({
            type: 'StripeConnectedAccount',
            args: {
                id: t.arg.string({
                    required: true
                })
            },
            resolve: (_parent, { id }, context) => __awaiter(void 0, void 0, void 0, function* () {
                const { isAdmin } = context;
                if (!isAdmin)
                    throw new graphql_1.GraphQLError('Not allowed');
                const connectedAccount = yield utils_1.stripe.accounts.retrieve(id);
                return connectedAccount;
            })
        }),
        customer: t.field({
            type: 'StripeCustomer',
            args: {
                id: t.arg.string({
                    required: true
                })
            },
            resolve: (_parent, { id }, context) => __awaiter(void 0, void 0, void 0, function* () {
                const { isAllowed } = context;
                if (!(yield isAllowed(id, context))) {
                    throw new graphql_1.GraphQLError('Not allowed');
                }
                const customer = yield utils_1.stripe.customers.retrieve(id);
                if (customer.deleted) {
                    throw new graphql_1.GraphQLError('The Stripe customer is deleted');
                }
                return customer;
            })
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
            resolve: (_parent, { email, endingBefore, limit, startingAfter }, context) => __awaiter(void 0, void 0, void 0, function* () {
                const { isAllowed } = context;
                const customers = yield utils_1.stripe.customers.list({
                    email: email || undefined,
                    limit: limit || undefined,
                    ending_before: endingBefore || undefined,
                    starting_after: startingAfter || undefined
                });
                const customerData = [];
                for (const customer of customers.data) {
                    if (yield isAllowed(customer.id, context)) {
                        customerData.push(customer);
                    }
                }
                customers.data = customerData;
                return customers;
            })
        })
    })
});
builder_1.builder.objectType('StripeMutations', {
    fields: (t) => ({
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
            resolve: (_, { customer, configuration, locale, returnUrl }, context) => __awaiter(void 0, void 0, void 0, function* () {
                const { isAllowed } = context;
                if (!(yield isAllowed(customer, context))) {
                    throw new graphql_1.GraphQLError('Not allowed');
                }
                const session = yield utils_1.stripe.billingPortal.sessions.create({
                    customer,
                    configuration: configuration || undefined,
                    locale: locale || undefined,
                    return_url: returnUrl || undefined
                });
                return session;
            })
        })
    })
});
builder_1.builder.queryFields((t) => ({
    stripe: t.field({
        type: 'Stripe',
        resolve: () => ({})
    })
}));
builder_1.builder.mutationFields((t) => ({
    stripe: t.field({
        type: 'StripeMutations',
        resolve: () => ({})
    })
}));
//# sourceMappingURL=stripe.js.map