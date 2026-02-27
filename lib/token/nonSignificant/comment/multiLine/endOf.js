"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfMultiLineCommentToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant"));
const _types = require("../../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfMultiLineCommentToken extends _nonSignificant.default {
    isInCommentPreserving() {
        const inCommentPreserving = false;
        return inCommentPreserving;
    }
    static type = _types.endOfMultiLineCommentType;
    static match(Class, content) {
        return _nonSignificant.default.match(Class, content);
    }
    static fromContent(Class, content) {
        return _nonSignificant.default.fromContent(Class, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCkge1xuICAgIGNvbnN0IGluQ29tbWVudFByZXNlcnZpbmcgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlO1xuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VuIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsInR5cGUiLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwibWF0Y2giLCJDbGFzcyIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozt1RUFKVzt1QkFFVTs7Ozs7O0FBRTNCLE1BQU1BLG1DQUFtQ0MsdUJBQW1CO0lBQ3pFQyx3QkFBd0I7UUFDdEIsTUFBTUMsc0JBQXNCO1FBRTVCLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPQyxnQ0FBeUIsQ0FBQztJQUV4QyxPQUFPQyxNQUFNQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUFFLE9BQU9QLHVCQUFtQixDQUFDSyxLQUFLLENBQUNDLE9BQU9DO0lBQVU7SUFFakYsT0FBT0MsWUFBWUYsS0FBSyxFQUFFQyxPQUFPLEVBQUU7UUFBRSxPQUFPUCx1QkFBbUIsQ0FBQ1EsV0FBVyxDQUFDRixPQUFPQztJQUFVO0FBQy9GIn0=