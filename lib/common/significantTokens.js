'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorToken = require('../common/token/error'),
    SignificantContentToken = require('../common/token/significantContent');

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(tokens, line, rules) {
      tokens = tokens.reduce(function (tokens, token) {
        if (token instanceof SignificantContentToken) {
          var significantContentToken = token,
              ///
          content = significantContentToken.getContent(),
              significantTokens = significantTokensFromContent(content, line, rules);

          tokens = tokens.concat(significantTokens);
        } else {
          tokens.push(token);
        }

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;

function significantTokensFromContent(content, line, rules) {
  var significantTokens = [];

  while (content !== '') {
    var significantToken = rules.significantTokenFromContent(content, line);

    if (significantToken === null) {
      var errorToken = ErrorToken.fromContent(content);

      significantToken = errorToken; ///
    }

    var significantTokenLength = significantToken.getLength();

    significantTokens.push(significantToken);

    content = content.substring(significantTokenLength);
  }

  return significantTokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiXSwibmFtZXMiOlsiRXJyb3JUb2tlbiIsInJlcXVpcmUiLCJTaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zIiwibGluZSIsInJ1bGVzIiwicmVkdWNlIiwidG9rZW4iLCJzaWduaWZpY2FudENvbnRlbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50IiwiY29uY2F0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50IiwiZXJyb3JUb2tlbiIsImZyb21Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbkxlbmd0aCIsImdldExlbmd0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsdUJBQVIsQ0FBakI7QUFBQSxJQUNJQywwQkFBMEJELFFBQVEsb0NBQVIsQ0FEOUI7O0lBR01FLGlCOzs7Ozs7O3lCQUNRQyxNLEVBQVFDLEksRUFBTUMsSyxFQUFPO0FBQy9CRixlQUFTQSxPQUFPRyxNQUFQLENBQWMsVUFBU0gsTUFBVCxFQUFpQkksS0FBakIsRUFBd0I7QUFDN0MsWUFBSUEsaUJBQWlCTix1QkFBckIsRUFBOEM7QUFDNUMsY0FBSU8sMEJBQTBCRCxLQUE5QjtBQUFBLGNBQXNDO0FBQ2xDRSxvQkFBVUQsd0JBQXdCRSxVQUF4QixFQURkO0FBQUEsY0FFSUMsb0JBQW9CQyw2QkFBNkJILE9BQTdCLEVBQXNDTCxJQUF0QyxFQUE0Q0MsS0FBNUMsQ0FGeEI7O0FBSUFGLG1CQUFTQSxPQUFPVSxNQUFQLENBQWNGLGlCQUFkLENBQVQ7QUFDRCxTQU5ELE1BTU87QUFDTFIsaUJBQU9XLElBQVAsQ0FBWVAsS0FBWjtBQUNEOztBQUVELGVBQU9KLE1BQVA7QUFDRCxPQVpRLEVBWU4sRUFaTSxDQUFUOztBQWNBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hZLE9BQU9DLE9BQVAsR0FBaUJkLGlCQUFqQjs7QUFFQSxTQUFTVSw0QkFBVCxDQUFzQ0gsT0FBdEMsRUFBK0NMLElBQS9DLEVBQXFEQyxLQUFyRCxFQUE0RDtBQUMxRCxNQUFJTSxvQkFBb0IsRUFBeEI7O0FBRUEsU0FBT0YsWUFBWSxFQUFuQixFQUF1QjtBQUNyQixRQUFJUSxtQkFBbUJaLE1BQU1hLDJCQUFOLENBQWtDVCxPQUFsQyxFQUEyQ0wsSUFBM0MsQ0FBdkI7O0FBRUEsUUFBSWEscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFVBQUlFLGFBQWFwQixXQUFXcUIsV0FBWCxDQUF1QlgsT0FBdkIsQ0FBakI7O0FBRUFRLHlCQUFtQkUsVUFBbkIsQ0FINkIsQ0FHRztBQUNqQzs7QUFFRCxRQUFJRSx5QkFBeUJKLGlCQUFpQkssU0FBakIsRUFBN0I7O0FBRUFYLHNCQUFrQkcsSUFBbEIsQ0FBdUJHLGdCQUF2Qjs7QUFFQVIsY0FBVUEsUUFBUWMsU0FBUixDQUFrQkYsc0JBQWxCLENBQVY7QUFDRDs7QUFFRCxTQUFPVixpQkFBUDtBQUNEIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEVycm9yVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZXJyb3InKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2VucywgbGluZSwgcnVsZXMpIHtcclxuICAgIHRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbikge1xyXG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBTaWduaWZpY2FudENvbnRlbnRUb2tlbikge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IHRva2VuLCAgLy8vXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudENvbnRlbnRUb2tlbi5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRva2VucztcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgcnVsZXMpIHtcclxuICB2YXIgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGVzLnNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuICAgIFxyXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgdmFyIGVycm9yVG9rZW4gPSBFcnJvclRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gICAgICBcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IGVycm9yVG9rZW47ICAvLy9cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlbnMucHVzaChzaWduaWZpY2FudFRva2VuKTtcclxuXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIl19