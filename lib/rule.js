"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("./token/significant"));
var _constants = require("./constants");
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
                var entry = {}, regularExpressionPattern = "".concat(this.regularExpression);
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
                var unicode = isUnicode(regularExpressionPattern), flags = unicode ? _constants.U : _constants.EMPTY_STRING, regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule(type, regularExpression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IFUsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0aGlzLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGFzRW50cnkoKSB7XG4gICAgY29uc3QgZW50cnkgPSB7fSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBgJHt0aGlzLnJlZ3VsYXJFeHByZXNzaW9ufWA7XG5cbiAgICBlbnRyeVt0aGlzLnR5cGVdID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihUb2tlbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IFRva2VuLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCB1bmljb2RlID0gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgZmxhZ3MgPSB1bmljb2RlID9cbiAgICAgICAgICAgICAgICAgICAgVSA6XG4gICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiA9IC91ey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVID0gXCJ1XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZSIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFR5cGUiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaGVzIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiLCJhc0VudHJ5IiwiZW50cnkiLCJyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmcm9tVG9rZW4iLCJUb2tlbiIsInJ1bGUiLCJmcm9tRW50cnkiLCJlbnRyeUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RFbnRyeUtleSIsImZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwidW5pY29kZSIsImlzVW5pY29kZSIsImZsYWdzIiwiVSIsIkVNUFRZX1NUUklORyIsInJlZ0V4cCIsIlJlZ0V4cCIsInVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFYixJQUFBLFlBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUVsQixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7Ozs7Ozs7Ozs4REFON0M7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7O0FBUUEsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZ0JBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxJQUFJLGlCQTZFdEIsQUE3RVk7YUFBTUEsSUFBSSxDQUNYQyxJQUFJLEVBQUVDLGlCQUFpQjttQ0FYckM7UUFZSSxJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDOzs7O1lBRzdDQyxHQUFPLEVBQVBBLFNBQU87WUNoQlQsT0RnQkVBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREcsR0FBb0IsRUFBcEJBLHNCQUFvQjtZQ3BCdEIsT0RvQkVBLFNBQUFBLG9CQUFvQixHQUFHO2dCQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCLENB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