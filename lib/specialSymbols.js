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
    plus: function() {
        return plus;
    },
    wildcard: function() {
        return wildcard;
    },
    asterisk: function() {
        return asterisk;
    },
    ellipsis: function() {
        return ellipsis;
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
    openBracket: function() {
        return openBracket;
    },
    closeBracket: function() {
        return closeBracket;
    },
    questionMark: function() {
        return questionMark;
    },
    exclamationMark: function() {
        return exclamationMark;
    },
    NO_WHITESPACE: function() {
        return NO_WHITESPACE;
    },
    END_OF_LINE: function() {
        return END_OF_LINE;
    },
    default: function() {
        return _default;
    }
});
var plus = "+";
var wildcard = ".";
var asterisk = "*";
var ellipsis = "...";
var separator = "::=";
var terminator = ";";
var verticalBar = "|";
var openBracket = "(";
var closeBracket = ")";
var questionMark = "?";
var exclamationMark = "!";
var NO_WHITESPACE = "<NO_WHITESPACE>";
var END_OF_LINE = "<END_OF_LINE>";
var _default = {
    plus: plus,
    wildcard: wildcard,
    asterisk: asterisk,
    ellipsis: ellipsis,
    separator: separator,
    terminator: terminator,
    verticalBar: verticalBar,
    openBracket: openBracket,
    closeBracket: closeBracket,
    questionMark: questionMark,
    exclamationMark: exclamationMark,
    NO_WHITESPACE: NO_WHITESPACE,
    END_OF_LINE: END_OF_LINE
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGVjaWFsU3ltYm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzID0gXCIrXCI7XHJcbmV4cG9ydCBjb25zdCB3aWxkY2FyZCA9IFwiLlwiO1xyXG5leHBvcnQgY29uc3QgYXN0ZXJpc2sgPSBcIipcIjtcclxuZXhwb3J0IGNvbnN0IGVsbGlwc2lzID0gXCIuLi5cIjtcclxuZXhwb3J0IGNvbnN0IHNlcGFyYXRvciA9IFwiOjo9XCI7XHJcbmV4cG9ydCBjb25zdCB0ZXJtaW5hdG9yID0gXCI7XCI7XHJcbmV4cG9ydCBjb25zdCB2ZXJ0aWNhbEJhciA9IFwifFwiO1xyXG5leHBvcnQgY29uc3Qgb3BlbkJyYWNrZXQgPSBcIihcIjtcclxuZXhwb3J0IGNvbnN0IGNsb3NlQnJhY2tldCA9IFwiKVwiO1xyXG5leHBvcnQgY29uc3QgcXVlc3Rpb25NYXJrID0gXCI/XCI7XHJcbmV4cG9ydCBjb25zdCBleGNsYW1hdGlvbk1hcmsgPSBcIiFcIjtcclxuZXhwb3J0IGNvbnN0IE5PX1dISVRFU1BBQ0UgPSBcIjxOT19XSElURVNQQUNFPlwiO1xyXG5leHBvcnQgY29uc3QgRU5EX09GX0xJTkUgPSBcIjxFTkRfT0ZfTElORT5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVzLFxyXG4gIHdpbGRjYXJkLFxyXG4gIGFzdGVyaXNrLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHNlcGFyYXRvcixcclxuICB0ZXJtaW5hdG9yLFxyXG4gIHZlcnRpY2FsQmFyLFxyXG4gIG9wZW5CcmFja2V0LFxyXG4gIGNsb3NlQnJhY2tldCxcclxuICBxdWVzdGlvbk1hcmssXHJcbiAgZXhjbGFtYXRpb25NYXJrLFxyXG4gIE5PX1dISVRFU1BBQ0UsXHJcbiAgRU5EX09GX0xJTkVcclxufTtcclxuIl0sIm5hbWVzIjpbInBsdXMiLCJ3aWxkY2FyZCIsImFzdGVyaXNrIiwiZWxsaXBzaXMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwidmVydGljYWxCYXIiLCJvcGVuQnJhY2tldCIsImNsb3NlQnJhY2tldCIsInF1ZXN0aW9uTWFyayIsImV4Y2xhbWF0aW9uTWFyayIsIk5PX1dISVRFU1BBQ0UiLCJFTkRfT0ZfTElORSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxJQUFJO2VBQUpBLElBQUk7O0lBQ0pDLFFBQVE7ZUFBUkEsUUFBUTs7SUFDUkMsUUFBUTtlQUFSQSxRQUFROztJQUNSQyxRQUFRO2VBQVJBLFFBQVE7O0lBQ1JDLFNBQVM7ZUFBVEEsU0FBUzs7SUFDVEMsVUFBVTtlQUFWQSxVQUFVOztJQUNWQyxXQUFXO2VBQVhBLFdBQVc7O0lBQ1hDLFdBQVc7ZUFBWEEsV0FBVzs7SUFDWEMsWUFBWTtlQUFaQSxZQUFZOztJQUNaQyxZQUFZO2VBQVpBLFlBQVk7O0lBQ1pDLGVBQWU7ZUFBZkEsZUFBZTs7SUFDZkMsYUFBYTtlQUFiQSxhQUFhOztJQUNiQyxXQUFXO2VBQVhBLFdBQVc7O0lBRXhCLE9BY0U7ZUFkRixRQWNFOzs7QUE1QkssSUFBTVosSUFBSSxHQUFHLEdBQUcsQUFBQztBQUNqQixJQUFNQyxRQUFRLEdBQUcsR0FBRyxBQUFDO0FBQ3JCLElBQU1DLFFBQVEsR0FBRyxHQUFHLEFBQUM7QUFDckIsSUFBTUMsUUFBUSxHQUFHLEtBQUssQUFBQztBQUN2QixJQUFNQyxTQUFTLEdBQUcsS0FBSyxBQUFDO0FBQ3hCLElBQU1DLFVBQVUsR0FBRyxHQUFHLEFBQUM7QUFDdkIsSUFBTUMsV0FBVyxHQUFHLEdBQUcsQUFBQztBQUN4QixJQUFNQyxXQUFXLEdBQUcsR0FBRyxBQUFDO0FBQ3hCLElBQU1DLFlBQVksR0FBRyxHQUFHLEFBQUM7QUFDekIsSUFBTUMsWUFBWSxHQUFHLEdBQUcsQUFBQztBQUN6QixJQUFNQyxlQUFlLEdBQUcsR0FBRyxBQUFDO0FBQzVCLElBQU1DLGFBQWEsR0FBRyxpQkFBaUIsQUFBQztBQUN4QyxJQUFNQyxXQUFXLEdBQUcsZUFBZSxBQUFDO0lBRTNDLFFBY0UsR0FkYTtJQUNiWixJQUFJLEVBQUpBLElBQUk7SUFDSkMsUUFBUSxFQUFSQSxRQUFRO0lBQ1JDLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxRQUFRLEVBQVJBLFFBQVE7SUFDUkMsU0FBUyxFQUFUQSxTQUFTO0lBQ1RDLFVBQVUsRUFBVkEsVUFBVTtJQUNWQyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsV0FBVyxFQUFYQSxXQUFXO0lBQ1hDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxXQUFXLEVBQVhBLFdBQVc7Q0FDWiJ9