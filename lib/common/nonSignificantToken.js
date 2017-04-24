'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(this, startPosition, endPosition, NonSignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NonSignificantToken;

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(content, line, Class);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonSignificantToken;

      var html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

      return token;
    }
  }, {
    key: 'fromNonSignificantToken',
    value: function fromNonSignificantToken(nonSignificantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NonSignificantToken;

      var content = nonSignificantToken.getContent(),
          line = nonSignificantToken.getLine();

      nonSignificantToken = Class.fromContentAndLine(content, line, Class);

      return nonSignificantToken;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = util.sanitiseContent(content),
          html = sanitisedContent;

      return html;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbm9uU2lnbmlmaWNhbnRUb2tlbi5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWROb25TaWduaWZpY2FudFRva2VuIiwiZ2V0TGluZSIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJodG1sRnJvbUNvbnRlbnQiLCJub25TaWduaWZpY2FudFRva2VuIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7SUFFTUMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTixvQkFBb0JPLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRixhQUFoQyxFQUErQ0MsV0FBL0MsRUFBNEROLG1CQUE1RCxDQUFQO0FBQTBGOzs7MEJBRWpIUSxLLEVBQXdGO0FBQUEsVUFBakZILGFBQWlGLHVFQUFqRSxDQUFpRTtBQUFBLFVBQTlEQyxXQUE4RCx1RUFBaERFLE1BQU1DLFNBQU4sRUFBZ0Q7QUFBQSxVQUE3QkMsS0FBNkIsdUVBQXJCVixtQkFBcUI7O0FBQ25HLFVBQUlXLDRCQUE0QixJQUFoQzs7QUFFQSxVQUFJTixrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQU1KLE9BQU9NLE1BQU1JLE9BQU4sRUFBYjs7QUFFQSxZQUFJWCxVQUFVTyxNQUFNSyxVQUFOLEVBQWQ7O0FBRUFaLGtCQUFVQSxRQUFRYSxTQUFSLENBQWtCVCxhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUssb0NBQTRCRCxNQUFNSyxrQkFBTixDQUF5QmQsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDUSxLQUF4QyxDQUE1QjtBQUNEOztBQUVELGFBQU9DLHlCQUFQO0FBQ0Q7Ozt1Q0FFeUJWLE8sRUFBU0MsSSxFQUFtQztBQUFBLFVBQTdCUSxLQUE2Qix1RUFBckJWLG1CQUFxQjs7QUFDcEUsVUFBTUcsT0FBT08sTUFBTU0sZUFBTixDQUFzQmYsT0FBdEIsQ0FBYjtBQUFBLFVBQ01PLFFBQVEsSUFBSUUsS0FBSixDQUFVVCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FEZDs7QUFHQSxhQUFPSyxLQUFQO0FBQ0Q7Ozs0Q0FFOEJTLG1CLEVBQWtEO0FBQUEsVUFBN0JQLEtBQTZCLHVFQUFyQlYsbUJBQXFCOztBQUMvRSxVQUFNQyxVQUFVZ0Isb0JBQW9CSixVQUFwQixFQUFoQjtBQUFBLFVBQ01YLE9BQU9lLG9CQUFvQkwsT0FBcEIsRUFEYjs7QUFHQUssNEJBQXNCUCxNQUFNSyxrQkFBTixDQUF5QmQsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDUSxLQUF4QyxDQUF0Qjs7QUFFQSxhQUFPTyxtQkFBUDtBQUNEOzs7b0NBRXNCaEIsTyxFQUFTO0FBQzlCLFVBQU1pQixtQkFBbUJwQixLQUFLcUIsZUFBTCxDQUFxQmxCLE9BQXJCLENBQXpCO0FBQUEsVUFDTUUsT0FBT2UsZ0JBRGI7O0FBR0EsYUFBT2YsSUFBUDtBQUNEOzs7Ozs7QUFHSGlCLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob25TaWduaWZpY2FudFRva2VuKG5vblNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBub25TaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lID0gbm9uU2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCk7XG4gICAgXG4gICAgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaHRtbCA9IHNhbml0aXNlZENvbnRlbnQ7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=