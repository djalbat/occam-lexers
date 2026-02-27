"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WhitespaceToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../token/nonSignificant"));
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class WhitespaceToken extends _nonSignificant.default {
    static type = _types.whitespaceType;
    static regularExpression = /^[\t\v ]+/;
    static match(content) {
        return _nonSignificant.default.match(WhitespaceToken, content);
    }
    static fromContent(content) {
        return _nonSignificant.default.fromContent(WhitespaceToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC93aGl0ZXNwYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnRcIjtcblxuaW1wb3J0IHsgd2hpdGVzcGFjZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyB0eXBlID0gd2hpdGVzcGFjZVR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15bXFx0XFx2IF0rLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChXaGl0ZXNwYWNlVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJ0eXBlIiwid2hpdGVzcGFjZVR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVEOzs7Ozs7QUFFaEIsTUFBTUEsd0JBQXdCQyx1QkFBbUI7SUFDOUQsT0FBT0MsT0FBT0MscUJBQWMsQ0FBQztJQUU3QixPQUFPQyxvQkFBb0IsWUFBWTtJQUV2QyxPQUFPQyxNQUFNQyxPQUFPLEVBQUU7UUFBRSxPQUFPTCx1QkFBbUIsQ0FBQ0ksS0FBSyxDQUFDTCxpQkFBaUJNO0lBQVU7SUFFcEYsT0FBT0MsWUFBWUQsT0FBTyxFQUFFO1FBQUUsT0FBT0wsdUJBQW1CLENBQUNNLFdBQVcsQ0FBQ1AsaUJBQWlCTTtJQUFVO0FBQ2xHIn0=