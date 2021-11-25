"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _rule = _interopRequireDefault(require("./rule"));
var _whitespace = _interopRequireDefault(require("../common/token/nonSignificant/whitespace"));
var _brokenComment = _interopRequireDefault(require("../common/token/nonSignificant/brokenComment"));
var _regularExpression = _interopRequireDefault(require("../common/token/significant/regularExpression"));
var _singleLine = _interopRequireDefault(require("../common/token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/endOf"));
var _endOfLine = _interopRequireDefault(require("../common/token/nonSignificant/endOfLine"));
var _startOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("../common/token/nonSignificant/comment/multiLine/middleOf"));
var _singlyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/singlyQuoted"));
var _doublyQuoted = _interopRequireDefault(require("../common/token/significant/stringLiteral/doublyQuoted"));
var _singlyQuoted1 = _interopRequireDefault(require("../common/token/significant/brokenStringLiteral/singlyQuoted"));
var _doublyQuoted1 = _interopRequireDefault(require("../common/token/significant/brokenStringLiteral/doublyQuoted"));
var _constants = require("../constants");
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
    function CommonLexer(rules) {
        _classCallCheck(this, CommonLexer);
        this.rules = rules;
    }
    _createClass(CommonLexer, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
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
            value: function tokeniseEndOfLines(content, param) {
                var EndOfLineToken = param === void 0 ? _endOfLine.default : param;
                var endOfLineTokensOrContents = [];
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
                    var token = this.matchMultiLineCommentInComment(content, inComment) || this.matchWhitespace(content) || this.matchMultiLineCommentNotInComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchBrokenComment(content, inComment) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content);
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
                    var tokenContentLength = token.getContentLength(), start = tokenContentLength; ///
                    content = content = content.substring(start);
                    var tokenCommentToken = token.isCommentToken();
                    if (tokenCommentToken) {
                        var commentToken = token, commentTokenInCommentPreserving = commentToken.isInCommentPreserving();
                        inComment = commentTokenInCommentPreserving; ///
                    }
                }
                return inComment;
            }
        },
        {
            key: "matchBrokenComment",
            value: function matchBrokenComment(content, inComment) {
                var brokenCommentToken = inComment ? null : _brokenComment.default.match(content);
                return brokenCommentToken;
            }
        },
        {
            key: "matchSingleLineComment",
            value: function matchSingleLineComment(content, inComment) {
                var singleLineCommentToken = inComment ? null : _singleLine.default.match(content);
                return singleLineCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentInComment",
            value: function matchMultiLineCommentInComment(content, inComment) {
                var multiLinCommentToken = inComment ? _endOf.default.match(content) || _middleOf.default.match(content) : null;
                return multiLinCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentNotInComment",
            value: function matchMultiLineCommentNotInComment(content, inComment) {
                var multiLinCommentToken = inComment ? null : _startOf.default.match(content);
                return multiLinCommentToken;
            }
        },
        {
            key: "matchWhitespace",
            value: function matchWhitespace(content) {
                return _whitespace.default.match(content);
            }
        },
        {
            key: "matchRegularExpression",
            value: function matchRegularExpression(content) {
                return _regularExpression.default.match(content);
            }
        },
        {
            key: "matchSinglyQuotedStringLiteral",
            value: function matchSinglyQuotedStringLiteral(content) {
                return _singlyQuoted.default.match(content) || _singlyQuoted1.default.match(content);
            }
        },
        {
            key: "matchDoublyQuotedStringLiteral",
            value: function matchDoublyQuotedStringLiteral(content) {
                return _doublyQuoted.default.match(content) || _doublyQuoted1.default.match(content);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var entries = Class.entries, rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), lexer = new Class(rules);
                return lexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                var rules = entries.map(function(entry) {
                    return _rule.default.fromEntry(entry);
                }), lexer = new Class(rules);
                return lexer;
            }
        }
    ]);
    return CommonLexer;
}();
exports.default = CommonLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5pbXBvcnQgeyBTVFJJTkcsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICB3aGlsZSAoZW5kT2ZMaW5lVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5JbmRleCA9IGVuZE9mTGluZVRva2VuLmdldEluZGV4KCksXHJcbiAgICAgICAgICAgIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCA9IGVuZE9mTGluZVRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgbGVmdCA9IGVuZE9mTGluZVRva2VuSW5kZXgsIC8vL1xyXG4gICAgICAgICAgICByaWdodCA9IGVuZE9mTGluZVRva2VuSW5kZXggKyBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBsZWZ0Q29udGVudDsgIC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByaWdodENvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gU1RSSU5HKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudDsgLy8vXHJcblxyXG4gICAgICAgIGluQ29tbWVudCA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXHJcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xyXG5cclxuICAgICAgICBzcGxpY2UodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIGRlbGV0ZUNvdW50LCB0b2tlbnMpO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGluZGV4ICs9IHRva2Vuc0xlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpIHtcclxuICAgIHdoaWxlIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbkNvbW1lbnRUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRva2VuLCAvLy9cclxuICAgICAgICAgICAgICBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nID0gY29tbWVudFRva2VuLmlzSW5Db21tZW50UHJlc2VydmluZygpO1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nOyAgLy8vXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzcGxpY2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsInRva2VuaXNlQ29udGVudCIsInRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJ0b2tlbiIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoV2hpdGVzcGFjZSIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwibWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwiRXJyb3IiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyIsImlzSW5Db21tZW50UHJlc2VydmluZyIsImJyb2tlbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJSdWxlIiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7QUFFekIsR0FBUSxDQUFSLEtBQVE7QUFDRyxHQUEyQyxDQUEzQyxXQUEyQztBQUN4QyxHQUE4QyxDQUE5QyxjQUE4QztBQUMxQyxHQUErQyxDQUEvQyxrQkFBK0M7QUFDL0MsR0FBbUQsQ0FBbkQsV0FBbUQ7QUFDL0MsR0FBd0QsQ0FBeEQsTUFBd0Q7QUFDdEQsR0FBMEMsQ0FBMUMsVUFBMEM7QUFDMUMsR0FBMEQsQ0FBMUQsUUFBMEQ7QUFDekQsR0FBMkQsQ0FBM0QsU0FBMkQ7QUFDMUQsR0FBd0QsQ0FBeEQsYUFBd0Q7QUFDeEQsR0FBd0QsQ0FBeEQsYUFBd0Q7QUFDbEQsR0FBOEQsQ0FBOUQs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