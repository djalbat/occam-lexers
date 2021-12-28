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
var _singleLine = _interopRequireDefault(require("./common/token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/endOf"));
var _startOf = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("./common/token/nonSignificant/comment/multiLine/middleOf"));
var _stringLiteral = _interopRequireDefault(require("./common/token/significant/stringLiteral"));
var _regularExpression = _interopRequireDefault(require("./common/token/significant/regularExpression"));
var _singlyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/doublyQuoted"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vY29tbW9uL3J1bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZXMgfSBmcm9tIFwiLi9jb21tb24vdHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwiLi9ibmYvc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTkZMZXhlciB9IGZyb20gXCIuL2JuZi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNpY0xleGVyIH0gZnJvbSBcIi4vYmFzaWMvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbW9uTGV4ZXIgfSBmcm9tIFwiLi9jb21tb24vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGl0ZXNwYWNlVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7IC8vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7ICAvLy9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbFwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjsgIC8vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjsgIC8vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC9kb3VibHlRdW90ZWRcIjsgIC8vL1xuIl0sIm5hbWVzIjpbIlJ1bGUiLCJkZWZhdWx0IiwidHlwZXMiLCJzcGVjaWFsU3ltYm9scyIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0cmluZ0xpdGVyYWxUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7K0JBRVFBLENBQUk7OztxQkFBZkMsT0FBTzs7OytCQUNJQyxDQUFLOzs7c0JBQWhCRCxPQUFPOzs7K0JBQ0lFLENBQWM7OzsrQkFBekJGLE9BQU87OzsrQkFFSUcsQ0FBUTs7O3NCQUFuQkgsT0FBTzs7OytCQUNJSSxDQUFVOzs7dUJBQXJCSixPQUFPOzs7K0JBQ0lLLENBQVc7Ozt1QkFBdEJMLE9BQU87OzsrQkFFSU0sQ0FBZ0I7Ozs0QkFBM0JOLE9BQU87OzsrQkFDSU8sQ0FBbUI7OzsrQkFBOUJQLE9BQU87OzsrQkFDSVEsQ0FBeUI7OzswQkFBcENSLE9BQU87OzsrQkFDSVMsQ0FBNEI7OzsyQkFBdkNULE9BQU87OzsrQkFFSVUsQ0FBZTs7OzJCQUExQlYsT0FBTzs7OytCQUNJVyxDQUFzQjs7OzJCQUFqQ1gsT0FBTzs7OytCQUNJWSxDQUEwQjs7O3NCQUFyQ1osT0FBTzs7OytCQUNJYSxDQUE0Qjs7O3dCQUF2Q2IsT0FBTzs7OytCQUNJYyxDQUE2Qjs7O3lCQUF4Q2QsT0FBTzs7OytCQUVJZSxDQUFrQjs7OzhCQUE3QmYsT0FBTzs7OytCQUNJZ0IsQ0FBc0I7OztrQ0FBakNoQixPQUFPOzs7K0JBQ0lpQixDQUE4Qjs7OzZCQUF6Q2pCLE9BQU87OzsrQkFDSWtCLENBQThCOzs7NkJBQXpDbEIsT0FBTyJ9