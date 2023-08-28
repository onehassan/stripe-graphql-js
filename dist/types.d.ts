import type Stripe from 'stripe';
import type { CORSOptions, YogaInitialContext } from 'graphql-yoga';
export declare type StripeGraphQLContext = {
    isAllowed: (stripeCustomerId: string, context: Context) => boolean | Promise<boolean>;
    userClaims?: UserHasuraClaims;
    isAdmin: boolean;
};
export declare type Context = YogaInitialContext & StripeGraphQLContext;
export declare type CreateServerProps = {
    cors?: CORSOptions;
    isAllowed?: (stripeCustomerId: string, context: Context) => boolean | Promise<boolean>;
    graphiql?: boolean;
};
export declare type StripePaymentMethod = Stripe.PaymentMethod & {
    customer: string | null;
};
export declare type StripeSubscription = Stripe.Subscription & {
    customer: string;
    test_clock: string | null;
};
export declare type StripeInvoice = Stripe.Invoice & {
    id: string;
    customer: string;
    default_payment_method: StripePaymentMethod | null;
    payment_intent: any;
};
export declare type StripePaymentIntent = Stripe.PaymentIntent & {
    customer: string;
};
export declare type StripeCharge = Stripe.Charge & {
    customer: string;
    payment_intent: string | null;
};
export declare type UserHasuraClaims = {
    'x-hasura-user-id': string;
    'x-hasura-default-role': string;
    'x-hasura-allowed-roles': string[];
} & {
    [key: string]: string;
};
//# sourceMappingURL=types.d.ts.map