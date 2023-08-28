"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = void 0;
const graphql_scalars_1 = require("graphql-scalars");
const core_1 = __importDefault(require("@pothos/core"));
// TODO: Make sure we either use Type or Types (e.g. StripePaymentMethodTypes or StripePaymentMethodType ) everywhere
const builder = new core_1.default({});
exports.builder = builder;
builder.queryType();
builder.mutationType();
builder.addScalarType('JSON', graphql_scalars_1.GraphQLJSONObject, {});
//# sourceMappingURL=builder.js.map