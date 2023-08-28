"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePlanTransformUsage', {
    description: '',
    fields: function (t) { return ({
        divideBy: t.exposeInt('divide_by', {
            description: 'Divide usage by this number.'
        }),
        round: t.exposeString('round', {
            description: 'After division, either round the result `up` or `down`.'
        })
    }); }
});
