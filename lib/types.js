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
    get commentType () {
        return commentType;
    },
    get default () {
        return _default;
    },
    get endOfLineCommentType () {
        return endOfLineCommentType;
    },
    get endOfLineType () {
        return endOfLineType;
    },
    get endOfMultiLineCommentType () {
        return endOfMultiLineCommentType;
    },
    get middleOfMultiLineCommentType () {
        return middleOfMultiLineCommentType;
    },
    get nameType () {
        return nameType;
    },
    get numberType () {
        return numberType;
    },
    get regularExpressionType () {
        return regularExpressionType;
    },
    get singleLineCommentType () {
        return singleLineCommentType;
    },
    get startOfMultiLineCommentType () {
        return startOfMultiLineCommentType;
    },
    get stringLiteralType () {
        return stringLiteralType;
    },
    get typeType () {
        return typeType;
    },
    get whitespaceType () {
        return whitespaceType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVUeXBlID0gXCJ0eXBlXCI7XG5leHBvcnQgY29uc3QgbmFtZVR5cGUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBudW1iZXJUeXBlID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBjb21tZW50VHlwZSA9IFwiY29tbWVudFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVR5cGUgPSBcImVuZC1vZi1saW5lXCI7XG5leHBvcnQgY29uc3Qgd2hpdGVzcGFjZVR5cGUgPSBcIndoaXRlc3BhY2VcIjtcbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsVHlwZSA9IFwic3RyaW5nLWxpdGVyYWxcIjtcbmV4cG9ydCBjb25zdCBlbmRPZkxpbmVDb21tZW50VHlwZSA9IGAke2VuZE9mTGluZVR5cGV9ICR7Y29tbWVudFR5cGV9YDtcbmV4cG9ydCBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFR5cGUgPSBgc2luZ2xlLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSA9IFwicmVndWxhci1leHByZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSA9IGBlbmQtb2YtbXVsdGktbGluZSAke2NvbW1lbnRUeXBlfWA7XG5leHBvcnQgY29uc3Qgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUeXBlID0gYHN0YXJ0LW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuZXhwb3J0IGNvbnN0IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgPSBgbWlkZGxlLW9mLW11bHRpLWxpbmUgJHtjb21tZW50VHlwZX1gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVUeXBlLFxuICBuYW1lVHlwZSxcbiAgbnVtYmVyVHlwZSxcbiAgY29tbWVudFR5cGUsXG4gIGVuZE9mTGluZVR5cGUsXG4gIHdoaXRlc3BhY2VUeXBlLFxuICBzdHJpbmdMaXRlcmFsVHlwZSxcbiAgZW5kT2ZMaW5lQ29tbWVudFR5cGUsXG4gIHNpbmdsZUxpbmVDb21tZW50VHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25UeXBlLFxuICBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlLFxuICBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGUsXG4gIG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGVcbn07XG4iXSwibmFtZXMiOlsiY29tbWVudFR5cGUiLCJlbmRPZkxpbmVDb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIiwibWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSIsIm5hbWVUeXBlIiwibnVtYmVyVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VHlwZSIsInN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSIsInN0cmluZ0xpdGVyYWxUeXBlIiwidHlwZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBS2FBO2VBQUFBOztRQVdiO2VBQUE7O1FBUGFDO2VBQUFBOztRQUhBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQVhBQztlQUFBQTs7UUFDQUM7ZUFBQUE7O1FBT0FDO2VBQUFBOztRQURBQztlQUFBQTs7UUFHQUM7ZUFBQUE7O1FBTEFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFLQUM7ZUFBQUE7OztBQUxOLElBQU1ELFdBQVc7QUFDakIsSUFBTU4sV0FBVztBQUNqQixJQUFNQyxhQUFhO0FBQ25CLElBQU1OLGNBQWM7QUFDcEIsSUFBTUUsZ0JBQWdCO0FBQ3RCLElBQU1VLGlCQUFpQjtBQUN2QixJQUFNRixvQkFBb0I7QUFDMUIsSUFBTVQsdUJBQXVCLEFBQUMsR0FBbUJELE9BQWpCRSxlQUFjLEtBQWUsT0FBWkY7QUFDakQsSUFBTVEsd0JBQXdCLEFBQUMsZUFBMEIsT0FBWlI7QUFDN0MsSUFBTU8sd0JBQXdCO0FBQzlCLElBQU1KLDRCQUE0QixBQUFDLHFCQUFnQyxPQUFaSDtBQUN2RCxJQUFNUyw4QkFBOEIsQUFBQyx1QkFBa0MsT0FBWlQ7QUFDM0QsSUFBTUksK0JBQStCLEFBQUMsd0JBQW1DLE9BQVpKO0lBRXBFLFdBQWU7SUFDYlcsVUFBQUE7SUFDQU4sVUFBQUE7SUFDQUMsWUFBQUE7SUFDQU4sYUFBQUE7SUFDQUUsZUFBQUE7SUFDQVUsZ0JBQUFBO0lBQ0FGLG1CQUFBQTtJQUNBVCxzQkFBQUE7SUFDQU8sdUJBQUFBO0lBQ0FELHVCQUFBQTtJQUNBSiwyQkFBQUE7SUFDQU0sNkJBQUFBO0lBQ0FMLDhCQUFBQTtBQUNGIn0=