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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2goY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IG1hdGNoZXM7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gYCR7dGhpcy5yZWd1bGFyRXhwcmVzc2lvbn1gO1xuXG4gICAgZW50cnlbdGhpcy50eXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4oVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBUb2tlbixcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVt0eXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/IFwidVwiIDogXCJcIixcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdXsvLCAvLy9cbiAgICAgICAgaW5kZXggPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4uc2VhcmNoKHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHVuaWNvZGUgPSAoaW5kZXggIT09IC0xKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsIlJ1bGUiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRUeXBlIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsImluZGV4IiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJhc0VudHJ5IiwiZW50cnkiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmcm9tVG9rZW4iLCJUb2tlbiIsInJ1bGUiLCJmcm9tRW50cnkiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsImZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwidW5pY29kZSIsImlzVW5pY29kZSIsImZsYWdzIiwicmVnRXhwIiwiUmVnRXhwIiwidW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUViLEdBQTZCLENBQTdCLFlBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBR0EsS0FBSyxHQUprQixVQUFXLGdCQUlsQ0EsS0FBSztJQUVRQyxJQUFJLGlCQUFWLFFBQVE7YUFBRkEsSUFBSSxDQUNYQyxJQUFJLEVBQUVDLGlCQUFpQjs4QkFEaEJGLElBQUk7UUFFckIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7UUFDaEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0EsaUJBQWlCOztpQkFIekJGLElBQUk7O1lBTXZCRyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ0YsSUFBSTtZQUNsQixDQUFDOzs7WUFFREcsR0FBb0IsRUFBcEJBLENBQW9CO21CQUFwQkEsUUFBUSxDQUFSQSxvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDRixpQkFBaUI7WUFDL0IsQ0FBQzs7O1lBRURHLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLEdBQUcsQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTtnQkFFM0IsR0FBSyxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQ0gsaUJBQWlCO2dCQUVwRCxFQUFFLEVBQUVNLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsR0FBSyxDQUFHQyxLQUFLLEdBQUtELE9BQU8sQ0FBakJDLEtBQUs7b0JBRWIsRUFBRSxFQUFFQSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2hCLEdBQUssQ0FBQ0MsVUFBVSxHQUFH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