'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtilities = require('../../utilities/token');

var sanitiseContent = tokenUtilities.sanitiseContent;

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = false;

      return significant;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.html; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(NonSignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NonSignificantToken;
      var token = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : token.getLength();

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(Class, content, line);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = NonSignificantToken;
      }

      var sanitisedContent = sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

      return token;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsaXRpZXMiLCJyZXF1aXJlIiwic2FuaXRpc2VDb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInNpZ25pZmljYW50IiwibGVuZ3RoIiwiZmlsZVBhdGgiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsIkNsYXNzIiwidG9rZW4iLCJnZXRMZW5ndGgiLCJjbG9uZWROb25TaWduaWZpY2FudFRva2VuIiwiZ2V0TGluZSIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJ1bmRlZmluZWQiLCJzYW5pdGlzZWRDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2Qjs7SUFFUUMsZSxHQUFvQkYsYyxDQUFwQkUsZTs7SUFFRkMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhSSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7MkJBRU1DLFEsRUFBVTtBQUNmLFVBQU1ILE9BQU8sS0FBS0EsSUFBbEIsQ0FEZSxDQUNTOztBQUV4QixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0ksYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPUixvQkFBb0JTLEtBQXBCLENBQTBCVCxtQkFBMUIsRUFBK0MsSUFBL0MsRUFBcURPLGFBQXJELEVBQW9FQyxXQUFwRSxDQUFQO0FBQTBGOzs7NEJBRXpCO0FBQUEsVUFBeEZFLEtBQXdGLHVFQUFoRlYsbUJBQWdGO0FBQUEsVUFBM0RXLEtBQTJEO0FBQUEsVUFBcERKLGFBQW9ELHVFQUFwQyxDQUFvQztBQUFBLFVBQWpDQyxXQUFpQyx1RUFBbkJHLE1BQU1DLFNBQU4sRUFBbUI7O0FBQ25HLFVBQUlDLDRCQUE0QixJQUFoQzs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQU1OLE9BQU9TLE1BQU1HLE9BQU4sRUFBYjs7QUFFQSxZQUFJYixVQUFVVSxNQUFNSSxVQUFOLEVBQWQ7O0FBRUFkLGtCQUFVQSxRQUFRZSxTQUFSLENBQWtCVCxhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUssb0NBQTRCSCxNQUFNTyxrQkFBTixDQUF5QlAsS0FBekIsRUFBZ0NULE9BQWhDLEVBQXlDQyxJQUF6QyxDQUE1QjtBQUNEOztBQUVELGFBQU9XLHlCQUFQO0FBQ0Q7Ozt1Q0FFeUJILEssRUFBT1QsTyxFQUFTQyxJLEVBQU07QUFDOUMsVUFBSUEsU0FBU2dCLFNBQWIsRUFBd0I7QUFDdEJoQixlQUFPRCxPQUFQO0FBQ0FBLGtCQUFVUyxLQUFWO0FBQ0FBLGdCQUFRVixtQkFBUjtBQUNEOztBQUVELFVBQU1tQixtQkFBbUJwQixnQkFBZ0JFLE9BQWhCLENBQXpCO0FBQUEsVUFDTUUsT0FBT2dCLGdCQURiO0FBQUEsVUFFTVIsUUFBUSxJQUFJRCxLQUFKLENBQVVULE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQUZkOztBQUlBLGFBQU9RLEtBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRva2VuVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3Rva2VuJyk7XG5cbmNvbnN0IHsgc2FuaXRpc2VDb250ZW50IH0gPSB0b2tlblV0aWxpdGllcztcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sOyAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKE5vblNpZ25pZmljYW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4sIHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSkge1xuICAgIGxldCBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWROb25TaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKENsYXNzLCBjb250ZW50LCBsaW5lKSB7XG4gICAgaWYgKGxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGluZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudCxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=