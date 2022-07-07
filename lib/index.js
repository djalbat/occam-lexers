"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Rule: function() {
        return _rule.default;
    },
    types: function() {
        return _types.default;
    },
    specialSymbols: function() {
        return _specialSymbols.default;
    },
    BNFLexer: function() {
        return _lexer.default;
    },
    BasicLexer: function() {
        return _lexer1.default;
    },
    CommonLexer: function() {
        return _lexer2.default;
    },
    SignificantToken: function() {
        return _significant.default;
    },
    NonSignificantToken: function() {
        return _nonSignificant.default;
    },
    EndOfLineSignificantToken: function() {
        return _endOfLine.default;
    },
    EndOfLineNonSignificantToken: function() {
        return _endOfLine1.default;
    },
    EndOfLineCommentSignificantToken: function() {
        return _endOfLine2.default;
    },
    EndOfLineCommentNonSignificantToken: function() {
        return _endOfLine3.default;
    },
    WhitespaceToken: function() {
        return _whitespace.default;
    },
    StringLiteralToken: function() {
        return _stringLiteral.default;
    },
    RegularExpressionToken: function() {
        return _regularExpression.default;
    },
    SinglyQuotedStringLiteralToken: function() {
        return _singlyQuoted.default;
    },
    DoublyQuotedStringLiteralToken: function() {
        return _doublyQuoted.default;
    },
    SingleLineCommentToken: function() {
        return _singleLine.default;
    },
    EndOfMultiLineCommentToken: function() {
        return _endOf.default;
    },
    StartOfMultiLineCommentToken: function() {
        return _startOf.default;
    },
    MiddleOfMultiLineCommentToken: function() {
        return _middleOf.default;
    },
    CStyleSingleLineCommentToken: function() {
        return _cStyle.default;
    },
    CStyleEndOfMultiLineCommentToken: function() {
        return _cStyle1.default;
    },
    CStyleStartOfMultiLineCommentToken: function() {
        return _cStyle2.default;
    },
    CStyleMiddleOfMultiLineCommentToken: function() {
        return _cStyle3.default;
    },
    PythonStyleSingleLineCommentToken: function() {
        return _pythonStyle.default;
    },
    PythonStyleEndOfMultiLineCommentToken: function() {
        return _pythonStyle1.default;
    },
    PythonStyleStartOfMultiLineCommentToken: function() {
        return _pythonStyle2.default;
    },
    PythonStyleMiddleOfMultiLineCommentToken: function() {
        return _pythonStyle3.default;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("./rule"));
