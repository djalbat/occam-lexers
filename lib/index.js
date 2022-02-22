"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Rule", {
    enumerable: true,
    get: function() {
        return _rule.default;
    }
});
Object.defineProperty(exports, "types", {
    enumerable: true,
    get: function() {
        return _types.default;
    }
});
Object.defineProperty(exports, "specialSymbols", {
    enumerable: true,
    get: function() {
        return _specialSymbols.default;
    }
});
Object.defineProperty(exports, "BNFLexer", {
    enumerable: true,
    get: function() {
        return _lexer.default;
    }
});
Object.defineProperty(exports, "BasicLexer", {
    enumerable: true,
    get: function() {
        return _lexer1.default;
    }
});
Object.defineProperty(exports, "CommonLexer", {
    enumerable: true,
    get: function() {
        return _lexer2.default;
    }
});
Object.defineProperty(exports, "SignificantToken", {
    enumerable: true,
    get: function() {
        return _significant.default;
    }
});
Object.defineProperty(exports, "NonSignificantToken", {
    enumerable: true,
    get: function() {
        return _nonSignificant.default;
    }
});
Object.defineProperty(exports, "EndOfLineSignificantToken", {
    enumerable: true,
    get: function() {
        return _endOfLine.default;
    }
});
Object.defineProperty(exports, "EndOfLineNonSignificantToken", {
    enumerable: true,
    get: function() {
        return _endOfLine1.default;
    }
});
Object.defineProperty(exports, "EndOfLineCommentSignificantToken", {
    enumerable: true,
    get: function() {
        return _endOfLine2.default;
    }
});
Object.defineProperty(exports, "EndOfLineCommentNonSignificantToken", {
    enumerable: true,
    get: function() {
        return _endOfLine3.default;
    }
});
Object.defineProperty(exports, "WhitespaceToken", {
    enumerable: true,
    get: function() {
        return _whitespace.default;
    }
});
Object.defineProperty(exports, "StringLiteralToken", {
    enumerable: true,
    get: function() {
        return _stringLiteral.default;
    }
});
Object.defineProperty(exports, "RegularExpressionToken", {
    enumerable: true,
    get: function() {
        return _regularExpression.default;
    }
});
Object.defineProperty(exports, "SinglyQuotedStringLiteralToken", {
    enumerable: true,
    get: function() {
        return _singlyQuoted.default;
    }
});
Object.defineProperty(exports, "DoublyQuotedStringLiteralToken", {
    enumerable: true,
    get: function() {
        return _doublyQuoted.default;
    }
});
Object.defineProperty(exports, "SingleLineCommentToken", {
    enumerable: true,
    get: function() {
        return _singleLine.default;
    }
});
Object.defineProperty(exports, "EndOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _endOf.default;
    }
});
Object.defineProperty(exports, "StartOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _startOf.default;
    }
});
Object.defineProperty(exports, "MiddleOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _middleOf.default;
    }
});
Object.defineProperty(exports, "CStyleSingleLineCommentToken", {
    enumerable: true,
    get: function() {
        return _cStyle.default;
    }
});
Object.defineProperty(exports, "CStyleEndOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _cStyle1.default;
    }
});
Object.defineProperty(exports, "CStyleStartOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _cStyle2.default;
    }
});
Object.defineProperty(exports, "CStyleMiddleOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _cStyle3.default;
    }
});
Object.defineProperty(exports, "PythonStyleSingleLineCommentToken", {
    enumerable: true,
    get: function() {
        return _pythonStyle.default;
    }
});
Object.defineProperty(exports, "PythonStyleEndOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _pythonStyle1.default;
    }
});
Object.defineProperty(exports, "PythonStyleStartOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _pythonStyle2.default;
    }
});
Object.defineProperty(exports, "PythonStyleMiddleOfMultiLineCommentToken", {
    enumerable: true,
    get: function() {
        return _pythonStyle3.default;
    }
});
var _rule = _interopRequireDefault(require("./rule"));
var _types = _interopRequireDefault(require("./types"));
var _specialSymbols = _interopRequireDefault(require("./specialSymbols"));
var _lexer = _interopRequireDefault(require("./bnf/lexer"));
var _lexer1 = _interopRequireDefault(require("./basic/lexer"));
var _lexer2 = _interopRequireDefault(require("./common/lexer"));
var _significant = _interopRequireDefault(require("./token/significant"));
var _nonSignificant = _interopRequireDefault(require("./token/nonSignificant"));
var _endOfLine = _interopRequireDefault(require("./token/significant/endOfLine"));
var _endOfLine1 = _interopRequireDefault(require("./token/nonSignificant/endOfLine"));
var _endOfLine2 = _interopRequireDefault(require("./token/significant/comment/endOfLine"));
var _endOfLine3 = _interopRequireDefault(require("./token/nonSignificant/comment/endOfLine"));
var _whitespace = _interopRequireDefault(require("./token/nonSignificant/whitespace"));
var _stringLiteral = _interopRequireDefault(require("./token/significant/stringLiteral"));
var _regularExpression = _interopRequireDefault(require("./token/significant/regularExpression"));
var _singlyQuoted = _interopRequireDefault(require("./token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("./token/significant/stringLiteral/doublyQuoted"));
var _singleLine = _interopRequireDefault(require("./token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf"));
var _startOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf"));
var _cStyle = _interopRequireDefault(require("./token/nonSignificant/comment/singleLine/cStyle"));
var _cStyle1 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf/cStyle"));
var _cStyle2 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf/cStyle"));
var _cStyle3 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf/cStyle"));
var _pythonStyle = _interopRequireDefault(require("./token/nonSignificant/comment/singleLine/pythonStyle"));
var _pythonStyle1 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vcnVsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIi4vc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTkZMZXhlciB9IGZyb20gXCIuL2JuZi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNpY0xleGVyIH0gZnJvbSBcIi4vYmFzaWMvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbW9uTGV4ZXIgfSBmcm9tIFwiLi9jb21tb24vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2NvbW1lbnQvZW5kT2ZMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZkxpbmVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGl0ZXNwYWNlVG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mL2NTdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi9jU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9jU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi9weXRob25TdHlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL3B5dGhvblN0eWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi9weXRob25TdHlsZVwiO1xuIl0sIm5hbWVzIjpbIlJ1bGUiLCJkZWZhdWx0IiwidHlwZXMiLCJzcGVjaWFsU3ltYm9scyIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7K0JBRVFBLENBQUk7OztxQkFBZkMsT0FBTzs7OytCQUNJQyxDQUFLOzs7c0JBQWhCRCxPQUFPOzs7K0JBQ0lFLENBQWM7OzsrQkFBekJGLE9BQU87OzsrQkFFSUcsQ0FBUTs7O3NCQUFuQkgsT0FBTzs7OytCQUNJSSxDQUFVOzs7dUJBQXJCSixPQUFPOzs7K0JBQ0lLLENBQVc7Ozt1QkFBdEJMLE9BQU87OzsrQkFFSU0sQ0FBZ0I7Ozs0QkFBM0JOLE9BQU87OzsrQkFDSU8sQ0FBbUI7OzsrQkFBOUJQLE9BQU87OzsrQkFDSVEsQ0FBeUI7OzswQkFBcENSLE9BQU87OzsrQkFDSVMsQ0FBNEI7OzsyQkFBdkNULE9BQU87OzsrQkFDSVUsQ0FBZ0M7OzsyQkFBM0NWLE9BQU87OzsrQkFDSVcsQ0FBbUM7OzsyQkFBOUNYLE9BQU87OzsrQkFFSVksQ0FBZTs7OzJCQUExQlosT0FBTzs7OytCQUVJYSxDQUFrQjs7OzhCQUE3QmIsT0FBTzs7OytCQUNJYyxDQUFzQjs7O2tDQUFqQ2QsT0FBTzs7OytCQUNJZSxDQUE4Qjs7OzZCQUF6Q2YsT0FBTzs7OytCQUNJZ0IsQ0FBOEI7Ozs2QkFBekNoQixPQUFPOzs7K0JBRUlpQixDQUFzQjs7OzJCQUFqQ2pCLE9BQU87OzsrQkFDSWtCLENBQTBCOzs7c0JBQXJDbEIsT0FBTzs7OytCQUNJbUIsQ0FBNEI7Ozt3QkFBdkNuQixPQUFPOzs7K0JBQ0lvQixDQUE2Qjs7O3lCQUF4Q3BCLE9BQU87OzsrQkFDSXFCLENBQTRCOzs7dUJBQXZDckIsT0FBTzs7OytCQUNJc0IsQ0FBZ0M7Ozt3QkFBM0N0QixPQUFPOzs7K0JBQ0l1QixDQUFrQzs7O3dCQUE3Q3ZCLE9BQU87OzsrQkFDSXdCLENBQW1DOzs7d0JBQTlDeEIsT0FBTzs7OytCQUNJeUIsQ0FBaUM7Ozs0QkFBNUN6QixPQUFPOzs7K0JBQ0kwQixDQUFxQzs7OzZCQUFoRDFCLE9BQU87OzsrQkFDSTJCLENBQXVDOzs7NkJBQWxEM0IsT0FBTzs7OytCQUNJNEIsQ0FBd0M7Ozs2QkFBbkQ1QixPQUFPIn0=