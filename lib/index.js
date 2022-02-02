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
Object.defineProperty(exports, "WhitespaceToken", {
    enumerable: true,
    get: function() {
        return _whitespace.default;
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
Object.defineProperty(exports, "PythonStyleSingleLineCommentToken", {
    enumerable: true,
    get: function() {
        return _pythonStyle.default;
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
var _rule = _interopRequireDefault(require("./common/rule"));
var _types = _interopRequireDefault(require("./common/types"));
var _specialSymbols = _interopRequireDefault(require("./bnf/specialSymbols"));
var _lexer = _interopRequireDefault(require("./bnf/lexer"));
var _lexer1 = _interopRequireDefault(require("./basic/lexer"));
var _lexer2 = _interopRequireDefault(require("./common/lexer"));
var _significant = _interopRequireDefault(require("./common/token/significant"));
var _nonSignificant = _interopRequireDefault(require("./common/token/nonSignificant"));
var _endOfLine = _interopRequireDefault(require("./common/token/significant/endOfLine"));
var _endOfLine1 = _interopRequireDefault(require("./common/token/nonSignificant/endOfLine"));
var _whitespace = _interopRequireDefault(require("./common/token/nonSignificant/whitespace"));
var _cStyle = _interopRequireDefault(require("./common/token/nonSignificant/comment/singleLine/cStyle"));
var _cStyle1 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/endOf/cStyle"));
var _pythonStyle = _interopRequireDefault(require("./common/token/nonSignificant/comment/singleLine/pythonStyle"));
var _cStyle2 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/startOf/cStyle"));
var _cStyle3 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/middleOf/cStyle"));
var _pythonStyle1 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/endOf/pythonStyle"));
var _pythonStyle2 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/startOf/pythonStyle"));
var _pythonStyle3 = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/middleOf/pythonStyle"));
var _stringLiteral = _interopRequireDefault(require("./common/token/significant/stringLiteral"));
var _regularExpression = _interopRequireDefault(require("./common/token/significant/regularExpression"));
var _singlyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/doublyQuoted"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vY29tbW9uL3J1bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZXMgfSBmcm9tIFwiLi9jb21tb24vdHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwiLi9ibmYvc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTkZMZXhlciB9IGZyb20gXCIuL2JuZi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNpY0xleGVyIH0gZnJvbSBcIi4vYmFzaWMvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbW9uTGV4ZXIgfSBmcm9tIFwiLi9jb21tb24vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGl0ZXNwYWNlVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL2NTdHlsZVwiOyAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvY1N0eWxlXCI7ICAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZS9weXRob25TdHlsZVwiOyAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mL2NTdHlsZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mL2NTdHlsZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YvcHl0aG9uU3R5bGVcIjsgIC8vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZi9weXRob25TdHlsZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YvcHl0aG9uU3R5bGVcIjsgIC8vL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0cmluZ0xpdGVyYWxUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7ICAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL3NpbmdseVF1b3RlZFwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiOyAgLy8vXG4iXSwibmFtZXMiOlsiUnVsZSIsImRlZmF1bHQiLCJ0eXBlcyIsInNwZWNpYWxTeW1ib2xzIiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiQ29tbW9uTGV4ZXIiLCJTaWduaWZpY2FudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OytCQUVRQSxDQUFJOzs7cUJBQWZDLE9BQU87OzsrQkFDSUMsQ0FBSzs7O3NCQUFoQkQsT0FBTzs7OytCQUNJRSxDQUFjOzs7K0JBQXpCRixPQUFPOzs7K0JBRUlHLENBQVE7OztzQkFBbkJILE9BQU87OzsrQkFDSUksQ0FBVTs7O3VCQUFyQkosT0FBTzs7OytCQUNJSyxDQUFXOzs7dUJBQXRCTCxPQUFPOzs7K0JBRUlNLENBQWdCOzs7NEJBQTNCTixPQUFPOzs7K0JBQ0lPLENBQW1COzs7K0JBQTlCUCxPQUFPOzs7K0JBQ0lRLENBQXlCOzs7MEJBQXBDUixPQUFPOzs7K0JBQ0lTLENBQTRCOzs7MkJBQXZDVCxPQUFPOzs7K0JBRUlVLENBQWU7OzsyQkFBMUJWLE9BQU87OzsrQkFDSVcsQ0FBNEI7Ozt1QkFBdkNYLE9BQU87OzsrQkFDSVksQ0FBZ0M7Ozt3QkFBM0NaLE9BQU87OzsrQkFDSWEsQ0FBaUM7Ozs0QkFBNUNiLE9BQU87OzsrQkFDSWMsQ0FBa0M7Ozt3QkFBN0NkLE9BQU87OzsrQkFDSWUsQ0FBbUM7Ozt3QkFBOUNmLE9BQU87OzsrQkFDSWdCLENBQXFDOzs7NkJBQWhEaEIsT0FBTzs7OytCQUNJaUIsQ0FBdUM7Ozs2QkFBbERqQixPQUFPOzs7K0JBQ0lrQixDQUF3Qzs7OzZCQUFuRGxCLE9BQU87OzsrQkFFSW1CLENBQWtCOzs7OEJBQTdCbkIsT0FBTzs7OytCQUNJb0IsQ0FBc0I7OztrQ0FBakNwQixPQUFPOzs7K0JBQ0lxQixDQUE4Qjs7OzZCQUF6Q3JCLE9BQU87OzsrQkFDSXNCLENBQThCOzs7NkJBQXpDdEIsT0FBTyJ9