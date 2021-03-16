"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sanitiseContent = sanitiseContent;
function sanitiseContent(content) {
    var sanitisedContent = content.replace(/&/, "&amp;").replace(/</, "&lt;").replace(/>/, "&gt;");
    return sanitisedContent;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xyXG4gIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLFwiJmFtcDtcIikucmVwbGFjZSgvPC8sIFwiJmx0O1wiKS5yZXBsYWNlKC8+LywgXCImZ3Q7XCIpO1xyXG5cclxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQUVBLGVBQUEsR0FBQSxlQUFBO1NBQUEsZUFBQSxDQUFBLE9BQUE7UUFDQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLE9BQUEsS0FBQSxHQUFBLE9BQUEsT0FBQSxJQUFBLEdBQUEsT0FBQSxPQUFBLElBQUE7V0FFQSxnQkFBQSJ9