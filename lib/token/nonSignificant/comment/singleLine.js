"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SingleLineCommentToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../token/nonSignificant"));
const _types = require("../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SingleLineCommentToken extends _nonSignificant.default {
    isInCommentPreserving() {
        const inCommentPreserving = false;
        return inCommentPreserving;
    }
    static type = _types.singleLineCommentType;
    static match(Class, content) {
        return _nonSignificant.default.match(Class, content);
    }
    static fromContent(Class, content) {
        return _nonSignificant.default.fromContent(Class, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBzaW5nbGVMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBpc0luQ29tbWVudFByZXNlcnZpbmcoKSB7XG4gICAgY29uc3QgaW5Db21tZW50UHJlc2VydmluZyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudFByZXNlcnZpbmc7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IHNpbmdsZUxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VuIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaW5Db21tZW50UHJlc2VydmluZyIsInR5cGUiLCJzaW5nbGVMaW5lQ29tbWVudFR5cGUiLCJtYXRjaCIsIkNsYXNzIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVNOzs7Ozs7QUFFdkIsTUFBTUEsK0JBQStCQyx1QkFBbUI7SUFDckVDLHdCQUF3QjtRQUN0QixNQUFNQyxzQkFBc0I7UUFFNUIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLDRCQUFxQixDQUFDO0lBRXBDLE9BQU9DLE1BQU1DLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQUUsT0FBT1AsdUJBQW1CLENBQUNLLEtBQUssQ0FBQ0MsT0FBT0M7SUFBVTtJQUVqRixPQUFPQyxZQUFZRixLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUFFLE9BQU9QLHVCQUFtQixDQUFDUSxXQUFXLENBQUNGLE9BQU9DO0lBQVU7QUFDL0YifQ==