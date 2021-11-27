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
                        var tokens = [], content = tokenOrContent, inCommentPreserving = this.tokeniseContent(content, tokens, inComment), tokensLength = tokens.length, start = index, deleteCount = 1;
                        splice(tokensOrContents, start, deleteCount, tokens);
                        tokensOrContentsLength += tokensLength - 1;
                        inComment = inCommentPreserving; ///
                        index += tokensLength - 1;
                    }
                    index++;
                }
            }
        },
        {
            key: "tokeniseContent",
            value: function tokeniseContent(content, tokens, inComment) {
                var inCommentPreserving = true;
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
                        inCommentPreserving = commentTokenInCommentPreserving; ///
                    }
                }
                return inCommentPreserving;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5pbXBvcnQgeyBTVFJJTkcsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICB3aGlsZSAoZW5kT2ZMaW5lVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5JbmRleCA9IGVuZE9mTGluZVRva2VuLmdldEluZGV4KCksXHJcbiAgICAgICAgICAgIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCA9IGVuZE9mTGluZVRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgbGVmdCA9IGVuZE9mTGluZVRva2VuSW5kZXgsIC8vL1xyXG4gICAgICAgICAgICByaWdodCA9IGVuZE9mTGluZVRva2VuSW5kZXggKyBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBsZWZ0Q29udGVudDsgIC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByaWdodENvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gU1RSSU5HKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgLy8vXHJcbiAgICAgICAgICAgICAgaW5Db21tZW50UHJlc2VydmluZyA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSxcclxuICAgICAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50UHJlc2VydmluZzsgIC8vL1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICBsZXQgaW5Db21tZW50UHJlc2VydmluZyA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW4sIC8vL1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmcgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCk7XHJcblxyXG4gICAgICAgIGluQ29tbWVudFByZXNlcnZpbmcgPSBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nOyAgLy8vXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50UHJlc2VydmluZztcclxuICB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGJyb2tlbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2tlbkNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gYnJva2VuQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImdldFJ1bGVzIiwidG9rZW5pc2UiLCJjb250ZW50IiwiZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsIm1hdGNoIiwiZW5kT2ZMaW5lVG9rZW5JbmRleCIsImdldEluZGV4IiwiZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwicHVzaCIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50IiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJFcnJvciIsInRva2VuQ29udGVudExlbmd0aCIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIiwiYnJva2VuQ29tbWVudFRva2VuIiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIm11bHRpTGluQ29tbWVudFRva2VuIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsIlJ1bGUiLCJmcm9tRW50cnkiLCJsZXhlciIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUV6QixHQUFRLENBQVIsS0FBUTtBQUNHLEdBQTJDLENBQTNDLFdBQTJDO0FBQ3hDLEdBQThDLENBQTlDLGNBQThDO0FBQzFDLEdBQStDLENBQS9DLGtCQUErQztBQUMvQyxHQUFtRCxDQUFuRCxXQUFtRDtBQUMvQyxHQUF3RCxDQUF4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