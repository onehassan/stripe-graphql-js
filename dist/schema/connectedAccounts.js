"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeConnectedAccounts', {
    description: 'List of Stripe Connected Account objects',
    fields: function (t) { return ({
        object: t.exposeString('object'),
        url: t.exposeString('url'),
        hasMore: t.exposeBoolean('has_more'),
        data: t.expose('data', {
            type: ['StripeConnectedAccount'],
            nullable: false
        })
    }); }
});
