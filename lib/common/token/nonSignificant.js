'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contentUtilities = require('../../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent;

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
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
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = false;

      return significant;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiY29udGVudFV0aWxpdGllcyIsInJlcXVpcmUiLCJzYW5pdGlzZUNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJodG1sIiwibGVuZ3RoIiwic2lnbmlmaWNhbnQiLCJmaWxlUGF0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJ0b2tlbiIsImdldExlbmd0aCIsImNsb25lZE5vblNpZ25pZmljYW50VG9rZW4iLCJnZXRMaW5lIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50QW5kTGluZSIsInVuZGVmaW5lZCIsInNhbml0aXNlZENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLHlCQUFSLENBQXpCOztJQUVRQyxlLEdBQW9CRixnQixDQUFwQkUsZTs7SUFFRkMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsS0FBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7MkJBRU1DLFEsRUFBVTtBQUNmLFVBQU1ILE9BQU8sS0FBS0EsSUFBbEIsQ0FEZSxDQUNTOztBQUV4QixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0ksYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPUixvQkFBb0JTLEtBQXBCLENBQTBCVCxtQkFBMUIsRUFBK0MsSUFBL0MsRUFBcURPLGFBQXJELEVBQW9FQyxXQUFwRSxDQUFQO0FBQTBGOzs7NEJBRXpCO0FBQUEsVUFBeEZFLEtBQXdGLHVFQUFoRlYsbUJBQWdGO0FBQUEsVUFBM0RXLEtBQTJEO0FBQUEsVUFBcERKLGFBQW9ELHVFQUFwQyxDQUFvQztBQUFBLFVBQWpDQyxXQUFpQyx1RUFBbkJHLE1BQU1DLFNBQU4sRUFBbUI7O0FBQ25HLFVBQUlDLDRCQUE0QixJQUFoQzs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQU1OLE9BQU9TLE1BQU1HLE9BQU4sRUFBYjs7QUFFQSxZQUFJYixVQUFVVSxNQUFNSSxVQUFOLEVBQWQ7O0FBRUFkLGtCQUFVQSxRQUFRZSxTQUFSLENBQWtCVCxhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUssb0NBQTRCSCxNQUFNTyxrQkFBTixDQUF5QlAsS0FBekIsRUFBZ0NULE9BQWhDLEVBQXlDQyxJQUF6QyxDQUE1QjtBQUNEOztBQUVELGFBQU9XLHlCQUFQO0FBQ0Q7Ozt1Q0FFeUJILEssRUFBT1QsTyxFQUFTQyxJLEVBQU07QUFDOUMsVUFBSUEsU0FBU2dCLFNBQWIsRUFBd0I7QUFDdEJoQixlQUFPRCxPQUFQO0FBQ0FBLGtCQUFVUyxLQUFWO0FBQ0FBLGdCQUFRVixtQkFBUjtBQUNEOztBQUVELFVBQU1tQixtQkFBbUJwQixnQkFBZ0JFLE9BQWhCLENBQXpCO0FBQUEsVUFDTUUsT0FBT2dCLGdCQURiO0FBQUEsVUFFTVIsUUFBUSxJQUFJRCxLQUFKLENBQVVULE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQUZkOztBQUlBLGFBQU9RLEtBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcztcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50O1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShOb25TaWduaWZpY2FudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuLCB0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKENsYXNzLCBjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShDbGFzcywgY29udGVudCwgbGluZSkge1xuICAgIGlmIChsaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxpbmUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaHRtbCA9IHNhbml0aXNlZENvbnRlbnQsXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIl19