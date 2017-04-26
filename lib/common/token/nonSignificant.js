'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

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
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokenToReplace = this,
          successful = this.line.replaceToken(tokenToReplace, token);

      return successful;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJodG1sIiwibGVuZ3RoIiwidG9rZW4iLCJ0b2tlblRvUmVwbGFjZSIsInN1Y2Nlc3NmdWwiLCJyZXBsYWNlVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImdldExlbmd0aCIsIkNsYXNzIiwiY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldExpbmUiLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjs7SUFFTUMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFVBQU1DLGlCQUFpQixJQUF2QjtBQUFBLFVBQ01DLGFBQWEsS0FBS0wsSUFBTCxDQUFVTSxZQUFWLENBQXVCRixjQUF2QixFQUF1Q0QsS0FBdkMsQ0FEbkI7O0FBR0EsYUFBT0UsVUFBUDtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1Ysb0JBQW9CVyxLQUFwQixDQUEwQixJQUExQixFQUFnQ0YsYUFBaEMsRUFBK0NDLFdBQS9DLEVBQTREVixtQkFBNUQsQ0FBUDtBQUEwRjs7OzBCQUVqSEssSyxFQUF3RjtBQUFBLFVBQWpGSSxhQUFpRix1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REMsV0FBOEQsdUVBQWhETCxNQUFNTyxTQUFOLEVBQWdEO0FBQUEsVUFBN0JDLEtBQTZCLHVFQUFyQmIsbUJBQXFCOztBQUNuRyxVQUFJYyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBSUwsa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNUixPQUFPRyxNQUFNVSxPQUFOLEVBQWI7O0FBRUEsWUFBSWQsVUFBVUksTUFBTVcsVUFBTixFQUFkOztBQUVBZixrQkFBVUEsUUFBUWdCLFNBQVIsQ0FBa0JSLGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWOztBQUVBSSxvQ0FBNEJELE1BQU1LLGtCQUFOLENBQXlCakIsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDVyxLQUF4QyxDQUE1QjtBQUNEOztBQUVELGFBQU9DLHlCQUFQO0FBQ0Q7Ozt1Q0FFeUJiLE8sRUFBU0MsSSxFQUFtQztBQUFBLFVBQTdCVyxLQUE2Qix1RUFBckJiLG1CQUFxQjs7QUFDcEUsVUFBTUcsT0FBT1UsTUFBTU0sZUFBTixDQUFzQmxCLE9BQXRCLENBQWI7QUFBQSxVQUNNSSxRQUFRLElBQUlRLEtBQUosQ0FBVVosT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBRGQ7O0FBR0EsYUFBT0UsS0FBUDtBQUNEOzs7b0NBRXNCSixPLEVBQVM7QUFDOUIsVUFBTW1CLG1CQUFtQnRCLEtBQUt1QixlQUFMLENBQXFCcEIsT0FBckIsQ0FBekI7QUFBQSxVQUNNRSxPQUFPaUIsZ0JBRGI7O0FBR0EsYUFBT2pCLElBQVA7QUFDRDs7Ozs7O0FBR0htQixPQUFPQyxPQUFQLEdBQWlCdkIsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIHJlcGxhY2VXaXRoKHRva2VuKSB7XG4gICAgY29uc3QgdG9rZW5Ub1JlcGxhY2UgPSB0aGlzLFxuICAgICAgICAgIHN1Y2Nlc3NmdWwgPSB0aGlzLmxpbmUucmVwbGFjZVRva2VuKHRva2VuVG9SZXBsYWNlLCB0b2tlbik7XG5cbiAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcbiAgfVxuICBcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE5vblNpZ25pZmljYW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==