var _types = /*#__PURE__*/ _interopRequireDefault(require("./types"));
var _specialSymbols = /*#__PURE__*/ _interopRequireDefault(require("./specialSymbols"));
var _lexer = /*#__PURE__*/ _interopRequireDefault(require("./bnf/lexer"));
var _lexer1 = /*#__PURE__*/ _interopRequireDefault(require("./basic/lexer"));
var _lexer2 = /*#__PURE__*/ _interopRequireDefault(require("./common/lexer"));
var _significant = /*#__PURE__*/ _interopRequireDefault(require("./token/significant"));
var _nonSignificant = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant"));
var _endOfLine = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/endOfLine"));
var _endOfLine1 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/endOfLine"));
var _endOfLine2 = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/comment/endOfLine"));
var _endOfLine3 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/endOfLine"));
var _whitespace = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/whitespace"));
var _stringLiteral = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/stringLiteral"));
var _regularExpression = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/regularExpression"));
var _singlyQuoted = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = /*#__PURE__*/ _interopRequireDefault(require("./token/significant/stringLiteral/doublyQuoted"));
var _singleLine = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/singleLine"));
var _endOf = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf"));
var _startOf = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf"));
var _cStyle = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/singleLine/cStyle"));
var _cStyle1 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf/cStyle"));
var _cStyle2 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf/cStyle"));
var _cStyle3 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf/cStyle"));
var _pythonStyle = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/singleLine/pythonStyle"));
var _pythonStyle1 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = /*#__PURE__*/ _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vcnVsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIi4vc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTkZMZXhlciB9IGZyb20gXCIuL2JuZi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNpY0xleGVyIH0gZnJvbSBcIi4vYmFzaWMvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbW9uTGV4ZXIgfSBmcm9tIFwiLi9jb21tb24vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2NvbW1lbnQvZW5kT2ZMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGl0ZXNwYWNlVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi9jU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9jU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9weXRob25TdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9weXRob25TdHlsZVwiO1xuIl0sIm5hbWVzIjpbIlJ1bGUiLCJ0eXBlcyIsInNwZWNpYWxTeW1ib2xzIiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiQ29tbW9uTGV4ZXIiLCJTaWduaWZpY2FudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlN0cmluZ0xpdGVyYWxUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVPQSxJQUFJO2VBQUpBLEtBQUksUUFBQTs7SUFDSkMsS0FBSztlQUFMQSxNQUFLLFFBQUE7O0lBQ0xDLGNBQWM7ZUFBZEEsZUFBYyxRQUFBOztJQUVkQyxRQUFRO2VBQVJBLE1BQVEsUUFBQTs7SUFDUkMsVUFBVTtlQUFWQSxPQUFVLFFBQUE7O0lBQ1ZDLFdBQVc7ZUFBWEEsT0FBVyxRQUFBOztJQUVYQyxnQkFBZ0I7ZUFBaEJBLFlBQWdCLFFBQUE7O0lBQ2hCQyxtQkFBbUI7ZUFBbkJBLGVBQW1CLFFBQUE7O0lBQ25CQyx5QkFBeUI7ZUFBekJBLFVBQXlCLFFBQUE7O0lBQ3pCQyw0QkFBNEI7ZUFBNUJBLFdBQTRCLFFBQUE7O0lBQzVCQyxnQ0FBZ0M7ZUFBaENBLFdBQWdDLFFBQUE7O0lBQ2hDQyxtQ0FBbUM7ZUFBbkNBLFdBQW1DLFFBQUE7O0lBRW5DQyxlQUFlO2VBQWZBLFdBQWUsUUFBQTs7SUFFZkMsa0JBQWtCO2VBQWxCQSxjQUFrQixRQUFBOztJQUNsQkMsc0JBQXNCO2VBQXRCQSxrQkFBc0IsUUFBQTs7SUFDdEJDLDhCQUE4QjtlQUE5QkEsYUFBOEIsUUFBQTs7SUFDOUJDLDhCQUE4QjtlQUE5QkEsYUFBOEIsUUFBQTs7SUFFOUJDLHNCQUFzQjtlQUF0QkEsV0FBc0IsUUFBQTs7SUFDdEJDLDBCQUEwQjtlQUExQkEsTUFBMEIsUUFBQTs7SUFDMUJDLDRCQUE0QjtlQUE1QkEsUUFBNEIsUUFBQTs7SUFDNUJDLDZCQUE2QjtlQUE3QkEsU0FBNkIsUUFBQTs7SUFDN0JDLDRCQUE0QjtlQUE1QkEsT0FBNEIsUUFBQTs7SUFDNUJDLGdDQUFnQztlQUFoQ0EsUUFBZ0MsUUFBQTs7SUFDaENDLGtDQUFrQztlQUFsQ0EsUUFBa0MsUUFBQTs7SUFDbENDLG1DQUFtQztlQUFuQ0EsUUFBbUMsUUFBQTs7SUFDbkNDLGlDQUFpQztlQUFqQ0EsWUFBaUMsUUFBQTs7SUFDakNDLHFDQUFxQztlQUFyQ0EsYUFBcUMsUUFBQTs7SUFDckNDLHVDQUF1QztlQUF2Q0EsYUFBdUMsUUFBQTs7SUFDdkNDLHdDQUF3QztlQUF4Q0EsYUFBd0MsUUFBQTs7O3lEQWpDNUIsUUFBUTswREFDUCxTQUFTO21FQUNBLGtCQUFrQjswREFFeEIsYUFBYTsyREFDWCxlQUFlOzJEQUNkLGdCQUFnQjtnRUFFWCxxQkFBcUI7bUVBQ2xCLHdCQUF3Qjs4REFDbEIsK0JBQStCOytEQUM1QixrQ0FBa0M7K0RBQzlCLHVDQUF1QzsrREFDcEMsMENBQTBDOytEQUU5RCxtQ0FBbUM7a0VBRWhDLG1DQUFtQztzRUFDL0IsdUNBQXVDO2lFQUMvQixnREFBZ0Q7aUVBQ2hELGdEQUFnRDsrREFFeEQsMkNBQTJDOzBEQUN2QyxnREFBZ0Q7NERBQzlDLGtEQUFrRDs2REFDakQsbURBQW1EOzJEQUNwRCxrREFBa0Q7NERBQzlDLHVEQUF1RDs0REFDckQseURBQXlEOzREQUN4RCwwREFBMEQ7Z0VBQzVELHVEQUF1RDtpRUFDbkQsNERBQTREO2lFQUMxRCw4REFBOEQ7aUVBQzdELCtEQUErRCJ9