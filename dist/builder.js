"use strict";
exports.__esModule = true;
exports.builder = void 0;
var graphql_scalars_1 = require("graphql-scalars");
var core_1 = require("@pothos/core");
// TODO: Make sure we either use Type or Types (e.g. StripePaymentMethodTypes or StripePaymentMethodType ) everywhere
var builder = new core_1["default"]({});
exports.builder = builder;
builder.queryType();
builder.mutationType();
builder.addScalarType('JSON', graphql_scalars_1.GraphQLJSONObject, {});
