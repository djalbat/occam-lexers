"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
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
                var inComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var tokens = [];
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
exports.default = CommonLexer;
function InCommentClassesFromClass(Class) {
    var EndOfLineCommentToken = Class.EndOfLineCommentToken, EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken, InCommentClasses = [
        EndOfLineCommentToken,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQsIGluQ29tbWVudCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBJbkNvbW1lbnRDbGFzc2VzID0gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBJbkNvbW1lbnRDbGFzc2VzID0gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcywgSW5Db21tZW50Q2xhc3NlcywgTm90SW5Db21tZW50Q2xhc3Nlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcykge1xyXG4gIGNvbnN0IHsgRW5kT2ZMaW5lQ29tbWVudFRva2VuLCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSA9IENsYXNzLFxyXG4gICAgICAgIEluQ29tbWVudENsYXNzZXMgPSBbXHJcbiAgICAgICAgICBFbmRPZkxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgcmV0dXJuIEluQ29tbWVudENsYXNzZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpIHtcclxuICBjb25zdCB7IEVuZE9mTGluZVRva2VuLFxyXG4gICAgICAgICAgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sXHJcbiAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gPSBDbGFzcyxcclxuICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IFtcclxuICAgICAgICBFbmRPZkxpbmVUb2tlbixcclxuICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sXHJcbiAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlblxyXG4gICAgICBdO1xyXG5cclxuICByZXR1cm4gTm90SW5Db21tZW50Q2xhc3NlcztcclxufSJdLCJuYW1lcyI6WyJDb21tb25MZXhlciIsInJ1bGVzIiwiSW5Db21tZW50Q2xhc3NlcyIsIk5vdEluQ29tbWVudENsYXNzZXMiLCJnZXRSdWxlcyIsImdldEluQ29tbWVudENsYXNzZXMiLCJnZXROb3RJbkNvbW1lbnRDbGFzc2VzIiwidG9rZW5pc2UiLCJjb250ZW50IiwiaW5Db21tZW50IiwidG9rZW5zIiwiRU1QVFlfU1RSSU5HIiwidG9rZW4iLCJDbGFzc2VzIiwic29tZSIsIkNsYXNzIiwibWF0Y2giLCJzaWduaWZpY2FudFRva2VuIiwicnVsZSIsIkVycm9yIiwicHVzaCIsImluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdGFydCIsInN1YnN0cmluZyIsImZyb21Ob3RoaW5nIiwiZW50cmllcyIsIkluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MiLCJOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzIiwibWFwIiwiZW50cnkiLCJSdWxlIiwiZnJvbUVudHJ5IiwibGV4ZXIiLCJmcm9tUnVsZXMiLCJmcm9tRW50cmllcyIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBRUcsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0ksSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7OzhEQUxuRTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7QUFPZSxJQUFBLEFBQU1BLFdBQVcsaUJBa0cvQixBQWxHYzthQUFNQSxXQUFXLENBQ2xCQyxLQUFLLEVBQUVDLGdCQUFnQixFQUFFQyxtQkFBbUI7MENBUjFEO1FBU0ksSUFBSSxDQUFDRixLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUNDLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQzs7OztZQUdqREMsR0FBUSxFQUFSQSxVQUFRO1lDZFYsT0RjRUEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLLENBQUM7YUFDbkI7OztZQUVESSxHQUFtQixFQUFuQkEscUJBQW1CO1lDbEJyQixPRGtCRUEsU0FB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