"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.schema = exports.createStripeGraphQLServer = void 0;
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
exports.schema = schema_1.schema;
var utils_1 = require("./utils");
var createStripeGraphQLServer = function (params) {
    var cors = params === null || params === void 0 ? void 0 : params.cors;
    var isAllowed = params === null || params === void 0 ? void 0 : params.isAllowed;
    var graphiql = params === null || params === void 0 ? void 0 : params.graphiql;
    var context = function (context) {
        var request = context.request;
        // user id
        var userClaims = (0, utils_1.getUserClaims)(request);
        // check if using correct `x-hasura-admin-secret` header
        var adminSecretFromHeader = request.headers.get("x-hasura-admin-secret");
        var adminSecret = process.env.NHOST_ADMIN_SECRET;
        // check if the request is from Hasura
        var nhostWebhookSecretFromHeader = request.headers.get("x-nhost-webhook-secret");
        var nhostWebhookSecret = process.env.NHOST_WEBHOOK_SECRET;
        var role = request.headers.get("x-hasura-role");
        // variables
        var isAdmin = adminSecretFromHeader === adminSecret || (role === "admin" && nhostWebhookSecretFromHeader === nhostWebhookSecret);
        // if no isAllowed function is provided, we will allow admin requests
        var isAllowedFunction = isAllowed ||
            (function (_stripeCustomerId, context) {
                return context.isAdmin;
            });
        // return
        return __assign(__assign({}, context), { isAllowed: isAllowedFunction, userClaims: userClaims, isAdmin: isAdmin });
    };
    var yoga = (0, graphql_yoga_1.createYoga)({
        cors: cors,
        graphiql: graphiql,
        context: context,
        schema: schema_1.schema,
        graphqlEndpoint: "*"
    });
    return yoga;
};
exports.createStripeGraphQLServer = createStripeGraphQLServer;
