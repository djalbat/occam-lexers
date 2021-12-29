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
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var InCommentTokens = InCommentTokensFromClass(Class), NotInCommentTokens = NotInCommentTokensFromClass(Class), lexer = new Class(rules, InCommentTokens, NotInCommentTokens);
                return lexer;
            }
        },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5cclxuaW1wb3J0IHsgU1RSSU5HLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGlzVG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5jb25zdCB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudFRva2VucywgTm90SW5Db21tZW50VG9rZW5zKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkluQ29tbWVudFRva2VucyA9IEluQ29tbWVudFRva2VucztcclxuICAgIHRoaXMuTm90SW5Db21tZW50VG9rZW5zID0gTm90SW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm90SW5Db21tZW50VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB7IEVuZE9mTGluZVRva2VuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHdoaWxlIChlbmRPZkxpbmVUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbkluZGV4ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0SW5kZXgoKSxcclxuICAgICAgICAgICAgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCwgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gZW5kT2ZMaW5lVG9rZW5JbmRleCArIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCxcclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpO1xyXG5cclxuICAgICAgY29udGVudCA9IGxlZnRDb250ZW50OyAgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgbGV0IGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRTdHJpbmcgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSBTVFJJTkcpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3QgVG9rZW5zID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluQ29tbWVudFRva2VucyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudFRva2VucztcclxuXHJcbiAgICAgIFRva2Vucy5zb21lKChUb2tlbikgPT4ge1xyXG4gICAgICAgIGlmIChUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdG9rZW4gPSBUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlcy5zb21lKChydWxlKSA9PiB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmcgPSBpc1Rva2VuSW5Db21tZW50UHJlc2VydmluZ1Rva2VuKHRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZzsgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBJbkNvbW1lbnRUb2tlbnMgPSBJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50VG9rZW5zID0gTm90SW5Db21tZW50VG9rZW5zRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRUb2tlbnMsIE5vdEluQ29tbWVudFRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgSW5Db21tZW50VG9rZW5zID0gSW5Db21tZW50VG9rZW5zRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIE5vdEluQ29tbWVudFRva2VucyA9IE5vdEluQ29tbWVudFRva2Vuc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRUb2tlbnMsIE5vdEluQ29tbWVudFRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIEluQ29tbWVudFRva2VucyA9IEluQ29tbWVudFRva2Vuc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRUb2tlbnMgPSBOb3RJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudFRva2VucywgTm90SW5Db21tZW50VG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MoQ2xhc3MpIHtcclxuICBjb25zdCB7IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9ID0gQ2xhc3MsXHJcbiAgICAgICAgSW5Db21tZW50VG9rZW5zID0gW1xyXG4gICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlblxyXG4gICAgICAgIF07XHJcblxyXG4gIHJldHVybiBJbkNvbW1lbnRUb2tlbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vdEluQ29tbWVudFRva2Vuc0Zyb21DbGFzcyhDbGFzcykge1xyXG4gIGNvbnN0IHsgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sXHJcbiAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gPSBDbGFzcyxcclxuICAgICAgTm90SW5Db21tZW50VG9rZW5zID0gW1xyXG4gICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbixcclxuICAgICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuXHJcbiAgICAgIF07XHJcblxyXG4gIHJldHVybiBOb3RJbkNvbW1lbnRUb2tlbnM7XHJcbn0iXSwibmFtZXMiOlsic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkluQ29tbWVudFRva2VucyIsIk5vdEluQ29tbWVudFRva2VucyIsImdldFJ1bGVzIiwiZ2V0SW5Db21tZW50VG9rZW5zIiwiZ2V0Tm90SW5Db21tZW50VG9rZW5zIiwidG9rZW5pc2UiLCJjb250ZW50IiwiZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW4iLCJjb25zdHJ1Y3RvciIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIlRva2VucyIsInNvbWUiLCJUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJydWxlIiwiRXJyb3IiLCJjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nIiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZnJvbVJ1bGVzIiwiQ2xhc3MiLCJJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MiLCJOb3RJbkNvbW1lbnRUb2tlbnNGcm9tQ2xhc3MiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiUnVsZSIsImZyb21FbnRyeSIsImZyb21FbnRyaWVzIiwiV2hpdGVzcGFjZVRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7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