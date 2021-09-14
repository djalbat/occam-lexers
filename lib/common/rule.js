"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../common/token/significant"));
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
var first = _necessary.arrayUtilities.first;
var Rule = /*#__PURE__*/ function() {
    function Rule(type, regularExpression) {
        _classCallCheck(this, Rule);
        this.type = type;
        this.regularExpression = regularExpression;
    }
    _createClass(Rule, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                return this.regularExpression;
            }
        },
        {
            key: "match",
            value: function match(content) {
                var significantToken = null;
                var matches = content.match(this.regularExpression);
                if (matches !== null) {
                    var index = matches.index;
                    if (index === 0) {
                        var firstMatch = first(matches);
                        content = firstMatch; ///
                        var contentLength = content.length;
                        if (contentLength > 0) {
                            significantToken = _significant.default.fromContentAndType(content, this.type);
                        }
                    }
                }
                return significantToken;
            }
        },
        {
            key: "asEntry",
            value: function asEntry() {
                var entry = {
                }, regularExpressionPattern = "".concat(this.regularExpression);
                entry[this.type] = regularExpressionPattern;
                return entry;
            }
        }
    ], [
        {
            key: "fromToken",
            value: function fromToken(Token) {
                var type = Token.type, regularExpression = Token.regularExpression, rule = new Rule(type, regularExpression);
                return rule;
            }
        },
        {
            key: "fromEntry",
            value: function fromEntry(entry) {
                var entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], rule = Rule.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
                return rule;
            }
        },
        {
            key: "fromTypeAndRegularExpressionPattern",
            value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
                var unicode = isUnicode(regularExpressionPattern), flags = unicode ? "u" : "", regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule(type, regularExpression);
                return rule;
            }
        }
    ]);
    return Rule;
}();
exports.default = Rule;
function isUnicode(regularExpressionPattern) {
    var unicodeRegularExpression = /u{/, index = regularExpressionPattern.search(unicodeRegularExpression), unicode = index !== -1;
    return unicode;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gYCR7dGhpcy5yZWd1bGFyRXhwcmVzc2lvbn1gO1xuXG4gICAgZW50cnlbdGhpcy50eXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4oVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBUb2tlbixcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVt0eXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/IFwidVwiIDogXCJcIixcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdXsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUViLEdBQTZCLENBQTdCLFlBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBRyxLQUFLLEdBSmtCLFVBQVcsZ0JBSWxDLEtBQUs7SUFFUSxJQUFJO2FBQUosSUFBSSxDQUNYLElBQUksRUFBRSxpQkFBaUI7OEJBRGhCLElBQUk7YUFFaEIsSUFBSSxHQUFHLElBQUk7YUFDWCxpQkFBaUIsR0FBRyxpQkFBaUI7O2lCQUh6QixJQUFJOztZQU12QixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLEdBQUcsQ0FBQzs0QkFDRyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CLEdBQUcsQ0FBQzs0QkFD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