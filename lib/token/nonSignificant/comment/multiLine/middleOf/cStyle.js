"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleMiddleOfMultiLineCommentToken;
    }
});
const _middleOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/middleOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CStyleMiddleOfMultiLineCommentToken extends _middleOf.default {
    static regularExpression = /^(?:[^\r\n\f]+?(?=\*\/)|[^\r\n\f]+)/;
    static match(content) {
        return _middleOf.default.match(CStyleMiddleOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _middleOf.default.fromContent(CStyleMiddleOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9jU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eKD86W15cXHJcXG5cXGZdKz8oPz1cXCpcXC8pfFteXFxyXFxuXFxmXSspLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2lFQUZxQjs7Ozs7O0FBRTNCLE1BQU1BLDRDQUE0Q0MsaUJBQTZCO0lBQzVGLE9BQU9DLG9CQUFvQixzQ0FBc0M7SUFFakUsT0FBT0MsTUFBTUMsT0FBTyxFQUFFO1FBQUUsT0FBT0gsaUJBQTZCLENBQUNFLEtBQUssQ0FBQ0gscUNBQXFDSTtJQUFVO0lBRWxILE9BQU9DLFlBQVlELE9BQU8sRUFBRTtRQUFFLE9BQU9ILGlCQUE2QixDQUFDSSxXQUFXLENBQUNMLHFDQUFxQ0k7SUFBVTtBQUNoSSJ9