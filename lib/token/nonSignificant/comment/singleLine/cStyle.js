"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleSingleLineCommentToken;
    }
});
const _singleLine = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant/comment/singleLine"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CStyleSingleLineCommentToken extends _singleLine.default {
    static regularExpression = /^\/\/[^\r\n\f]*/;
    static match(content) {
        return _singleLine.default.match(CStyleSingleLineCommentToken, content);
    }
    static fromContent(content) {
        return _singleLine.default.fromContent(CStyleSingleLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvY1N0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIHtcbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXC9bXlxcclxcblxcZl0qLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O21FQUZjOzs7Ozs7QUFFcEIsTUFBTUEscUNBQXFDQyxtQkFBc0I7SUFDOUUsT0FBT0Msb0JBQW9CLGtCQUFrQjtJQUU3QyxPQUFPQyxNQUFNQyxPQUFPLEVBQUU7UUFBRSxPQUFPSCxtQkFBc0IsQ0FBQ0UsS0FBSyxDQUFDSCw4QkFBOEJJO0lBQVU7SUFFcEcsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0gsbUJBQXNCLENBQUNJLFdBQVcsQ0FBQ0wsOEJBQThCSTtJQUFVO0FBQ2xIIn0=