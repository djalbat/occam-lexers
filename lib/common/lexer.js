"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _rule = _interopRequireDefault(require("./rule"));
var _whitespace = _interopRequireDefault(require("../common/token/nonSignificant/whitespace"));
var _regularExpression = _interopRequireDefault(require("../common/token/significant/regularExpression"));
var _singleLine = _interopRequireDefault(require("../common/token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/endOf"));
var _endOfLine = _interopRequireDefault(require("../common/token/nonSignificant/endOfLine"));
var _startOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/middleOf"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var splice = _necessary.arrayUtilities.splice;
var CommonLexer = /*#__PURE__*/ function() {
    function CommonLexer(rules, InCommentTokens, NotInCommentTokens) {
        _classCallCheck(this, CommonLexer);
        this.rules = rules;
        this.InCommentTokens = InCommentTokens;
        this.NotInCommentTokens = NotInCommentTokens;
    }
    _createClass(CommonLexer, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        },
        {
            key: "getInCommentTokens",
            value: function getInCommentTokens() {
                return this.InCommentTokens;
            }
        },
        {
            key: "getNotInCommentTokens",
            value: function getNotInCommentTokens() {
                return this.NotInCommentTokens;
            }
        },
        {
            key: "tokenise",
            value: function tokenise(content) {
                var endOfLineTokensOrContents = this.tokeniseEndOfLines(content), tokensOrContents = endOfLineTokensOrContents; ///
                this.tokeniseContents(tokensOrContents);
                var tokens = tokensOrContents; ///
                return tokens;
            }
        },
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                var EndOfLineToken = this.constructor.EndOfLineToken, endOfLineTokensOrContents = [];
                var endOfLineToken = EndOfLineToken.match(content);
                while(endOfLineToken !== null){
                    var endOfLineTokenIndex = endOfLineToken.getIndex(), endOfLineTokenContentLength = endOfLineToken.getContentLength(), left = endOfLineTokenIndex, right = endOfLineTokenIndex + endOfLineTokenContentLength, leftContent = content.substring(0, left), rightContent = content.substring(right);
                    content = leftContent; ///
                    endOfLineTokensOrContents.push(content);
                    endOfLineTokensOrContents.push(endOfLineToken);
                    content = rightContent; ///
                    endOfLineToken = EndOfLineToken.match(content);
                }
                endOfLineTokensOrContents.push(content);
                return endOfLineTokensOrContents;
            }
        },
        {
            key: "tokeniseContents",
            value: function tokeniseContents(tokensOrContents) {
                var inComment = false;
                var index = 0, tokensOrContentsLength = tokensOrContents.length;
                while(index < tokensOrContentsLength){
                    var tokenOrContent = tokensOrContents[index], tokenOrContentString = (typeof tokenOrContent === "undefined" ? "undefined" : _typeof(tokenOrContent)) === _constants.STRING, tokenOrContentContent = tokenOrContentString; ///
                    if (tokenOrContentContent) {
                        var tokens = [], content = tokenOrContent; ///
                        inComment = this.tokeniseContent(content, tokens, inComment);
                        var tokensLength = tokens.length, start = index, deleteCount = 1;
                        splice(tokensOrContents, start, deleteCount, tokens);
                        tokensOrContentsLength += tokensLength - 1;
                        index += tokensLength - 1;
                    }
                    index++;
                }
            }
        },
        {
            key: "tokeniseContent",
            value: function tokeniseContent(content, tokens, inComment) {
                while(content !== _constants.EMPTY_STRING){
                    var token = null;
                    var Tokens = inComment ? this.InCommentTokens : this.NotInCommentTokens;
                    Tokens.some(function(Token) {
                        if (Token !== null) {
                            token = Token.match(content);
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
                    var commentTokenInCommentPreserving = (0, _token).isTokenInCommentPreservingToken(token), tokenContentLength = token.getContentLength(), start = tokenContentLength; ///
                    content = content.substring(start);
                    inComment = commentTokenInCommentPreserving; ///
                }
                return inComment;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var entries = Class.entries, InCommentTokens = InCommentTokensFromClass(Class), NotInCommentTokens = NotInCommentTokensFromClass(Class), rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), lexer = new Class(rules, InCommentTokens, NotInCommentTokens);
                return lexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                var rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), InCommentTokens = InCommentTokensFromClass(Class), NotInCommentTokens = NotInCommentTokensFromClass(Class), lexer = new Class(rules, InCommentTokens, NotInCommentTokens);
                return lexer;
            }
        }
    ]);
    return CommonLexer;
}();
_defineProperty(CommonLexer, "EndOfLineToken", _endOfLine.default);
_defineProperty(CommonLexer, "WhitespaceToken", _whitespace.default);
_defineProperty(CommonLexer, "SingleLineCommentToken", _singleLine.default);
_defineProperty(CommonLexer, "RegularExpressionToken", _regularExpression.default);
_defineProperty(CommonLexer, "EndOfMultiLineCommentToken", _endOf.default);
_defineProperty(CommonLexer, "StartOfMultiLineCommentToken", _startOf.default);
_defineProperty(CommonLexer, "MiddleOfMultiLineCommentToken", _middleOf.default);
_defineProperty(CommonLexer, "SinglyQuotedStringLiteralToken", _singlyQuoted.default);
_defineProperty(CommonLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);
exports.default = CommonLexer;
function InCommentTokensFromClass(Class) {
    var EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken, InCommentTokens = [
        EndOfMultiLineCommentToken,
        MiddleOfMultiLineCommentToken
    ];
    return InCommentTokens;
}
function NotInCommentTokensFromClass(Class) {
    var WhitespaceToken = Class.WhitespaceToken, SingleLineCommentToken = Class.SingleLineCommentToken, RegularExpressionToken = Class.RegularExpressionToken, StartOfMultiLineCommentToken = Class.StartOfMultiLineCommentToken, SinglyQuotedStringLiteralToken = Class.SinglyQuotedStringLiteralToken, DoublyQuotedStringLiteralToken = Class.DoublyQuotedStringLiteralToken, NotInCommentTokens = [
        WhitespaceToken,
        StartOfMultiLineCommentToken,
        SingleLineCommentToken,
        RegularExpressionToken,
        SinglyQuotedStringLiteralToken,
        DoublyQuotedStringLiteralToken
    ];
    return NotInCommentTokens;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5cclxuaW1wb3J0IHsgU1RSSU5HLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGlzVG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5jb25zdCB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudFRva2VucywgTm90SW5Db21tZW50VG9rZW5zKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkluQ29tbWVudFRva2VucyA9IEluQ29tbWVudFRva2VucztcclxuICAgIHRoaXMuTm90SW5Db21tZW50VG9rZW5zID0gTm90SW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm90SW5Db21tZW50VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB7IEVuZE9mTGluZVRva2VuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSBTVFJJTkcpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3QgVG9rZW5zID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluQ29tbWVudFRva2VucyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudFRva2VucztcclxuXHJcbiAgICAgIFRva2Vucy5zb21lKChUb2tlbikgPT4ge1xyXG4gICAgICAgIGlmIChUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdG9rZW4gPSBUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlcy5zb21lKChydWxlKSA9PiB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmcgPSBpc1Rva2VuSW5Db21tZW50UHJlc2VydmluZ1Rva2VuKHRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZzsgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIEluQ29tbWVudFRva2VucyA9IEluQ29tbWVudFRva2Vuc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRUb2tlbnMgPSBOb3RJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcywgSW5Db21tZW50VG9rZW5zLCBOb3RJbkNvbW1lbnRUb2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBJbkNvbW1lbnRUb2tlbnMgPSBJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50VG9rZW5zID0gTm90SW5Db21tZW50VG9rZW5zRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRUb2tlbnMsIE5vdEluQ29tbWVudFRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5Db21tZW50VG9rZW5zRnJvbUNsYXNzKENsYXNzKSB7XHJcbiAgY29uc3QgeyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSA9IENsYXNzLFxyXG4gICAgICAgIEluQ29tbWVudFRva2VucyA9IFtcclxuICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW5cclxuICAgICAgICBdO1xyXG5cclxuICByZXR1cm4gSW5Db21tZW50VG9rZW5zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOb3RJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpIHtcclxuICBjb25zdCB7IFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxyXG4gICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9ID0gQ2xhc3MsXHJcbiAgICAgIE5vdEluQ29tbWVudFRva2VucyA9IFtcclxuICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sXHJcbiAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlblxyXG4gICAgICBdO1xyXG5cclxuICByZXR1cm4gTm90SW5Db21tZW50VG9rZW5zO1xyXG59Il0sIm5hbWVzIjpbInNwbGljZSIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJJbkNvbW1lbnRUb2tlbnMiLCJOb3RJbkNvbW1lbnRUb2tlbnMiLCJnZXRSdWxlcyIsImdldEluQ29tbWVudFRva2VucyIsImdldE5vdEluQ29tbWVudFRva2VucyIsInRva2VuaXNlIiwiY29udGVudCIsImVuZE9mTGluZVRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VDb250ZW50cyIsInRva2VucyIsIkVuZE9mTGluZVRva2VuIiwiY29uc3RydWN0b3IiLCJlbmRPZkxpbmVUb2tlbiIsIm1hdGNoIiwiZW5kT2ZMaW5lVG9rZW5JbmRleCIsImdldEluZGV4IiwiZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwicHVzaCIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJ0b2tlbmlzZUNvbnRlbnQiLCJ0b2tlbnNMZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwidG9rZW4iLCJUb2tlbnMiLCJzb21lIiwiVG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwicnVsZSIsIkVycm9yIiwiY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyIsInRva2VuQ29udGVudExlbmd0aCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJlbnRyaWVzIiwiSW5Db21tZW50VG9rZW5zRnJvbUNsYXNzIiwiTm90SW5Db21tZW50VG9rZW5zRnJvbUNsYXNzIiwibWFwIiwiZW50cnkiLCJSdWxlIiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRXpCLEdBQVEsQ0FBUixLQUFRO0FBQ0csR0FBMkMsQ0FBM0MsV0FBMkM7QUFDcEMsR0FBK0MsQ0FBL0Msa0JBQStDO0FBQy9DLEdBQW1ELENBQW5ELFdBQW1EO0FBQy9DLEdBQXdELENBQXhELE1BQXdEO0FBQ3RELEdBQTBDLENBQTFDLFVBQTBDO0FBQzFDLEdBQTBELENBQTFELFFBQTBEO0FBQ3pELEdBQTJELENBQTNELFNBQTJEO0FBQzFELEdBQXdELENBQXhELGFBQXdEO0FBQ3hELEdBQXdELENBQXhELGFBQXdEO0FBRTlELEdBQWMsQ0FBZCxVQUFjO0FBQ0gsR0FBb0IsQ0FBcEIs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