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
                        var contentLength = content.length; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoOyAvLy9cblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBhc0VudHJ5KCkge1xuICAgIGNvbnN0IGVudHJ5ID0ge30sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gYCR7dGhpcy5yZWd1bGFyRXhwcmVzc2lvbn1gO1xuXG4gICAgZW50cnlbdGhpcy50eXBlXSA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4oVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBUb2tlbixcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdEVudHJ5S2V5LCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVt0eXBlXSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uRnJvbVJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybih0eXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uRnJvbVJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZSh0eXBlLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IGZsYWdzID0gVSwgIC8vL1xuICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cDsgLy8vXG5cbiAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0VHlwZSIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoZXMiLCJpbmRleCIsImZpcnN0TWF0Y2giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSIsImFzRW50cnkiLCJlbnRyeSIsInJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiIsImZyb21Ub2tlbiIsIlRva2VuIiwicnVsZSIsImZyb21FbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwicmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmbGFncyIsIlUiLCJyZWdFeHAiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO2tFQUVGO3lCQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxxQkFBTjthQUFNQSxLQUNQRyxJQUFJLEVBQUVDLGlCQUFpQjtnQ0FEaEJKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUko7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsVUFBVUYsUUFBUUQsS0FBSyxDQUFDLElBQUksQ0FBQ0gsaUJBQWlCO2dCQUVwRCxJQUFJTSxZQUFZLE1BQU07b0JBQ3BCLElBQU0sQUFBRUMsUUFBVUQsUUFBVkM7b0JBRVIsSUFBSUEsVUFBVSxHQUFHO3dCQUNmLElBQU1DLGFBQWFYLE1BQU1TO3dCQUV6QkYsVUFBVUksWUFBWSxHQUFHO3dCQUV6QixJQUFNQyxnQkFBZ0JMLFFBQVFNLE1BQU0sRUFBRSxHQUFHO3dCQUV6QyxJQUFJRCxnQkFBZ0IsR0FBRzs0QkFDckJKLG1CQUFtQk0sb0JBQWdCLENBQUNDLGtCQUFrQixDQUFDUixTQUFTLElBQUksQ0FBQ0wsSUFBSTt3QkFDM0U7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLENBQUMsR0FDVEMsMkJBQTJCLEFBQUMsR0FBeUIsT0FBdkIsSUFBSSxDQUFDZixpQkFBaUI7Z0JBRTFEYyxLQUFLLENBQUMsSUFBSSxDQUFDZixJQUFJLENBQUMsR0FBR2dCO2dCQUVuQixPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQ3BCLElBQVFsQixPQUE0QmtCLE1BQTVCbEIsTUFBTUMsb0JBQXNCaUIsTUFBdEJqQixtQkFDUmtCLE9BQU8sSUFqREl0QixLQWlES0csTUFBTUM7Z0JBRTVCLE9BQU9rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUwsS0FBSztnQkFDcEIsSUFBTU0sWUFBWUMsT0FBT0MsSUFBSSxDQUFDUixRQUN4QlMsZ0JBQWdCMUIsTUFBTXVCLFlBQ3RCckIsT0FBT3dCLGVBQ1BSLDJCQUEyQkQsS0FBSyxDQUFDZixLQUFLLEVBQ3RDQyxvQkFBb0J3Qiw4Q0FBOENULDJCQUNsRUcsT0FBTyxJQTVESXRCLEtBNERLRyxNQUFNQztnQkFFNUIsT0FBT2tCO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0MxQixJQUFJLEVBQUVnQix3QkFBd0I7Z0JBQ3ZFLElBQU1mLG9CQUFvQndCLDhDQUE4Q1QsMkJBQ2xFRyxPQUFPLElBbkVJdEIsS0FtRUtHLE1BQU1DO2dCQUU1QixPQUFPa0I7WUFDVDs7O1dBdEVtQnRCOztBQXlFckIsU0FBUzRCLDhDQUE4Q1Qsd0JBQXdCO0lBQzdFLElBQU1XLFFBQVFDLFlBQUMsRUFDVEMsU0FBUyxJQUFJQyxPQUFPZCwwQkFBMEJXLFFBQzlDMUIsb0JBQW9CNEIsUUFBUSxHQUFHO0lBRXJDLE9BQU81QjtBQUNUIn0=