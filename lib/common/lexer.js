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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcclxuaW1wb3J0IFdoaXRlc3BhY2VUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L3doaXRlc3BhY2VcIjtcclxuaW1wb3J0IEJyb2tlbkNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2Jyb2tlbkNvbW1lbnRcIjtcclxuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2VuZE9mTGluZVwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuaW1wb3J0IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwvc2luZ2x5UXVvdGVkXCI7XHJcbmltcG9ydCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsL2RvdWJseVF1b3RlZFwiO1xyXG5pbXBvcnQgU2luZ2x5UXVvdGVkQnJva2VuU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvYnJva2VuU3RyaW5nTGl0ZXJhbC9zaW5nbHlRdW90ZWRcIjtcclxuaW1wb3J0IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbiBmcm9tIFwiLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2Jyb2tlblN0cmluZ0xpdGVyYWwvZG91Ymx5UXVvdGVkXCI7XHJcblxyXG5pbXBvcnQgeyBTVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMgPSB0aGlzLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzOyAvLy9cclxuXHJcbiAgICB0aGlzLnRva2VuaXNlQ29udGVudHModG9rZW5zT3JDb250ZW50cyk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50czsgIC8vL1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKSB7XHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzID0gW107XHJcblxyXG4gICAgbGV0IGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgd2hpbGUgKGVuZE9mTGluZVRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGVuZE9mTGluZVRva2VuSW5kZXggPSBlbmRPZkxpbmVUb2tlbi5nZXRJbmRleCgpLFxyXG4gICAgICAgICAgICBlbmRPZkxpbmVUb2tlbkNvbnRlbnRMZW5ndGggPSBlbmRPZkxpbmVUb2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIGxlZnQgPSBlbmRPZkxpbmVUb2tlbkluZGV4LCAvLy9cclxuICAgICAgICAgICAgcmlnaHQgPSBlbmRPZkxpbmVUb2tlbkluZGV4ICsgZW5kT2ZMaW5lVG9rZW5Db250ZW50TGVuZ3RoLFxyXG4gICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICByaWdodENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhyaWdodCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gbGVmdENvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2Vuc09yQ29udGVudHMucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmlnaHRDb250ZW50OyAvLy9cclxuXHJcbiAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4ubWF0Y2goY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kT2ZMaW5lVG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbnNPckNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50cyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudFN0cmluZyA9ICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09IFNUUklORyksXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50Q29udGVudCA9IHRva2VuT3JDb250ZW50U3RyaW5nOyAvLy9cclxuXHJcbiAgICAgIGlmICh0b2tlbk9yQ29udGVudENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQ7IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSB0aGlzLnRva2VuaXNlQ29udGVudChjb250ZW50LCB0b2tlbnMsIGluQ29tbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgdG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpbmRleCArPSB0b2tlbnNMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5pc2VDb250ZW50KGNvbnRlbnQsIHRva2VucywgaW5Db21tZW50KSB7XHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICBsZXQgdG9rZW4gPSB0aGlzLm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hXaGl0ZXNwYWNlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgIHx8IHRoaXMubWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KVxyXG4gICAgICAgICAgICAgICB8fCB0aGlzLm1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudClcclxuICAgICAgICAgICAgICAgfHwgdGhpcy5tYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZXMuc29tZSgocnVsZSkgPT4ge1xyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBjYW5ub3QgYmUgdG9rZW5pc2VkLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5Db250ZW50TGVuZ3RoOyAvLy9cclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBicm9rZW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9rZW5Db21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGJyb2tlbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFdoaXRlc3BhY2UoY29udGVudCkgeyByZXR1cm4gV2hpdGVzcGFjZVRva2VuLm1hdGNoKGNvbnRlbnQpOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gUmVndWxhckV4cHJlc3Npb25Ub2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IFNpbmdseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IERvdWJseVF1b3RlZEJyb2tlblN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChjb250ZW50KTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRXpCLEdBQVEsQ0FBUixLQUFRO0FBQ0csR0FBMkMsQ0FBM0MsV0FBMkM7QUFDeEMsR0FBOEMsQ0FBOUMsY0FBOEM7QUFDMUMsR0FBK0MsQ0FBL0Msa0JBQStDO0FBQy9DLEdBQW1ELENBQW5ELFdBQW1EO0FBQy9DLEdBQXdELENBQXhELE1BQXdEO0FBQ3RELEdBQTBDLENBQTFDLFVBQTBDO0FBQzFDLEdBQTBELENBQTFELFFBQTBEO0FBQ3pELEdBQTJELENBQTNELFNBQTJEO0FBQzFELEdBQXdELENBQXhELGFBQXdEO0FBQ3hELEdBQXdELENBQXhELGFBQXdEO0FBQ2xELEdBQThELENBQTlELGNBQThEO0FBQzlELEdBQThELENBQTlELGNBQThEO0FBRXhGLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLEdBQUssQ0FBRyxNQUFNLEdBbEJpQixVQUFXLGdCQWtCbEMsTUFBTTtJQUVPLFdBQVc7YUFBWCxXQUFXLENBQ2xCLEtBQUs7OEJBREUsV0FBVzthQUV2QixLQUFLLEdBQUcsS0FBSzs7aUJBRkQsV0FBVzs7WUFLOUIsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxHQUFHLENBQUM7NEJBQ0UsS0FBSztZQUNuQixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENB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