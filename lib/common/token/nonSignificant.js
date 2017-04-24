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
    key: 'fromNonSignificantToken',
    value: function fromNonSignificantToken(nonSignificantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NonSignificantToken;

      var content = nonSignificantToken.getContent(),
          line = nonSignificantToken.getLine();

      nonSignificantToken = Class.fromContentAndLine(content, line, Class);

      return nonSignificantToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJodG1sIiwibGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJ0b2tlbiIsImdldExlbmd0aCIsIkNsYXNzIiwiY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldExpbmUiLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsImh0bWxGcm9tQ29udGVudCIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7O0lBRU1DLG1CO0FBQ0osK0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhRyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQixJQUExQixFQUFnQ0YsYUFBaEMsRUFBK0NDLFdBQS9DLEVBQTRETixtQkFBNUQsQ0FBUDtBQUEwRjs7OzBCQUVqSFEsSyxFQUF3RjtBQUFBLFVBQWpGSCxhQUFpRix1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REMsV0FBOEQsdUVBQWhERSxNQUFNQyxTQUFOLEVBQWdEO0FBQUEsVUFBN0JDLEtBQTZCLHVFQUFyQlYsbUJBQXFCOztBQUNuRyxVQUFJVyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNSixPQUFPTSxNQUFNSSxPQUFOLEVBQWI7O0FBRUEsWUFBSVgsVUFBVU8sTUFBTUssVUFBTixFQUFkOztBQUVBWixrQkFBVUEsUUFBUWEsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLG9DQUE0QkQsTUFBTUssa0JBQU4sQ0FBeUJkLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q1EsS0FBeEMsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPQyx5QkFBUDtBQUNEOzs7NENBRThCSyxtQixFQUFrRDtBQUFBLFVBQTdCTixLQUE2Qix1RUFBckJWLG1CQUFxQjs7QUFDL0UsVUFBTUMsVUFBVWUsb0JBQW9CSCxVQUFwQixFQUFoQjtBQUFBLFVBQ01YLE9BQU9jLG9CQUFvQkosT0FBcEIsRUFEYjs7QUFHQUksNEJBQXNCTixNQUFNSyxrQkFBTixDQUF5QmQsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDUSxLQUF4QyxDQUF0Qjs7QUFFQSxhQUFPTSxtQkFBUDtBQUNEOzs7dUNBRXlCZixPLEVBQVNDLEksRUFBbUM7QUFBQSxVQUE3QlEsS0FBNkIsdUVBQXJCVixtQkFBcUI7O0FBQ3BFLFVBQU1HLE9BQU9PLE1BQU1PLGVBQU4sQ0FBc0JoQixPQUF0QixDQUFiO0FBQUEsVUFDTU8sUUFBUSxJQUFJRSxLQUFKLENBQVVULE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURkOztBQUdBLGFBQU9LLEtBQVA7QUFDRDs7O29DQUVzQlAsTyxFQUFTO0FBQzlCLFVBQU1pQixtQkFBbUJwQixLQUFLcUIsZUFBTCxDQUFxQmxCLE9BQXJCLENBQXpCO0FBQUEsVUFDTUUsT0FBT2UsZ0JBRGI7O0FBR0EsYUFBT2YsSUFBUDtBQUNEOzs7Ozs7QUFHSGlCLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE5vblNpZ25pZmljYW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9uU2lnbmlmaWNhbnRUb2tlbihub25TaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBjb250ZW50ID0gbm9uU2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IG5vblNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpO1xuICAgIFxuICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIFxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50O1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIl19