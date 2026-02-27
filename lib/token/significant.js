"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantToken;
    }
});
const _token = /*#__PURE__*/ _interop_require_default(require("../token"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SignificantToken extends _token.default {
    static match(Class, content, ...remainingArguments) {
        if (content === undefined) {
            content = Class; ///
            Class = SignificantToken; ///
        }
        const significant = true, significantToken = _token.default.match(Class, content, significant, ...remainingArguments);
        return significantToken;
    }
    static fromContent(Class, content, ...remainingArguments) {
        if (content === undefined) {
            content = Class; ///
            Class = SignificantToken; ///
        }
        const significant = true, significantToken = _token.default.fromContent(Class, content, significant, ...remainingArguments);
        return significantToken;
    }
    static fromContentAndType(Class, content, type, ...remainingArguments) {
        if (type === undefined) {
            type = content; ///
            content = Class; ///
            Class = SignificantToken; ///
        }
        const significant = true, significantToken = _token.default.fromContentAndType(Class, content, type, significant, ...remainingArguments);
        return significantToken;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gY29udGVudDsgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsIlRva2VuIiwibWF0Y2giLCJDbGFzcyIsImNvbnRlbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7OERBRkg7Ozs7OztBQUVILE1BQU1BLHlCQUF5QkMsY0FBSztJQUNqRCxPQUFPQyxNQUFNQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNsRCxJQUFJRCxZQUFZRSxXQUFXO1lBQ3pCRixVQUFVRCxPQUFRLEdBQUc7WUFFckJBLFFBQVFILGtCQUFrQixHQUFHO1FBQy9CO1FBRUEsTUFBTU8sY0FBYyxNQUNkQyxtQkFBbUJQLGNBQUssQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPQyxTQUFTRyxnQkFBZ0JGO1FBRXJFLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPQyxZQUFZTixLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUN4RCxJQUFJRCxZQUFZRSxXQUFXO1lBQ3pCRixVQUFVRCxPQUFRLEdBQUc7WUFFckJBLFFBQVFILGtCQUFrQixHQUFHO1FBQy9CO1FBRUEsTUFBTU8sY0FBYyxNQUNkQyxtQkFBbUJQLGNBQUssQ0FBQ1EsV0FBVyxDQUFDTixPQUFPQyxTQUFTRyxnQkFBZ0JGO1FBRTNFLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPRSxtQkFBbUJQLEtBQUssRUFBRUMsT0FBTyxFQUFFTyxJQUFJLEVBQUUsR0FBR04sa0JBQWtCLEVBQUU7UUFDckUsSUFBSU0sU0FBU0wsV0FBVztZQUN0QkssT0FBT1AsU0FBUyxHQUFHO1lBRW5CQSxVQUFVRCxPQUFRLEdBQUc7WUFFckJBLFFBQVFILGtCQUFrQixHQUFHO1FBQy9CO1FBRUEsTUFBTU8sY0FBYyxNQUNkQyxtQkFBbUJQLGNBQUssQ0FBQ1Msa0JBQWtCLENBQUNQLE9BQU9DLFNBQVNPLE1BQU1KLGdCQUFnQkY7UUFFeEYsT0FBT0c7SUFDVDtBQUNGIn0=