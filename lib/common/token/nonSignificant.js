'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = require('../../util/token');

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
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          html = sanitisedContent;

      return html;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJzaWduaWZpY2FudCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwidG9rZW4iLCJnZXRMZW5ndGgiLCJDbGFzcyIsImNsb25lZE5vblNpZ25pZmljYW50VG9rZW4iLCJnZXRMaW5lIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50QW5kTGluZSIsImh0bWxGcm9tQ29udGVudCIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjs7SUFFTUMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhSSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1Asb0JBQW9CUSxLQUFwQixDQUEwQixJQUExQixFQUFnQ0YsYUFBaEMsRUFBK0NDLFdBQS9DLEVBQTREUCxtQkFBNUQsQ0FBUDtBQUEwRjs7OzBCQUVqSFMsSyxFQUF3RjtBQUFBLFVBQWpGSCxhQUFpRix1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REMsV0FBOEQsdUVBQWhERSxNQUFNQyxTQUFOLEVBQWdEO0FBQUEsVUFBN0JDLEtBQTZCLHVFQUFyQlgsbUJBQXFCOztBQUNuRyxVQUFJWSw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNTCxPQUFPTyxNQUFNSSxPQUFOLEVBQWI7O0FBRUEsWUFBSVosVUFBVVEsTUFBTUssVUFBTixFQUFkOztBQUVBYixrQkFBVUEsUUFBUWMsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLG9DQUE0QkQsTUFBTUssa0JBQU4sQ0FBeUJmLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q1MsS0FBeEMsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPQyx5QkFBUDtBQUNEOzs7dUNBRXlCWCxPLEVBQVNDLEksRUFBbUM7QUFBQSxVQUE3QlMsS0FBNkIsdUVBQXJCWCxtQkFBcUI7O0FBQ3BFLFVBQU1HLE9BQU9RLE1BQU1NLGVBQU4sQ0FBc0JoQixPQUF0QixDQUFiO0FBQUEsVUFDTVEsUUFBUSxJQUFJRSxLQUFKLENBQVVWLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURkOztBQUdBLGFBQU9NLEtBQVA7QUFDRDs7O29DQUVzQlIsTyxFQUFTO0FBQzlCLFVBQU1pQixtQkFBbUJwQixVQUFVcUIsZUFBVixDQUEwQmxCLE9BQTFCLENBQXpCO0FBQUEsVUFDTUUsT0FBT2UsZ0JBRGI7O0FBR0EsYUFBT2YsSUFBUDtBQUNEOzs7Ozs7QUFHSGlCLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRva2VuVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvdG9rZW4nKTtcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHRva2VuVXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaHRtbCA9IHNhbml0aXNlZENvbnRlbnQ7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=