"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PythonStyleSingleLineCommentToken;
    }
});
const _singleLine = /*#__PURE__*/ _interop_require_default(require("../../../../token/nonSignificant/comment/singleLine"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PythonStyleSingleLineCommentToken extends _singleLine.default {
    static regularExpression = /^#[^\r\n\f]*/;
    static match(content) {
        return _singleLine.default.match(PythonStyleSingleLineCommentToken, content);
    }
    static fromContent(content) {
        return _singleLine.default.fromContent(PythonStyleSingleLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eI1teXFxyXFxuXFxmXSovO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7bUVBRmM7Ozs7OztBQUVwQixNQUFNQSwwQ0FBMENDLG1CQUFzQjtJQUNuRixPQUFPQyxvQkFBb0IsZUFBZTtJQUUxQyxPQUFPQyxNQUFNQyxPQUFPLEVBQUU7UUFBRSxPQUFPSCxtQkFBc0IsQ0FBQ0UsS0FBSyxDQUFDSCxtQ0FBbUNJO0lBQVU7SUFFekcsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0gsbUJBQXNCLENBQUNJLFdBQVcsQ0FBQ0wsbUNBQW1DSTtJQUFVO0FBQ3ZIIn0=