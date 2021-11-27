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
                    var commentTokenInCommentPreserving = (0, _token).isTokenInCommentPreservingToken(token), tokenContentLength = token.getContentLength(), start = tokenContentLength; ///
                    inCommentPreserving = commentTokenInCommentPreserving; ///
                    content = content.substring(start);
                    inComment = inCommentPreserving; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5pbXBvcnQgeyBTVFJJTkcsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNUb2tlbkluQ29tbWVudFByZXNlcnZpbmdUb2tlbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5cIjtcclxuXHJcbmNvbnN0IHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICB3aGlsZSAoZW5kT2ZMaW5lVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5JbmRleCA9IGVuZE9mTGluZVRva2VuLmdldEluZGV4KCksXHJcbiAgICAgICAgICAgIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCA9IGVuZE9mTGluZVRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgbGVmdCA9IGVuZE9mTGluZVRva2VuSW5kZXgsIC8vL1xyXG4gICAgICAgICAgICByaWdodCA9IGVuZE9mTGluZVRva2VuSW5kZXggKyBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBsZWZ0Q29udGVudDsgIC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByaWdodENvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gU1RSSU5HKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgLy8vXHJcbiAgICAgICAgICAgICAgaW5Db21tZW50UHJlc2VydmluZyA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSxcclxuICAgICAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50UHJlc2VydmluZzsgIC8vL1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICBsZXQgaW5Db21tZW50UHJlc2VydmluZyA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nID0gaXNUb2tlbkluQ29tbWVudFByZXNlcnZpbmdUb2tlbih0b2tlbiksXHJcbiAgICAgICAgICAgIHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgaW5Db21tZW50UHJlc2VydmluZyA9IGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmc7ICAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCk7XHJcblxyXG4gICAgICBpbkNvbW1lbnQgPSBpbkNvbW1lbnRQcmVzZXJ2aW5nOyAvLy9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50UHJlc2VydmluZztcclxuICB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGJyb2tlbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2tlbkNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gYnJva2VuQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBXaGl0ZXNwYWNlVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBSZWd1bGFyRXhwcmVzc2lvblRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCkgfHwgRG91Ymx5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3BsaWNlIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImdldFJ1bGVzIiwidG9rZW5pc2UiLCJjb250ZW50IiwiZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlRW5kT2ZMaW5lcyIsInRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUNvbnRlbnRzIiwidG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsIm1hdGNoIiwiZW5kT2ZMaW5lVG9rZW5JbmRleCIsImdldEluZGV4IiwiZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwicHVzaCIsImluQ29tbWVudCIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRTdHJpbmciLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJpbkNvbW1lbnRQcmVzZXJ2aW5nIiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50IiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJFcnJvciIsImNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmciLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJicm9rZW5Db21tZW50VG9rZW4iLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiUnVsZSIsImZyb21FbnRyeSIsImxleGVyIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRXpCLEdBQVEsQ0FBUixLQUFRO0FBQ0csR0FBMkMsQ0FBM0MsV0FBMkM7QUFDeEMsR0FBOEMsQ0FBOUMsY0FBOEM7QUFDMUMsR0FBK0MsQ0FBL0Msa0JBQStDO0FBQy9DLEdBQW1ELENBQW5ELFdBQW1EO0FBQy9DLEdBQXdELENBQXhELE1BQXdEO0FBQ3RELEdBQTBDLENBQTFDLFVBQTBDO0FBQzFDLEdBQTBELENBQTFELFFBQTBEO0FBQ3pELEdBQTJELENBQTNELFNBQTJEO0FBQzFELEdBQXdELENBQXhELGFBQXdEO0FBQ3hELEdBQXdELENB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