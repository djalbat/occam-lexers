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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkluQ29tbWVudENsYXNzZXMgPSBJbkNvbW1lbnRDbGFzc2VzO1xyXG4gICAgdGhpcy5Ob3RJbkNvbW1lbnRDbGFzc2VzID0gTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldEluQ29tbWVudENsYXNzZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5JbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm90SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICB0b2tlbmlzZShjb250ZW50LCBpbkNvbW1lbnQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gW107XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xyXG4gICAgICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3QgQ2xhc3NlcyA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ob3RJbkNvbW1lbnRDbGFzc2VzO1xyXG5cclxuICAgICAgQ2xhc3Nlcy5zb21lKChDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmIChDbGFzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdG9rZW4gPSBDbGFzcy5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlcy5zb21lKChydWxlKSA9PiB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIGNhbm5vdCBiZSB0b2tlbmlzZWQuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgIGluQ29tbWVudCA9IGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCh0b2tlbiwgaW5Db21tZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IFJ1bGUuZnJvbUVudHJ5KGVudHJ5KSksXHJcbiAgICAgICAgICBsZXhlciA9IG5ldyBDbGFzcyhydWxlcywgSW5Db21tZW50Q2xhc3NlcywgTm90SW5Db21tZW50Q2xhc3Nlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcclxuICAgIGNvbnN0IEluQ29tbWVudENsYXNzZXMgPSBJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIE5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSxcclxuICAgICAgICAgIGxleGVyID0gbmV3IENsYXNzKHJ1bGVzLCBJbkNvbW1lbnRDbGFzc2VzLCBOb3RJbkNvbW1lbnRDbGFzc2VzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBSdWxlLmZyb21FbnRyeShlbnRyeSkpLFxyXG4gICAgICAgICAgSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgTm90SW5Db21tZW50Q2xhc3NlcyA9IE5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MoQ2xhc3MpIHtcclxuICBjb25zdCB7IEVuZE9mTGluZUNvbW1lbnRUb2tlbiwgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gPSBDbGFzcyxcclxuICAgICAgICBJbkNvbW1lbnRDbGFzc2VzID0gW1xyXG4gICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlblxyXG4gICAgICAgIF07XHJcblxyXG4gIHJldHVybiBJbkNvbW1lbnRDbGFzc2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOb3RJbkNvbW1lbnRDbGFzc2VzRnJvbUNsYXNzKENsYXNzKSB7XHJcbiAgY29uc3QgeyBFbmRPZkxpbmVUb2tlbixcclxuICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxyXG4gICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9ID0gQ2xhc3MsXHJcbiAgICAgIE5vdEluQ29tbWVudENsYXNzZXMgPSBbXHJcbiAgICAgICAgRW5kT2ZMaW5lVG9rZW4sXHJcbiAgICAgICAgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VuLFxyXG4gICAgICAgIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW5cclxuICAgICAgXTtcclxuXHJcbiAgcmV0dXJuIE5vdEluQ29tbWVudENsYXNzZXM7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFUgPSBcInVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwicnVsZXMiLCJJbkNvbW1lbnRDbGFzc2VzIiwiTm90SW5Db21tZW50Q2xhc3NlcyIsImdldFJ1bGVzIiwiZ2V0SW5Db21tZW50Q2xhc3NlcyIsImdldE5vdEluQ29tbWVudENsYXNzZXMiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJpbkNvbW1lbnQiLCJ0b2tlbnMiLCJFTVBUWV9TVFJJTkciLCJ0b2tlbiIsIkNsYXNzZXMiLCJzb21lIiwiQ2xhc3MiLCJtYXRjaCIsInNpZ25pZmljYW50VG9rZW4iLCJydWxlIiwiRXJyb3IiLCJwdXNoIiwiaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50IiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJlbnRyaWVzIiwiSW5Db21tZW50Q2xhc3Nlc0Zyb21DbGFzcyIsIk5vdEluQ29tbWVudENsYXNzZXNGcm9tQ2xhc3MiLCJtYXAiLCJlbnRyeSIsIlJ1bGUiLCJmcm9tRW50cnkiLCJsZXhlciIsImZyb21SdWxlcyIsImZyb21FbnRyaWVzIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWlCLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7QUFFRyxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDSSxJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7OERBTG5FO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7OztBQU9lLElBQUEsQUFBTUEsV0FBVyxpQkFrRy9CLEFBbEdjO2FBQU1BLFdBQVcsQ0FDbEJDLEtBQUssRUFBRUMsZ0JBQWdCLEVBQUVDLG1CQUFtQjswQ0FSMUQ7UUFTSSxJQUFJLENBQUNGLEtBQUssR0FBR0EsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDOzs7O1lBR2pEQyxHQUFRLEVBQVJBLFVBQVE7WUNkVixP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