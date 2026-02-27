"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DoublyQuotedStringLiteralToken;
    }
});
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../significant/stringLiteral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DoublyQuotedStringLiteralToken extends _stringLiteral.default {
    static regularExpression = /^"(?:\\[^\s]|[^"\\\r\n])*"/;
    static match(content) {
        return _stringLiteral.default.match(DoublyQuotedStringLiteralToken, content);
    }
    static fromContent(content) {
        return _stringLiteral.default.fromContent(DoublyQuotedStringLiteralToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vLi4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTdHJpbmdMaXRlcmFsVG9rZW4ge1xuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlwiKD86XFxcXFteXFxzXXxbXlwiXFxcXFxcclxcbl0pKlwiLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21Db250ZW50KERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NFQUZVOzs7Ozs7QUFFaEIsTUFBTUEsdUNBQXVDQyxzQkFBa0I7SUFDNUUsT0FBT0Msb0JBQW9CLDZCQUE2QjtJQUV4RCxPQUFPQyxNQUFNQyxPQUFPLEVBQUU7UUFBRSxPQUFPSCxzQkFBa0IsQ0FBQ0UsS0FBSyxDQUFDSCxnQ0FBZ0NJO0lBQVU7SUFFbEcsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0gsc0JBQWtCLENBQUNJLFdBQVcsQ0FBQ0wsZ0NBQWdDSTtJQUFVO0FBQ2hIIn0=