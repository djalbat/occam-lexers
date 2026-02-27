"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TokensTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TokensTextarea extends _textarea.default {
    setTokens(tokens) {
        let lineNumber = 1, previousToken = null;
        const html = tokens.reduce((html, token)=>{
            const tokenHTML = token.asHTML();
            if (previousToken === null) {
                html += `${lineNumber++}: `;
            } else {
                const previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                if (previousTokenEndOfLineToken) {
                    html += `${lineNumber++}: `;
                }
            }
            html += tokenHTML;
            previousToken = token;
            return html;
        }, _constants.EMPTY_STRING);
        this.html(html);
    }
    clearTokens() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
    }
    parentContext() {
        const setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
        return {
            setTokens,
            clearTokens
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9rZW5zVGV4dGFyZWEiLCJUZXh0YXJlYSIsInNldFRva2VucyIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVNUFRZX1NUUklORyIsImNsZWFyVG9rZW5zIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztpRUFKQTsyQkFFUTs7Ozs7O0FBRWQsTUFBTUEsdUJBQXVCQyxpQkFBUTtJQUNsREMsVUFBVUMsTUFBTSxFQUFFO1FBQ2hCLElBQUlDLGFBQWEsR0FDYkMsZ0JBQWdCO1FBRXBCLE1BQU1DLE9BQU9ILE9BQU9JLE1BQU0sQ0FBQyxDQUFDRCxNQUFNRTtZQUNoQyxNQUFNQyxZQUFZRCxNQUFNRSxNQUFNO1lBRTlCLElBQUlMLGtCQUFrQixNQUFNO2dCQUMxQkMsUUFBUSxHQUFHRixhQUFhLEVBQUUsQ0FBQztZQUM3QixPQUFPO2dCQUNMLE1BQU1PLDhCQUE4Qk4sY0FBY08sZ0JBQWdCO2dCQUVsRSxJQUFJRCw2QkFBNkI7b0JBQy9CTCxRQUFRLEdBQUdGLGFBQWEsRUFBRSxDQUFDO2dCQUM3QjtZQUNGO1lBRUFFLFFBQVFHO1lBRVJKLGdCQUFnQkc7WUFFaEIsT0FBT0Y7UUFDVCxHQUFHTyx1QkFBWTtRQUVmLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtJQUNaO0lBRUFRLGNBQWM7UUFDWixNQUFNUixPQUFPTyx1QkFBWTtRQUV6QixJQUFJLENBQUNQLElBQUksQ0FBQ0E7SUFDWjtJQUVBUyxnQkFBZ0I7UUFDZCxNQUFNYixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUNwQ0YsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUk7UUFFOUMsT0FBUTtZQUNOZDtZQUNBWTtRQUNGO0lBQ0Y7SUFFQSxPQUFPRyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxVQUFVO0lBQ1osRUFBRTtBQUNKIn0=