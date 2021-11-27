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
                        inComment = inComment && inCommentPreserving; ///
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
                    inComment = inComment && inCommentPreserving; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5pbXBvcnQgeyBTVFJJTkcsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNUb2tlbkluQ29tbWVudFByZXNlcnZpbmdUb2tlbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5cIjtcclxuXHJcbmNvbnN0IHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2UoY29udGVudCkge1xyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cyA9IHRoaXMudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7IC8vL1xyXG5cclxuICAgIHRoaXMudG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSBbXTtcclxuXHJcbiAgICBsZXQgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICB3aGlsZSAoZW5kT2ZMaW5lVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW5JbmRleCA9IGVuZE9mTGluZVRva2VuLmdldEluZGV4KCksXHJcbiAgICAgICAgICAgIGVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCA9IGVuZE9mTGluZVRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgbGVmdCA9IGVuZE9mTGluZVRva2VuSW5kZXgsIC8vL1xyXG4gICAgICAgICAgICByaWdodCA9IGVuZE9mTGluZVRva2VuSW5kZXggKyBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBsZWZ0Q29udGVudDsgIC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByaWdodENvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUNvbnRlbnRzKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tpbmRleF0sXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50U3RyaW5nID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gU1RSSU5HKSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gdG9rZW5PckNvbnRlbnRTdHJpbmc7IC8vL1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgLy8vXHJcbiAgICAgICAgICAgICAgaW5Db21tZW50UHJlc2VydmluZyA9IHRoaXMudG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSxcclxuICAgICAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50ICYmIGluQ29tbWVudFByZXNlcnZpbmc7ICAvLy9cclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgbGV0IGluQ29tbWVudFByZXNlcnZpbmcgPSB0cnVlO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyA9IGlzVG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4odG9rZW4pLFxyXG4gICAgICAgICAgICB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGluQ29tbWVudFByZXNlcnZpbmcgPSBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nOyAgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50ICYmIGluQ29tbWVudFByZXNlcnZpbmc7IC8vL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnRQcmVzZXJ2aW5nO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzcGxpY2UiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwidG9rZW5zT3JDb250ZW50cyIsInRva2VuaXNlQ29udGVudHMiLCJ0b2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsImVuZE9mTGluZVRva2VuIiwibWF0Y2giLCJlbmRPZkxpbmVUb2tlbkluZGV4IiwiZ2V0SW5kZXgiLCJlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJwdXNoIiwiaW5Db21tZW50IiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudFN0cmluZyIsInRva2VuT3JDb250ZW50Q29udGVudCIsImluQ29tbWVudFByZXNlcnZpbmciLCJ0b2tlbmlzZUNvbnRlbnQiLCJ0b2tlbnNMZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwidG9rZW4iLCJtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQiLCJtYXRjaFdoaXRlc3BhY2UiLCJtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQiLCJtYXRjaFNpbmdsZUxpbmVDb21tZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwibWF0Y2hSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsIm1hdGNoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsInNpZ25pZmljYW50VG9rZW4iLCJzb21lIiwicnVsZSIsIkVycm9yIiwiY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyIsInRva2VuQ29udGVudExlbmd0aCIsImJyb2tlbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJSdWxlIiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7QUFFekIsR0FBUSxDQUFSLEtBQVE7QUFDRyxHQUEyQyxDQUEzQyxXQUEyQztBQUN4QyxHQUE4QyxDQUE5QyxjQUE4QztBQUMxQyxHQUErQyxDQUEvQyxrQkFBK0M7QUFDL0MsR0FBbUQsQ0FBbkQsV0FBbUQ7QUFDL0MsR0FBd0QsQ0FBeEQsTUFBd0Q7QUFDdEQsR0FBMEMsQ0FBMUMsVUFBMEM7QUFDMUMsR0FBMEQsQ0FBMUQsUUFBMEQ7QUFDekQsR0FBMkQsQ0FBM0QsU0FBMkQ7QUFDMUQsR0FBd0Qs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