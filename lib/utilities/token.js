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
function tokenAsHTML(token) {
    var type = token.getType(), content = token.getContent(), className = type, html = '<span class="'.concat(className, '">').concat(content, "</span>");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbkFzSFRNTCh0b2tlbikge1xuICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBjbGFzc05hbWUgPSB0eXBlLCAvLy9cbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7Y29udGVudH08L3NwYW4+YDtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCh0b2tlbiwgaW5Db21tZW50KSB7XG4gIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcblxuICBpZiAodG9rZW5Db21tZW50VG9rZW4pIHtcbiAgICBjb25zdCBjb21tZW50VG9rZW4gPSB0b2tlbiwgLy8vXG4gICAgICAgICAgY29tbWVudFRva2VuSW5Db21tZW50UHJlc2VydmluZyA9IGNvbW1lbnRUb2tlbi5pc0luQ29tbWVudFByZXNlcnZpbmcoKTtcblxuICAgIGluQ29tbWVudCA9IGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmc7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbkNvbW1lbnQ7XG59XG4iXSwibmFtZXMiOlsidG9rZW5Bc0hUTUwiLCJpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQiLCJ0b2tlbiIsInR5cGUiLCJnZXRUeXBlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjbGFzc05hbWUiLCJodG1sIiwiaW5Db21tZW50IiwidG9rZW5Db21tZW50VG9rZW4iLCJpc0NvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmciLCJpc0luQ29tbWVudFByZXNlcnZpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsV0FBVztlQUFYQTs7SUFTQUMsOEJBQThCO2VBQTlCQTs7O0FBVFQsU0FBU0QsWUFBWUUsS0FBSyxFQUFFO0lBQ2pDLElBQU1DLE9BQU9ELE1BQU1FLE9BQU8sSUFDcEJDLFVBQVVILE1BQU1JLFVBQVUsSUFDMUJDLFlBQVlKLE1BQ1pLLE9BQU8sQUFBQyxnQkFBNkJILE9BQWRFLFdBQVUsTUFBWSxPQUFSRixTQUFRO0lBRW5ELE9BQU9HO0FBQ1Q7QUFFTyxTQUFTUCwrQkFBK0JDLEtBQUssRUFBRU8sU0FBUyxFQUFFO0lBQy9ELElBQU1DLG9CQUFvQlIsTUFBTVMsY0FBYztJQUU5QyxJQUFJRCxtQkFBbUI7UUFDckIsSUFBTUUsZUFBZVYsT0FDZlcsa0NBQWtDRCxhQUFhRSxxQkFBcUI7UUFFMUVMLFlBQVlJLGlDQUFrQyxHQUFHO0lBQ25ELENBQUM7SUFFRCxPQUFPSjtBQUNUIn0=