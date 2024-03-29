"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitiseContent", {
    enumerable: true,
    get: function() {
        return sanitiseContent;
    }
});
var _necessary = require("necessary");
var LESS_THAN_CHARACTER = _necessary.characters.LESS_THAN_CHARACTER, AMPERSAND_CHARACTER = _necessary.characters.AMPERSAND_CHARACTER, GREATER_THAN_CHARACTER = _necessary.characters.GREATER_THAN_CHARACTER;
function sanitiseContent(content) {
    var sanitisedContent = content.replace(/&/g, AMPERSAND_CHARACTER).replace(/</g, LESS_THAN_CHARACTER).replace(/>/g, GREATER_THAN_CHARACTER);
    return sanitisedContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBMRVNTX1RIQU5fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSLCBHUkVBVEVSX1RIQU5fQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJi9nLCBBTVBFUlNBTkRfQ0hBUkFDVEVSKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csIExFU1NfVEhBTl9DSEFSQUNURVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgR1JFQVRFUl9USEFOX0NIQVJBQ1RFUik7XG5cbiAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsic2FuaXRpc2VDb250ZW50IiwiTEVTU19USEFOX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJBTVBFUlNBTkRfQ0hBUkFDVEVSIiwiR1JFQVRFUl9USEFOX0NIQVJBQ1RFUiIsImNvbnRlbnQiLCJzYW5pdGlzZWRDb250ZW50IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7eUJBSlc7QUFFM0IsSUFBUUMsc0JBQXFFQyxxQkFBVSxDQUEvRUQscUJBQXFCRSxzQkFBZ0RELHFCQUFVLENBQTFEQyxxQkFBcUJDLHlCQUEyQkYscUJBQVUsQ0FBckNFO0FBRTNDLFNBQVNKLGdCQUFnQkssT0FBTztJQUNyQyxJQUFNQyxtQkFBbUJELFFBQ0VFLE9BQU8sQ0FBQyxNQUFNSixxQkFDZEksT0FBTyxDQUFDLE1BQU1OLHFCQUNkTSxPQUFPLENBQUMsTUFBTUg7SUFFekMsT0FBT0U7QUFDVCJ9