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
      throw new Error('There is no rule to parse the content \'' + content + '\'.');
    }
  }

  return significantTokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3NpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJydWxlcyIsInRva2VucyIsInJlZHVjZSIsInRva2VuT3JSZW1haW5pbmdDb250ZW50IiwiY29udGVudCIsImRlcHRoIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZSIsImNvbmNhdCIsIm5vblNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGUiLCJnZXRSdWxlIiwibmV4dERlcHRoIiwic2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwic2lnbmlmaWNhbnRUb2tlbkxlbmd0aCIsImdldExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwibGVmdFNpZ25pZmljYW50VG9rZW5zIiwicmlnaHRTaWduaWZpY2FudFRva2VucyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGlCOzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxLLEVBQU87QUFDekMsVUFBTUMsU0FBU0gsaUJBQWlCSSxNQUFqQixDQUF3QixVQUFTRCxNQUFULEVBQWlCRSx1QkFBakIsRUFBMEM7QUFDekUsWUFBSSxPQUFPQSx1QkFBUCxLQUFtQyxRQUF2QyxFQUFpRDtBQUMvQyxjQUFNQyxVQUFVRCx1QkFBaEI7QUFBQSxjQUEwQztBQUNwQ0Usa0JBQVEsQ0FEZDtBQUFBLGNBRU1DLG9CQUFvQkMsMENBQTBDSCxPQUExQyxFQUFtREwsSUFBbkQsRUFBeURDLEtBQXpELEVBQWdFSyxLQUFoRSxDQUYxQjs7QUFJQUosbUJBQVNBLE9BQU9PLE1BQVAsQ0FBY0YsaUJBQWQsQ0FBVDtBQUNELFNBTkQsTUFNTztBQUNMLGNBQU1HLHNCQUFzQk4sdUJBQTVCLENBREssQ0FDaUQ7O0FBRXRERixpQkFBT1MsSUFBUCxDQUFZRCxtQkFBWjtBQUNEOztBQUVELGVBQU9SLE1BQVA7QUFDRCxPQWRRLEVBY04sRUFkTSxDQUFmOztBQWdCQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCZixpQkFBakI7O0FBRUEsU0FBU1UseUNBQVQsQ0FBbURILE9BQW5ELEVBQTRETCxJQUE1RCxFQUFrRUMsS0FBbEUsRUFBeUVLLEtBQXpFLEVBQWdGO0FBQzlFLE1BQUlDLG9CQUFvQixFQUF4Qjs7QUFFQSxNQUFJRixZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCLFFBQU1TLE9BQU9iLE1BQU1jLE9BQU4sQ0FBY1QsS0FBZCxDQUFiOztBQUVBLFFBQUlRLFNBQVMsSUFBYixFQUFtQjtBQUNqQixVQUFNRSxZQUFZVixRQUFRLENBQTFCO0FBQUEsVUFDTVcsd0NBQXdDSCxLQUFLRyxxQ0FBTCxDQUEyQ1osT0FBM0MsQ0FEOUM7O0FBR0EsVUFBSVksMENBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaERWLDRCQUFvQkMsMENBQTBDSCxPQUExQyxFQUFtREwsSUFBbkQsRUFBeURDLEtBQXpELEVBQWdFZSxTQUFoRSxDQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1FLG1CQUFtQkosS0FBS0ssd0NBQUwsQ0FBOENkLE9BQTlDLEVBQXVETCxJQUF2RCxDQUF6QjtBQUFBLFlBQ01vQix5QkFBeUJGLGlCQUFpQkcsU0FBakIsRUFEL0I7QUFBQSxZQUVNQyxPQUFPTCxxQ0FGYjtBQUFBLFlBRXFEO0FBQy9DTSxnQkFBUU4sd0NBQXdDRyxzQkFIdEQ7QUFBQSxZQUcrRTtBQUN6RUksc0JBQWNuQixRQUFRb0IsU0FBUixDQUFrQixDQUFsQixFQUFxQkgsSUFBckIsQ0FKcEI7QUFBQSxZQUtNSSxlQUFlckIsUUFBUW9CLFNBQVIsQ0FBa0JGLEtBQWxCLENBTHJCO0FBQUEsWUFNTUksd0JBQXdCbkIsMENBQTBDZ0IsV0FBMUMsRUFBdUR4QixJQUF2RCxFQUE2REMsS0FBN0QsRUFBb0VlLFNBQXBFLENBTjlCO0FBQUEsWUFPTVkseUJBQXlCcEIsMENBQTBDa0IsWUFBMUMsRUFBd0QxQixJQUF4RCxFQUE4REMsS0FBOUQsRUFBcUVLLEtBQXJFLENBUC9COztBQVNBQyw0QkFBb0IsR0FBR0UsTUFBSCxDQUFVa0IscUJBQVYsRUFBaUNsQixNQUFqQyxDQUF3Q1MsZ0JBQXhDLEVBQTBEVCxNQUExRCxDQUFpRW1CLHNCQUFqRSxDQUFwQjtBQUNEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTCxZQUFNLElBQUlDLEtBQUosOENBQW9EeEIsT0FBcEQsU0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0UsaUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbk9yUmVtYWluaW5nQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuT3JSZW1haW5pbmdDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5vblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudDsgIC8vL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5vblNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKSB7XHJcbiAgbGV0IHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5leHREZXB0aCA9IGRlcHRoICsgMSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAtMSkge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgICAgICBsZWZ0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgICAgcmlnaHRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKHJpZ2h0Q29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXS5jb25jYXQobGVmdFNpZ25pZmljYW50VG9rZW5zKS5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbikuY29uY2F0KHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHJ1bGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgJyR7Y29udGVudH0nLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiJdfQ==