"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get rulesAsEntries () {
        return rulesAsEntries;
    }
});
function rulesAsEntries(rules) {
    const entries = rules.map((rule)=>{
        const entry = ruleAsEntry(rule);
        return entry;
    });
    return entries;
}
const _default = {
    rulesAsEntries
};
function ruleAsEntry(rule) {
    const type = rule.getType(), regularExpression = rule.getRegularExpression(), { source } = regularExpression, entry = {
        [type]: source
    };
    return entry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0FzRW50cmllcyhydWxlcykge1xuICBjb25zdCBlbnRyaWVzID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgZW50cnkgPSBydWxlQXNFbnRyeShydWxlKTtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZXNBc0VudHJpZXNcbn07XG5cbmZ1bmN0aW9uIHJ1bGVBc0VudHJ5KHJ1bGUpIHtcbiAgY29uc3QgdHlwZSA9IHJ1bGUuZ2V0VHlwZSgpLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJ1bGUuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgeyBzb3VyY2UgfSA9IHJlZ3VsYXJFeHByZXNzaW9uLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbdHlwZV06IHNvdXJjZVxuICAgICAgICB9O1xuXG4gIHJldHVybiBlbnRyeTtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0FzRW50cmllcyIsInJ1bGVzIiwiZW50cmllcyIsIm1hcCIsInJ1bGUiLCJlbnRyeSIsInJ1bGVBc0VudHJ5IiwidHlwZSIsImdldFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwic291cmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFZQTtlQUFBOztRQVZnQkE7ZUFBQUE7OztBQUFULFNBQVNBLGVBQWVDLEtBQUs7SUFDbEMsTUFBTUMsVUFBVUQsTUFBTUUsR0FBRyxDQUFDLENBQUNDO1FBQ3pCLE1BQU1DLFFBQVFDLFlBQVlGO1FBRTFCLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO01BRUEsV0FBZTtJQUNiRjtBQUNGO0FBRUEsU0FBU00sWUFBWUYsSUFBSTtJQUN2QixNQUFNRyxPQUFPSCxLQUFLSSxPQUFPLElBQ25CQyxvQkFBb0JMLEtBQUtNLG9CQUFvQixJQUM3QyxFQUFFQyxNQUFNLEVBQUUsR0FBR0YsbUJBQ2JKLFFBQVE7UUFDTixDQUFDRSxLQUFLLEVBQUVJO0lBQ1Y7SUFFTixPQUFPTjtBQUNUIn0=