"use strict";
exports.__esModule = true;
exports.getUserClaims = exports.stripe = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var stripe_1 = require("stripe");
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY env var is not set');
}
exports.stripe = new stripe_1["default"](process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15'
});
var getUserClaims = function (req) {
    try {
        var authorizationHeader = req.headers.get('authorization');
        var accessToken = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return undefined;
        }
        if (!process.env.NHOST_JWT_SECRET) {
            throw new Error('NHOST_JWT_SECRET env var is not set');
        }
        var jwtSecret = JSON.parse(process.env.NHOST_JWT_SECRET);
        var decodedToken = jsonwebtoken_1["default"].verify(accessToken, jwtSecret.key);
        return decodedToken['https://hasura.io/jwt/claims'];
    }
    catch (error) {
        return undefined;
    }
};
exports.getUserClaims = getUserClaims;
