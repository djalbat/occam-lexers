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
    BNFLexer: function() {
        return _lexer1.default;
    },
    BasicLexer: function() {
        return _lexer2.default;
    },
    CStyleEndOfMultiLineCommentToken: function() {
        return _cStyle1.default;
    },
    CStyleMiddleOfMultiLineCommentToken: function() {
        return _cStyle3.default;
    },
    CStyleSingleLineCommentToken: function() {
        return _cStyle.default;
    },
    CStyleStartOfMultiLineCommentToken: function() {
        return _cStyle2.default;
    },
    CommonLexer: function() {
        return _lexer3.default;
    },
    DoublyQuotedStringLiteralToken: function() {
        return _doublyQuoted.default;
    },
    EndOfLineCommentNonSignificantToken: function() {
        return _endOfLine3.default;
    },
    EndOfLineCommentSignificantToken: function() {
        return _endOfLine2.default;
    },
    EndOfLineNonSignificantToken: function() {
        return _endOfLine1.default;
    },
    EndOfLineSignificantToken: function() {
        return _endOfLine.default;
    },
    EndOfMultiLineCommentToken: function() {
        return _endOf.default;
    },
    MiddleOfMultiLineCommentToken: function() {
        return _middleOf.default;
    },
    NonSignificantToken: function() {
        return _nonSignificant.default;
    },
    PythonStyleEndOfMultiLineCommentToken: function() {
        return _pythonStyle1.default;
    },
    PythonStyleMiddleOfMultiLineCommentToken: function() {
        return _pythonStyle3.default;
    },
    PythonStyleSingleLineCommentToken: function() {
        return _pythonStyle.default;
    },
    PythonStyleStartOfMultiLineCommentToken: function() {
        return _pythonStyle2.default;
    },
    RegularExpressionToken: function() {
        return _regularExpression.default;
    },
    Rule: function() {
        return _rule.default;
    },
    SignificantToken: function() {
        return _significant.default;
    },
    SingleLineCommentToken: function() {
        return _singleLine.default;
    },
    SinglyQuotedStringLiteralToken: function() {
        return _singlyQuoted.default;
    },
    StartOfMultiLineCommentToken: function() {
        return _startOf.default;
    },
    StringLiteralToken: function() {
        return _stringLiteral.default;
    },
    WhitespaceToken: function() {
        return _whitespace.default;
    },
    lexerUtilities: function() {
        return _lexer.default;
    },
    rulesUtilities: function() {
        return _rules.default;
    },
    specialSymbols: function() {
        return _specialSymbols.default;
    },
    types: function() {
        return _types.default;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("./rule"));
var _types = /*#__PURE__*/ _interop_require_default(require("./types"));
var _specialSymbols = /*#__PURE__*/ _interop_require_default(require("./specialSymbols"));
var _rules = /*#__PURE__*/ _interop_require_default(require("./utilities/rules"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("./utilities/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./bnf/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./basic/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./common/lexer"));
var _significant = /*#__PURE__*/ _interop_require_default(require("./token/significant"));
var _nonSignificant = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("./token/significant/endOfLine"));
var _endOfLine1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/endOfLine"));
var _endOfLine2 = /*#__PURE__*/ _interop_require_default(require("./token/significant/comment/endOfLine"));
var _endOfLine3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/endOfLine"));
var _whitespace = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/whitespace"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("./token/significant/regularExpression"));
var _singlyQuoted = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral/doublyQuoted"));
var _singleLine = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine"));
var _endOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf"));
var _startOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf"));
var _cStyle = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine/cStyle"));
var _cStyle1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf/cStyle"));
var _cStyle2 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf/cStyle"));
var _cStyle3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf/cStyle"));
var _pythonStyle = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine/pythonStyle"));
var _pythonStyle1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vcnVsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIi4vc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBydWxlc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJORkxleGVyIH0gZnJvbSBcIi4vYm5mL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2ljTGV4ZXIgfSBmcm9tIFwiLi9iYXNpYy9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tb25MZXhlciB9IGZyb20gXCIuL2NvbW1vbi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZVwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoaXRlc3BhY2VUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL3B5dGhvblN0eWxlXCI7XG4iXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ29tbW9uTGV4ZXIiLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlJ1bGUiLCJTaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzVXRpbGl0aWVzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBU29CQSxRQUFRO2VBQVJBLGVBQVE7O0lBQ1JDLFVBQVU7ZUFBVkEsZUFBVTs7SUFzQlZDLGdDQUFnQztlQUFoQ0EsZ0JBQWdDOztJQUVoQ0MsbUNBQW1DO2VBQW5DQSxnQkFBbUM7O0lBSG5DQyw0QkFBNEI7ZUFBNUJBLGVBQTRCOztJQUU1QkMsa0NBQWtDO2VBQWxDQSxnQkFBa0M7O0lBdEJsQ0MsV0FBVztlQUFYQSxlQUFXOztJQWNYQyw4QkFBOEI7ZUFBOUJBLHFCQUE4Qjs7SUFQOUJDLG1DQUFtQztlQUFuQ0EsbUJBQW1DOztJQURuQ0MsZ0NBQWdDO2VBQWhDQSxtQkFBZ0M7O0lBRGhDQyw0QkFBNEI7ZUFBNUJBLG1CQUE0Qjs7SUFENUJDLHlCQUF5QjtlQUF6QkEsa0JBQXlCOztJQWF6QkMsMEJBQTBCO2VBQTFCQSxjQUEwQjs7SUFFMUJDLDZCQUE2QjtlQUE3QkEsaUJBQTZCOztJQWhCN0JDLG1CQUFtQjtlQUFuQkEsdUJBQW1COztJQXNCbkJDLHFDQUFxQztlQUFyQ0EscUJBQXFDOztJQUVyQ0Msd0NBQXdDO2VBQXhDQSxxQkFBd0M7O0lBSHhDQyxpQ0FBaUM7ZUFBakNBLG9CQUFpQzs7SUFFakNDLHVDQUF1QztlQUF2Q0EscUJBQXVDOztJQWR2Q0Msc0JBQXNCO2VBQXRCQSwwQkFBc0I7O0lBckJ0QkMsSUFBSTtlQUFKQSxhQUFJOztJQVdKQyxnQkFBZ0I7ZUFBaEJBLG9CQUFnQjs7SUFjaEJDLHNCQUFzQjtlQUF0QkEsbUJBQXNCOztJQUh0QkMsOEJBQThCO2VBQTlCQSxxQkFBOEI7O0lBSzlCQyw0QkFBNEI7ZUFBNUJBLGdCQUE0Qjs7SUFQNUJDLGtCQUFrQjtlQUFsQkEsc0JBQWtCOztJQUZsQkMsZUFBZTtlQUFmQSxtQkFBZTs7SUFiZkMsY0FBYztlQUFkQSxjQUFjOztJQURkQyxjQUFjO2VBQWRBLGNBQWM7O0lBRmRDLGNBQWM7ZUFBZEEsdUJBQWM7O0lBRGRDLEtBQUs7ZUFBTEEsY0FBSzs7OzJEQURPOzREQUNDO3FFQUNTOzREQUVBOzREQUNBOzZEQUVOOzZEQUNFOzZEQUNDO2tFQUVLO3FFQUNHO2dFQUNNO2lFQUNHO2lFQUNJO2lFQUNHO2lFQUVwQjtvRUFFRzt3RUFDSTttRUFDUTttRUFDQTtpRUFFUjs0REFDSTs4REFDRTsrREFDQzs2REFDRDs4REFDSTs4REFDRTs4REFDQztrRUFDRjttRUFDSTttRUFDRTttRUFDQyJ9