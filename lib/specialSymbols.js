"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    asterisk: function() {
        return asterisk;
    },
    closeBracket: function() {
        return closeBracket;
    },
    default: function() {
        return _default;
    },
    ellipsis: function() {
        return ellipsis;
    },
    endOfLine: function() {
        return endOfLine;
    },
    epsilon: function() {
        return epsilon;
    },
    noWhitespace: function() {
        return noWhitespace;
    },
    opaque: function() {
        return opaque;
    },
    openBracket: function() {
        return openBracket;
    },
    plus: function() {
        return plus;
    },
    questionMark: function() {
        return questionMark;
    },
    semiOpaque: function() {
        return semiOpaque;
    },
    separator: function() {
        return separator;
    },
    startOfContent: function() {
        return startOfContent;
    },
    terminator: function() {
        return terminator;
    },
    verticalBar: function() {
        return verticalBar;
    },
    wildcard: function() {
        return wildcard;
    }
});
var plus = "+";
var opaque = ".";
var epsilon = 'ε';
var wildcard = ".";
var asterisk = "*";
var ellipsis = "...";
var separator = "::=";
var semiOpaque = "..";
var terminator = ";";
var verticalBar = "|";
var openBracket = "(";
var closeBracket = ")";
var questionMark = "?";
var endOfLine = "<END_OF_LINE>";
var noWhitespace = "<NO_WHITESPACE>";
var startOfContent = "<START_OF_CONTENT>";
var _default = {
    plus: plus,
    opaque: opaque,
    epsilon: epsilon,
    wildcard: wildcard,
    asterisk: asterisk,
    ellipsis: ellipsis,
    separator: separator,
    semiOpaque: semiOpaque,
    terminator: terminator,
    verticalBar: verticalBar,
    openBracket: openBracket,
    closeBracket: closeBracket,
    questionMark: questionMark,
    endOfLine: endOfLine,
    noWhitespace: noWhitespace,
    startOfContent: startOfContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGVjaWFsU3ltYm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzID0gXCIrXCI7XHJcbmV4cG9ydCBjb25zdCBvcGFxdWUgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGVwc2lsb24gPSAnzrUnO1xyXG5leHBvcnQgY29uc3Qgd2lsZGNhcmQgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGFzdGVyaXNrID0gXCIqXCI7XHJcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9IFwiLi4uXCI7XHJcbmV4cG9ydCBjb25zdCBzZXBhcmF0b3IgPSBcIjo6PVwiO1xyXG5leHBvcnQgY29uc3Qgc2VtaU9wYXF1ZSA9IFwiLi5cIjtcclxuZXhwb3J0IGNvbnN0IHRlcm1pbmF0b3IgPSBcIjtcIjtcclxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsQmFyID0gXCJ8XCI7XHJcbmV4cG9ydCBjb25zdCBvcGVuQnJhY2tldCA9IFwiKFwiO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCcmFja2V0ID0gXCIpXCI7XHJcbmV4cG9ydCBjb25zdCBxdWVzdGlvbk1hcmsgPSBcIj9cIjtcclxuZXhwb3J0IGNvbnN0IGVuZE9mTGluZSA9IFwiPEVORF9PRl9MSU5FPlwiO1xyXG5leHBvcnQgY29uc3Qgbm9XaGl0ZXNwYWNlID0gXCI8Tk9fV0hJVEVTUEFDRT5cIjtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0T2ZDb250ZW50ID0gXCI8U1RBUlRfT0ZfQ09OVEVOVD5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVzLFxyXG4gIG9wYXF1ZSxcclxuICBlcHNpbG9uLFxyXG4gIHdpbGRjYXJkLFxyXG4gIGFzdGVyaXNrLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHNlcGFyYXRvcixcclxuICBzZW1pT3BhcXVlLFxyXG4gIHRlcm1pbmF0b3IsXHJcbiAgdmVydGljYWxCYXIsXHJcbiAgb3BlbkJyYWNrZXQsXHJcbiAgY2xvc2VCcmFja2V0LFxyXG4gIHF1ZXN0aW9uTWFyayxcclxuICBlbmRPZkxpbmUsXHJcbiAgbm9XaGl0ZXNwYWNlLFxyXG4gIHN0YXJ0T2ZDb250ZW50XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhc3RlcmlzayIsImNsb3NlQnJhY2tldCIsImVsbGlwc2lzIiwiZW5kT2ZMaW5lIiwiZXBzaWxvbiIsIm5vV2hpdGVzcGFjZSIsIm9wYXF1ZSIsIm9wZW5CcmFja2V0IiwicGx1cyIsInF1ZXN0aW9uTWFyayIsInNlbWlPcGFxdWUiLCJzZXBhcmF0b3IiLCJzdGFydE9mQ29udGVudCIsInRlcm1pbmF0b3IiLCJ2ZXJ0aWNhbEJhciIsIndpbGRjYXJkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsUUFBUTtlQUFSQTs7SUFPQUMsWUFBWTtlQUFaQTs7SUFNYixPQWlCRTtlQWpCRjs7SUFaYUMsUUFBUTtlQUFSQTs7SUFRQUMsU0FBUztlQUFUQTs7SUFYQUMsT0FBTztlQUFQQTs7SUFZQUMsWUFBWTtlQUFaQTs7SUFiQUMsTUFBTTtlQUFOQTs7SUFTQUMsV0FBVztlQUFYQTs7SUFWQUMsSUFBSTtlQUFKQTs7SUFZQUMsWUFBWTtlQUFaQTs7SUFMQUMsVUFBVTtlQUFWQTs7SUFEQUMsU0FBUztlQUFUQTs7SUFTQUMsY0FBYztlQUFkQTs7SUFQQUMsVUFBVTtlQUFWQTs7SUFDQUMsV0FBVztlQUFYQTs7SUFOQUMsUUFBUTtlQUFSQTs7O0FBSE4sSUFBTVAsT0FBTztBQUNiLElBQU1GLFNBQVM7QUFDZixJQUFNRixVQUFVO0FBQ2hCLElBQU1XLFdBQVc7QUFDakIsSUFBTWYsV0FBVztBQUNqQixJQUFNRSxXQUFXO0FBQ2pCLElBQU1TLFlBQVk7QUFDbEIsSUFBTUQsYUFBYTtBQUNuQixJQUFNRyxhQUFhO0FBQ25CLElBQU1DLGNBQWM7QUFDcEIsSUFBTVAsY0FBYztBQUNwQixJQUFNTixlQUFlO0FBQ3JCLElBQU1RLGVBQWU7QUFDckIsSUFBTU4sWUFBWTtBQUNsQixJQUFNRSxlQUFlO0FBQ3JCLElBQU1PLGlCQUFpQjtJQUU5QixXQUFlO0lBQ2JKLE1BQUFBO0lBQ0FGLFFBQUFBO0lBQ0FGLFNBQUFBO0lBQ0FXLFVBQUFBO0lBQ0FmLFVBQUFBO0lBQ0FFLFVBQUFBO0lBQ0FTLFdBQUFBO0lBQ0FELFlBQUFBO0lBQ0FHLFlBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FQLGFBQUFBO0lBQ0FOLGNBQUFBO0lBQ0FRLGNBQUFBO0lBQ0FOLFdBQUFBO0lBQ0FFLGNBQUFBO0lBQ0FPLGdCQUFBQTtBQUNGIn0=