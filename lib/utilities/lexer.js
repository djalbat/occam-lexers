"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get lexerFromRules () {
        return lexerFromRules;
    },
    get rulesFromEntries () {
        return rulesFromEntries;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rulesFromEntries(entries) {
    var rules = entries.map(function(entry) {
        var rule = _rule.default.fromEntry(entry);
        return rule;
    });
    return rules;
}
function lexerFromRules(Class, rules) {
    var InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
    return lexer;
}
var _default = {
    rulesFromEntries: rulesFromEntries,
    lexerFromRules: lexerFromRules
};
function InCommentClassesFromClass(Class) {
    var EndOfLineCommentToken = Class.EndOfLineCommentToken, EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken;
    var InCommentClasses = [
        EndOfLineCommentToken,
        EndOfMultiLineCommentToken,
        MiddleOfMultiLineCommentToken
    ];
    return InCommentClasses;
}
function NotInCommentClassesFromClass(Class) {
    var EndOfLineToken = Class.EndOfLineToken, WhitespaceToken = Class.WhitespaceToken, SingleLineCommentToken = Class.SingleLineCommentToken, RegularExpressionToken = Class.RegularExpressionToken, StartOfMultiLineCommentToken = Class.StartOfMultiLineCommentToken, SinglyQuotedStringLiteralToken = Class.SinglyQuotedStringLiteralToken, DoublyQuotedStringLiteralToken = Class.DoublyQuotedStringLiteralToken;
    var NotInCommentClasses = [
        EndOfLineToken,
        WhitespaceToken,
        StartOfMultiLineCommentToken,
        SingleLineCommentToken,
        RegularExpressionToken,
        SinglyQuotedStringLiteralToken,
        DoublyQuotedStringLiteralToken
    ];
    return NotInCommentClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcbiAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tRW50cnkoZW50cnkpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICBjb25zdCBJbkNvbW1lbnRDbGFzc2VzID0gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgIE5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpO1xuXG4gIHJldHVybiBsZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0Zyb21FbnRyaWVzLFxuICBsZXhlckZyb21SdWxlc1xufTtcblxuZnVuY3Rpb24gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcykge1xuICBjb25zdCB7IEVuZE9mTGluZUNvbW1lbnRUb2tlbiwgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gPSBDbGFzcztcblxuICBjb25zdCBJbkNvbW1lbnRDbGFzc2VzID0gW1xuICAgIEVuZE9mTGluZUNvbW1lbnRUb2tlbixcbiAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcbiAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlblxuICBdO1xuXG4gIHJldHVybiBJbkNvbW1lbnRDbGFzc2VzO1xufVxuXG5mdW5jdGlvbiBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSB7XG4gIGNvbnN0IHsgRW5kT2ZMaW5lVG9rZW4sXG4gICAgICAgICAgV2hpdGVzcGFjZVRva2VuLFxuICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXG4gICAgICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbixcbiAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxuICAgICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcbiAgICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSA9IENsYXNzO1xuXG4gIGNvbnN0IE5vdEluQ29tbWVudENsYXNzZXMgPSBbXG4gICAgRW5kT2ZMaW5lVG9rZW4sXG4gICAgV2hpdGVzcGFjZVRva2VuLFxuICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXG4gICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxuICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcbiAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5cbiAgXTtcblxuICByZXR1cm4gTm90SW5Db21tZW50Q2xhc3Nlcztcbn1cbiJdLCJuYW1lcyI6WyJsZXhlckZyb21SdWxlcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJlbnRyaWVzIiwicnVsZXMiLCJtYXAiLCJlbnRyeSIsInJ1bGUiLCJSdWxlIiwiZnJvbUVudHJ5IiwiQ2xhc3MiLCJJbkNvbW1lbnRDbGFzc2VzIiwiSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyIsIk5vdEluQ29tbWVudENsYXNzZXMiLCJOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzIiwibGV4ZXIiLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXNCQTtlQUFBOztRQVJnQkE7ZUFBQUE7O1FBVkFDO2VBQUFBOzs7MkRBRkM7Ozs7OztBQUVWLFNBQVNBLGlCQUFpQkMsT0FBTztJQUN0QyxJQUFNQyxRQUFRRCxRQUFRRSxHQUFHLENBQUMsU0FBQ0M7UUFDekIsSUFBTUMsT0FBT0MsYUFBSSxDQUFDQyxTQUFTLENBQUNIO1FBRTVCLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU0gsZUFBZVMsS0FBSyxFQUFFTixLQUFLO0lBQ3pDLElBQU1PLG1CQUFtQkMsMEJBQTBCRixRQUM3Q0csc0JBQXNCQyw2QkFBNkJKLFFBQ25ESyxRQUFRLElBQUlMLE1BQU1OLE9BQU9PLGtCQUFrQkU7SUFFakQsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYmIsa0JBQUFBO0lBQ0FELGdCQUFBQTtBQUNGO0FBRUEsU0FBU1csMEJBQTBCRixLQUFLO0lBQ3RDLElBQVFNLHdCQUFxRk4sTUFBckZNLHVCQUF1QkMsNkJBQThEUCxNQUE5RE8sNEJBQTRCQyxnQ0FBa0NSLE1BQWxDUTtJQUUzRCxJQUFNUCxtQkFBbUI7UUFDdkJLO1FBQ0FDO1FBQ0FDO0tBQ0Q7SUFFRCxPQUFPUDtBQUNUO0FBRUEsU0FBU0csNkJBQTZCSixLQUFLO0lBQ3pDLElBQVFTLGlCQU1tQ1QsTUFObkNTLGdCQUNBQyxrQkFLbUNWLE1BTG5DVSxpQkFDQUMseUJBSW1DWCxNQUpuQ1csd0JBQ0FDLHlCQUdtQ1osTUFIbkNZLHdCQUNBQywrQkFFbUNiLE1BRm5DYSw4QkFDQUMsaUNBQ21DZCxNQURuQ2MsZ0NBQ0FDLGlDQUFtQ2YsTUFBbkNlO0lBRVIsSUFBTVosc0JBQXNCO1FBQzFCTTtRQUNBQztRQUNBRztRQUNBRjtRQUNBQztRQUNBRTtRQUNBQztLQUNEO0lBRUQsT0FBT1o7QUFDVCJ9