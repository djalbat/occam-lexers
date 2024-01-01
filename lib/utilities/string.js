"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "substring", {
    enumerable: true,
    get: function() {
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
function substring(content, start, end) {
    return _to_consumable_array(content).slice(start, end).join("");
} ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIHsgcmV0dXJuIFsuLi5jb250ZW50XS5zbGljZShzdGFydCwgZW5kKS5qb2luKFwiXCIpOyB9ICAvLy8iXSwibmFtZXMiOlsic3Vic3RyaW5nIiwiY29udGVudCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxTQUFTQSxVQUFVQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsR0FBRztJQUFJLE9BQU8sQUFBQyxxQkFBR0YsU0FBU0csS0FBSyxDQUFDRixPQUFPQyxLQUFLRSxJQUFJLENBQUM7QUFBSyxFQUFHLEdBQUcifQ==