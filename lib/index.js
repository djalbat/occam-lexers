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
    get BNFLexer () {
        return _lexer1.default;
    },
    get BasicLexer () {
        return _lexer2.default;
    },
    get CStyleEndOfMultiLineCommentToken () {
        return _cStyle1.default;
    },
    get CStyleMiddleOfMultiLineCommentToken () {
        return _cStyle3.default;
    },
    get CStyleSingleLineCommentToken () {
        return _cStyle.default;
    },
    get CStyleStartOfMultiLineCommentToken () {
        return _cStyle2.default;
    },
    get CommonLexer () {
        return _lexer3.default;
    },
    get DoublyQuotedStringLiteralToken () {
        return _doublyQuoted.default;
    },
    get EndOfLineCommentNonSignificantToken () {
        return _endOfLine3.default;
    },
    get EndOfLineCommentSignificantToken () {
        return _endOfLine2.default;
    },
    get EndOfLineNonSignificantToken () {
        return _endOfLine1.default;
    },
    get EndOfLineSignificantToken () {
        return _endOfLine.default;
    },
    get EndOfMultiLineCommentToken () {
        return _endOf.default;
    },
    get MiddleOfMultiLineCommentToken () {
        return _middleOf.default;
    },
    get NonSignificantToken () {
        return _nonSignificant.default;
    },
    get PythonStyleEndOfMultiLineCommentToken () {
        return _pythonStyle1.default;
    },
    get PythonStyleMiddleOfMultiLineCommentToken () {
        return _pythonStyle3.default;
    },
    get PythonStyleSingleLineCommentToken () {
        return _pythonStyle.default;
    },
    get PythonStyleStartOfMultiLineCommentToken () {
        return _pythonStyle2.default;
    },
    get RegularExpressionToken () {
        return _regularExpression.default;
    },
    get Rule () {
        return _rule.default;
    },
    get SignificantToken () {
        return _significant.default;
    },
    get SingleLineCommentToken () {
        return _singleLine.default;
    },
    get SinglyQuotedStringLiteralToken () {
        return _singlyQuoted.default;
    },
    get StartOfMultiLineCommentToken () {
        return _startOf.default;
    },
    get StringLiteralToken () {
        return _stringLiteral.default;
    },
    get WhitespaceToken () {
        return _whitespace.default;
    },
    get lexerUtilities () {
        return _lexer.default;
    },
    get rulesUtilities () {
        return _rules.default;
    },
    get specialSymbols () {
        return _specialSymbols.default;
    },
    get types () {
        return _types.default;
    }
});
const _rule = /*#__PURE__*/ _interop_require_default(require("./rule"));
const _types = /*#__PURE__*/ _interop_require_default(require("./types"));
const _specialSymbols = /*#__PURE__*/ _interop_require_default(require("./specialSymbols"));
const _rules = /*#__PURE__*/ _interop_require_default(require("./utilities/rules"));
const _lexer = /*#__PURE__*/ _interop_require_default(require("./utilities/lexer"));
const _lexer1 = /*#__PURE__*/ _interop_require_default(require("./bnf/lexer"));
const _lexer2 = /*#__PURE__*/ _interop_require_default(require("./basic/lexer"));
const _lexer3 = /*#__PURE__*/ _interop_require_default(require("./common/lexer"));
const _significant = /*#__PURE__*/ _interop_require_default(require("./token/significant"));
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant"));
const _endOfLine = /*#__PURE__*/ _interop_require_default(require("./token/significant/endOfLine"));
const _endOfLine1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/endOfLine"));
const _endOfLine2 = /*#__PURE__*/ _interop_require_default(require("./token/significant/comment/endOfLine"));
const _endOfLine3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/endOfLine"));
const _whitespace = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/whitespace"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral"));
const _regularExpression = /*#__PURE__*/ _interop_require_default(require("./token/significant/regularExpression"));
const _singlyQuoted = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral/singlyQuoted"));
const _doublyQuoted = /*#__PURE__*/ _interop_require_default(require("./token/significant/stringLiteral/doublyQuoted"));
const _singleLine = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine"));
const _endOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf"));
const _startOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf"));
const _middleOf = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf"));
const _cStyle = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine/cStyle"));
const _cStyle1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf/cStyle"));
const _cStyle2 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf/cStyle"));
const _cStyle3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf/cStyle"));
const _pythonStyle = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/singleLine/pythonStyle"));
const _pythonStyle1 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
const _pythonStyle2 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
const _pythonStyle3 = /*#__PURE__*/ _interop_require_default(require("./token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vcnVsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIi4vc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBydWxlc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJORkxleGVyIH0gZnJvbSBcIi4vYm5mL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2ljTGV4ZXIgfSBmcm9tIFwiLi9iYXNpYy9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tb25MZXhlciB9IGZyb20gXCIuL2NvbW1vbi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mTGluZVwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoaXRlc3BhY2VUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvY1N0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YvcHl0aG9uU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL3B5dGhvblN0eWxlXCI7XG4iXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ29tbW9uTGV4ZXIiLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlJ1bGUiLCJTaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzVXRpbGl0aWVzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBU29CQTtlQUFBQSxlQUFROztRQUNSQztlQUFBQSxlQUFVOztRQXNCVkM7ZUFBQUEsZ0JBQWdDOztRQUVoQ0M7ZUFBQUEsZ0JBQW1DOztRQUhuQ0M7ZUFBQUEsZUFBNEI7O1FBRTVCQztlQUFBQSxnQkFBa0M7O1FBdEJsQ0M7ZUFBQUEsZUFBVzs7UUFjWEM7ZUFBQUEscUJBQThCOztRQVA5QkM7ZUFBQUEsbUJBQW1DOztRQURuQ0M7ZUFBQUEsbUJBQWdDOztRQURoQ0M7ZUFBQUEsbUJBQTRCOztRQUQ1QkM7ZUFBQUEsa0JBQXlCOztRQWF6QkM7ZUFBQUEsY0FBMEI7O1FBRTFCQztlQUFBQSxpQkFBNkI7O1FBaEI3QkM7ZUFBQUEsdUJBQW1COztRQXNCbkJDO2VBQUFBLHFCQUFxQzs7UUFFckNDO2VBQUFBLHFCQUF3Qzs7UUFIeENDO2VBQUFBLG9CQUFpQzs7UUFFakNDO2VBQUFBLHFCQUF1Qzs7UUFkdkNDO2VBQUFBLDBCQUFzQjs7UUFyQnRCQztlQUFBQSxhQUFJOztRQVdKQztlQUFBQSxvQkFBZ0I7O1FBY2hCQztlQUFBQSxtQkFBc0I7O1FBSHRCQztlQUFBQSxxQkFBOEI7O1FBSzlCQztlQUFBQSxnQkFBNEI7O1FBUDVCQztlQUFBQSxzQkFBa0I7O1FBRmxCQztlQUFBQSxtQkFBZTs7UUFiZkM7ZUFBQUEsY0FBYzs7UUFEZEM7ZUFBQUEsY0FBYzs7UUFGZEM7ZUFBQUEsdUJBQWM7O1FBRGRDO2VBQUFBLGNBQUs7Ozs2REFETzs4REFDQzt1RUFDUzs4REFFQTs4REFDQTsrREFFTjsrREFDRTsrREFDQztvRUFFSzt1RUFDRztrRUFDTTttRUFDRzttRUFDSTttRUFDRzttRUFFcEI7c0VBRUc7MEVBQ0k7cUVBQ1E7cUVBQ0E7bUVBRVI7OERBQ0k7Z0VBQ0U7aUVBQ0M7K0RBQ0Q7Z0VBQ0k7Z0VBQ0U7Z0VBQ0M7b0VBQ0Y7cUVBQ0k7cUVBQ0U7cUVBQ0MifQ==