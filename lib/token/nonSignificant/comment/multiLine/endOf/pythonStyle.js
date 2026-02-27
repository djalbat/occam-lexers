"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleEndOfMultiLineCommentToken;
    }
});
const _endOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/endOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PythonStyleEndOfMultiLineCommentToken extends _endOf.default {
    static regularExpression = /^###/;
    static match(content) {
        return _endOf.default.match(PythonStyleEndOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _endOf.default.fromContent(PythonStyleEndOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9weXRob25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXiMjIy87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs4REFGa0I7Ozs7OztBQUV4QixNQUFNQSw4Q0FBOENDLGNBQTBCO0lBQzNGLE9BQU9DLG9CQUFvQixPQUFPO0lBRWxDLE9BQU9DLE1BQU1DLE9BQU8sRUFBRTtRQUFFLE9BQU9ILGNBQTBCLENBQUNFLEtBQUssQ0FBQ0gsdUNBQXVDSTtJQUFVO0lBRWpILE9BQU9DLFlBQVlELE9BQU8sRUFBRTtRQUFFLE9BQU9ILGNBQTBCLENBQUNJLFdBQVcsQ0FBQ0wsdUNBQXVDSTtJQUFVO0FBQy9IIn0=