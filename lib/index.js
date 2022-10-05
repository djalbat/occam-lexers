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
    lexerUtilities: function() {
        return _lexer.default;
    },
    BNFLexer: function() {
        return _lexer1.default;
    },
    BasicLexer: function() {
        return _lexer2.default;
    },
    CommonLexer: function() {
        return _lexer3.default;
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
var _lexer = /*#__PURE__*/ _interopRequireDefault(require("./utilities/lexer"));
var _lexer1 = /*#__PURE__*/ _interopRequireDefault(require("./bnf/lexer"));
var _lexer2 = /*#__PURE__*/ _interopRequireDefault(require("./basic/lexer"));
var _lexer3 = /*#__PURE__*/ _interopRequireDefault(require("./common/lexer"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vcnVsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIi4vc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJORkxleGVyIH0gZnJvbSBcIi4vYm5mL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2ljTGV4ZXIgfSBmcm9tIFwiLi9iYXNpYy9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tb25MZXhlciB9IGZyb20gXCIuL2NvbW1vbi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZVwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoaXRlc3BhY2VUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL3B5dGhvblN0eWxlXCI7XG4iXSwibmFtZXMiOlsiUnVsZSIsInR5cGVzIiwic3BlY2lhbFN5bWJvbHMiLCJsZXhlclV0aWxpdGllcyIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsSUFBSTtlQUFKQSxhQUFJOztJQUNKQyxLQUFLO2VBQUxBLGNBQUs7O0lBQ0xDLGNBQWM7ZUFBZEEsdUJBQWM7O0lBRWRDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFZEMsUUFBUTtlQUFSQSxlQUFROztJQUNSQyxVQUFVO2VBQVZBLGVBQVU7O0lBQ1ZDLFdBQVc7ZUFBWEEsZUFBVzs7SUFFWEMsZ0JBQWdCO2VBQWhCQSxvQkFBZ0I7O0lBQ2hCQyxtQkFBbUI7ZUFBbkJBLHVCQUFtQjs7SUFDbkJDLHlCQUF5QjtlQUF6QkEsa0JBQXlCOztJQUN6QkMsNEJBQTRCO2VBQTVCQSxtQkFBNEI7O0lBQzVCQyxnQ0FBZ0M7ZUFBaENBLG1CQUFnQzs7SUFDaENDLG1DQUFtQztlQUFuQ0EsbUJBQW1DOztJQUVuQ0MsZUFBZTtlQUFmQSxtQkFBZTs7SUFFZkMsa0JBQWtCO2VBQWxCQSxzQkFBa0I7O0lBQ2xCQyxzQkFBc0I7ZUFBdEJBLDBCQUFzQjs7SUFDdEJDLDhCQUE4QjtlQUE5QkEscUJBQThCOztJQUM5QkMsOEJBQThCO2VBQTlCQSxxQkFBOEI7O0lBRTlCQyxzQkFBc0I7ZUFBdEJBLG1CQUFzQjs7SUFDdEJDLDBCQUEwQjtlQUExQkEsY0FBMEI7O0lBQzFCQyw0QkFBNEI7ZUFBNUJBLGdCQUE0Qjs7SUFDNUJDLDZCQUE2QjtlQUE3QkEsaUJBQTZCOztJQUM3QkMsNEJBQTRCO2VBQTVCQSxlQUE0Qjs7SUFDNUJDLGdDQUFnQztlQUFoQ0EsZ0JBQWdDOztJQUNoQ0Msa0NBQWtDO2VBQWxDQSxnQkFBa0M7O0lBQ2xDQyxtQ0FBbUM7ZUFBbkNBLGdCQUFtQzs7SUFDbkNDLGlDQUFpQztlQUFqQ0Esb0JBQWlDOztJQUNqQ0MscUNBQXFDO2VBQXJDQSxxQkFBcUM7O0lBQ3JDQyx1Q0FBdUM7ZUFBdkNBLHFCQUF1Qzs7SUFDdkNDLHdDQUF3QztlQUF4Q0EscUJBQXdDOzs7eURBbkM1QjswREFDQzttRUFDUzswREFFQTsyREFFTjsyREFDRTsyREFDQztnRUFFSzttRUFDRzs4REFDTTsrREFDRzsrREFDSTsrREFDRzsrREFFcEI7a0VBRUc7c0VBQ0k7aUVBQ1E7aUVBQ0E7K0RBRVI7MERBQ0k7NERBQ0U7NkRBQ0M7MkRBQ0Q7NERBQ0k7NERBQ0U7NERBQ0M7Z0VBQ0Y7aUVBQ0k7aUVBQ0U7aUVBQ0MifQ==