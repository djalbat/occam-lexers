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
var _necessary = require("necessary");
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
var substring = _necessary.stringUtilities.substring;
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
                    content = substring(content, start);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5cIjtcclxuaW1wb3J0IHsgcnVsZXNGcm9tRW50cmllcywgbGV4ZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xleGVyXCI7XHJcblxyXG5jb25zdCB7IHN1YnN0cmluZyB9ID0gc3RyaW5nVXRpbGl0aWVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkluQ29tbWVudENsYXNzZXMgPSBJbkNvbW1lbnRDbGFzc2VzO1xyXG4gICAgdGhpcy5Ob3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldEluQ29tbWVudENsYXNzZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5JbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm90SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50LCBpbkNvbW1lbnQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gW107XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3QgQ2xhc3NlcyA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ob3RJbkNvbW1lbnRDbGFzc2VzO1xyXG5cclxuICAgICAgQ2xhc3Nlcy5zb21lKChDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmIChDbGFzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdG9rZW4gPSBDbGFzcy5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlcy5zb21lKChydWxlKSA9PiB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGluQ29tbWVudCA9IGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCh0b2tlbiwgaW5Db21tZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IHN1YnN0cmluZyhjb250ZW50LCBzdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xyXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcclxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xyXG4gICAgY29uc3QgbGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcywgZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwic3Vic3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwicnVsZXMiLCJJbkNvbW1lbnRDbGFzc2VzIiwiTm90SW5Db21tZW50Q2xhc3NlcyIsImdldFJ1bGVzIiwiZ2V0SW5Db21tZW50Q2xhc3NlcyIsImdldE5vdEluQ29tbWVudENsYXNzZXMiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJ0b2tlbiIsIkNsYXNzZXMiLCJpbkNvbW1lbnQiLCJzb21lIiwiQ2xhc3MiLCJtYXRjaCIsInNpZ25pZmljYW50VG9rZW4iLCJydWxlIiwiRXJyb3IiLCJ0b2tlbnMiLCJwdXNoIiwiaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50IiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInN0YXJ0IiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJlbnRyaWVzIiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyIiwibGV4ZXJGcm9tUnVsZXMiLCJmcm9tUnVsZXMiLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlc7eUJBRUg7cUJBQ2tCO3FCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLFlBQWNDLDBCQUFlLENBQTdCRDtBQUVPLElBQUEsQUFBTUQsNEJBQUQsQUFBTDthQUFNQSxZQUNQRyxLQUFLLEVBQUVDLGdCQUFnQixFQUFFQyxtQkFBbUI7Z0NBRHJDTDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLG1CQUFtQixHQUFHQTs7a0JBSlZMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILG1CQUFtQjtZQUNqQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztvQkFJWixJQUFJQyxRQUFRO29CQUVaLElBQU1DLFVBQVVDLFlBQ0UsTUFBS1QsZ0JBQWdCLEdBQ25CLE1BQUtDLG1CQUFtQjtvQkFFNUNPLFFBQVFFLElBQUksQ0FBQyxTQUFDQzt3QkFDWixJQUFJQSxVQUFVLE1BQU07NEJBQ2xCSixRQUFRSSxNQUFNQyxLQUFLLENBQUNOOzRCQUVwQixJQUFJQyxVQUFVLE1BQU07Z0NBQ2xCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBSUEsVUFBVSxNQUFNO3dCQUNsQixJQUFJTSxtQkFBbUI7d0JBRXZCLE1BQUtkLEtBQUssQ0FBQ1csSUFBSSxDQUFDLFNBQUNJOzRCQUNmRCxtQkFBbUJDLEtBQUtGLEtBQUssQ0FBQ047NEJBRTlCLElBQUlPLHFCQUFxQixNQUFNO2dDQUM3Qk4sUUFBUU0sa0JBQWtCLEdBQUc7Z0NBRTdCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBSU4sVUFBVSxNQUFNO3dCQUNsQixNQUFNLElBQUlRLE1BQU0sQUFBQyxnQkFBdUIsT0FBUlQsU0FBUTtvQkFDMUM7b0JBRUFVLE9BQU9DLElBQUksQ0FBQ1Y7b0JBRVpFLFlBQVlTLElBQUFBLHFDQUE4QixFQUFDWCxPQUFPRTtvQkFFbEQsSUFBTVUscUJBQXFCWixNQUFNYSxnQkFBZ0IsSUFDM0NDLFFBQVFGLG9CQUFvQixHQUFHO29CQUVyQ2IsVUFBVVQsVUFBVVMsU0FBU2U7Z0JBQy9CO29CQTlDZ0JaLFlBQUFBLGlFQUFZO2dCQUM1QixJQUFNTyxTQUFTLEVBQUU7Z0JBRWpCLE1BQU9WLFlBQVlnQix1QkFBWTtnQkE2Qy9CLE9BQU9OO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsWUFBWVosS0FBSztnQkFDdEIsSUFBTSxBQUFFYSxVQUFZYixNQUFaYSxTQUNGekIsUUFBUTBCLElBQUFBLHVCQUFnQixFQUFDRCxVQUN6QkUsUUFBUUMsSUFBQUEscUJBQWMsRUFBQ2hCLE9BQU9aO2dCQUVwQyxPQUFPMkI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVqQixLQUFLLEVBQUVaLEtBQUs7Z0JBQzNCLElBQU0yQixRQUFRQyxJQUFBQSxxQkFBYyxFQUFDaEIsT0FBT1o7Z0JBRXBDLE9BQU8yQjtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsWUFBWWxCLEtBQUssRUFBRWEsT0FBTztnQkFDL0IsSUFBTXpCLFFBQVEwQixJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFDekJFLFFBQVFDLElBQUFBLHFCQUFjLEVBQUNoQixPQUFPWjtnQkFFcEMsT0FBTzJCO1lBQ1Q7OztXQXpGbUI5QiJ9