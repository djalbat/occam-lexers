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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJSdWxlIiwiV2hpdGVzcGFjZVRva2VuIiwiQnJva2VuQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJTaW5nbHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRCcm9rZW5TdHJpbmdMaXRlcmFsVG9rZW4iLCJTVFJJTkciLCJzcGxpY2UiLCJDb21tb25MZXhlciIsImNvbnN0cnVjdG9yIiwicnVsZXMiLCJnZXRSdWxlcyIsInRva2VuaXNlIiwiY29udGVudCIsImVuZE9mTGluZVRva2Vuc09yQ29udGVudHMiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2VDb250ZW50cyIsInRva2VucyIsIkVuZE9mTGluZVRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJtYXRjaCIsImVuZE9mTGluZVRva2VuSW5kZXgiLCJnZXRJbmRleCIsImVuZE9mTGluZVRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJsZWZ0IiwicmlnaHQiLCJsZWZ0Q29udGVudCIsInN1YnN0cmluZyIsInJpZ2h0Q29udGVudCIsInB1c2giLCJpbkNvbW1lbnQiLCJpbmRleCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbk9yQ29udGVudCIsInRva2VuT3JDb250ZW50U3RyaW5nIiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwidG9rZW5pc2VDb250ZW50IiwidG9rZW5zTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInRva2VuIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50IiwibWF0Y2hXaGl0ZXNwYWNlIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInJ1bGUiLCJFcnJvciIsInRva2VuQ29udGVudExlbmd0aCIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJpc0luQ29tbWVudCIsImJyb2tlbkNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtdWx0aUxpbkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJmcm9tRW50cnkiLCJsZXhlciIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUV6QixHQUFRLENBQVIsS0FBUTtBQUNHLEdBQTJDLENBQTNDLFdBQTJDO0FBQ3hDLEdBQThDLENBQTlDLGNBQThDO0FBQzFDLEdBQStDLENBQS9DLGtCQUErQztBQUMvQyxHQUFtRCxDQUFuRCxXQUFtRDtBQUMvQyxHQUF3RCxDQUF4RCxNQUF3RDtBQUN0RCxHQUEwQyxDQUExQyxVQUEwQztBQUMxQyxHQUEwRCxDQUExRCxRQUEwRDtBQUN6RCxHQUEyRCxDQUEzRCxTQUEyRDtBQUMxRCxHQUF3RCxDQUF4RCxhQUF3RDtBQUN4RCxHQUF3RCxDQUF4RCxhQUF3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