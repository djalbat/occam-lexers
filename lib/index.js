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
var _singlyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("./common/token/significant/stringLiteral/doublyQuoted"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdWxlIH0gZnJvbSBcIi4vY29tbW9uL3J1bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZXMgfSBmcm9tIFwiLi9jb21tb24vdHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwiLi9ibmYvc3BlY2lhbFN5bWJvbHNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTkZMZXhlciB9IGZyb20gXCIuL2JuZi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNpY0xleGVyIH0gZnJvbSBcIi4vYmFzaWMvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbW9uTGV4ZXIgfSBmcm9tIFwiLi9jb21tb24vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGl0ZXNwYWNlVG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZVwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7IC8vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9IGZyb20gXCIuL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwiLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiOyAgLy8vXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7ICAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7ICAvLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7ICAvLy9cblxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJkZWZhdWx0IiwidHlwZXMiLCJzcGVjaWFsU3ltYm9scyIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkNvbW1vbkxleGVyIiwiU2lnbmlmaWNhbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OzsrQkFFUUEsQ0FBSTs7O3FCQUFmQyxPQUFPOzs7K0JBQ0lDLENBQUs7OztzQkFBaEJELE9BQU87OzsrQkFDSUUsQ0FBYzs7OytCQUF6QkYsT0FBTzs7OytCQUVJRyxDQUFROzs7c0JBQW5CSCxPQUFPOzs7K0JBQ0lJLENBQVU7Ozt1QkFBckJKLE9BQU87OzsrQkFDSUssQ0FBVzs7O3VCQUF0QkwsT0FBTzs7OytCQUVJTSxDQUFnQjs7OzRCQUEzQk4sT0FBTzs7OytCQUNJTyxDQUFtQjs7OytCQUE5QlAsT0FBTzs7OytCQUNJUSxDQUF5Qjs7OzBCQUFwQ1IsT0FBTzs7OytCQUNJUyxDQUE0Qjs7OzJCQUF2Q1QsT0FBTzs7OytCQUVJVSxDQUFlOzs7MkJBQTFCVixPQUFPOzs7K0JBQ0lXLENBQXNCOzs7MkJBQWpDWCxPQUFPOzs7K0JBQ0lZLENBQTBCOzs7c0JBQXJDWixPQUFPOzs7K0JBQ0lhLENBQTRCOzs7d0JBQXZDYixPQUFPOzs7K0JBQ0ljLENBQTZCOzs7eUJBQXhDZCxPQUFPOzs7K0JBQ0llLENBQThCOzs7NkJBQXpDZixPQUFPOzs7K0JBQ0lnQixDQUE4Qjs7OzZCQUF6Q2hCLE9BQU8ifQ==