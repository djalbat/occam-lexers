"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineCommentSignificantToken;
    }
});
const _significant = /*#__PURE__*/ _interop_require_default(require("../../../token/significant"));
const _types = require("../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineCommentSignificantToken extends _significant.default {
    isInCommentPreserving() {
        const inCommentPreserving = true;
        return inCommentPreserving;
    }
    static type = _types.endOfLineCommentType;
    static regularExpression = /^(?:\r\n|\r|\n|\f)/;
    static match(content) {
        return _significant.default.match(EndOfLineCommentSignificantToken, content);
    }
    static fromContent(content) {
        return _significant.default.fromContent(EndOfLineCommentSignificantToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZkxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlxcclxcbnxcXHJ8XFxufFxcZikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiU2lnbmlmaWNhbnRUb2tlbiIsImlzSW5Db21tZW50UHJlc2VydmluZyIsImluQ29tbWVudFByZXNlcnZpbmciLCJ0eXBlIiwiZW5kT2ZMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O29FQUpRO3VCQUVROzs7Ozs7QUFFdEIsTUFBTUEseUNBQXlDQyxvQkFBZ0I7SUFDNUVDLHdCQUF3QjtRQUN0QixNQUFNQyxzQkFBc0I7UUFFNUIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLDJCQUFvQixDQUFDO0lBRW5DLE9BQU9DLG9CQUFvQixxQkFBcUI7SUFFaEQsT0FBT0MsTUFBTUMsT0FBTyxFQUFFO1FBQUUsT0FBT1Asb0JBQWdCLENBQUNNLEtBQUssQ0FBQ1Asa0NBQWtDUTtJQUFVO0lBRWxHLE9BQU9DLFlBQVlELE9BQU8sRUFBRTtRQUFFLE9BQU9QLG9CQUFnQixDQUFDUSxXQUFXLENBQUNULGtDQUFrQ1E7SUFBVTtBQUNoSCJ9