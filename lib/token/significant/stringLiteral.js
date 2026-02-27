"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringLiteralToken;
    }
});
const _necessary = require("necessary");
const _significant = /*#__PURE__*/ _interop_require_default(require("../../token/significant"));
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { substring } = _necessary.stringUtilities;
class StringLiteralToken extends _significant.default {
    getString() {
        const content = this.getContent(), contentLength = this.getContentLength(), start = 1, end = contentLength - 1, string = substring(content, start, end);
        return string;
    }
    static type = _types.stringLiteralType;
    static match(Class, content) {
        return _significant.default.match(Class, content);
    }
    static fromContent(Class, content) {
        return _significant.default.fromContent(Class, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IHN1YnN0cmluZyB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdGhpcy5nZXRDb250ZW50TGVuZ3RoKCksXG4gICAgICAgICAgc3RhcnQgPSAxLFxuICAgICAgICAgIGVuZCA9IGNvbnRlbnRMZW5ndGggLSAxLFxuICAgICAgICAgIHN0cmluZyA9IHN1YnN0cmluZyhjb250ZW50LCBzdGFydCwgZW5kKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlO1xuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbFRva2VuIiwic3Vic3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwiU2lnbmlmaWNhbnRUb2tlbiIsImdldFN0cmluZyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdGFydCIsImVuZCIsInN0cmluZyIsInR5cGUiLCJzdHJpbmdMaXRlcmFsVHlwZSIsIm1hdGNoIiwiQ2xhc3MiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7OzsyQkFSVztvRUFFSDt1QkFFSzs7Ozs7O0FBRWxDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDBCQUFlO0FBRXRCLE1BQU1GLDJCQUEyQkcsb0JBQWdCO0lBQzlEQyxZQUFZO1FBQ1YsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsUUFBUSxHQUNSQyxNQUFNSCxnQkFBZ0IsR0FDdEJJLFNBQVNWLFVBQVVJLFNBQVNJLE9BQU9DO1FBRXpDLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPQyx3QkFBaUIsQ0FBQztJQUVoQyxPQUFPQyxNQUFNQyxLQUFLLEVBQUVWLE9BQU8sRUFBRTtRQUFFLE9BQU9GLG9CQUFnQixDQUFDVyxLQUFLLENBQUNDLE9BQU9WO0lBQVU7SUFFOUUsT0FBT1csWUFBWUQsS0FBSyxFQUFFVixPQUFPLEVBQUU7UUFBRSxPQUFPRixvQkFBZ0IsQ0FBQ2EsV0FBVyxDQUFDRCxPQUFPVjtJQUFVO0FBQzVGIn0=