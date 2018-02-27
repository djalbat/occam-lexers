'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, rules) {
      var index = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentContent = typeof tokenOrContent === 'string';

        if (tokenOrContentContent) {
          var content = tokenOrContent,
              ///
          depth = 0,
              significantTokens = significantTokensFromWithinContent(content, depth, rules),
              significantTokensLength = significantTokens.length,
              start = index,
              ///
          deleteCount = 1;

          splice(tokensOrContents, start, deleteCount, significantTokens);

          tokensOrContentsLength -= 1;

          tokensOrContentsLength += significantTokensLength;

          index += significantTokensLength;
        } else {
          index += 1;
        }
      }
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;

function significantTokensFromWithinContent(content, depth, rules) {
  var significantTokens = [];

  if (content !== '') {
    var rule = rules.getRule(depth);

    if (rule !== null) {
      var nextDepth = depth + 1,
          significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContent(content, nextDepth, rules);
      } else {
        var significantToken = rule.significantTokenFromWithinContent(content),
            significantTokenContentLength = significantToken.getContentLength(),
            left = significantTokenPositionWithinContent,
            ///
        right = significantTokenPositionWithinContent + significantTokenContentLength,
            ///
        leftContent = content.substring(0, left),
            rightContent = content.substring(right),
            leftSignificantTokens = significantTokensFromWithinContent(leftContent, nextDepth, rules),
            rightSignificantTokens = significantTokensFromWithinContent(rightContent, depth, rules);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error('There is no rule to parse \'' + content + '\'.');
    }
  }

  return significantTokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL3NpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInNwbGljZSIsIlNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsInJ1bGVzIiwiaW5kZXgiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5PckNvbnRlbnQiLCJ0b2tlbk9yQ29udGVudENvbnRlbnQiLCJjb250ZW50IiwiZGVwdGgiLCJzaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnQiLCJzaWduaWZpY2FudFRva2Vuc0xlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZSIsImdldFJ1bGUiLCJuZXh0RGVwdGgiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwibGVmdFNpZ25pZmljYW50VG9rZW5zIiwicmlnaHRTaWduaWZpY2FudFRva2VucyIsImNvbmNhdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELGNBRGIsQ0FDRUMsTUFERjs7SUFHQUMsaUI7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxLLEVBQU87QUFDbkMsVUFBSUMsUUFBUSxDQUFaO0FBQUEsVUFDSUMseUJBQXlCSCxpQkFBaUJJLE1BRDlDOztBQUdBLGFBQU9GLFFBQVFDLHNCQUFmLEVBQXVDO0FBQ3JDLFlBQU1FLGlCQUFpQkwsaUJBQWlCRSxLQUFqQixDQUF2QjtBQUFBLFlBQ01JLHdCQUF5QixPQUFPRCxjQUFQLEtBQTBCLFFBRHpEOztBQUdBLFlBQUlDLHFCQUFKLEVBQTJCO0FBQ3pCLGNBQU1DLFVBQVVGLGNBQWhCO0FBQUEsY0FBaUM7QUFDM0JHLGtCQUFRLENBRGQ7QUFBQSxjQUVNQyxvQkFBb0JDLG1DQUFtQ0gsT0FBbkMsRUFBNENDLEtBQTVDLEVBQW1EUCxLQUFuRCxDQUYxQjtBQUFBLGNBR01VLDBCQUEwQkYsa0JBQWtCTCxNQUhsRDtBQUFBLGNBSU1RLFFBQVFWLEtBSmQ7QUFBQSxjQUlzQjtBQUNoQlcsd0JBQWMsQ0FMcEI7O0FBT0FmLGlCQUFPRSxnQkFBUCxFQUF5QlksS0FBekIsRUFBZ0NDLFdBQWhDLEVBQTZDSixpQkFBN0M7O0FBRUFOLG9DQUEwQixDQUExQjs7QUFFQUEsb0NBQTBCUSx1QkFBMUI7O0FBRUFULG1CQUFTUyx1QkFBVDtBQUNELFNBZkQsTUFlTztBQUNMVCxtQkFBUyxDQUFUO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7QUFHSFksT0FBT0MsT0FBUCxHQUFpQmhCLGlCQUFqQjs7QUFFQSxTQUFTVyxrQ0FBVCxDQUE0Q0gsT0FBNUMsRUFBcURDLEtBQXJELEVBQTREUCxLQUE1RCxFQUFtRTtBQUNqRSxNQUFJUSxvQkFBb0IsRUFBeEI7O0FBRUEsTUFBSUYsWUFBWSxFQUFoQixFQUFvQjtBQUNsQixRQUFNUyxPQUFPZixNQUFNZ0IsT0FBTixDQUFjVCxLQUFkLENBQWI7O0FBRUEsUUFBSVEsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFVBQU1FLFlBQVlWLFFBQVEsQ0FBMUI7QUFBQSxVQUNNVyx3Q0FBd0NILEtBQUtHLHFDQUFMLENBQTJDWixPQUEzQyxDQUQ5Qzs7QUFHQSxVQUFJWSwwQ0FBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRFYsNEJBQW9CQyxtQ0FBbUNILE9BQW5DLEVBQTRDVyxTQUE1QyxFQUF1RGpCLEtBQXZELENBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTW1CLG1CQUFtQkosS0FBS0ssaUNBQUwsQ0FBdUNkLE9BQXZDLENBQXpCO0FBQUEsWUFDTWUsZ0NBQWdDRixpQkFBaUJHLGdCQUFqQixFQUR0QztBQUFBLFlBRU1DLE9BQU9MLHFDQUZiO0FBQUEsWUFFcUQ7QUFDL0NNLGdCQUFRTix3Q0FBd0NHLDZCQUh0RDtBQUFBLFlBR3NGO0FBQ2hGSSxzQkFBY25CLFFBQVFvQixTQUFSLENBQWtCLENBQWxCLEVBQXFCSCxJQUFyQixDQUpwQjtBQUFBLFlBS01JLGVBQWVyQixRQUFRb0IsU0FBUixDQUFrQkYsS0FBbEIsQ0FMckI7QUFBQSxZQU1NSSx3QkFBd0JuQixtQ0FBbUNnQixXQUFuQyxFQUFnRFIsU0FBaEQsRUFBMkRqQixLQUEzRCxDQU45QjtBQUFBLFlBT002Qix5QkFBeUJwQixtQ0FBbUNrQixZQUFuQyxFQUFpRHBCLEtBQWpELEVBQXdEUCxLQUF4RCxDQVAvQjs7QUFTQVEsNEJBQW9CLEdBQUdzQixNQUFILENBQVVGLHFCQUFWLEVBQWlDRSxNQUFqQyxDQUF3Q1gsZ0JBQXhDLEVBQTBEVyxNQUExRCxDQUFpRUQsc0JBQWpFLENBQXBCO0FBQ0Q7QUFDRixLQWxCRCxNQWtCTztBQUNMLFlBQU0sSUFBSUUsS0FBSixrQ0FBd0N6QixPQUF4QyxTQUFOO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRSxpQkFBUDtBQUNEIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBydWxlcykge1xyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudENvbnRlbnQgPSAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJyk7XHJcblxyXG4gICAgICBpZiAodG9rZW5PckNvbnRlbnRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgZGVwdGggPSAwLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudChjb250ZW50LCBkZXB0aCwgcnVsZXMpLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW5zKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCAtPSAxO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoICs9IHNpZ25pZmljYW50VG9rZW5zTGVuZ3RoO1xyXG5cclxuICAgICAgICBpbmRleCArPSBzaWduaWZpY2FudFRva2Vuc0xlbmd0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudChjb250ZW50LCBkZXB0aCwgcnVsZXMpIHtcclxuICBsZXQgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZ2V0UnVsZShkZXB0aCk7XHJcblxyXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV4dERlcHRoID0gZGVwdGggKyAxLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50KGNvbnRlbnQsIG5leHREZXB0aCwgcnVsZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudChjb250ZW50KSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuQ29udGVudExlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnRMZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50KGxlZnRDb250ZW50LCBuZXh0RGVwdGgsIHJ1bGVzKSxcclxuICAgICAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudChyaWdodENvbnRlbnQsIGRlcHRoLCBydWxlcyk7XHJcblxyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gW10uY29uY2F0KGxlZnRTaWduaWZpY2FudFRva2VucykuY29uY2F0KHNpZ25pZmljYW50VG9rZW4pLmNvbmNhdChyaWdodFNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBydWxlIHRvIHBhcnNlICcke2NvbnRlbnR9Jy5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxufVxyXG4iXX0=