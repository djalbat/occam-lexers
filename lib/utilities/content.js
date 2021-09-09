"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sanitiseContent = sanitiseContent;
var _constants = require("../constants");
function sanitiseContent(content) {
    var sanitisedContent = content.replace(/&/, _constants.AMPERSAND).replace(/</, _constants.LESS_THAN).replace(/>/, _constants.GREATER_THAN);
    return sanitisedContent;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJMRVNTX1RIQU4iLCJBTVBFUlNBTkQiLCJHUkVBVEVSX1RIQU4iLCJzYW5pdGlzZUNvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFJSSxlQUFlLEdBQWYsZUFBZTtBQUZvQixHQUFjLENBQWQsVUFBYztTQUVqRCxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsR0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FDTCxPQUFPLE1BSmUsVUFBYyxZQUtwQyxPQUFPLE1BTGUsVUFBYyxZQU1wQyxPQUFPLE1BTmUsVUFBYztJQVEvRCxNQUFNLENBQUMsZ0JBQWdCO0FBQ3pCLENBQUMifQ==