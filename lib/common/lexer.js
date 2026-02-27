"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommonLexer;
    }
});
const _constants = require("../constants");
const _token = require("../utilities/token");
const _lexer = require("../utilities/lexer");
class CommonLexer {
    constructor(rules, InCommentClasses, NotInCommentClasses){
        this.rules = rules;
        this.InCommentClasses = InCommentClasses;
        this.NotInCommentClasses = NotInCommentClasses;
    }
    getRules() {
        return this.rules;
    }
    getInCommentClasses() {
        return this.InCommentClasses;
    }
    getNotInCommentClasses() {
        return this.NotInCommentClasses;
    }
    tokenise(content, inComment = false) {
        const tokens = [];
        while(content !== _constants.EMPTY_STRING){
            let token = null;
            const Classes = inComment ? this.InCommentClasses : this.NotInCommentClasses;
            Classes.some((Class)=>{
                if (Class !== null) {
                    token = Class.match(content);
                    if (token !== null) {
                        return true;
                    }
                }
            });
            if (token === null) {
                let significantToken = null;
                this.rules.some((rule)=>{
                    significantToken = rule.match(content);
                    if (significantToken !== null) {
                        token = significantToken; ///
                        return true;
                    }
                });
            }
            if (token === null) {
                throw new Error(`The content '${content}' cannot be tokenised.`);
            }
            tokens.push(token);
            inComment = (0, _token.inCommentFromTokenAndInComment)(token, inComment);
            const naive = true, tokenContentLength = token.getContentLength(naive), start = tokenContentLength; ///
            content = content.substring(start);
        }
        return tokens;
    }
    static fromNothing(Class) {
        const { entries } = Class, rules = (0, _lexer.rulesFromEntries)(entries), lexer = (0, _lexer.lexerFromRules)(Class, rules);
        return lexer;
    }
    static fromRules(Class, rules) {
        const lexer = (0, _lexer.lexerFromRules)(Class, rules);
        return lexer;
    }
    static fromEntries(Class, entries) {
        const rules = (0, _lexer.rulesFromEntries)(entries), lexer = (0, _lexer.lexerFromRules)(Class, rules);
        return lexer;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGluQ29tbWVudEZyb21Ub2tlbkFuZEluQ29tbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5cIjtcclxuaW1wb3J0IHsgcnVsZXNGcm9tRW50cmllcywgbGV4ZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xleGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIEluQ29tbWVudENsYXNzZXMsIE5vdEluQ29tbWVudENsYXNzZXMpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuSW5Db21tZW50Q2xhc3NlcyA9IEluQ29tbWVudENsYXNzZXM7XHJcbiAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXMgPSBOb3RJbkNvbW1lbnRDbGFzc2VzO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5Db21tZW50Q2xhc3NlcygpIHtcclxuICAgIHJldHVybiB0aGlzLkluQ29tbWVudENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXROb3RJbkNvbW1lbnRDbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTm90SW5Db21tZW50Q2xhc3NlcztcclxuICB9XHJcblxyXG4gIHRva2VuaXNlKGNvbnRlbnQsIGluQ29tbWVudCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XHJcbiAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBDbGFzc2VzID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbkNvbW1lbnRDbGFzc2VzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5vdEluQ29tbWVudENsYXNzZXM7XHJcblxyXG4gICAgICBDbGFzc2VzLnNvbWUoKENsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKENsYXNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IENsYXNzLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bGVzLnNvbWUoKHJ1bGUpID0+IHtcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29udGVudCAnJHtjb250ZW50fScgY2Fubm90IGJlIHRva2VuaXNlZC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgaW5Db21tZW50ID0gaW5Db21tZW50RnJvbVRva2VuQW5kSW5Db21tZW50KHRva2VuLCBpbkNvbW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgbmFpdmUgPSB0cnVlLFxyXG4gICAgICAgICAgICB0b2tlbkNvbnRlbnRMZW5ndGggPSB0b2tlbi5nZXRDb250ZW50TGVuZ3RoKG5haXZlKSxcclxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbkNvbnRlbnRMZW5ndGg7IC8vL1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENsYXNzLFxyXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xyXG5cclxuICAgIHJldHVybiBsZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGxleGVyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJydWxlcyIsIkluQ29tbWVudENsYXNzZXMiLCJOb3RJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0UnVsZXMiLCJnZXRJbkNvbW1lbnRDbGFzc2VzIiwiZ2V0Tm90SW5Db21tZW50Q2xhc3NlcyIsInRva2VuaXNlIiwiY29udGVudCIsImluQ29tbWVudCIsInRva2VucyIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiQ2xhc3NlcyIsInNvbWUiLCJDbGFzcyIsIm1hdGNoIiwic2lnbmlmaWNhbnRUb2tlbiIsInJ1bGUiLCJFcnJvciIsInB1c2giLCJpbkNvbW1lbnRGcm9tVG9rZW5BbmRJbkNvbW1lbnQiLCJuYWl2ZSIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJzdGFydCIsInN1YnN0cmluZyIsImZyb21Ob3RoaW5nIiwiZW50cmllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlciIsImxleGVyRnJvbVJ1bGVzIiwiZnJvbVJ1bGVzIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSlE7dUJBQ2tCO3VCQUNFO0FBRWxDLE1BQU1BO0lBQ25CLFlBQVlDLEtBQUssRUFBRUMsZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFFO1FBQ3hELElBQUksQ0FBQ0YsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO0lBQzdCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtJQUM5QjtJQUVBSSx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUNILG1CQUFtQjtJQUNqQztJQUVBSSxTQUFTQyxPQUFPLEVBQUVDLFlBQVksS0FBSyxFQUFFO1FBQ25DLE1BQU1DLFNBQVMsRUFBRTtRQUVqQixNQUFPRixZQUFZRyx1QkFBWSxDQUFFO1lBQy9CLElBQUlDLFFBQVE7WUFFWixNQUFNQyxVQUFVSixZQUNFLElBQUksQ0FBQ1AsZ0JBQWdCLEdBQ25CLElBQUksQ0FBQ0MsbUJBQW1CO1lBRTVDVSxRQUFRQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ1osSUFBSUEsVUFBVSxNQUFNO29CQUNsQkgsUUFBUUcsTUFBTUMsS0FBSyxDQUFDUjtvQkFFcEIsSUFBSUksVUFBVSxNQUFNO3dCQUNsQixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJQSxVQUFVLE1BQU07Z0JBQ2xCLElBQUlLLG1CQUFtQjtnQkFFdkIsSUFBSSxDQUFDaEIsS0FBSyxDQUFDYSxJQUFJLENBQUMsQ0FBQ0k7b0JBQ2ZELG1CQUFtQkMsS0FBS0YsS0FBSyxDQUFDUjtvQkFFOUIsSUFBSVMscUJBQXFCLE1BQU07d0JBQzdCTCxRQUFRSyxrQkFBa0IsR0FBRzt3QkFFN0IsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1lBRUEsSUFBSUwsVUFBVSxNQUFNO2dCQUNsQixNQUFNLElBQUlPLE1BQU0sQ0FBQyxhQUFhLEVBQUVYLFFBQVEsc0JBQXNCLENBQUM7WUFDakU7WUFFQUUsT0FBT1UsSUFBSSxDQUFDUjtZQUVaSCxZQUFZWSxJQUFBQSxxQ0FBOEIsRUFBQ1QsT0FBT0g7WUFFbEQsTUFBTWEsUUFBUSxNQUNSQyxxQkFBcUJYLE1BQU1ZLGdCQUFnQixDQUFDRixRQUM1Q0csUUFBUUYsb0JBQW9CLEdBQUc7WUFFckNmLFVBQVVBLFFBQVFrQixTQUFTLENBQUNEO1FBQzlCO1FBRUEsT0FBT2Y7SUFDVDtJQUVBLE9BQU9pQixZQUFZWixLQUFLLEVBQUU7UUFDeEIsTUFBTSxFQUFFYSxPQUFPLEVBQUUsR0FBR2IsT0FDZGQsUUFBUTRCLElBQUFBLHVCQUFnQixFQUFDRCxVQUN6QkUsUUFBUUMsSUFBQUEscUJBQWMsRUFBQ2hCLE9BQU9kO1FBRXBDLE9BQU82QjtJQUNUO0lBRUEsT0FBT0UsVUFBVWpCLEtBQUssRUFBRWQsS0FBSyxFQUFFO1FBQzdCLE1BQU02QixRQUFRQyxJQUFBQSxxQkFBYyxFQUFDaEIsT0FBT2Q7UUFFcEMsT0FBTzZCO0lBQ1Q7SUFFQSxPQUFPRyxZQUFZbEIsS0FBSyxFQUFFYSxPQUFPLEVBQUU7UUFDakMsTUFBTTNCLFFBQVE0QixJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFDekJFLFFBQVFDLElBQUFBLHFCQUFjLEVBQUNoQixPQUFPZDtRQUVwQyxPQUFPNkI7SUFDVDtBQUNGIn0=