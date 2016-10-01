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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbIkVycm9yVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJTaWduaWZpY2FudFRva2VucyIsInRva2VucyIsImxpbmUiLCJydWxlcyIsInJlZHVjZSIsInRva2VuIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudCIsImNvbmNhdCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudCIsImVycm9yVG9rZW4iLCJmcm9tQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLHVCQUFSLENBQWpCO0FBQUEsSUFDSUMsMEJBQTBCRCxRQUFRLG9DQUFSLENBRDlCOztJQUdNRSxpQjs7Ozs7Ozt5QkFDUUMsTSxFQUFRQyxJLEVBQU1DLEssRUFBTztBQUMvQkYsZUFBU0EsT0FBT0csTUFBUCxDQUFjLFVBQVNILE1BQVQsRUFBaUJJLEtBQWpCLEVBQXdCO0FBQzdDLFlBQUlBLGlCQUFpQk4sdUJBQXJCLEVBQThDO0FBQzVDLGNBQUlPLDBCQUEwQkQsS0FBOUI7QUFBQSxjQUFzQztBQUNsQ0Usb0JBQVVELHdCQUF3QkUsVUFBeEIsRUFEZDtBQUFBLGNBRUlDLG9CQUFvQkMsNkJBQTZCSCxPQUE3QixFQUFzQ0wsSUFBdEMsRUFBNENDLEtBQTVDLENBRnhCOztBQUlBRixtQkFBU0EsT0FBT1UsTUFBUCxDQUFjRixpQkFBZCxDQUFUO0FBQ0QsU0FORCxNQU1PO0FBQ0xSLGlCQUFPVyxJQUFQLENBQVlQLEtBQVo7QUFDRDs7QUFFRCxlQUFPSixNQUFQO0FBQ0QsT0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIWSxPQUFPQyxPQUFQLEdBQWlCZCxpQkFBakI7O0FBRUEsU0FBU1UsNEJBQVQsQ0FBc0NILE9BQXRDLEVBQStDTCxJQUEvQyxFQUFxREMsS0FBckQsRUFBNEQ7QUFDMUQsTUFBSU0sb0JBQW9CLEVBQXhCOztBQUVBLFNBQU9GLFlBQVksRUFBbkIsRUFBdUI7QUFDckIsUUFBSVEsbUJBQW1CWixNQUFNYSwyQkFBTixDQUFrQ1QsT0FBbEMsRUFBMkNMLElBQTNDLENBQXZCOztBQUVBLFFBQUlhLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixVQUFJRSxhQUFhcEIsV0FBV3FCLFdBQVgsQ0FBdUJYLE9BQXZCLENBQWpCOztBQUVBUSx5QkFBbUJFLFVBQW5CLENBSDZCLENBR0c7QUFDakM7O0FBRUQsUUFBSUUseUJBQXlCSixpQkFBaUJLLFNBQWpCLEVBQTdCOztBQUVBWCxzQkFBa0JHLElBQWxCLENBQXVCRyxnQkFBdkI7O0FBRUFSLGNBQVVBLFFBQVFjLFNBQVIsQ0FBa0JGLHNCQUFsQixDQUFWO0FBQ0Q7O0FBRUQsU0FBT1YsaUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBFcnJvclRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL2Vycm9yJyksXHJcbiAgICBTaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudENvbnRlbnQnKTtcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnMsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgICB0b2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW4pIHtcclxuICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRDb250ZW50VG9rZW4pIHtcclxuICAgICAgICB2YXIgc2lnbmlmaWNhbnRDb250ZW50VG9rZW4gPSB0b2tlbiwgIC8vL1xyXG4gICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRDb250ZW50VG9rZW4uZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgdmFyIHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSBydWxlcy5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICBcclxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XHJcbiAgICAgIHZhciBlcnJvclRva2VuID0gRXJyb3JUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBlcnJvclRva2VuOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2goc2lnbmlmaWNhbnRUb2tlbik7XHJcblxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50VG9rZW5MZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiJdfQ==