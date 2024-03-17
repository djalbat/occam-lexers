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
var epsilon = "ε";
var wildcard = ".";
var asterisk = "*";
var ellipsis = "...";
var endOfLine = "<END_OF_LINE>";
var separator = "::=";
var semiOpaque = "..";
var terminator = ";";
var verticalBar = "|";
var openBracket = "(";
var closeBracket = ")";
var questionMark = "?";
var noWhitespace = "<NO_WHITESPACE>";
var _default = {
    plus: plus,
    opaque: opaque,
    epsilon: epsilon,
    wildcard: wildcard,
    asterisk: asterisk,
    ellipsis: ellipsis,
    endOfLine: endOfLine,
    separator: separator,
    semiOpaque: semiOpaque,
    terminator: terminator,
    verticalBar: verticalBar,
    openBracket: openBracket,
    closeBracket: closeBracket,
    questionMark: questionMark,
    noWhitespace: noWhitespace
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGVjaWFsU3ltYm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzID0gXCIrXCI7XHJcbmV4cG9ydCBjb25zdCBvcGFxdWUgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGVwc2lsb24gPSAnzrUnO1xyXG5leHBvcnQgY29uc3Qgd2lsZGNhcmQgPSBcIi5cIjtcclxuZXhwb3J0IGNvbnN0IGFzdGVyaXNrID0gXCIqXCI7XHJcbmV4cG9ydCBjb25zdCBlbGxpcHNpcyA9IFwiLi4uXCI7XHJcbmV4cG9ydCBjb25zdCBlbmRPZkxpbmUgPSBcIjxFTkRfT0ZfTElORT5cIjtcclxuZXhwb3J0IGNvbnN0IHNlcGFyYXRvciA9IFwiOjo9XCI7XHJcbmV4cG9ydCBjb25zdCBzZW1pT3BhcXVlID0gXCIuLlwiO1xyXG5leHBvcnQgY29uc3QgdGVybWluYXRvciA9IFwiO1wiO1xyXG5leHBvcnQgY29uc3QgdmVydGljYWxCYXIgPSBcInxcIjtcclxuZXhwb3J0IGNvbnN0IG9wZW5CcmFja2V0ID0gXCIoXCI7XHJcbmV4cG9ydCBjb25zdCBjbG9zZUJyYWNrZXQgPSBcIilcIjtcclxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uTWFyayA9IFwiP1wiO1xyXG5leHBvcnQgY29uc3Qgbm9XaGl0ZXNwYWNlID0gXCI8Tk9fV0hJVEVTUEFDRT5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVzLFxyXG4gIG9wYXF1ZSxcclxuICBlcHNpbG9uLFxyXG4gIHdpbGRjYXJkLFxyXG4gIGFzdGVyaXNrLFxyXG4gIGVsbGlwc2lzLFxyXG4gIGVuZE9mTGluZSxcclxuICBzZXBhcmF0b3IsXHJcbiAgc2VtaU9wYXF1ZSxcclxuICB0ZXJtaW5hdG9yLFxyXG4gIHZlcnRpY2FsQmFyLFxyXG4gIG9wZW5CcmFja2V0LFxyXG4gIGNsb3NlQnJhY2tldCxcclxuICBxdWVzdGlvbk1hcmssXHJcbiAgbm9XaGl0ZXNwYWNlXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhc3RlcmlzayIsImNsb3NlQnJhY2tldCIsImVsbGlwc2lzIiwiZW5kT2ZMaW5lIiwiZXBzaWxvbiIsIm5vV2hpdGVzcGFjZSIsIm9wYXF1ZSIsIm9wZW5CcmFja2V0IiwicGx1cyIsInF1ZXN0aW9uTWFyayIsInNlbWlPcGFxdWUiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwidmVydGljYWxCYXIiLCJ3aWxkY2FyZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFFBQVE7ZUFBUkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBSWIsT0FnQkU7ZUFoQkY7O0lBWGFDLFFBQVE7ZUFBUkE7O0lBQ0FDLFNBQVM7ZUFBVEE7O0lBSkFDLE9BQU87ZUFBUEE7O0lBWUFDLFlBQVk7ZUFBWkE7O0lBYkFDLE1BQU07ZUFBTkE7O0lBVUFDLFdBQVc7ZUFBWEE7O0lBWEFDLElBQUk7ZUFBSkE7O0lBYUFDLFlBQVk7ZUFBWkE7O0lBTEFDLFVBQVU7ZUFBVkE7O0lBREFDLFNBQVM7ZUFBVEE7O0lBRUFDLFVBQVU7ZUFBVkE7O0lBQ0FDLFdBQVc7ZUFBWEE7O0lBUEFDLFFBQVE7ZUFBUkE7OztBQUhOLElBQU1OLE9BQU87QUFDYixJQUFNRixTQUFTO0FBQ2YsSUFBTUYsVUFBVTtBQUNoQixJQUFNVSxXQUFXO0FBQ2pCLElBQU1kLFdBQVc7QUFDakIsSUFBTUUsV0FBVztBQUNqQixJQUFNQyxZQUFZO0FBQ2xCLElBQU1RLFlBQVk7QUFDbEIsSUFBTUQsYUFBYTtBQUNuQixJQUFNRSxhQUFhO0FBQ25CLElBQU1DLGNBQWM7QUFDcEIsSUFBTU4sY0FBYztBQUNwQixJQUFNTixlQUFlO0FBQ3JCLElBQU1RLGVBQWU7QUFDckIsSUFBTUosZUFBZTtJQUU1QixXQUFlO0lBQ2JHLE1BQUFBO0lBQ0FGLFFBQUFBO0lBQ0FGLFNBQUFBO0lBQ0FVLFVBQUFBO0lBQ0FkLFVBQUFBO0lBQ0FFLFVBQUFBO0lBQ0FDLFdBQUFBO0lBQ0FRLFdBQUFBO0lBQ0FELFlBQUFBO0lBQ0FFLFlBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FOLGFBQUFBO0lBQ0FOLGNBQUFBO0lBQ0FRLGNBQUFBO0lBQ0FKLGNBQUFBO0FBQ0YifQ==