"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTokenInCommentPreservingToken = isTokenInCommentPreservingToken;
function isTokenInCommentPreservingToken(token) {
    var tokenCommentPreservingToken = false;
    var tokenCommentToken = token.isCommentToken();
    if (tokenCommentToken) {
        var commentToken = token, commentTokenInCommentPreserving = commentToken.isInCommentPreserving();
        tokenCommentPreservingToken = commentTokenInCommentPreserving; ///
    }
    return tokenCommentPreservingToken;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rva2VuSW5Db21tZW50UHJlc2VydmluZ1Rva2VuKHRva2VuKSB7XG4gIGxldCB0b2tlbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4gPSBmYWxzZTtcblxuICBjb25zdCB0b2tlbkNvbW1lbnRUb2tlbiA9IHRva2VuLmlzQ29tbWVudFRva2VuKCk7XG5cbiAgaWYgKHRva2VuQ29tbWVudFRva2VuKSB7XG4gICAgY29uc3QgY29tbWVudFRva2VuID0gdG9rZW4sIC8vL1xuICAgICAgICAgIGNvbW1lbnRUb2tlbkluQ29tbWVudFByZXNlcnZpbmcgPSBjb21tZW50VG9rZW4uaXNJbkNvbW1lbnRQcmVzZXJ2aW5nKCk7XG5cbiAgICB0b2tlbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4gPSBjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9rZW5Db21tZW50UHJlc2VydmluZ1Rva2VuO1xufVxuIl0sIm5hbWVzIjpbImlzVG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nVG9rZW4iLCJ0b2tlbiIsInRva2VuQ29tbWVudFByZXNlcnZpbmdUb2tlbiIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5JbkNvbW1lbnRQcmVzZXJ2aW5nIiwiaXNJbkNvbW1lbnRQcmVzZXJ2aW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBRUlBLCtCQUErQixHQUEvQkEsK0JBQStCO1NBQS9CQSwrQkFBK0IsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDdEQsR0FBRyxDQUFDQywyQkFBMkIsR0FBRyxLQUFLO0lBRXZDLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUdGLEtBQUssQ0FBQ0csY0FBYztJQUU5QyxFQUFFLEVBQUVELGlCQUFpQixFQUFFLENBQUM7UUFDdEIsR0FBSyxDQUFDRSxZQUFZLEdBQUdKLEtBQUssRUFDcEJLLCtCQUErQixHQUFHRCxZQUFZLENBQUNFLHFCQUFxQjtRQUUxRUwsMkJBQTJCLEdBQUdJLCtCQUErQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUNyRSxDQUFDO0lBRUQsTUFBTSxDQUFDSiwyQkFBMkI7QUFDcEMsQ0FBQyJ9