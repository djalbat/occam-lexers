"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonSignificantToken;
    }
});
const _token = /*#__PURE__*/ _interop_require_default(require("../token"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NonSignificantToken extends _token.default {
    static match(Class, content) {
        const significant = false, nonSignificantToken = _token.default.match(Class, content, significant);
        return nonSignificantToken;
    }
    static fromContent(Class, content) {
        const significant = false, nonSignificantToken = _token.default.fromContent(Class, content, significant);
        return nonSignificantToken;
    }
    static fromContentAndType(Class, content, type) {
        const significant = false, nonSignificantToken = _token.default.fromContentAndType(Class, content, type, significant);
        return nonSignificantToken;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRva2VuIGZyb20gXCIuLi90b2tlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IGZhbHNlLFxuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IGZhbHNlLFxuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnQgPSBmYWxzZSxcbiAgICAgICAgICBub25TaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vblNpZ25pZmljYW50VG9rZW4iLCJUb2tlbiIsIm1hdGNoIiwiQ2xhc3MiLCJjb250ZW50Iiwic2lnbmlmaWNhbnQiLCJub25TaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZIOzs7Ozs7QUFFSCxNQUFNQSw0QkFBNEJDLGNBQUs7SUFDcEQsT0FBT0MsTUFBTUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7UUFDM0IsTUFBTUMsY0FBYyxPQUNkQyxzQkFBc0JMLGNBQUssQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPQyxTQUFTQztRQUV4RCxPQUFPQztJQUNUO0lBRUEsT0FBT0MsWUFBWUosS0FBSyxFQUFFQyxPQUFPLEVBQUU7UUFDakMsTUFBTUMsY0FBYyxPQUNkQyxzQkFBc0JMLGNBQUssQ0FBQ00sV0FBVyxDQUFDSixPQUFPQyxTQUFTQztRQUU5RCxPQUFPQztJQUNUO0lBRUEsT0FBT0UsbUJBQW1CTCxLQUFLLEVBQUVDLE9BQU8sRUFBRUssSUFBSSxFQUFFO1FBQzlDLE1BQU1KLGNBQWMsT0FDZEMsc0JBQXNCTCxjQUFLLENBQUNPLGtCQUFrQixDQUFDTCxPQUFPQyxTQUFTSyxNQUFNSjtRQUUzRSxPQUFPQztJQUNUO0FBQ0YifQ==