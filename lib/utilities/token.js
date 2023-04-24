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
    tokenAsHTML: function() {
        return tokenAsHTML;
    },
    inCommentFromTokenAndInComment: function() {
        return inCommentFromTokenAndInComment;
    }
});
var _content = require("../utilities/content");
function tokenAsHTML(token) {
    var type = token.getType(), content = token.getContent(), sanitisedContent = (0, _content.sanitiseContent)(content), className = type, html = '<span class="'.concat(className, '">').concat(sanitisedContent, "</span>");
    return html;
}
function inCommentFromTokenAndInComment(token, inComment) {
    var tokenCommentToken = token.isCommentToken();
    if (tokenCommentToken) {
        var commentToken = token, commentTokenInCommentPreserving = commentToken.isInCommentPreserving();
        inComment = commentTokenInCommentPreserving; ///
    }
    return inComment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Bc0hUTUwodG9rZW4pIHtcbiAgY29uc3QgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZENvbnRlbnR9PC9zcGFuPmA7XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQodG9rZW4sIGluQ29tbWVudCkge1xuICBjb25zdCB0b2tlbkNvbW1lbnRUb2tlbiA9IHRva2VuLmlzQ29tbWVudFRva2VuKCk7XG5cbiAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XG4gICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW4sIC8vL1xuICAgICAgICAgIGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmcgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCk7XG5cbiAgICBpbkNvbW1lbnQgPSBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nOyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5Db21tZW50O1xufVxuIl0sIm5hbWVzIjpbInRva2VuQXNIVE1MIiwiaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50IiwidG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImNsYXNzTmFtZSIsImh0bWwiLCJpbkNvbW1lbnQiLCJ0b2tlbkNvbW1lbnRUb2tlbiIsImlzQ29tbWVudFRva2VuIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyIsImlzSW5Db21tZW50UHJlc2VydmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxXQUFXO2VBQVhBOztJQVVBQyw4QkFBOEI7ZUFBOUJBOzs7dUJBWmdCO0FBRXpCLFNBQVNELFlBQVlFLEtBQUssRUFBRTtJQUNqQyxJQUFNQyxPQUFPRCxNQUFNRSxPQUFPLElBQ3BCQyxVQUFVSCxNQUFNSSxVQUFVLElBQzFCQyxtQkFBbUJDLElBQUFBLHdCQUFlLEVBQUNILFVBQ25DSSxZQUFZTixNQUNaTyxPQUFPLEFBQUMsZ0JBQTZCSCxPQUFkRSxXQUFVLE1BQXFCLE9BQWpCRixrQkFBaUI7SUFFNUQsT0FBT0c7QUFDVDtBQUVPLFNBQVNULCtCQUErQkMsS0FBSyxFQUFFUyxTQUFTLEVBQUU7SUFDL0QsSUFBTUMsb0JBQW9CVixNQUFNVyxjQUFjO0lBRTlDLElBQUlELG1CQUFtQjtRQUNyQixJQUFNRSxlQUFlWixPQUNmYSxrQ0FBa0NELGFBQWFFLHFCQUFxQjtRQUUxRUwsWUFBWUksaUNBQWtDLEdBQUc7SUFDbkQsQ0FBQztJQUVELE9BQU9KO0FBQ1QifQ==