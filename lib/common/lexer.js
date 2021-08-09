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
                    var tokenOrContent = tokensOrContents[index], tokenOrContentString = typeof tokenOrContent === "string", tokenOrContentContent = tokenOrContentString; ///
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
                while(content !== ""){
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
                        var commentToken = token; ///
                        inComment = commentToken.isInComment();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5jb25zdCB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzOyAvLy9cclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gW107XHJcblxyXG4gICAgbGV0IGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgd2hpbGUgKGVuZE9mTGluZVRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGVuZE9mTGluZVRva2VuSW5kZXggPSBlbmRPZkxpbmVUb2tlbi5nZXRJbmRleCgpLFxyXG4gICAgICAgICAgICBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGggPSBlbmRPZkxpbmVUb2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIGxlZnQgPSBlbmRPZkxpbmVUb2tlbkluZGV4LCAvLy9cclxuICAgICAgICAgICAgcmlnaHQgPSBlbmRPZkxpbmVUb2tlbkluZGV4ICsgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoLFxyXG4gICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICByaWdodENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhyaWdodCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gbGVmdENvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmlnaHRDb250ZW50OyAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSB0b2tlbk9yQ29udGVudFN0cmluZzsgLy8vXHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW10sXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IHRva2VuT3JDb250ZW50OyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gdGhpcy50b2tlbmlzZUNvbnRlbnQoY29udGVudCwgdG9rZW5zLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vucyk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdG9rZW5zTGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCkge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgbGV0IHRva2VuID0gdGhpcy5tYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoV2hpdGVzcGFjZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgIGlmICh0b2tlbkNvbW1lbnRUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgaW5Db21tZW50ID0gY29tbWVudFRva2VuLmlzSW5Db21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgYnJva2VuQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJva2VuQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBicm9rZW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIFdoaXRlc3BhY2VUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KSB8fCBEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goY29udGVudCk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUV6QixHQUFRLENBQVIsS0FBUTtBQUNHLEdBQTJDLENBQTNDLFdBQTJDO0FBQ3hDLEdBQThDLENBQTlDLGNBQThDO0FBQzFDLEdBQStDLENBQS9DLGtCQUErQztBQUMvQyxHQUFtRCxDQUFuRCxXQUFtRDtBQUMvQyxHQUF3RCxDQUF4RCxNQUF3RDtBQUN0RCxHQUEwQyxDQUExQyxVQUEwQztBQUMxQyxHQUEwRCxDQUExRCxRQUEwRDtBQUN6RCxHQUEyRCxDQUEzRCxTQUEyRDtBQUMxRCxHQUF3RCxDQUF4RCxhQUF3RDtBQUN4RCxHQUF3RCxDQUF4RCxhQUF3RDtBQUNsRCxHQUE4RCxDQUE5RCxjQUE4RDtBQUM5RCxHQUE4RCxDQUE5RCxjQUE4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxHQUFLLENBQUcsTUFBTSxHQWhCaUIsVUFBVyxnQkFnQmxDLE1BQU07SUFFTyxXQUFXO2FBQVgsV0FBVyxDQUNsQixLQUFLOzhCQURFLFdBQVc7YUFFdkIsS0FBSyxHQUFHLEtBQUs7O2lCQUZELFdBQVc7O1lBSzlCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDOzRCQUNFLEtBQUs7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixHQUFLLENBQUMseUJBQXlCLFFBQVEsa0JBQWtCLENBQUMsT0FBTyxHQUMz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