"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Token;
    }
});
const _necessary = require("necessary");
const _content = require("./utilities/content");
const _types = require("./types");
const { first } = _necessary.arrayUtilities, { strlen } = _necessary.stringUtilities;
class Token {
    constructor(type, content, significant){
        this.type = type;
        this.content = content;
        this.significant = significant;
    }
    getType() {
        return this.type;
    }
    getContent() {
        return this.content;
    }
    getContentLength(naive = false) {
        const contentLength = naive ? this.content.length : strlen(this.content); ///
        return contentLength;
    }
    isSignificant() {
        return this.significant;
    }
    isCommentToken() {
        const typeIncludesCommentType = this.type.includes(_types.commentType), commentToken = typeIncludesCommentType; ///
        return commentToken;
    }
    isEndOfLineToken() {
        const typeEndOfLineType = this.type.includes(_types.endOfLineType), endOfLineToken = typeEndOfLineType; ///
        return endOfLineToken;
    }
    isWhitespaceToken() {
        const typeWhitespaceType = this.type === _types.whitespaceType, whitespaceToken = typeWhitespaceType; ///
        return whitespaceToken;
    }
    match(token) {
        let matches = false;
        if (token !== null) {
            const type = token.getType(), content = token.getContent(), significant = token.isSignificant();
            matches = this.type === type && this.content === content && this.significant === significant;
        }
        return matches;
    }
    asHTML() {
        const className = this.type, sanitisedContent = (0, _content.sanitiseContent)(this.content), html = `<span class="${className}">${sanitisedContent}</span>`;
        return html;
    }
    clone(...remainingArguments) {
        const Class = this.constructor, type = this.type, content = this.content, significant = this.significant, token = new Class(type, content, significant, ...remainingArguments);
        return token;
    }
    static match(Class, content, significant, ...remainingArguments) {
        let token = null;
        const { regularExpression } = Class, matches = content.match(regularExpression);
        if (matches !== null) {
            const { index } = matches;
            if (index === 0) {
                const firstMatch = first(matches);
                content = firstMatch; ///
                const contentLength = content.length; ///
                if (contentLength > 0) {
                    const { type } = Class;
                    token = new Class(type, content, significant, ...remainingArguments);
                }
            }
        }
        return token;
    }
    static fromContent(Class, content, significant, ...remainingArguments) {
        const { type } = Class, token = new Class(type, content, significant, ...remainingArguments);
        return token;
    }
    static fromContentAndType(Class, content, type, significant, ...remainingArguments) {
        return new Class(type, content, significant, ...remainingArguments);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgc2FuaXRpc2VDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbW1lbnRUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdHJsZW4gfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnRMZW5ndGgobmFpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBuYWl2ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Lmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJsZW4odGhpcy5jb250ZW50KTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUuaW5jbHVkZXMoZW5kT2ZMaW5lVHlwZSkpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgbWF0Y2godG9rZW4pIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgLy8vXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudCh0aGlzLmNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZENvbnRlbnR9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgc2lnbmlmaWNhbnQgPSB0aGlzLnNpZ25pZmljYW50LFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaGVzO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7IC8vL1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3M7XG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb2tlbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzdHJsZW4iLCJzdHJpbmdVdGlsaXRpZXMiLCJ0eXBlIiwiY29udGVudCIsInNpZ25pZmljYW50IiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRDb250ZW50TGVuZ3RoIiwibmFpdmUiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiaXNTaWduaWZpY2FudCIsImlzQ29tbWVudFRva2VuIiwidHlwZUluY2x1ZGVzQ29tbWVudFR5cGUiLCJpbmNsdWRlcyIsImNvbW1lbnRUeXBlIiwiY29tbWVudFRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInR5cGVFbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsIm1hdGNoIiwidG9rZW4iLCJtYXRjaGVzIiwiYXNIVE1MIiwiY2xhc3NOYW1lIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImh0bWwiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwicmVndWxhckV4cHJlc3Npb24iLCJpbmRleCIsImZpcnN0TWF0Y2giLCJmcm9tQ29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7OzsyQkFSMkI7eUJBRWhCO3VCQUMyQjtBQUUzRCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYyxFQUMxQixFQUFFQyxNQUFNLEVBQUUsR0FBR0MsMEJBQWU7QUFFbkIsTUFBTUo7SUFDbkIsWUFBWUssSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsQ0FBRTtRQUN0QyxJQUFJLENBQUNGLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztJQUNyQjtJQUVBSSxpQkFBaUJDLFFBQVEsS0FBSyxFQUFFO1FBQzlCLE1BQU1DLGdCQUFnQkQsUUFDRSxJQUFJLENBQUNMLE9BQU8sQ0FBQ08sTUFBTSxHQUNqQlYsT0FBTyxJQUFJLENBQUNHLE9BQU8sR0FBRyxHQUFHO1FBRW5ELE9BQU9NO0lBQ1Q7SUFFQUUsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNQLFdBQVc7SUFDekI7SUFFQVEsaUJBQWlCO1FBQ2YsTUFBTUMsMEJB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