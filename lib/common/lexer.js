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
    var EndOfLineToken = Class.EndOfLineToken, EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken, InCommentClasses = [
        EndOfLineToken,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQsIGluQ29tbWVudCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBJbkNvbW1lbnRDbGFzc2VzID0gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBydWxlcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gUnVsZS5mcm9tRW50cnkoZW50cnkpKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBJbkNvbW1lbnRDbGFzc2VzID0gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBOb3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcyksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcywgSW5Db21tZW50Q2xhc3NlcywgTm90SW5Db21tZW50Q2xhc3Nlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyhDbGFzcykge1xyXG4gIGNvbnN0IHsgRW5kT2ZMaW5lVG9rZW4sIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiB9ID0gQ2xhc3MsXHJcbiAgICAgICAgSW5Db21tZW50Q2xhc3NlcyA9IFtcclxuICAgICAgICAgIEVuZE9mTGluZVRva2VuLFxyXG4gICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlblxyXG4gICAgICAgIF07XHJcblxyXG4gIHJldHVybiBJbkNvbW1lbnRDbGFzc2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSB7XHJcbiAgY29uc3QgeyBFbmRPZkxpbmVUb2tlbixcclxuICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxyXG4gICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9ID0gQ2xhc3MsXHJcbiAgICAgIE5vdEluQ29tbWVudENsYXNzZXMgPSBbXHJcbiAgICAgICAgRW5kT2ZMaW5lVG9rZW4sXHJcbiAgICAgICAgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxyXG4gICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5cclxuICAgICAgXTtcclxuXHJcbiAgcmV0dXJuIE5vdEluQ29tbWVudENsYXNzZXM7XHJcbn0iXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkluQ29tbWVudENsYXNzZXMiLCJOb3RJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0UnVsZXMiLCJnZXRJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0Tm90SW5Db21tZW50Q2xhc3NlcyIsInRva2VuaXNlIiwiY29udGVudCIsImluQ29tbWVudCIsInRva2VucyIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiQ2xhc3NlcyIsInNvbWUiLCJDbGFzcyIsIm1hdGNoIiwic2lnbmlmaWNhbnRUb2tlbiIsInJ1bGUiLCJFcnJvciIsInB1c2giLCJpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJzdWJzdHJpbmciLCJmcm9tTm90aGluZyIsImVudHJpZXMiLCJJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzIiwiTm90SW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyIsIm1hcCIsImVudHJ5IiwiUnVsZSIsImZyb21FbnRyeSIsImxleGVyIiwiZnJvbVJ1bGVzIiwiZnJvbUVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFFRyxHQUFjLENBQWQsVUFBYztBQUNJLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxXQUFXLGlCQUFqQixRQUFRO2FBQUZBLFdBQVcsQ0FDbEJDLEtBQUssRUFBRUMsZ0JBQWdCLEVBQUVDLG1CQUFtQjs7UUFDdEQsSUFBSSxDQUFDRixLQUFLLEdBQUdBLEtBQUs7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0EsZ0JBQWdCO1FBQ3hDLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBLG1CQUFtQjs7OztZQUdoREMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUNILEtBQUs7WUFDbkIsQ0FBQzs7O1lBRURJLEdBQW1CLEVBQW5CQSxDQUFtQjttQkFBbkJBLFFBQVEsQ0FBUkEsbUJBQW1CLEdBQUcsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCLENBQUM7OztZQUVESSxHQUFzQixFQUF0QkEsQ0FBc0I7bUJBQXRCQSxRQUFRLENBQVJBLHNCQUFzQixHQUFHLENBQUM7Z0JBQ3hCLE1B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