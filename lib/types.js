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
    typeType: function() {
        return typeType;
    },
    nameType: function() {
        return nameType;
    },
    numberType: function() {
        return numberType;
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
    },
    default: function() {
        return _default;
    }
});
var typeType = "type";
var nameType = "name";
var numberType = "number";
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
    numberType: numberType,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVUeXBlID0gXCJ0eXBlXCI7XG5leHBvcnQgY29uc3QgbmFtZVR5cGUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBudW1iZXJUeXBlID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBjb21tZW50VHlwZSA9IFwiY29tbWVudFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVR5cGUgPSBcImVuZC1vZi1saW5lXCI7XG5leHBvcnQgY29uc3Qgd2hpdGVzcGFjZVR5cGUgPSBcIndoaXRlc3BhY2VcIjtcbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsVHlwZSA9IFwic3RyaW5nLWxpdGVyYWxcIjtcbmV4cG9ydCBjb25zdCBlbmRPZkxpbmVDb21tZW50VHlwZSA9IGAke2VuZE9mTGluZVR5cGV9ICR7Y29tbWVudFR5cGV9YDtcbmV4cG9ydCBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFR5cGUgPSBgc2luZ2xlLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSA9IFwicmVndWxhci1leHByZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSA9IGBlbmQtb2YtbXVsdGktbGluZSAke2NvbW1lbnRUeXBlfWA7XG5leHBvcnQgY29uc3Qgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlID0gYHN0YXJ0LW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgPSBgbWlkZGxlLW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVUeXBlLFxuICBuYW1lVHlwZSxcbiAgbnVtYmVyVHlwZSxcbiAgY29tbWVudFR5cGUsXG4gIGVuZE9mTGluZVR5cGUsXG4gIHdoaXRlc3BhY2VUeXBlLFxuICBzdHJpbmdMaXRlcmFsVHlwZSxcbiAgZW5kT2ZMaW5lQ29tbWVudFR5cGUsXG4gIHNpbmdsZUxpbmVDb21tZW50VHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25UeXBlLFxuICBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlLFxuICBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUsXG4gIG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGVcbn07XG4iXSwibmFtZXMiOlsidHlwZVR5cGUiLCJuYW1lVHlwZSIsIm51bWJlclR5cGUiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsInN0cmluZ0xpdGVyYWxUeXBlIiwiZW5kT2ZMaW5lQ29tbWVudFR5cGUiLCJzaW5nbGVMaW5lQ29tbWVudFR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblR5cGUiLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwic3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwibWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWFBLFFBQVE7ZUFBUkE7O0lBQ0FDLFFBQVE7ZUFBUkE7O0lBQ0FDLFVBQVU7ZUFBVkE7O0lBQ0FDLFdBQVc7ZUFBWEE7O0lBQ0FDLGFBQWE7ZUFBYkE7O0lBQ0FDLGNBQWM7ZUFBZEE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLG9CQUFvQjtlQUFwQkE7O0lBQ0FDLHFCQUFxQjtlQUFyQkE7O0lBQ0FDLHFCQUFxQjtlQUFyQkE7O0lBQ0FDLHlCQUF5QjtlQUF6QkE7O0lBQ0FDLDJCQUEyQjtlQUEzQkE7O0lBQ0FDLDRCQUE0QjtlQUE1QkE7O0lBRWIsT0FjRTtlQWRGOzs7QUFkTyxJQUFNWixXQUFXO0FBQ2pCLElBQU1DLFdBQVc7QUFDakIsSUFBTUMsYUFBYTtBQUNuQixJQUFNQyxjQUFjO0FBQ3BCLElBQU1DLGdCQUFnQjtBQUN0QixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsb0JBQW9CO0FBQzFCLElBQU1DLHVCQUF1QixBQUFDLEdBQW1CSixPQUFqQkMsZUFBYyxLQUFlLE9BQVpEO0FBQ2pELElBQU1LLHdCQUF3QixBQUFDLGVBQTBCLE9BQVpMO0FBQzdDLElBQU1NLHdCQUF3QjtBQUM5QixJQUFNQyw0QkFBNEIsQUFBQyxxQkFBZ0MsT0FBWlA7QUFDdkQsSUFBTVEsOEJBQThCLEFBQUMsdUJBQWtDLE9BQVpSO0FBQzNELElBQU1TLCtCQUErQixBQUFDLHdCQUFtQyxPQUFaVDtJQUVwRSxXQUFlO0lBQ2JILFVBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FDLGVBQUFBO0lBQ0FDLGdCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUMsc0JBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBQyx1QkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7QUFDRiJ9