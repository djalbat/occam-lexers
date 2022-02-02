"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("./rule"));
var _whitespace = _interopRequireDefault(require("../common/token/nonSignificant/whitespace"));
var _regularExpression = _interopRequireDefault(require("../common/token/significant/regularExpression"));
var _endOfLine = _interopRequireDefault(require("../common/token/nonSignificant/endOfLine"));
var _singlyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/doublyQuoted"));
var _constants = require("../constants");
var _token = require("../utilities/token");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CommonLexer = /*#__PURE__*/ function() {
    function CommonLexer(rules, InCommentClasses, NotInCommentClasses) {
        _classCallCheck(this, CommonLexer);
        this.rules = rules;
        this.InCommentClasses = InCommentClasses;
        this.NotInCommentClasses = NotInCommentClasses;
    }
    _createClass(CommonLexer, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        },
        {
            key: "getInCommentClasses",
            value: function getInCommentClasses() {
                return this.InCommentClasses;
            }
        },
        {
            key: "getNotInCommentClasses",
            value: function getNotInCommentClasses() {
                return this.NotInCommentClasses;
            }
        },
        {
            key: "tokenise",
            value: function tokenise(content) {
                var tokens = [];
                var inComment = false;
                while(content !== _constants.EMPTY_STRING){
                    var token = null;
                    var Classes = inComment ? this.InCommentClasses : this.NotInCommentClasses;
                    Classes.some(function(Class) {
                        if (Class !== null) {
                            token = Class.match(content);
                            if (token !== null) {
                                return true;
                            }
                        }
                    });
                    if (token === null) {
                        var significantToken = null;
                        this.rules.some(function(rule) {
                            significantToken = rule.match(content);
                            if (significantToken !== null) {
                                token = significantToken; ///
                                return true;
                            }
                        });
                    }
                    if (token === null) {
                        throw new Error("The content '".concat(content, "' cannot be tokenised."));
                    }
                    tokens.push(token);
                    inComment = (0, _token).inCommentFromTokenAndInComment(token, inComment);
                    var tokenContentLength = token.getContentLength(), start = tokenContentLength; ///
                    content = content.substring(start);
                }
                return tokens;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var entries = Class.entries, InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
                return lexer;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
                return lexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                var rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
                return lexer;
            }
        }
    ]);
    return CommonLexer;
}();
_defineProperty(CommonLexer, "EndOfLineToken", _endOfLine.default);
_defineProperty(CommonLexer, "WhitespaceToken", _whitespace.default);
_defineProperty(CommonLexer, "RegularExpressionToken", _regularExpression.default);
_defineProperty(CommonLexer, "SingleLineCommentToken", null);
_defineProperty(CommonLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(CommonLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(CommonLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(CommonLexer, "SinglyQuotedStringLiteralToken", _singlyQuoted.default);
_defineProperty(CommonLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);
exports.default = CommonLexer;
function InCommentClassesFromClass(Class) {
    var EndOfLineToken = Class.EndOfLineToken, EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken, InCommentClasses = [
        EndOfLineToken,
        EndOfMultiLineCommentToken,
        MiddleOfMultiLineCommentToken
    ];
    return InCommentClasses;
}
function NotInCommentClassesFromClass(Class) {
    var EndOfLineToken = Class.EndOfLineToken, WhitespaceToken = Class.WhitespaceToken, SingleLineCommentToken = Class.SingleLineCommentToken, RegularExpressionToken = Class.RegularExpressionToken, StartOfMultiLineCommentToken = Class.StartOfMultiLineCommentToken, SinglyQuotedStringLiteralToken = Class.SinglyQuotedStringLiteralToken, DoublyQuotedStringLiteralToken = Class.DoublyQuotedStringLiteralToken, NotInCommentClasses = [
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9ydWxlXCI7XHJcbmltcG9ydCBXaGl0ZXNwYWNlVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlXCI7XHJcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb25cIjtcclxuaW1wb3J0IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmVcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRva2VucyA9IFtdO1xyXG5cclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBSZWd1bGFyRXhwcmVzc2lvblRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcywgSW5Db21tZW50Q2xhc3NlcywgTm90SW5Db21tZW50Q2xhc3Nlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGNvbnN0IEluQ29tbWVudENsYXNzZXMgPSBJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIE5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpIHtcclxuICBjb25zdCB7IEVuZE9mTGluZVRva2VuLCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSA9IENsYXNzLFxyXG4gICAgICAgIEluQ29tbWVudENsYXNzZXMgPSBbXHJcbiAgICAgICAgICBFbmRPZkxpbmVUb2tlbixcclxuICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW5cclxuICAgICAgICBdO1xyXG5cclxuICByZXR1cm4gSW5Db21tZW50Q2xhc3NlcztcclxufVxyXG5cclxuZnVuY3Rpb24gTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcykge1xyXG4gIGNvbnN0IHsgRW5kT2ZMaW5lVG9rZW4sXHJcbiAgICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbixcclxuICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSA9IENsYXNzLFxyXG4gICAgICBOb3RJbkNvbW1lbnRDbGFzc2VzID0gW1xyXG4gICAgICAgIEVuZE9mTGluZVRva2VuLFxyXG4gICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbixcclxuICAgICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuXHJcbiAgICAgIF07XHJcblxyXG4gIHJldHVybiBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG59Il0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwicnVsZXMiLCJJbkNvbW1lbnRDbGFzc2VzIiwiTm90SW5Db21tZW50Q2xhc3NlcyIsImdldFJ1bGVzIiwiZ2V0SW5Db21tZW50Q2xhc3NlcyIsImdldE5vdEluQ29tbWVudENsYXNzZXMiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJpbkNvbW1lbnQiLCJ0b2tlbiIsIkNsYXNzZXMiLCJzb21lIiwiQ2xhc3MiLCJtYXRjaCIsInNpZ25pZmljYW50VG9rZW4iLCJydWxlIiwiRXJyb3IiLCJwdXNoIiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJlbnRyaWVzIiwiSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyIsIk5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MiLCJtYXAiLCJlbnRyeSIsIlJ1bGUiLCJmcm9tRW50cnkiLCJsZXhlciIsImZyb21SdWxlcyIsImZyb21FbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVEsQ0FBUixLQUFRO0FBQ0csR0FBMkMsQ0FBM0MsV0FBMkM7QUFDcEMsR0FBK0MsQ0FBL0Msa0JBQStDO0FBQ3pDLEdBQTBDLENBQTFDLFVBQTBDO0FBQ3hDLEdBQXdELENBQXhELGFBQXdEO0FBQ3hELEdBQXdELENBQXhELGFBQXdEO0FBRXRFLEdBQWMsQ0FBZCxVQUFjO0FBQ0ksR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxXQUFXLGlCQUFqQixRQUFRO2FBQUZBLFdBQVcsQ0FDbEJDLEtBQUssRUFBRUMsZ0JBQWdCLEVBQUVDLG1CQUFtQjs7UUFDdEQsSUFBSSxDQUFDRixLQUFLLEdBQUdBLEtBQUs7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0EsZ0JBQWdCO1FBQ3hDLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBLG1CQUFtQjs7OztZQUdoREMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNW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