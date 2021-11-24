"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _significant = _interopRequireDefault(require("../common/token/significant"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0aGlzLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGFzRW50cnkoKSB7XG4gICAgY29uc3QgZW50cnkgPSB7fSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBgJHt0aGlzLnJlZ3VsYXJFeHByZXNzaW9ufWA7XG5cbiAgICBlbnRyeVt0aGlzLnR5cGVdID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihUb2tlbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IFRva2VuLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCB1bmljb2RlID0gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgZmxhZ3MgPSB1bmljb2RlID9cbiAgICAgICAgICAgICAgICAgICAgVSA6XG4gICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiA9IC91ey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiUnVsZSIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFR5cGUiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaGVzIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImZyb21Db250ZW50QW5kVHlwZSIsImFzRW50cnkiLCJlbnRyeSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21Ub2tlbiIsIlRva2VuIiwicnVsZSIsImZyb21FbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJ1bmljb2RlIiwiaXNVbmljb2RlIiwiZmxhZ3MiLCJyZWdFeHAiLCJSZWdFeHAiLCJ1bmljb2RlUmVndWxhckV4cHJlc3Npb24iLCJzZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRWIsR0FBNkIsQ0FBN0IsWUFBNkI7QUFFMUIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsR0FBSyxDQUFHQSxLQUFLLEdBTmtCLFVBQVcsZ0JBTWxDQSxLQUFLO0lBRVFDLElBQUksaUJBQVYsUUFBUTthQUFGQSxJQUFJLENBQ1hDLElBQUksRUFBRUMsaUJBQWlCOzhCQURoQkYsSUFBSTtRQUVyQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtRQUNoQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7O2lCQUh6QkYsSUFBSTs7WUFNdkJHLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDRixJQUFJO1lBQ2xCLENBQUM7OztZQUVERyxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQixDQUFDOzs7WUFFREcsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsR0FBRyxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJO2dCQUUzQixHQUFLLENBQUNDLE9BQU8sR0FBR0YsT0FBTyxDQUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDSCxpQkFBaUI7Z0JBRXBELEVBQUUsRUFBRU0sT0FBTyxLQUFLLElBQUksRUFB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