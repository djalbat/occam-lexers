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
const _necessary = require("necessary");
const _significant = /*#__PURE__*/ _interop_require_default(require("./token/significant"));
const _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class Rule {
    constructor(type, regularExpression){
        this.type = type;
        this.regularExpression = regularExpression;
    }
    getType() {
        return this.type;
    }
    getRegularExpression() {
        return this.regularExpression;
    }
    match(content) {
        let significantToken = null;
        const matches = content.match(this.regularExpression);
        if (matches !== null) {
            const { index } = matches;
            if (index === 0) {
                const firstMatch = first(matches);
                content = firstMatch; ///
                const contentLength = content.length; ///
                if (contentLength > 0) {
                    significantToken = _significant.default.fromContentAndType(content, this.type);
                }
            }
        }
        return significantToken;
    }
    static fromToken(Token) {
        const { type, regularExpression } = Token, rule = new Rule(type, regularExpression);
        return rule;
    }
    static fromEntry(entry) {
        const entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern), rule = new Rule(type, regularExpression);
        return rule;
    }
    static fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
        const regularExpression = regularExpressionFromRegularExpressionPattern(regularExpressionPattern), rule = new Rule(type, regularExpression);
        return rule;
    }
}
function regularExpressionFromRegularExpressionPattern(regularExpressionPattern) {
    const flags = _constants.V, regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp; ///
    return regularExpression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgViB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBcbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2hlcztcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoOyAvLy9cblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdGhpcy50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVRva2VuKFRva2VuKSB7XG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gVG9rZW4sXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbdHlwZV0sXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuICAgICAgICBcbiAgICByZXR1cm4gcnVsZTsgXG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4odHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbkZyb21SZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBmbGFncyA9IFYsICAvLy9cbiAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGZsYWdzKSxcbiAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHA7IC8vL1xuXG4gIHJldHVybiByZWd1bGFyRXhwcmVzc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFR5cGUiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJtYXRjaGVzIiwiaW5kZXgiLCJmaXJzdE1hdGNoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiLCJmcm9tVG9rZW4iLCJUb2tlbiIsInJ1bGUiLCJmcm9tRW50cnkiLCJlbnRyeSIsImVudHJ5S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaXJzdEVudHJ5S2V5IiwicmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwicmVndWxhckV4cHJlc3Npb25Gcm9tUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuIiwiZnJvbVR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4iLCJmbGFncyIsIlYiLCJyZWdFeHAiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7MkJBUlU7b0VBRUY7MkJBRVg7Ozs7OztBQUVsQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRjtJQUNuQixZQUFZRyxJQUFJLEVBQUVDLGlCQUFpQixDQUFFO1FBQ25DLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO0lBQzNCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtJQUMvQjtJQUVBRyxNQUFNQyxPQUFPLEVBQUU7UUFDYixJQUFJQyxtQkFBbUI7UUFFdkIsTUFBTUMsVUFBVUYsUUFBUUQsS0FBSyxDQUFDLElBQUksQ0FBQ0gsaUJBQWlCO1FBRXBELElBQUlNLFlBQVksTUFBTTtZQUNwQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtZQUVsQixJQUFJQyxVQUFVLEdBQUc7Z0JBQ2YsTUFBTUMsYUFBYVgsTUFBTVM7Z0JBRXpCRixVQUFVSSxZQUFZLEdBQUc7Z0JBRXpCLE1BQU1DLGdCQUFnQkwsUUFBUU0sTUFBTSxFQUFFLEdBQUc7Z0JBRXpDLElBQUlELGdCQUFnQixHQUFHO29CQUNyQkosbUJBQW1CTSxvQkFBZ0IsQ0FBQ0Msa0JBQWtCLENBQUNSLFNBQVMsSUFBSSxDQUFDTCxJQUFJO2dCQUMzRTtZQUNGO1FBQ0Y7UUFFQSxPQUFPTTtJQUNUO0lBRUEsT0FBT1EsVUFBVUMsS0FBSyxFQUFFO1FBQ3RCLE1BQU0sRUFBRWYsSUFBSSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHYyxPQUM5QkMsT0FBTyxJQUFJbkIsS0FBS0csTUFBTUM7UUFFNUIsT0FBT2U7SUFDVDtJQUVBLE9BQU9DLFVBQVVDLEtBQUssRUFBRTtRQUN0QixNQUFNQyxZQUFZQyxPQUFPQyxJQUFJLENBQUNILFFBQ3hCSSxnQkFBZ0J4QixNQUFNcUIsWUFDdEJuQixPQUFPc0IsZUFDUEMsMkJBQTJCTCxLQUFLLENBQUNsQixLQUFLLEVBQ3RDQyxvQkFBb0J1Qiw4Q0FBOENELDJCQUNsRVAsT0FBTyxJQUFJbkIsS0FBS0csTUFBTUM7UUFFNUIsT0FBT2U7SUFDVDtJQUVBLE9BQU9TLG9DQUFvQ3pCLElBQUksRUFBRXVCLHdCQUF3QixFQUFFO1FBQ3pFLE1BQU10QixvQkFBb0J1Qiw4Q0FBOENELDJCQUNsRVAsT0FBTyxJQUFJbkIsS0FBS0csTUFBTUM7UUFFNUIsT0FBT2U7SUFDVDtBQUNGO0FBRUEsU0FBU1EsOENBQThDRCx3QkFBd0I7SUFDN0UsTUFBTUcsUUFBUUMsWUFBQyxFQUNUQyxTQUFTLElBQUlDLE9BQU9OLDBCQUEwQkcsUUFDOUN6QixvQkFBb0IyQixRQUFRLEdBQUc7SUFFckMsT0FBTzNCO0FBQ1QifQ==