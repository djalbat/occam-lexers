"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleStartOfMultiLineCommentToken;
    }
});
const _startOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/startOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PythonStyleStartOfMultiLineCommentToken extends _startOf.default {
    static regularExpression = /^###/;
    static match(content) {
        return _startOf.default.match(PythonStyleStartOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _startOf.default.fromContent(PythonStyleStartOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL3B5dGhvblN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIHtcbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14jIyMvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0VBRm9COzs7Ozs7QUFFMUIsTUFBTUEsZ0RBQWdEQyxnQkFBNEI7SUFDL0YsT0FBT0Msb0JBQW9CLE9BQU87SUFFbEMsT0FBT0MsTUFBTUMsT0FBTyxFQUFFO1FBQUUsT0FBT0gsZ0JBQTRCLENBQUNFLEtBQUssQ0FBQ0gseUNBQXlDSTtJQUFVO0lBRXJILE9BQU9DLFlBQVlELE9BQU8sRUFBRTtRQUFFLE9BQU9ILGdCQUE0QixDQUFDSSxXQUFXLENBQUNMLHlDQUF5Q0k7SUFBVTtBQUNuSSJ9