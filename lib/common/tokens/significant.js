'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
              significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, depth);

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

function significantTokensFromWithinContentAndLine(content, line, rules, depth) {
  var significantTokens = [];

  if (content !== '') {
    var rule = rules.getRule(depth);

    if (rule !== null) {
      var nextDepth = depth + 1,
          significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, nextDepth);
      } else {
        var significantToken = rule.significantTokenFromWithinContentAndLine(content, line),
            significantTokenLength = significantToken.getLength(),
            left = significantTokenPositionWithinContent,
            ///
        right = significantTokenPositionWithinContent + significantTokenLength,
            ///
        leftContent = content.substring(0, left),
            rightContent = content.substring(right),
            leftSignificantTokens = significantTokensFromWithinContentAndLine(leftContent, line, rules, nextDepth),
            rightSignificantTokens = significantTokensFromWithinContentAndLine(rightContent, line, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error('There is no rule to parse the content \'' + content + '\' on line ' + line);
    }
  }

  return significantTokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3NpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJydWxlcyIsInRva2VucyIsInJlZHVjZSIsInRva2VuT3JSZW1haW5pbmdDb250ZW50IiwiY29udGVudCIsImRlcHRoIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZSIsImNvbmNhdCIsIm5vblNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGUiLCJnZXRSdWxlIiwibmV4dERlcHRoIiwic2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwic2lnbmlmaWNhbnRUb2tlbkxlbmd0aCIsImdldExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwibGVmdFNpZ25pZmljYW50VG9rZW5zIiwicmlnaHRTaWduaWZpY2FudFRva2VucyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGlCOzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxLLEVBQU87QUFDekMsVUFBTUMsU0FBU0gsaUJBQWlCSSxNQUFqQixDQUF3QixVQUFTRCxNQUFULEVBQWlCRSx1QkFBakIsRUFBMEM7QUFDekUsWUFBSSxPQUFPQSx1QkFBUCxLQUFtQyxRQUF2QyxFQUFpRDtBQUMvQyxjQUFNQyxVQUFVRCx1QkFBaEI7QUFBQSxjQUEwQztBQUNwQ0Usa0JBQVEsQ0FEZDtBQUFBLGNBRU1DLG9CQUFvQkMsMENBQTBDSCxPQUExQyxFQUFtREwsSUFBbkQsRUFBeURDLEtBQXpELEVBQWdFSyxLQUFoRSxDQUYxQjs7QUFJQUosbUJBQVNBLE9BQU9PLE1BQVAsQ0FBY0YsaUJBQWQsQ0FBVDtBQUNELFNBTkQsTUFNTztBQUNMLGNBQU1HLHNCQUFzQk4sdUJBQTVCLENBREssQ0FDaUQ7O0FBRXRERixpQkFBT1MsSUFBUCxDQUFZRCxtQkFBWjtBQUNEOztBQUVELGVBQU9SLE1BQVA7QUFDRCxPQWRRLEVBY04sRUFkTSxDQUFmOztBQWdCQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCZixpQkFBakI7O0FBRUEsU0FBU1UseUNBQVQsQ0FBbURILE9BQW5ELEVBQTRETCxJQUE1RCxFQUFrRUMsS0FBbEUsRUFBeUVLLEtBQXpFLEVBQWdGO0FBQzlFLE1BQUlDLG9CQUFvQixFQUF4Qjs7QUFFQSxNQUFJRixZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCLFFBQU1TLE9BQU9iLE1BQU1jLE9BQU4sQ0FBY1QsS0FBZCxDQUFiOztBQUVBLFFBQUlRLFNBQVMsSUFBYixFQUFtQjtBQUNqQixVQUFNRSxZQUFZVixRQUFRLENBQTFCO0FBQUEsVUFDTVcsd0NBQXdDSCxLQUFLRyxxQ0FBTCxDQUEyQ1osT0FBM0MsQ0FEOUM7O0FBR0EsVUFBSVksMENBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaERWLDRCQUFvQkMsMENBQTBDSCxPQUExQyxFQUFtREwsSUFBbkQsRUFBeURDLEtBQXpELEVBQWdFZSxTQUFoRSxDQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1FLG1CQUFtQkosS0FBS0ssd0NBQUwsQ0FBOENkLE9BQTlDLEVBQXVETCxJQUF2RCxDQUF6QjtBQUFBLFlBQ01vQix5QkFBeUJGLGlCQUFpQkcsU0FBakIsRUFEL0I7QUFBQSxZQUVNQyxPQUFPTCxxQ0FGYjtBQUFBLFlBRXFEO0FBQy9DTSxnQkFBUU4sd0NBQXdDRyxzQkFIdEQ7QUFBQSxZQUcrRTtBQUN6RUksc0JBQWNuQixRQUFRb0IsU0FBUixDQUFrQixDQUFsQixFQUFxQkgsSUFBckIsQ0FKcEI7QUFBQSxZQUtNSSxlQUFlckIsUUFBUW9CLFNBQVIsQ0FBa0JGLEtBQWxCLENBTHJCO0FBQUEsWUFNTUksd0JBQXdCbkIsMENBQTBDZ0IsV0FBMUMsRUFBdUR4QixJQUF2RCxFQUE2REMsS0FBN0QsRUFBb0VlLFNBQXBFLENBTjlCO0FBQUEsWUFPTVkseUJBQXlCcEIsMENBQTBDa0IsWUFBMUMsRUFBd0QxQixJQUF4RCxFQUE4REMsS0FBOUQsRUFBcUVLLEtBQXJFLENBUC9COztBQVNBQyw0QkFBb0IsR0FBR0UsTUFBSCxDQUFVa0IscUJBQVYsRUFBaUNsQixNQUFqQyxDQUF3Q1MsZ0JBQXhDLEVBQTBEVCxNQUExRCxDQUFpRW1CLHNCQUFqRSxDQUFwQjtBQUNEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTCxZQUFNLElBQUlDLEtBQUosOENBQW9EeEIsT0FBcEQsbUJBQXdFTCxJQUF4RSxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTyxpQkFBUDtBQUNEIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuT3JSZW1haW5pbmdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChzaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50OyAgLy8vXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICBsZXQgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZ2V0UnVsZShkZXB0aCk7XHJcblxyXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV4dERlcHRoID0gZGVwdGggKyAxLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCwgIC8vL1xyXG4gICAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpLFxyXG4gICAgICAgICAgICAgIGxlZnRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGxlZnRDb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKSxcclxuICAgICAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUocmlnaHRDb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG5cclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IFtdLmNvbmNhdChsZWZ0U2lnbmlmaWNhbnRUb2tlbnMpLmNvbmNhdChzaWduaWZpY2FudFRva2VuKS5jb25jYXQocmlnaHRTaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gcnVsZSB0byBwYXJzZSB0aGUgY29udGVudCAnJHtjb250ZW50fScgb24gbGluZSAke2xpbmV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIl19