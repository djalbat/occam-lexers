"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionToken;
    }
});
const _significant = /*#__PURE__*/ _interop_require_default(require("../../token/significant"));
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RegularExpressionToken extends _significant.default {
    static type = _types.regularExpressionType;
    static regularExpression = /^\/(?:\\[^\s]|[^\/\r\n\f])*\//;
    static match(content) {
        return _significant.default.match(RegularExpressionToken, content);
    }
    static fromContent(content) {
        return _significant.default.fromContent(RegularExpressionToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyB0eXBlID0gcmVndWxhckV4cHJlc3Npb25UeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKD86XFxcXFteXFxzXXxbXlxcL1xcclxcblxcZl0pKlxcLy87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4ubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaWduaWZpY2FudFRva2VuIiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7b0VBSlE7dUJBRVM7Ozs7OztBQUV2QixNQUFNQSwrQkFBK0JDLG9CQUFnQjtJQUNsRSxPQUFPQyxPQUFPQyw0QkFBcUIsQ0FBQztJQUVwQyxPQUFPQyxvQkFBb0IsZ0NBQWdDO0lBRTNELE9BQU9DLE1BQU1DLE9BQU8sRUFBRTtRQUFFLE9BQU9MLG9CQUFnQixDQUFDSSxLQUFLLENBQUNMLHdCQUF3Qk07SUFBVTtJQUV4RixPQUFPQyxZQUFZRCxPQUFPLEVBQUU7UUFBRSxPQUFPTCxvQkFBZ0IsQ0FBQ00sV0FBVyxDQUFDUCx3QkFBd0JNO0lBQVU7QUFDdEcifQ==