"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineCommentNonSignificantToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../../token/nonSignificant"));
const _types = require("../../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineCommentNonSignificantToken extends _nonSignificant.default {
    isInCommentPreserving() {
        const inCommentPreserving = true;
        return inCommentPreserving;
    }
    static type = _types.endOfLineCommentType;
    static regularExpression = /^(?:\r\n|\r|\n|\f)/;
    static match(content) {
        return _nonSignificant.default.match(EndOfLineCommentNonSignificantToken, content);
    }
    static fromContent(content) {
        return _nonSignificant.default.fromContent(EndOfLineCommentNonSignificantToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGVuZE9mTGluZUNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzSW5Db21tZW50UHJlc2VydmluZygpIHtcbiAgICBjb25zdCBpbkNvbW1lbnRQcmVzZXJ2aW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBlbmRPZkxpbmVDb21tZW50VHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlxcclxcbnxcXHJ8XFxufFxcZikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImlzSW5Db21tZW50UHJlc2VydmluZyIsImluQ29tbWVudFByZXNlcnZpbmciLCJ0eXBlIiwiZW5kT2ZMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVLOzs7Ozs7QUFFdEIsTUFBTUEsNENBQTRDQyx1QkFBbUI7SUFDbEZDLHdCQUF3QjtRQUN0QixNQUFNQyxzQkFBc0I7UUFFNUIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLDJCQUFvQixDQUFDO0lBRW5DLE9BQU9DLG9CQUFvQixxQkFBcUI7SUFFaEQsT0FBT0MsTUFBTUMsT0FBTyxFQUFFO1FBQUUsT0FBT1AsdUJBQW1CLENBQUNNLEtBQUssQ0FBQ1AscUNBQXFDUTtJQUFVO0lBRXhHLE9BQU9DLFlBQVlELE9BQU8sRUFBRTtRQUFFLE9BQU9QLHVCQUFtQixDQUFDUSxXQUFXLENBQUNULHFDQUFxQ1E7SUFBVTtBQUN0SCJ9