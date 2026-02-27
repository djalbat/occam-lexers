"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MiddleOfMultiLineCommentToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant"));
const _types = require("../../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MiddleOfMultiLineCommentToken extends _nonSignificant.default {
    isInCommentPreserving() {
        const inCommentPreserving = true;
        return inCommentPreserving;
    }
    static type = _types.middleOfMultiLineCommentType;
    static match(Class, content) {
        return _nonSignificant.default.match(Class, content);
    }
    static fromContent(Class, content) {
        return _nonSignificant.default.fromContent(Class, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudFByZXNlcnZpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJpc0luQ29tbWVudFByZXNlcnZpbmciLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwidHlwZSIsIm1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJtYXRjaCIsIkNsYXNzIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVhOzs7Ozs7QUFFOUIsTUFBTUEsc0NBQXNDQyx1QkFBbUI7SUFDNUVDLHdCQUF3QjtRQUN0QixNQUFNQyxzQkFBc0I7UUFFNUIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLG1DQUE0QixDQUFDO0lBRTNDLE9BQU9DLE1BQU1DLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQUUsT0FBT1AsdUJBQW1CLENBQUNLLEtBQUssQ0FBQ0MsT0FBT0M7SUFBVTtJQUVqRixPQUFPQyxZQUFZRixLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUFFLE9BQU9QLHVCQUFtQixDQUFDUSxXQUFXLENBQUNGLE9BQU9DO0lBQVU7QUFDL0YifQ==