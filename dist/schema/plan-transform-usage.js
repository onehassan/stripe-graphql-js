"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripePlanTransformUsage', {
    description: '',
    fields: (t) => ({
        divideBy: t.exposeInt('divide_by', {
            description: 'Divide usage by this number.'
        }),
        round: t.exposeString('round', {
            description: 'After division, either round the result `up` or `down`.'
        })
    })
});
//# sourceMappingURL=plan-transform-usage.js.map