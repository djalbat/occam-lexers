"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get asterisk () {
        return asterisk;
    },
    get closeBracket () {
        return closeBracket;
    },
    get default () {
        return _default;
    },
    get ellipsis () {
        return ellipsis;
    },
    get endOfLine () {
        return endOfLine;
    },
    get epsilon () {
        return epsilon;
    },
    get noWhitespace () {
        return noWhitespace;
    },
    get opaque () {
        return opaque;
    },
    get openBracket () {
        return openBracket;
    },
    get plus () {
        return plus;
    },
    get questionMark () {
        return questionMark;
    },
    get semiOpaque () {
        return semiOpaque;
    },
    get separator () {
        return separator;
    },
    get startOfContent () {
        return startOfContent;
    },
    get terminator () {
        return terminator;
    },
    get verticalBar () {
        return verticalBar;
    },
    get wildcard () {
        return wildcard;
    }
});
const plus = "+";
const opaque = ".";
const epsilon = 'ε';
const wildcard = ".";
const asterisk = "*";
const ellipsis = "...";
const separator = "::=";
const semiOpaque = "..";
const terminator = ";";
const verticalBar = "|";
const openBracket = "(";
const closeBracket = ")";
const questionMark = "?";
const endOfLine = "<END_OF_LINE>";
const noWhitespace = "<NO_WHITESPACE>";
const startOfContent = "<START_OF_CONTENT>";
const _default = {
    plus,
    opaque,
    epsilon,
    wildcard,
    asterisk,
    ellipsis,
    separator,
    semiOpaque,
    terminator,
    verticalBar,
    openBracket,
    closeBracket,
    questionMark,
    endOfLine,
    noWhitespace,
    startOfContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGVjaWFsU3ltYm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzID0gXCIrXCI7XHJcbmV4cG9ydCBjb25zdCBvcGFxdWUgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGVwc2lsb24gPSAnzrUnO1xyXG5leHBvcnQgY29uc3Qgd2lsZGNhcmQgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGFzdGVyaXNrID0gXCIqXCI7XHJcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9IFwiLi4uXCI7XHJcbmV4cG9ydCBjb25zdCBzZXBhcmF0b3IgPSBcIjo6PVwiO1xyXG5leHBvcnQgY29uc3Qgc2VtaU9wYXF1ZSA9IFwiLi5cIjtcclxuZXhwb3J0IGNvbnN0IHRlcm1pbmF0b3IgPSBcIjtcIjtcclxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsQmFyID0gXCJ8XCI7XHJcbmV4cG9ydCBjb25zdCBvcGVuQnJhY2tldCA9IFwiKFwiO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCcmFja2V0ID0gXCIpXCI7XHJcbmV4cG9ydCBjb25zdCBxdWVzdGlvbk1hcmsgPSBcIj9cIjtcclxuZXhwb3J0IGNvbnN0IGVuZE9mTGluZSA9IFwiPEVORF9PRl9MSU5FPlwiO1xyXG5leHBvcnQgY29uc3Qgbm9XaGl0ZXNwYWNlID0gXCI8Tk9fV0hJVEVTUEFDRT5cIjtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0T2ZDb250ZW50ID0gXCI8U1RBUlRfT0ZfQ09OVEVOVD5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVzLFxyXG4gIG9wYXF1ZSxcclxuICBlcHNpbG9uLFxyXG4gIHdpbGRjYXJkLFxyXG4gIGFzdGVyaXNrLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHNlcGFyYXRvcixcclxuICBzZW1pT3BhcXVlLFxyXG4gIHRlcm1pbmF0b3IsXHJcbiAgdmVydGljYWxCYXIsXHJcbiAgb3BlbkJyYWNrZXQsXHJcbiAgY2xvc2VCcmFja2V0LFxyXG4gIHF1ZXN0aW9uTWFyayxcclxuICBlbmRPZkxpbmUsXHJcbiAgbm9XaGl0ZXNwYWNlLFxyXG4gIHN0YXJ0T2ZDb250ZW50XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhc3RlcmlzayIsImNsb3NlQnJhY2tldCIsImVsbGlwc2lzIiwiZW5kT2ZMaW5lIiwiZXBzaWxvbiIsIm5vV2hpdGVzcGFjZSIsIm9wYXF1ZSIsIm9wZW5CcmFja2V0IiwicGx1cyIsInF1ZXN0aW9uTWFyayIsInNlbWlPcGFxdWUiLCJzZXBhcmF0b3IiLCJzdGFydE9mQ29udGVudCIsInRlcm1pbmF0b3IiLCJ2ZXJ0aWNhbEJhciIsIndpbGRjYXJkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFNYUE7ZUFBQUE7O1FBT0FDO2VBQUFBOztRQU1iO2VBQUE7O1FBWmFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFYQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQWJBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFMQUM7ZUFBQUE7O1FBREFDO2VBQUFBOztRQVNBQztlQUFBQTs7UUFQQUM7ZUFBQUE7O1FBQ0FDO2VBQUFBOztRQU5BQztlQUFBQTs7O0FBSE4sTUFBTVAsT0FBTztBQUNiLE1BQU1GLFNBQVM7QUFDZixNQUFNRixVQUFVO0FBQ2hCLE1BQU1XLFdBQVc7QUFDakIsTUFBTWYsV0FBVztBQUNqQixNQUFNRSxXQUFXO0FBQ2pCLE1BQU1TLFlBQVk7QUFDbEIsTUFBTUQsYUFBYTtBQUNuQixNQUFNRyxhQUFhO0FBQ25CLE1BQU1DLGNBQWM7QUFDcEIsTUFBTVAsY0FBYztBQUNwQixNQUFNTixlQUFlO0FBQ3JCLE1BQU1RLGVBQWU7QUFDckIsTUFBTU4sWUFBWTtBQUNsQixNQUFNRSxlQUFlO0FBQ3JCLE1BQU1PLGlCQUFpQjtNQUU5QixXQUFlO0lBQ2JKO0lBQ0FGO0lBQ0FGO0lBQ0FXO0lBQ0FmO0lBQ0FFO0lBQ0FTO0lBQ0FEO0lBQ0FHO0lBQ0FDO0lBQ0FQO0lBQ0FOO0lBQ0FRO0lBQ0FOO0lBQ0FFO0lBQ0FPO0FBQ0YifQ==