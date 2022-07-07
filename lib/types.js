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
    default: function() {
        return _default;
    },
    typeType: function() {
        return typeType;
    },
    nameType: function() {
        return nameType;
    },
    commentType: function() {
        return commentType;
    },
    endOfLineType: function() {
        return endOfLineType;
    },
    whitespaceType: function() {
        return whitespaceType;
    },
    stringLiteralType: function() {
        return stringLiteralType;
    },
    endOfLineCommentType: function() {
        return endOfLineCommentType;
    },
    singleLineCommentType: function() {
        return singleLineCommentType;
    },
    regularExpressionType: function() {
        return regularExpressionType;
    },
    endOfMultiLineCommentType: function() {
        return endOfMultiLineCommentType;
    },
    startOfMultiLineCommentType: function() {
        return startOfMultiLineCommentType;
    },
    middleOfMultiLineCommentType: function() {
        return middleOfMultiLineCommentType;
    }
});
var typeType = "type";
var nameType = "name";
var commentType = "comment";
var endOfLineType = "end-of-line";
var whitespaceType = "whitespace";
var stringLiteralType = "string-literal";
var endOfLineCommentType = "".concat(endOfLineType, " ").concat(commentType);
var singleLineCommentType = "single-line ".concat(commentType);
var regularExpressionType = "regular-expression";
var endOfMultiLineCommentType = "end-of-multi-line ".concat(commentType);
var startOfMultiLineCommentType = "start-of-multi-line ".concat(commentType);
var middleOfMultiLineCommentType = "middle-of-multi-line ".concat(commentType);
var _default = {
    typeType: typeType,
    nameType: nameType,
    commentType: commentType,
    endOfLineType: endOfLineType,
    whitespaceType: whitespaceType,
    stringLiteralType: stringLiteralType,
    endOfLineCommentType: endOfLineCommentType,
    singleLineCommentType: singleLineCommentType,
    regularExpressionType: regularExpressionType,
    endOfMultiLineCommentType: endOfMultiLineCommentType,
    startOfMultiLineCommentType: startOfMultiLineCommentType,
    middleOfMultiLineCommentType: middleOfMultiLineCommentType
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVUeXBlID0gXCJ0eXBlXCI7XG5leHBvcnQgY29uc3QgbmFtZVR5cGUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBjb21tZW50VHlwZSA9IFwiY29tbWVudFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVR5cGUgPSBcImVuZC1vZi1saW5lXCI7XG5leHBvcnQgY29uc3Qgd2hpdGVzcGFjZVR5cGUgPSBcIndoaXRlc3BhY2VcIjtcbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsVHlwZSA9IFwic3RyaW5nLWxpdGVyYWxcIjtcbmV4cG9ydCBjb25zdCBlbmRPZkxpbmVDb21tZW50VHlwZSA9IGAke2VuZE9mTGluZVR5cGV9ICR7Y29tbWVudFR5cGV9YDtcbmV4cG9ydCBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFR5cGUgPSBgc2luZ2xlLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSA9IFwicmVndWxhci1leHByZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSA9IGBlbmQtb2YtbXVsdGktbGluZSAke2NvbW1lbnRUeXBlfWA7XG5leHBvcnQgY29uc3Qgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlID0gYHN0YXJ0LW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgPSBgbWlkZGxlLW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVUeXBlLFxuICBuYW1lVHlwZSxcbiAgY29tbWVudFR5cGUsXG4gIGVuZE9mTGluZVR5cGUsXG4gIHdoaXRlc3BhY2VUeXBlLFxuICBzdHJpbmdMaXRlcmFsVHlwZSxcbiAgZW5kT2ZMaW5lQ29tbWVudFR5cGUsXG4gIHNpbmdsZUxpbmVDb21tZW50VHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25UeXBlLFxuICBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlLFxuICBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUsXG4gIG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGVcbn07XG4iXSwibmFtZXMiOlsidHlwZVR5cGUiLCJuYW1lVHlwZSIsImNvbW1lbnRUeXBlIiwiZW5kT2ZMaW5lVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJlbmRPZkxpbmVDb21tZW50VHlwZSIsInNpbmdsZUxpbmVDb21tZW50VHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsImVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRUFBLFFBQVE7ZUFBUkEsUUFBUTs7SUFDUkMsUUFBUTtlQUFSQSxRQUFROztJQUNSQyxXQUFXO2VBQVhBLFdBQVc7O0lBQ1hDLGFBQWE7ZUFBYkEsYUFBYTs7SUFDYkMsY0FBYztlQUFkQSxjQUFjOztJQUNkQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFDakJDLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQUNwQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBQ3JCQyxxQkFBcUI7ZUFBckJBLHFCQUFxQjs7SUFDckJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUN6QkMsMkJBQTJCO2VBQTNCQSwyQkFBMkI7O0lBQzNCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7O0FBWGxDLElBQU1YLFFBQVEsR0FBRyxNQUFNLEFBQUM7QUFDeEIsSUFBTUMsUUFBUSxHQUFHLE1BQU0sQUFBQztBQUN4QixJQUFNQyxXQUFXLEdBQUcsU0FBUyxBQUFDO0FBQzlCLElBQU1DLGFBQWEsR0FBRyxhQUFhLEFBQUM7QUFDcEMsSUFBTUMsY0FBYyxHQUFHLFlBQVksQUFBQztBQUNwQyxJQUFNQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQUFBQztBQUMzQyxJQUFNQyxvQkFBb0IsR0FBRyxBQUFDLEVBQUEsQ0FBbUJKLE1BQVcsQ0FBNUJDLGFBQWEsRUFBQyxHQUFDLENBQWMsQ0FBQSxNQUFBLENBQVpELFdBQVcsQ0FBRSxBQUFDO0FBQy9ELElBQU1LLHFCQUFxQixHQUFHLEFBQUMsY0FBWSxDQUFjLE1BQUEsQ0FBWkwsV0FBVyxDQUFFLEFBQUM7QUFDM0QsSUFBTU0scUJBQXFCLEdBQUcsb0JBQW9CLEFBQUM7QUFDbkQsSUFBTUMseUJBQXlCLEdBQUcsQUFBQyxvQkFBa0IsQ0FBYyxNQUFBLENBQVpQLFdBQVcsQ0FBRSxBQUFDO0FBQ3JFLElBQU1RLDJCQUEyQixHQUFHLEFBQUMsc0JBQW9CLENBQWMsTUFBQSxDQUFaUixXQUFXLENBQUUsQUFBQztBQUN6RSxJQUFNUyw0QkFBNEIsR0FBRyxBQUFDLHVCQUFxQixDQUFjLE1BQUEsQ0FBWlQsV0FBVyxDQUFFLEFBQUM7ZUFFbkU7SUFDYkYsUUFBUSxFQUFSQSxRQUFRO0lBQ1JDLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNqQkMsb0JBQW9CLEVBQXBCQSxvQkFBb0I7SUFDcEJDLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3JCQyxxQkFBcUIsRUFBckJBLHFCQUFxQjtJQUNyQkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLDJCQUEyQixFQUEzQkEsMkJBQTJCO0lBQzNCQyw0QkFBNEIsRUFBNUJBLDRCQUE0QjtDQUM3QiJ9