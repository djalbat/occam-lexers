"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineNonSignificantToken;
    }
});
const _nonSignificant = /*#__PURE__*/ _interop_require_default(require("../../token/nonSignificant"));
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EndOfLineNonSignificantToken extends _nonSignificant.default {
    asHTML() {
        const content = this.getContent(), html = content; ///
        return html;
    }
    static type = _types.endOfLineType;
    static regularExpression = /^(?:\r\n|\r|\n|\f)/;
    static match(content) {
        return _nonSignificant.default.match(EndOfLineNonSignificantToken, content);
    }
    static fromContent(content) {
        return _nonSignificant.default.fromContent(EndOfLineNonSignificantToken, content);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25TaWduaWZpY2FudFRva2VuIGZyb20gXCIuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gZW5kT2ZMaW5lVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXig/OlxcclxcbnxcXHJ8XFxufFxcZikvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImFzSFRNTCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaHRtbCIsInR5cGUiLCJlbmRPZkxpbmVUeXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImZyb21Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpXO3VCQUVGOzs7Ozs7QUFFZixNQUFNQSxxQ0FBcUNDLHVCQUFtQjtJQUMzRUMsU0FBUztRQUNQLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxPQUFPRixTQUFTLEdBQUc7UUFFekIsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLE9BQU9DLG9CQUFhLENBQUM7SUFFNUIsT0FBT0Msb0JBQW9CLHFCQUFxQjtJQUVoRCxPQUFPQyxNQUFNTixPQUFPLEVBQUU7UUFBRSxPQUFPRix1QkFBbUIsQ0FBQ1EsS0FBSyxDQUFDVCw4QkFBOEJHO0lBQVU7SUFFakcsT0FBT08sWUFBWVAsT0FBTyxFQUFFO1FBQUUsT0FBT0YsdUJBQW1CLENBQUNTLFdBQVcsQ0FBQ1YsOEJBQThCRztJQUFVO0FBQy9HIn0=