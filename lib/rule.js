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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgVSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoOyAvLy9cblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBmbGFncyA9IFUsICAvLy9cbiAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHA7IC8vL1xuXG4gIHJldHVybiByZWd1bGFyRXhwcmVzc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFR5cGUiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaGVzIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiLCJmcm9tVG9rZW4iLCJUb2tlbiIsInJ1bGUiLCJmcm9tRW50cnkiLCJlbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmbGFncyIsIlUiLCJyZWdFeHAiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO2tFQUVGO3lCQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxxQkFBTjthQUFNQSxLQUNQRyxJQUFJLEVBQUVDLGlCQUFpQjtnQ0FEaEJKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUko7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsVUFBVUYsUUFBUUQsS0FBSyxDQUFDLElBQUksQ0FBQ0gsaUJBQWlCO2dCQUVwRCxJQUFJTSxZQUFZLE1BQU07b0JBQ3BCLElBQU0sQUFBRUMsUUFBVUQsUUFBVkM7b0JBRVIsSUFBSUEsVUFBVSxHQUFHO3dCQUNmLElBQU1DLGFBQWFYLE1BQU1TO3dCQUV6QkYsVUFBVUksWUFBWSxHQUFHO3dCQUV6QixJQUFNQyxnQkFBZ0JMLFFBQVFNLE1BQU0sRUFBRSxHQUFHO3dCQUV6QyxJQUFJRCxnQkFBZ0IsR0FBRzs0QkFDckJKLG1CQUFtQk0sb0JBQWdCLENBQUNDLGtCQUFrQixDQUFDUixTQUFTLElBQUksQ0FBQ0wsSUFBSTt3QkFDM0U7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT007WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUNwQixJQUFRZixPQUE0QmUsTUFBNUJmLE1BQU1DLG9CQUFzQmMsTUFBdEJkLG1CQUNSZSxPQUFPLElBeENJbkIsS0F3Q0tHLE1BQU1DO2dCQUU1QixPQUFPZTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFDcEIsSUFBTUMsWUFBWUMsT0FBT0MsSUFBSSxDQUFDSCxRQUN4QkksZ0JBQWdCeEIsTUFBTXFCLFlBQ3RCbkIsT0FBT3NCLGVBQ1BDLDJCQUEyQkwsS0FBSyxDQUFDbEIsS0FBSyxFQUN0Q0Msb0JBQW9CdUIsOENBQThDRCwyQkFDbEVQLE9BQU8sSUFuREluQixLQW1ES0csTUFBTUM7Z0JBRTVCLE9BQU9lO1lBQ1Q7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0N6QixJQUFJLEVBQUV1Qix3QkFBd0I7Z0JBQ3ZFLElBQU10QixvQkFBb0J1Qiw4Q0FBOENELDJCQUNsRVAsT0FBTyxJQTFESW5CLEtBMERLRyxNQUFNQztnQkFFNUIsT0FBT2U7WUFDVDs7O1dBN0RtQm5COztBQWdFckIsU0FBUzJCLDhDQUE4Q0Qsd0JBQXdCO0lBQzdFLElBQU1HLFFBQVFDLFlBQUMsRUFDVEMsU0FBUyxJQUFJQyxPQUFPTiwwQkFBMEJHLFFBQzlDekIsb0JBQW9CMkIsUUFBUSxHQUFHO0lBRXJDLE9BQU8zQjtBQUNUIn0=