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
      tokens = tokens.map(function (token) {
        if (token instanceof SignificantContentToken) {
          var significantContentToken = token,
              ///
          content = significantContentToken.getContent(),
              significantToken = Rules.significantTokenFromContent(content, line);

          if (significantToken !== null) {
            token = significantToken; ///
          } else {
            var errorToken = ErrorToken.fromContent(content, line);

            token = errorToken; ///
          }
        }

        return token;
      });

      return tokens;
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbIlJ1bGVzIiwicmVxdWlyZSIsIkVycm9yVG9rZW4iLCJTaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zIiwibGluZSIsIm1hcCIsInRva2VuIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJlcnJvclRva2VuIiwiZnJvbUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxTQUFSLENBQVo7QUFBQSxJQUNJQyxhQUFhRCxRQUFRLHVCQUFSLENBRGpCO0FBQUEsSUFFSUUsMEJBQTBCRixRQUFRLG9DQUFSLENBRjlCOztJQUlNRyxpQjs7Ozs7Ozt5QkFDUUMsTSxFQUFRQyxJLEVBQU07QUFDeEJELGVBQVNBLE9BQU9FLEdBQVAsQ0FBVyxVQUFTQyxLQUFULEVBQWdCO0FBQ2xDLFlBQUlBLGlCQUFpQkwsdUJBQXJCLEVBQThDO0FBQzVDLGNBQUlNLDBCQUEwQkQsS0FBOUI7QUFBQSxjQUFxQztBQUNqQ0Usb0JBQVVELHdCQUF3QkUsVUFBeEIsRUFEZDtBQUFBLGNBRUlDLG1CQUFtQlosTUFBTWEsMkJBQU4sQ0FBa0NILE9BQWxDLEVBQTJDSixJQUEzQyxDQUZ2Qjs7QUFJQSxjQUFJTSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0JKLG9CQUFRSSxnQkFBUixDQUQ2QixDQUNIO0FBQzNCLFdBRkQsTUFFTztBQUNMLGdCQUFJRSxhQUFhWixXQUFXYSxXQUFYLENBQXVCTCxPQUF2QixFQUFnQ0osSUFBaEMsQ0FBakI7O0FBRUFFLG9CQUFRTSxVQUFSLENBSEssQ0FHZTtBQUNyQjtBQUNGOztBQUVELGVBQU9OLEtBQVA7QUFDRCxPQWhCUSxDQUFUOztBQWtCQSxhQUFPSCxNQUFQO0FBQ0Q7Ozs7OztBQUVIVyxPQUFPQyxPQUFQLEdBQWlCYixpQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICBFcnJvclRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL2Vycm9yJyksXHJcbiAgICBTaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudENvbnRlbnQnKTtcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnMsIGxpbmUpIHtcclxuICAgIHRva2VucyA9IHRva2Vucy5tYXAoZnVuY3Rpb24odG9rZW4pIHtcclxuICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRDb250ZW50VG9rZW4pIHtcclxuICAgICAgICB2YXIgc2lnbmlmaWNhbnRDb250ZW50VG9rZW4gPSB0b2tlbiwgLy8vXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudENvbnRlbnRUb2tlbi5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBSdWxlcy5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3JUb2tlbiA9IEVycm9yVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgdG9rZW4gPSBlcnJvclRva2VuOyAvLy9cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfX1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==