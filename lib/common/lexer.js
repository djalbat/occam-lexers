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
var _token = require("../utilities/token");
var _lexer = require("../utilities/lexer");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var CommonLexer = /*#__PURE__*/ function() {
    function CommonLexer(rules, InCommentClasses, NotInCommentClasses) {
        _class_call_check(this, CommonLexer);
        this.rules = rules;
        this.InCommentClasses = InCommentClasses;
        this.NotInCommentClasses = NotInCommentClasses;
    }
    _create_class(CommonLexer, [
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
                var _this, _loop = function() {
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
                    var naive = true, tokenContentLength = token.getContentLength(naive), start = tokenContentLength; ///
                    content = content.substring(start);
                };
                var inComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var tokens = [];
                while(content !== _constants.EMPTY_STRING)_this = this, _loop();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5cIjtcclxuaW1wb3J0IHsgcnVsZXNGcm9tRW50cmllcywgbGV4ZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xleGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQsIGluQ29tbWVudCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgbmFpdmUgPSB0cnVlLFxyXG4gICAgICAgICAgICB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKG5haXZlKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkluQ29tbWVudENsYXNzZXMiLCJOb3RJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0UnVsZXMiLCJnZXRJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0Tm90SW5Db21tZW50Q2xhc3NlcyIsInRva2VuaXNlIiwiY29udGVudCIsInRva2VuIiwiQ2xhc3NlcyIsImluQ29tbWVudCIsInNvbWUiLCJDbGFzcyIsIm1hdGNoIiwic2lnbmlmaWNhbnRUb2tlbiIsInJ1bGUiLCJFcnJvciIsInRva2VucyIsInB1c2giLCJpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQiLCJuYWl2ZSIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdGFydCIsInN1YnN0cmluZyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiZW50cmllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlciIsImxleGVyRnJvbVJ1bGVzIiwiZnJvbVJ1bGVzIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpRO3FCQUNrQjtxQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxLQUFLLEVBQUVDLGdCQUFnQixFQUFFQyxtQkFBbUI7Z0NBRHJDSDtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLG1CQUFtQixHQUFHQTs7a0JBSlZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILG1CQUFtQjtZQUNqQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztvQkFJWixJQUFJQyxRQUFRO29CQUVaLElBQU1DLFVBQVVDLFlBQ0UsTUFBS1QsZ0JBQWdCLEdBQ25CLE1BQUtDLG1CQUFtQjtvQkFFNUNPLFFBQVFFLElBQUksQ0FBQyxTQUFDQzt3QkFDWixJQUFJQSxVQUFVLE1BQU07NEJBQ2xCSixRQUFRSSxNQUFNQyxLQUFLLENBQUNOOzRCQUVwQixJQUFJQyxVQUFVLE1BQU07Z0NBQ2xCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBSUEsVUFBVSxNQUFNO3dCQUNsQixJQUFJTSxtQkFBbUI7d0JBRXZCLE1BQUtkLEtBQUssQ0FBQ1csSUFBSSxDQUFDLFNBQUNJOzRCQUNmRCxtQkFBbUJDLEtBQUtGLEtBQUssQ0FBQ047NEJBRTlCLElBQUlPLHFCQUFxQixNQUFNO2dDQUM3Qk4sUUFBUU0sa0JBQWtCLEdBQUc7Z0NBRTdCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBSU4sVUFBVSxNQUFNO3dCQUNsQixNQUFNLElBQUlRLE1BQU0sQUFBQyxnQkFBdUIsT0FBUlQsU0FBUTtvQkFDMUM7b0JBRUFVLE9BQU9DLElBQUksQ0FBQ1Y7b0JBRVpFLFlBQVlTLElBQUFBLHFDQUE4QixFQUFDWCxPQUFPRTtvQkFFbEQsSUFBTVUsUUFBUSxNQUNSQyxxQkFBcUJiLE1BQU1jLGdCQUFnQixDQUFDRixRQUM1Q0csUUFBUUYsb0JBQW9CLEdBQUc7b0JBRXJDZCxVQUFVQSxRQUFRaUIsU0FBUyxDQUFDRDtnQkFDOUI7b0JBL0NnQmIsWUFBQUEsaUVBQVk7Z0JBQzVCLElBQU1PLFNBQVMsRUFBRTtnQkFFakIsTUFBT1YsWUFBWWtCLHVCQUFZO2dCQThDL0IsT0FBT1I7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZZCxLQUFLO2dCQUN0QixJQUFNLEFBQUVlLFVBQVlmLE1BQVplLFNBQ0YzQixRQUFRNEIsSUFBQUEsdUJBQWdCLEVBQUNELFVBQ3pCRSxRQUFRQyxJQUFBQSxxQkFBYyxFQUFDbEIsT0FBT1o7Z0JBRXBDLE9BQU82QjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVW5CLEtBQUssRUFBRVosS0FBSztnQkFDM0IsSUFBTTZCLFFBQVFDLElBQUFBLHFCQUFjLEVBQUNsQixPQUFPWjtnQkFFcEMsT0FBTzZCO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZcEIsS0FBSyxFQUFFZSxPQUFPO2dCQUMvQixJQUFNM0IsUUFBUTRCLElBQUFBLHVCQUFnQixFQUFDRCxVQUN6QkUsUUFBUUMsSUFBQUEscUJBQWMsRUFBQ2xCLE9BQU9aO2dCQUVwQyxPQUFPNkI7WUFDVDs7O1dBMUZtQjlCIn0=