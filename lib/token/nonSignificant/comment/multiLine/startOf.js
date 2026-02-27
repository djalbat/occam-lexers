"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfMultiLineCommentToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant"));
const _types = require("../../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartOfMultiLineCommentToken extends _nonSignificant.default {
    isInCommentPreserving() {
        const inCommentPreserving = true;
        return inCommentPreserving;
    }
    static type = _types.startOfMultiLineCommentType;
    static match(Class, content) {
        return _nonSignificant.default.match(Class, content);
    }
    static fromContent(Class, content) {
        return _nonSignificant.default.fromContent(Class, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudFByZXNlcnZpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VuIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsInR5cGUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJtYXRjaCIsIkNsYXNzIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVZOzs7Ozs7QUFFN0IsTUFBTUEscUNBQXFDQyx1QkFBbUI7SUFDM0VDLHdCQUF3QjtRQUN0QixNQUFNQyxzQkFBc0I7UUFFNUIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLGtDQUEyQixDQUFDO0lBRTFDLE9BQU9DLE1BQU1DLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQUUsT0FBT1AsdUJBQW1CLENBQUNLLEtBQUssQ0FBQ0MsT0FBT0M7SUFBVTtJQUVqRixPQUFPQyxZQUFZRixLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUFFLE9BQU9QLHVCQUFtQixDQUFDUSxXQUFXLENBQUNGLE9BQU9DO0lBQVU7QUFDL0YifQ==