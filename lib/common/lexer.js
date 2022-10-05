"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommonLexer;
    }
});
var _constants = require("../constants");
var _lexer = require("../utilities/lexer");
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
                var _this = this, _loop = function() {
                    var token = null;
                    var Classes = inComment ? _this.InCommentClasses : _this.NotInCommentClasses;
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
                        _this.rules.some(function(rule) {
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
                    inComment = (0, _token.inCommentFromTokenAndInComment)(token, inComment);
                    var tokenContentLength = token.getContentLength(), start = tokenContentLength; ///
                    content = content.substring(start);
                };
                var inComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var tokens = [];
                while(content !== _constants.EMPTY_STRING)_loop();
                return tokens;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var entries = Class.entries, rules = (0, _lexer.rulesFromEntries)(entries), lexer = (0, _lexer.lexerFromRules)(Class, rules);
                return lexer;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var lexer = (0, _lexer.lexerFromRules)(Class, rules);
                return lexer;
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(Class, entries) {
                var rules = (0, _lexer.rulesFromEntries)(entries), lexer = (0, _lexer.lexerFromRules)(Class, rules);
                return lexer;
            }
        }
    ]);
    return CommonLexer;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHJ1bGVzRnJvbUVudHJpZXMsIGxleGVyRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9sZXhlclwiO1xyXG5pbXBvcnQgeyBpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQsIGluQ29tbWVudCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICBzdGFydCA9IHRva2VuQ29udGVudExlbmd0aDsgLy8vXHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcclxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ2xhc3MsXHJcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGNvbnN0IGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkluQ29tbWVudENsYXNzZXMiLCJOb3RJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0UnVsZXMiLCJnZXRJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0Tm90SW5Db21tZW50Q2xhc3NlcyIsInRva2VuaXNlIiwiY29udGVudCIsInRva2VuIiwiQ2xhc3NlcyIsImluQ29tbWVudCIsInNvbWUiLCJDbGFzcyIsIm1hdGNoIiwic2lnbmlmaWNhbnRUb2tlbiIsInJ1bGUiLCJFcnJvciIsInRva2VucyIsInB1c2giLCJpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQiLCJ0b2tlbkNvbnRlbnRMZW5ndGgiLCJnZXRDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJzdWJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsImVudHJpZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwibGV4ZXIiLCJsZXhlckZyb21SdWxlcyIsImZyb21SdWxlcyIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKUTtxQkFDb0I7cUJBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsS0FBSyxFQUFFQyxnQkFBZ0IsRUFBRUMsbUJBQW1COzhCQURyQ0g7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxtQkFBbUIsR0FBR0E7O2lCQUpWSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUI7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDSCxtQkFBbUI7WUFDakM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTyxFQUFxQjtxREFHRjtvQkFDL0IsSUFBSUMsUUFBUSxJQUFJO29CQUVoQixJQUFNQyxVQUFVQyxZQUNFLE1BQUtULGdCQUFnQixHQUNuQixNQUFLQyxtQkFBbUI7b0JBRTVDTyxRQUFRRSxJQUFJLENBQUMsU0FBQ0MsT0FBVTt3QkFDdEIsSUFBSUEsVUFBVSxJQUFJLEVBQUU7NEJBQ2xCSixRQUFRSSxNQUFNQyxLQUFLLENBQUNOOzRCQUVwQixJQUFJQyxVQUFVLElBQUksRUFBRTtnQ0FDbEIsT0FBTyxJQUFJOzRCQUNiLENBQUM7d0JBQ0gsQ0FBQztvQkFDSDtvQkFFQSxJQUFJQSxVQUFVLElBQUksRUFBRTt3QkFDbEIsSUFBSU0sbUJBQW1CLElBQUk7d0JBRTNCLE1BQUtkLEtBQUssQ0FBQ1csSUFBSSxDQUFDLFNBQUNJLE1BQVM7NEJBQ3hCRCxtQkFBbUJDLEtBQUtGLEtBQUssQ0FBQ047NEJBRTlCLElBQUlPLHFCQUFxQixJQUFJLEVBQUU7Z0NBQzdCTixRQUFRTSxrQkFBa0IsR0FBRztnQ0FFN0IsT0FBTyxJQUFJOzRCQUNiLENBQUM7d0JBQ0g7b0JBQ0YsQ0FBQztvQkFFRCxJQUFJTixVQUFVLElBQUksRUFBRTt3QkFDbEIsTUFBTSxJQUFJUSxNQUFNLEFBQUMsZ0JBQXVCLE9BQVJULFNBQVEsMkJBQXlCO29CQUNuRSxDQUFDO29CQUVEVSxPQUFPQyxJQUFJLENBQUNWO29CQUVaRSxZQUFZUyxJQUFBQSxxQ0FBOEIsRUFBQ1gsT0FBT0U7b0JBRWxELElBQU1VLHFCQUFxQlosTUFBTWEsZ0JBQWdCLElBQzNDQyxRQUFRRixvQkFBb0IsR0FBRztvQkFFckNiLFVBQVVBLFFBQVFnQixTQUFTLENBQUNEO2dCQUM5QjtvQkE5Q2dCWixZQUFBQSxpRUFBWSxLQUFLO2dCQUNqQyxJQUFNTyxTQUFTLEVBQUU7Z0JBRWpCLE1BQU9WLFlBQVlpQix1QkFBWTtnQkE2Qy9CLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWWIsS0FBSyxFQUFFO2dCQUN4QixJQUFNLEFBQUVjLFVBQVlkLE1BQVpjLFNBQ0YxQixRQUFRMkIsSUFBQUEsdUJBQWdCLEVBQUNELFVBQ3pCRSxRQUFRQyxJQUFBQSxxQkFBYyxFQUFDakIsT0FBT1o7Z0JBRXBDLE9BQU80QjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVWxCLEtBQUssRUFBRVosS0FBSyxFQUFFO2dCQUM3QixJQUFNNEIsUUFBUUMsSUFBQUEscUJBQWMsRUFBQ2pCLE9BQU9aO2dCQUVwQyxPQUFPNEI7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVluQixLQUFLLEVBQUVjLE9BQU8sRUFBRTtnQkFDakMsSUFBTTFCLFFBQVEyQixJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFDekJFLFFBQVFDLElBQUFBLHFCQUFjLEVBQUNqQixPQUFPWjtnQkFFcEMsT0FBTzRCO1lBQ1Q7OztXQXpGbUI3QiJ9