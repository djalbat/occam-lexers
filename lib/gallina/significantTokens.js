'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = require('./rules'),
    ErrorToken = require('../common/token/error'),
    SignificantContentToken = require('../common/token/significantContent');

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(tokens, line) {
      tokens = tokens.reduce(function (tokens, token) {
        if (token instanceof SignificantContentToken) {
          var significantContentToken = token,
              ///
          content = significantContentToken.getContent(),
              significantTokens = significantTokensFromContent(content, line);

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

function significantTokensFromContent(content, line) {
  var significantTokens = [];

  while (content !== '') {
    var significantToken = Rules.significantTokenFromContent(content, line);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbIlJ1bGVzIiwicmVxdWlyZSIsIkVycm9yVG9rZW4iLCJTaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zIiwibGluZSIsInJlZHVjZSIsInRva2VuIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudCIsImNvbmNhdCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudCIsImVycm9yVG9rZW4iLCJmcm9tQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFNBQVIsQ0FBWjtBQUFBLElBQ0lDLGFBQWFELFFBQVEsdUJBQVIsQ0FEakI7QUFBQSxJQUVJRSwwQkFBMEJGLFFBQVEsb0NBQVIsQ0FGOUI7O0lBSU1HLGlCOzs7Ozs7O3lCQUNRQyxNLEVBQVFDLEksRUFBTTtBQUN4QkQsZUFBU0EsT0FBT0UsTUFBUCxDQUFjLFVBQVNGLE1BQVQsRUFBaUJHLEtBQWpCLEVBQXdCO0FBQzdDLFlBQUlBLGlCQUFpQkwsdUJBQXJCLEVBQThDO0FBQzVDLGNBQUlNLDBCQUEwQkQsS0FBOUI7QUFBQSxjQUFzQztBQUNsQ0Usb0JBQVVELHdCQUF3QkUsVUFBeEIsRUFEZDtBQUFBLGNBRUlDLG9CQUFvQkMsNkJBQTZCSCxPQUE3QixFQUFzQ0osSUFBdEMsQ0FGeEI7O0FBSUFELG1CQUFTQSxPQUFPUyxNQUFQLENBQWNGLGlCQUFkLENBQVQ7QUFDRCxTQU5ELE1BTU87QUFDTFAsaUJBQU9VLElBQVAsQ0FBWVAsS0FBWjtBQUNEOztBQUVELGVBQU9ILE1BQVA7QUFDRCxPQVpRLEVBWU4sRUFaTSxDQUFUOztBQWNBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJiLGlCQUFqQjs7QUFFQSxTQUFTUyw0QkFBVCxDQUFzQ0gsT0FBdEMsRUFBK0NKLElBQS9DLEVBQXFEO0FBQ25ELE1BQUlNLG9CQUFvQixFQUF4Qjs7QUFFQSxTQUFPRixZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLFFBQUlRLG1CQUFtQmxCLE1BQU1tQiwyQkFBTixDQUFrQ1QsT0FBbEMsRUFBMkNKLElBQTNDLENBQXZCOztBQUVBLFFBQUlZLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixVQUFJRSxhQUFhbEIsV0FBV21CLFdBQVgsQ0FBdUJYLE9BQXZCLENBQWpCOztBQUVBUSx5QkFBbUJFLFVBQW5CLENBSDZCLENBR0c7QUFDakM7O0FBRUQsUUFBSUUseUJBQXlCSixpQkFBaUJLLFNBQWpCLEVBQTdCOztBQUVBWCxzQkFBa0JHLElBQWxCLENBQXVCRyxnQkFBdkI7O0FBRUFSLGNBQVVBLFFBQVFjLFNBQVIsQ0FBa0JGLHNCQUFsQixDQUFWO0FBQ0Q7O0FBRUQsU0FBT1YsaUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIEVycm9yVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZXJyb3InKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2VucywgbGluZSkge1xyXG4gICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuKSB7XHJcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFNpZ25pZmljYW50Q29udGVudFRva2VuKSB7XHJcbiAgICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuID0gdG9rZW4sICAvLy9cclxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50Q29udGVudFRva2VuLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcclxuICB2YXIgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IFJ1bGVzLnNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuICAgIFxyXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgdmFyIGVycm9yVG9rZW4gPSBFcnJvclRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gICAgICBcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IGVycm9yVG9rZW47ICAvLy9cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlbnMucHVzaChzaWduaWZpY2FudFRva2VuKTtcclxuXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIl19