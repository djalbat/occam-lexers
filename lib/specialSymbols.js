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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGVjaWFsU3ltYm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzID0gXCIrXCI7XHJcbmV4cG9ydCBjb25zdCBvcGFxdWUgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGVwc2lsb24gPSAnzrUnO1xyXG5leHBvcnQgY29uc3Qgd2lsZGNhcmQgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGFzdGVyaXNrID0gXCIqXCI7XHJcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9IFwiLi4uXCI7XHJcbmV4cG9ydCBjb25zdCBzZXBhcmF0b3IgPSBcIjo6PVwiO1xyXG5leHBvcnQgY29uc3Qgc2VtaU9wYXF1ZSA9IFwiLi5cIjtcclxuZXhwb3J0IGNvbnN0IHRlcm1pbmF0b3IgPSBcIjtcIjtcclxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsQmFyID0gXCJ8XCI7XHJcbmV4cG9ydCBjb25zdCBvcGVuQnJhY2tldCA9IFwiKFwiO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCcmFja2V0ID0gXCIpXCI7XHJcbmV4cG9ydCBjb25zdCBxdWVzdGlvbk1hcmsgPSBcIj9cIjtcclxuZXhwb3J0IGNvbnN0IGVuZE9mTGluZSA9IFwiPEVORF9PRl9MSU5FPlwiO1xyXG5leHBvcnQgY29uc3Qgbm9XaGl0ZXNwYWNlID0gXCI8Tk9fV0hJVEVTUEFDRT5cIjtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0T2ZDb250ZW50ID0gXCI8U1RBUlRfT0ZfQ09OVEVOVD5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVzLFxyXG4gIG9wYXF1ZSxcclxuICBlcHNpbG9uLFxyXG4gIHdpbGRjYXJkLFxyXG4gIGFzdGVyaXNrLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHNlcGFyYXRvcixcclxuICBzZW1pT3BhcXVlLFxyXG4gIHRlcm1pbmF0b3IsXHJcbiAgdmVydGljYWxCYXIsXHJcbiAgb3BlbkJyYWNrZXQsXHJcbiAgY2xvc2VCcmFja2V0LFxyXG4gIHF1ZXN0aW9uTWFyayxcclxuICBlbmRPZkxpbmUsXHJcbiAgbm9XaGl0ZXNwYWNlLFxyXG4gIHN0YXJ0T2ZDb250ZW50XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhc3RlcmlzayIsImNsb3NlQnJhY2tldCIsImVsbGlwc2lzIiwiZW5kT2ZMaW5lIiwiZXBzaWxvbiIsIm5vV2hpdGVzcGFjZSIsIm9wYXF1ZSIsIm9wZW5CcmFja2V0IiwicGx1cyIsInF1ZXN0aW9uTWFyayIsInNlbWlPcGFxdWUiLCJzZXBhcmF0b3IiLCJzdGFydE9mQ29udGVudCIsInRlcm1pbmF0b3IiLCJ2ZXJ0aWNhbEJhciIsIndpbGRjYXJkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFFBQVE7ZUFBUkE7O0lBT0FDLFlBQVk7ZUFBWkE7O0lBTWIsT0FpQkU7ZUFqQkY7O0lBWmFDLFFBQVE7ZUFBUkE7O0lBUUFDLFNBQVM7ZUFBVEE7O0lBWEFDLE9BQU87ZUFBUEE7O0lBWUFDLFlBQVk7ZUFBWkE7O0lBYkFDLE1BQU07ZUFBTkE7O0lBU0FDLFdBQVc7ZUFBWEE7O0lBVkFDLElBQUk7ZUFBSkE7O0lBWUFDLFlBQVk7ZUFBWkE7O0lBTEFDLFVBQVU7ZUFBVkE7O0lBREFDLFNBQVM7ZUFBVEE7O0lBU0FDLGNBQWM7ZUFBZEE7O0lBUEFDLFVBQVU7ZUFBVkE7O0lBQ0FDLFdBQVc7ZUFBWEE7O0lBTkFDLFFBQVE7ZUFBUkE7OztBQUhOLElBQU1QLE9BQU87QUFDYixJQUFNRixTQUFTO0FBQ2YsSUFBTUYsVUFBVTtBQUNoQixJQUFNVyxXQUFXO0FBQ2pCLElBQU1mLFdBQVc7QUFDakIsSUFBTUUsV0FBVztBQUNqQixJQUFNUyxZQUFZO0FBQ2xCLElBQU1ELGFBQWE7QUFDbkIsSUFBTUcsYUFBYTtBQUNuQixJQUFNQyxjQUFjO0FBQ3BCLElBQU1QLGNBQWM7QUFDcEIsSUFBTU4sZUFBZTtBQUNyQixJQUFNUSxlQUFlO0FBQ3JCLElBQU1OLFlBQVk7QUFDbEIsSUFBTUUsZUFBZTtBQUNyQixJQUFNTyxpQkFBaUI7SUFFOUIsV0FBZTtJQUNiSixNQUFBQTtJQUNBRixRQUFBQTtJQUNBRixTQUFBQTtJQUNBVyxVQUFBQTtJQUNBZixVQUFBQTtJQUNBRSxVQUFBQTtJQUNBUyxXQUFBQTtJQUNBRCxZQUFBQTtJQUNBRyxZQUFBQTtJQUNBQyxhQUFBQTtJQUNBUCxhQUFBQTtJQUNBTixjQUFBQTtJQUNBUSxjQUFBQTtJQUNBTixXQUFBQTtJQUNBRSxjQUFBQTtJQUNBTyxnQkFBQUE7QUFDRiJ9