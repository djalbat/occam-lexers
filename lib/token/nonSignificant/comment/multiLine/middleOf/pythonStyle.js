"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleMiddleOfMultiLineCommentToken;
    }
});
const _middleOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/middleOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PythonStyleMiddleOfMultiLineCommentToken extends _middleOf.default {
    static regularExpression = /^(?:[^\r\n\f]+?(?=###)|[^\r\n\f]+)/;
    static match(content) {
        return _middleOf.default.match(PythonStyleMiddleOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _middleOf.default.fromContent(PythonStyleMiddleOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9weXRob25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlteXFxyXFxuXFxmXSs/KD89IyMjKXxbXlxcclxcblxcZl0rKS87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGcUI7Ozs7OztBQUUzQixNQUFNQSxpREFBaURDLGlCQUE2QjtJQUNqRyxPQUFPQyxvQkFBb0IscUNBQXFDO0lBRWhFLE9BQU9DLE1BQU1DLE9BQU8sRUFBRTtRQUFFLE9BQU9ILGlCQUE2QixDQUFDRSxLQUFLLENBQUNILDBDQUEwQ0k7SUFBVTtJQUV2SCxPQUFPQyxZQUFZRCxPQUFPLEVBQUU7UUFBRSxPQUFPSCxpQkFBNkIsQ0FBQ0ksV0FBVyxDQUFDTCwwQ0FBMENJO0lBQVU7QUFDckkifQ==