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
    value: function pass(tokensOrContents, line, rules) {
      var tokens = tokensOrContents.reduce(function (tokens, tokenOrRemainingContent) {
        if (typeof tokenOrRemainingContent === 'string') {
          var content = tokenOrRemainingContent,
              ///
          depth = 0,
              significantTokens = significantTokensFromContent(content, line, rules, depth);

          tokens = tokens.concat(significantTokens);
        } else {
          var nonSignificantToken = tokenOrRemainingContent; ///

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

var RULE_IS_UNDEFINED_MESSAGE = 'There are no rules to parse this content.';

function significantTokensFromContent(content, line, rules, depth) {
  var significantTokens,
      rule = rules.getRule(depth),
      ruleIsUndefined = rule === undefined;

  if (content === '') {
    significantTokens = [];
  } else if (ruleIsUndefined) {
    var errorToken = new ErrorToken(content, line, RULE_IS_UNDEFINED_MESSAGE),
        errorTokens = [errorToken];

    significantTokens = errorTokens; ///
  } else {
    var nextDepth = depth + 1,
        significantTokenPosition = rule.significantTokenPosition(content);

    if (significantTokenPosition === -1) {
      significantTokens = significantTokensFromContent(content, line, rules, nextDepth);
    } else {
      var significantToken = rule.significantTokenFromContent(content, line),
          significantTokenLength = significantToken.getLength(),
          left = significantTokenPosition,
          ///
      right = significantTokenPosition + significantTokenLength,
          ///
      leftContent = content.substr(0, left),
          rightContent = content.substr(right),
          leftSignificantTokens = significantTokensFromContent(leftContent, line, rules, nextDepth),
          rightSignificantTokens = significantTokensFromContent(rightContent, line, rules, depth);

      significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
    }
  }

  return significantTokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiXSwibmFtZXMiOlsiRXJyb3JUb2tlbiIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwicnVsZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbk9yUmVtYWluaW5nQ29udGVudCIsImNvbnRlbnQiLCJkZXB0aCIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudCIsImNvbmNhdCIsIm5vblNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIlJVTEVfSVNfVU5ERUZJTkVEX01FU1NBR0UiLCJydWxlIiwiZ2V0UnVsZSIsInJ1bGVJc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImVycm9yVG9rZW4iLCJlcnJvclRva2VucyIsIm5leHREZXB0aCIsInNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHIiLCJyaWdodENvbnRlbnQiLCJsZWZ0U2lnbmlmaWNhbnRUb2tlbnMiLCJyaWdodFNpZ25pZmljYW50VG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSx1QkFBUixDQUFqQjs7SUFFTUMsaUI7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTSCxpQkFBaUJJLE1BQWpCLENBQXdCLFVBQVNELE1BQVQsRUFBaUJFLHVCQUFqQixFQUEwQztBQUM3RSxZQUFJLE9BQU9BLHVCQUFQLEtBQW1DLFFBQXZDLEVBQWlEO0FBQy9DLGNBQUlDLFVBQVVELHVCQUFkO0FBQUEsY0FBd0M7QUFDcENFLGtCQUFRLENBRFo7QUFBQSxjQUVJQyxvQkFBb0JDLDZCQUE2QkgsT0FBN0IsRUFBc0NMLElBQXRDLEVBQTRDQyxLQUE1QyxFQUFtREssS0FBbkQsQ0FGeEI7O0FBSUFKLG1CQUFTQSxPQUFPTyxNQUFQLENBQWNGLGlCQUFkLENBQVQ7QUFDRCxTQU5ELE1BTU87QUFDTCxjQUFJRyxzQkFBc0JOLHVCQUExQixDQURLLENBQytDOztBQUVwREYsaUJBQU9TLElBQVAsQ0FBWUQsbUJBQVo7QUFDRDs7QUFFRCxlQUFPUixNQUFQO0FBQ0QsT0FkWSxFQWNWLEVBZFUsQ0FBYjs7QUFnQkEsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmYsaUJBQWpCOztBQUVBLElBQU1nQiw0QkFBNEIsMkNBQWxDOztBQUVBLFNBQVNOLDRCQUFULENBQXNDSCxPQUF0QyxFQUErQ0wsSUFBL0MsRUFBcURDLEtBQXJELEVBQTRESyxLQUE1RCxFQUFtRTtBQUNqRSxNQUFJQyxpQkFBSjtBQUFBLE1BQ0lRLE9BQU9kLE1BQU1lLE9BQU4sQ0FBY1YsS0FBZCxDQURYO0FBQUEsTUFFSVcsa0JBQW1CRixTQUFTRyxTQUZoQzs7QUFJQSxNQUFJYixZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCRSx3QkFBb0IsRUFBcEI7QUFDRCxHQUZELE1BRU8sSUFBSVUsZUFBSixFQUFxQjtBQUMxQixRQUFJRSxhQUFhLElBQUl2QixVQUFKLENBQWVTLE9BQWYsRUFBd0JMLElBQXhCLEVBQThCYyx5QkFBOUIsQ0FBakI7QUFBQSxRQUNJTSxjQUFjLENBQUNELFVBQUQsQ0FEbEI7O0FBR0FaLHdCQUFvQmEsV0FBcEIsQ0FKMEIsQ0FJUTtBQUNuQyxHQUxNLE1BS0E7QUFDTCxRQUFJQyxZQUFZZixRQUFRLENBQXhCO0FBQUEsUUFDSWdCLDJCQUEyQlAsS0FBS08sd0JBQUwsQ0FBOEJqQixPQUE5QixDQUQvQjs7QUFHQSxRQUFJaUIsNkJBQTZCLENBQUMsQ0FBbEMsRUFBcUM7QUFDbkNmLDBCQUFvQkMsNkJBQTZCSCxPQUE3QixFQUFzQ0wsSUFBdEMsRUFBNENDLEtBQTVDLEVBQW1Eb0IsU0FBbkQsQ0FBcEI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRSxtQkFBbUJSLEtBQUtTLDJCQUFMLENBQWlDbkIsT0FBakMsRUFBMENMLElBQTFDLENBQXZCO0FBQUEsVUFDSXlCLHlCQUF5QkYsaUJBQWlCRyxTQUFqQixFQUQ3QjtBQUFBLFVBRUlDLE9BQU9MLHdCQUZYO0FBQUEsVUFFc0M7QUFDbENNLGNBQVFOLDJCQUEyQkcsc0JBSHZDO0FBQUEsVUFHZ0U7QUFDNURJLG9CQUFjeEIsUUFBUXlCLE1BQVIsQ0FBZSxDQUFmLEVBQWtCSCxJQUFsQixDQUpsQjtBQUFBLFVBS0lJLGVBQWUxQixRQUFReUIsTUFBUixDQUFlRixLQUFmLENBTG5CO0FBQUEsVUFNSUksd0JBQXdCeEIsNkJBQTZCcUIsV0FBN0IsRUFBMEM3QixJQUExQyxFQUFnREMsS0FBaEQsRUFBdURvQixTQUF2RCxDQU41QjtBQUFBLFVBT0lZLHlCQUF5QnpCLDZCQUE2QnVCLFlBQTdCLEVBQTJDL0IsSUFBM0MsRUFBaURDLEtBQWpELEVBQXdESyxLQUF4RCxDQVA3Qjs7QUFTQUMsMEJBQW9CLEdBQUdFLE1BQUgsQ0FBVXVCLHFCQUFWLEVBQWlDdkIsTUFBakMsQ0FBd0NjLGdCQUF4QyxFQUEwRGQsTUFBMUQsQ0FBaUV3QixzQkFBakUsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQU8xQixpQkFBUDtBQUNEIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEVycm9yVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZXJyb3InKTtcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgdmFyIHRva2VucyA9IHRva2Vuc09yQ29udGVudHMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yUmVtYWluaW5nQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcblxyXG4gICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBub25TaWduaWZpY2FudFRva2VuID0gdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQ7ICAvLy9cclxuICAgICAgICBcclxuICAgICAgICB0b2tlbnMucHVzaChub25TaWduaWZpY2FudFRva2VuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRva2VucztcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VucztcclxuXHJcbmNvbnN0IFJVTEVfSVNfVU5ERUZJTkVEX01FU1NBR0UgPSAnVGhlcmUgYXJlIG5vIHJ1bGVzIHRvIHBhcnNlIHRoaXMgY29udGVudC4nO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICB2YXIgc2lnbmlmaWNhbnRUb2tlbnMsXHJcbiAgICAgIHJ1bGUgPSBydWxlcy5nZXRSdWxlKGRlcHRoKSxcclxuICAgICAgcnVsZUlzVW5kZWZpbmVkID0gKHJ1bGUgPT09IHVuZGVmaW5lZCk7XHJcblxyXG4gIGlmIChjb250ZW50ID09PSAnJykge1xyXG4gICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuICB9IGVsc2UgaWYgKHJ1bGVJc1VuZGVmaW5lZCkge1xyXG4gICAgdmFyIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihjb250ZW50LCBsaW5lLCBSVUxFX0lTX1VOREVGSU5FRF9NRVNTQUdFKSxcclxuICAgICAgICBlcnJvclRva2VucyA9IFtlcnJvclRva2VuXTtcclxuXHJcbiAgICBzaWduaWZpY2FudFRva2VucyA9IGVycm9yVG9rZW5zOyAgLy8vXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBuZXh0RGVwdGggPSBkZXB0aCArIDEsXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9PT0gLTEpIHtcclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBuZXh0RGVwdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgbGVmdCA9IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gKyBzaWduaWZpY2FudFRva2VuTGVuZ3RoLCAgLy8vXHJcbiAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyKDAsIGxlZnQpLFxyXG4gICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHIocmlnaHQpLFxyXG4gICAgICAgICAgbGVmdFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tQ29udGVudChyaWdodENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcblxyXG4gICAgICBzaWduaWZpY2FudFRva2VucyA9IFtdLmNvbmNhdChsZWZ0U2lnbmlmaWNhbnRUb2tlbnMpLmNvbmNhdChzaWduaWZpY2FudFRva2VuKS5jb25jYXQocmlnaHRTaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIl19