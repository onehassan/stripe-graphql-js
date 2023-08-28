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
builder_1.builder.objectType('StripeProduct', {
    description: '',
    fields: function (t) { return ({
        id: t.exposeString('id', {
            description: "Unique identifier for the object."
        }),
        object: t.exposeString('object', {
            description: "String representing the object's type. Objects of the same type share the same value."
        }),
        active: t.exposeBoolean('active', {
            description: "Whether the product is currently available for purchase."
        }),
        attributes: t.exposeStringList('attributes', {
            description: "A list of up to 5 attributes that each SKU can provide values for (e.g., `[\"color\", \"size\"]`).",
            nullable: true
        }),
        caption: t.exposeString('caption', {
            description: "A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.",
            nullable: true
        }),
        created: t.exposeInt('created', {
            description: "Time at which the object was created. Measured in seconds since the Unix epoch."
        }),
        deactivateOn: t.exposeStringList('deactivate_on', {
            description: "An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.",
            nullable: true
        }),
        defaultPrice: t.field({
            description: "The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.",
            type: 'StripePrice',
            nullable: true,
            resolve: function (product) { return __awaiter(void 0, void 0, void 0, function () {
                var default_price, price;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            default_price = product.default_price;
                            if (!default_price) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, utils_1.stripe.prices.retrieve(default_price)];
                        case 1:
                            price = _a.sent();
                            if (!price) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, price];
                    }
                });
            }); }
        }),
        description: t.exposeString('description', {
            description: "The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.",
            nullable: true
        }),
        images: t.exposeStringList('images', {
            description: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer.",
            nullable: true
        }),
        livemode: t.exposeBoolean('livemode', {
            description: "Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode."
        }),
        metadata: t.expose('metadata', {
            description: "Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.",
            type: 'JSON',
            nullable: true
        }),
        name: t.exposeString('name', {
            description: "The product's name, meant to be displayable to the customer."
        }),
        // todo: pacakge dimentions
        // todo: fix typo here -> shippable
        sippable: t.exposeBoolean('shippable', {
            description: "Whether this product is shipped (i.e., physical goods).",
            nullable: true
        }),
        statementDescriptor: t.exposeString('statement_descriptor', {
            description: "Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.",
            nullable: true
        }),
        // todo: tax code
        type: t.exposeString('type', {
            description: "The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans."
        }),
        unitLabel: t.exposeString('unit_label', {
            description: "A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.",
            nullable: true
        }),
        updated: t.exposeInt('updated', {
            description: "Time at which the object was last updated. Measured in seconds since the Unix epoch."
        }),
        url: t.exposeString('url', {
            description: "A URL of a publicly-accessible webpage for this product.",
            nullable: true
        })
    }); }
});
