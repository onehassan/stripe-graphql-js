"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserClaims = exports.stripe = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const stripe_1 = __importDefault(require("stripe"));
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY env var is not set');
}
exports.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15'
});
const getUserClaims = (req) => {
    try {
        const authorizationHeader = req.headers.get('authorization');
        const accessToken = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return undefined;
        }
        if (!process.env.NHOST_JWT_SECRET) {
            throw new Error('NHOST_JWT_SECRET env var is not set');
        }
        const jwtSecret = JSON.parse(process.env.NHOST_JWT_SECRET);
        const decodedToken = jsonwebtoken_1.default.verify(accessToken, jwtSecret.key);
        return decodedToken['https://hasura.io/jwt/claims'];
    }
    catch (error) {
        return undefined;
    }
};
exports.getUserClaims = getUserClaims;
//# sourceMappingURL=utils.js.map