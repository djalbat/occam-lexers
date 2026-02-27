"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CStyleStartOfMultiLineCommentToken;
    }
});
const _startOf = /*#__PURE__*/ _interop_require_default(require("../../../../../token/nonSignificant/comment/multiLine/startOf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CStyleStartOfMultiLineCommentToken extends _startOf.default {
    static regularExpression = /^\/\*/;
    static match(content) {
        return _startOf.default.match(CStyleStartOfMultiLineCommentToken, content);
    }
    static fromContent(content) {
        return _startOf.default.fromContent(CStyleStartOfMultiLineCommentToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL2NTdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcKi87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIkNTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnRUFGb0I7Ozs7OztBQUUxQixNQUFNQSwyQ0FBMkNDLGdCQUE0QjtJQUMxRixPQUFPQyxvQkFBb0IsUUFBUTtJQUVuQyxPQUFPQyxNQUFNQyxPQUFPLEVBQUU7UUFBRSxPQUFPSCxnQkFBNEIsQ0FBQ0UsS0FBSyxDQUFDSCxvQ0FBb0NJO0lBQVU7SUFFaEgsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0gsZ0JBQTRCLENBQUNJLFdBQVcsQ0FBQ0wsb0NBQW9DSTtJQUFVO0FBQzlIIn0=