"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
var _necessary = require("necessary");
var _significant = /*#__PURE__*/ _interop_require_default(require("./token/significant"));
var _constants = require("./constants");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first;
var Rule = /*#__PURE__*/ function() {
    function Rule(type, regularExpression) {
        _class_call_check(this, Rule);
        this.type = type;
        this.regularExpression = regularExpression;
    }
    _create_class(Rule, [
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
                var entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern), rule = new Rule(type, regularExpression);
                return rule;
            }
        },
        {
            key: "fromTypeAndRegularExpressionPattern",
            value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
                var regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern), rule = new Rule(type, regularExpression);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function regularExpressionFromRegularExpressionPattern(regularExpressionPattern) {
    var flags = _constants.U, regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp; ///
    return regularExpression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0aGlzLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGFzRW50cnkoKSB7XG4gICAgY29uc3QgZW50cnkgPSB7fSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBgJHt0aGlzLnJlZ3VsYXJFeHByZXNzaW9ufWA7XG5cbiAgICBlbnRyeVt0aGlzLnR5cGVdID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihUb2tlbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcmVndWxhckV4cHJlc3Npb24gfSA9IFRva2VuLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ3VsYXJFeHByZXNzaW9uRnJvbVJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgY29uc3QgZmxhZ3MgPSBVLCAgLy8vXG4gICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwOyAvLy9cblxuICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRUeXBlIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsImluZGV4IiwiZmlyc3RNYXRjaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwiYXNFbnRyeSIsImVudHJ5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVRva2VuIiwiVG9rZW4iLCJydWxlIiwiZnJvbUVudHJ5IiwiZW50cnlLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0RW50cnlLZXkiLCJyZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZsYWdzIiwiVSIsInJlZ0V4cCIsIlJlZ0V4cCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRUY7eUJBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHFCQXlFbEIsQUF6RVk7YUFBTUEsS0FDUEcsSUFBSSxFQUFFQyxpQkFBaUI7Z0NBRGhCSjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBSFJKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLFVBQVVGLFFBQVFELEtBQUssQ0FBQyxJQUFJLENBQUNILGlCQUFpQjtnQkFFcEQsSUFBSU0sWUFBWSxNQUFNO29CQUNwQixJQUFNLEFBQUVDLFFBQVVELFFBQVZDO29CQUVSLElBQUlBLFVBQVUsR0FBRzt3QkFDZixJQUFNQyxhQUFhWCxNQUFNUzt3QkFFekJGLFVBQVVJLFlBQVksR0FBRzt3QkFFekIsSUFBTUMsZ0JBQWdCTCxRQUFRTSxNQUFNO3dCQUVwQyxJQUFJRCxnQkFBZ0IsR0FBRzs0QkFDckJKLG1CQUFtQk0sb0JBQWdCLENBQUNDLGtCQUFrQixDQUFDUixTQUFTLElBQUksQ0FBQ0wsSUFBSTt3QkFDM0U7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLENBQUMsR0FDVEMsMkJBQTJCLEFBQUMsR0FBeUIsT0FBdkIsSUFBSSxDQUFDZixpQkFBaUI7Z0JBRTFEYyxLQUFLLENBQUMsSUFBSSxDQUFDZixJQUFJLENBQUMsR0FBR2dCO2dCQUVuQixPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQ3BCLElBQVFsQixPQUE0QmtCLE1BQTVCbEIsTUFBTUMsb0JBQXNCaUIsTUFBdEJqQixtQkFDUmtCLE9BQU8sSUFqREl0QixLQWlES0csTUFBTUM7Z0JBRTVCLE9BQU9rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUwsS0FBSztnQkFDcEIsSUFBTU0sWUFBWUMsT0FBT0MsSUFBSSxDQUFDUixRQUN4QlMsZ0JBQWdCMUIsTUFBTXVCLFlBQ3RCckIsT0FBT3dCLGVBQ1BSLDJCQUEyQkQsS0FBSyxDQUFDZixLQUFLLEVBQ3RDQyxvQkFBb0J3Qiw4Q0FBOENULDJCQUNsRUcsT0FBTyxJQTVESXRCLEtBNERLRyxNQUFNQztnQkFFNUIsT0FBT2tCO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0MxQixJQUFJLEVBQUVnQix3QkFBd0I7Z0JBQ3ZFLElBQU1mLG9CQUFvQndCLDhDQUE4Q1QsMkJBQ2xFRyxPQUFPLElBbkVJdEIsS0FtRUtHLE1BQU1DO2dCQUU1QixPQUFPa0I7WUFDVDs7O1dBdEVtQnRCOztBQXlFckIsU0FBUzRCLDhDQUE4Q1Qsd0JBQXdCO0lBQzdFLElBQU1XLFFBQVFDLFlBQUMsRUFDVEMsU0FBUyxJQUFJQyxPQUFPZCwwQkFBMEJXLFFBQzlDMUIsb0JBQW9CNEIsUUFBUSxHQUFHO0lBRXJDLE9BQU81QjtBQUNUIn0=