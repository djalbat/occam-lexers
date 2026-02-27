"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineSignificantToken;
    }
});
const _significant = /*#__PURE__*/ _interop_require_default(require("../../token/significant"));
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineSignificantToken extends _significant.default {
    asHTML() {
        const content = this.getContent(), html = content; ///
        return html;
    }
    static type = _types.endOfLineType;
    static regularExpression = /^(?:\r\n|\r|\n|\f)/;
    static match(content) {
        return _significant.default.match(EndOfLineSignificantToken, content);
    }
    static fromContent(content) {
        return _significant.default.fromContent(EndOfLineSignificantToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9zaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gZW5kT2ZMaW5lVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlxcclxcbnxcXHJ8XFxufFxcZikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiU2lnbmlmaWNhbnRUb2tlbiIsImFzSFRNTCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaHRtbCIsInR5cGUiLCJlbmRPZkxpbmVUeXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O29FQUpRO3VCQUVDOzs7Ozs7QUFFZixNQUFNQSxrQ0FBa0NDLG9CQUFnQjtJQUNyRUMsU0FBUztRQUNQLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxPQUFPRixTQUFTLEdBQUc7UUFFekIsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLG9CQUFhLENBQUM7SUFFNUIsT0FBT0Msb0JBQW9CLHFCQUFxQjtJQUVoRCxPQUFPQyxNQUFNTixPQUFPLEVBQUU7UUFBRSxPQUFPRixvQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDVCwyQkFBMkJHO0lBQVU7SUFFM0YsT0FBT08sWUFBWVAsT0FBTyxFQUFFO1FBQUUsT0FBT0Ysb0JBQWdCLENBQUNTLFdBQVcsQ0FBQ1YsMkJBQTJCRztJQUFVO0FBQ3pHIn0=