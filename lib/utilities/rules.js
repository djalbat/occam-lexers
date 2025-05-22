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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function rulesAsEntries(rules) {
    var entries = rules.map(function(rule) {
        var entry = ruleAsEntry(rule);
        return entry;
    });
    return entries;
}
var _default = {
    rulesAsEntries: rulesAsEntries
};
function ruleAsEntry(rule) {
    var type = rule.getType(), regularExpression = rule.getRegularExpression(), source = regularExpression.source, entry = _define_property({}, type, source);
    return entry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0FzRW50cmllcyhydWxlcykge1xuICBjb25zdCBlbnRyaWVzID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgZW50cnkgPSBydWxlQXNFbnRyeShydWxlKTtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZXNBc0VudHJpZXNcbn07XG5cbmZ1bmN0aW9uIHJ1bGVBc0VudHJ5KHJ1bGUpIHtcbiAgY29uc3QgdHlwZSA9IHJ1bGUuZ2V0VHlwZSgpLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJ1bGUuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgeyBzb3VyY2UgfSA9IHJlZ3VsYXJFeHByZXNzaW9uLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbdHlwZV06IHNvdXJjZVxuICAgICAgICB9O1xuXG4gIHJldHVybiBlbnRyeTtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0FzRW50cmllcyIsInJ1bGVzIiwiZW50cmllcyIsIm1hcCIsInJ1bGUiLCJlbnRyeSIsInJ1bGVBc0VudHJ5IiwidHlwZSIsImdldFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwic291cmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFZQTtlQUFBOztRQVZnQkE7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxTQUFTQSxlQUFlQyxLQUFLO0lBQ2xDLElBQU1DLFVBQVVELE1BQU1FLEdBQUcsQ0FBQyxTQUFDQztRQUN6QixJQUFNQyxRQUFRQyxZQUFZRjtRQUUxQixPQUFPQztJQUNUO0lBRUEsT0FBT0g7QUFDVDtJQUVBLFdBQWU7SUFDYkYsZ0JBQUFBO0FBQ0Y7QUFFQSxTQUFTTSxZQUFZRixJQUFJO0lBQ3ZCLElBQU1HLE9BQU9ILEtBQUtJLE9BQU8sSUFDbkJDLG9CQUFvQkwsS0FBS00sb0JBQW9CLElBQzdDLEFBQUVDLFNBQVdGLGtCQUFYRSxRQUNGTixRQUNFLHFCQUFDRSxNQUFPSTtJQUdoQixPQUFPTjtBQUNUIn0=