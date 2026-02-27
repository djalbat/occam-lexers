"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleEndOfMultiLineCommentToken;
    }
});
const _endOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/endOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CStyleEndOfMultiLineCommentToken extends _endOf.default {
    static regularExpression = /^\*\//;
    static match(content) {
        return _endOf.default.match(CStyleEndOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _endOf.default.fromContent(CStyleEndOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9jU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwqXFwvLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZrQjs7Ozs7O0FBRXhCLE1BQU1BLHlDQUF5Q0MsY0FBMEI7SUFDdEYsT0FBT0Msb0JBQW9CLFFBQVE7SUFFbkMsT0FBT0MsTUFBTUMsT0FBTyxFQUFFO1FBQUUsT0FBT0gsY0FBMEIsQ0FBQ0UsS0FBSyxDQUFDSCxrQ0FBa0NJO0lBQVU7SUFFNUcsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0gsY0FBMEIsQ0FBQ0ksV0FBVyxDQUFDTCxrQ0FBa0NJO0lBQVU7QUFDMUgifQ==