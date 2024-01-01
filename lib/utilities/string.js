"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    strlen: function() {
        return strlen;
    },
    substring: function() {
        return substring;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function strlen(string) {
    return _to_consumable_array(string).length;
} ///
function substring(string, start, end) {
    return _to_consumable_array(string).slice(start, end).join("");
} ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuKHN0cmluZykgeyByZXR1cm4gWy4uLnN0cmluZ10ubGVuZ3RoOyB9IC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCkgeyByZXR1cm4gWy4uLnN0cmluZ10uc2xpY2Uoc3RhcnQsIGVuZCkuam9pbihcIlwiKTsgfSAgLy8vXG4iXSwibmFtZXMiOlsic3RybGVuIiwic3Vic3RyaW5nIiwic3RyaW5nIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsTUFBTTtlQUFOQTs7SUFFQUMsU0FBUztlQUFUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZULFNBQVNELE9BQU9FLE1BQU07SUFBSSxPQUFPLEFBQUMscUJBQUdBLFFBQVFDLE1BQU07QUFBRSxFQUFFLEdBQUc7QUFFMUQsU0FBU0YsVUFBVUMsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLEdBQUc7SUFBSSxPQUFPLEFBQUMscUJBQUdILFFBQVFJLEtBQUssQ0FBQ0YsT0FBT0MsS0FBS0UsSUFBSSxDQUFDO0FBQUssRUFBRyxHQUFHIn0=