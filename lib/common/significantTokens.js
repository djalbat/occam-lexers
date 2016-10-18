'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorToken = require('../common/token/error');

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(nonSignificantTokensOrSignificantContent, line, rules) {
      var tokens = nonSignificantTokensOrSignificantContent.reduce(function (tokens, nonSignificantTokenOrSignificantContent) {
        if (typeof nonSignificantTokenOrSignificantContent === "string") {
          var content = nonSignificantTokenOrSignificantContent,
              ///
          significantTokens = significantTokensFromContent(content, line, rules);

          tokens = tokens.concat(significantTokens);
        } else {
          var nonSignificantToken = nonSignificantTokenOrSignificantContent; ///

          tokens.push(nonSignificantToken);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiXSwibmFtZXMiOlsiRXJyb3JUb2tlbiIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VucyIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJsaW5lIiwicnVsZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnQiLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50IiwiY29uY2F0Iiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudCIsImVycm9yVG9rZW4iLCJmcm9tQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLHVCQUFSLENBQWpCOztJQUVNQyxpQjs7Ozs7Ozt5QkFDUUMsd0MsRUFBMENDLEksRUFBTUMsSyxFQUFPO0FBQ2pFLFVBQUlDLFNBQVNILHlDQUF5Q0ksTUFBekMsQ0FBZ0QsVUFBU0QsTUFBVCxFQUFpQkUsdUNBQWpCLEVBQTBEO0FBQ3JILFlBQUksT0FBT0EsdUNBQVAsS0FBbUQsUUFBdkQsRUFBaUU7QUFDL0QsY0FBSUMsVUFBVUQsdUNBQWQ7QUFBQSxjQUF3RDtBQUNwREUsOEJBQW9CQyw2QkFBNkJGLE9BQTdCLEVBQXNDTCxJQUF0QyxFQUE0Q0MsS0FBNUMsQ0FEeEI7O0FBR0FDLG1CQUFTQSxPQUFPTSxNQUFQLENBQWNGLGlCQUFkLENBQVQ7QUFDRCxTQUxELE1BS087QUFDTCxjQUFJRyxzQkFBc0JMLHVDQUExQixDQURLLENBQytEOztBQUVwRUYsaUJBQU9RLElBQVAsQ0FBWUQsbUJBQVo7QUFDRDs7QUFFRCxlQUFPUCxNQUFQO0FBQ0QsT0FiWSxFQWFWLEVBYlUsQ0FBYjs7QUFlQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZCxpQkFBakI7O0FBRUEsU0FBU1MsNEJBQVQsQ0FBc0NGLE9BQXRDLEVBQStDTCxJQUEvQyxFQUFxREMsS0FBckQsRUFBNEQ7QUFDMUQsTUFBSUssb0JBQW9CLEVBQXhCOztBQUVBLFNBQU9ELFlBQVksRUFBbkIsRUFBdUI7QUFDckIsUUFBSVEsbUJBQW1CWixNQUFNYSwyQkFBTixDQUFrQ1QsT0FBbEMsRUFBMkNMLElBQTNDLENBQXZCOztBQUVBLFFBQUlhLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixVQUFJRSxhQUFhbkIsV0FBV29CLFdBQVgsQ0FBdUJYLE9BQXZCLENBQWpCOztBQUVBUSx5QkFBbUJFLFVBQW5CLENBSDZCLENBR0c7QUFDakM7O0FBRUQsUUFBSUUseUJBQXlCSixpQkFBaUJLLFNBQWpCLEVBQTdCOztBQUVBWixzQkFBa0JJLElBQWxCLENBQXVCRyxnQkFBdkI7O0FBRUFSLGNBQVVBLFFBQVFjLFNBQVIsQ0FBa0JGLHNCQUFsQixDQUFWO0FBQ0Q7O0FBRUQsU0FBT1gsaUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBFcnJvclRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL2Vycm9yJyk7XHJcblxyXG5jbGFzcyBTaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3Mobm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudCwgbGluZSwgcnVsZXMpIHtcclxuICAgIHZhciB0b2tlbnMgPSBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudCkge1xyXG4gICAgICBpZiAodHlwZW9mIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBub25TaWduaWZpY2FudFRva2VuID0gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50OyAgLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgdmFyIHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSBydWxlcy5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICBcclxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XHJcbiAgICAgIHZhciBlcnJvclRva2VuID0gRXJyb3JUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBlcnJvclRva2VuOyAgLy8vXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2goc2lnbmlmaWNhbnRUb2tlbik7XHJcblxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50VG9rZW5MZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiJdfQ==