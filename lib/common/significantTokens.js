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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwibGluZSIsInJ1bGVzIiwidG9rZW5zIiwicmVkdWNlIiwidG9rZW5PclJlbWFpbmluZ0NvbnRlbnQiLCJjb250ZW50IiwiZGVwdGgiLCJzaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiY29uY2F0Iiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZSIsImdldFJ1bGUiLCJuZXh0RGVwdGgiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJzaWduaWZpY2FudFRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJsZWZ0U2lnbmlmaWNhbnRUb2tlbnMiLCJyaWdodFNpZ25pZmljYW50VG9rZW5zIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsaUI7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFNQyxTQUFTSCxpQkFBaUJJLE1BQWpCLENBQXdCLFVBQVNELE1BQVQsRUFBaUJFLHVCQUFqQixFQUEwQztBQUN6RSxZQUFJLE9BQU9BLHVCQUFQLEtBQW1DLFFBQXZDLEVBQWlEO0FBQy9DLGNBQU1DLFVBQVVELHVCQUFoQjtBQUFBLGNBQTBDO0FBQ3BDRSxrQkFBUSxDQURkO0FBQUEsY0FFTUMsb0JBQW9CQywwQ0FBMENILE9BQTFDLEVBQW1ETCxJQUFuRCxFQUF5REMsS0FBekQsRUFBZ0VLLEtBQWhFLENBRjFCOztBQUlBSixtQkFBU0EsT0FBT08sTUFBUCxDQUFjRixpQkFBZCxDQUFUO0FBQ0QsU0FORCxNQU1PO0FBQ0wsY0FBTUcsc0JBQXNCTix1QkFBNUIsQ0FESyxDQUNpRDs7QUFFdERGLGlCQUFPUyxJQUFQLENBQVlELG1CQUFaO0FBQ0Q7O0FBRUQsZUFBT1IsTUFBUDtBQUNELE9BZFEsRUFjTixFQWRNLENBQWY7O0FBZ0JBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUJmLGlCQUFqQjs7QUFFQSxTQUFTVSx5Q0FBVCxDQUFtREgsT0FBbkQsRUFBNERMLElBQTVELEVBQWtFQyxLQUFsRSxFQUF5RUssS0FBekUsRUFBZ0Y7QUFDOUUsTUFBSUMsb0JBQW9CLEVBQXhCOztBQUVBLE1BQUlGLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsUUFBTVMsT0FBT2IsTUFBTWMsT0FBTixDQUFjVCxLQUFkLENBQWI7O0FBRUEsUUFBSVEsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFVBQU1FLFlBQVlWLFFBQVEsQ0FBMUI7QUFBQSxVQUNNVyx3Q0FBd0NILEtBQUtHLHFDQUFMLENBQTJDWixPQUEzQyxDQUQ5Qzs7QUFHQSxVQUFJWSwwQ0FBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRFYsNEJBQW9CQywwQ0FBMENILE9BQTFDLEVBQW1ETCxJQUFuRCxFQUF5REMsS0FBekQsRUFBZ0VlLFNBQWhFLENBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTUUsbUJBQW1CSixLQUFLSyx3Q0FBTCxDQUE4Q2QsT0FBOUMsRUFBdURMLElBQXZELENBQXpCO0FBQUEsWUFDTW9CLHlCQUF5QkYsaUJBQWlCRyxTQUFqQixFQUQvQjtBQUFBLFlBRU1DLE9BQU9MLHFDQUZiO0FBQUEsWUFFcUQ7QUFDL0NNLGdCQUFRTix3Q0FBd0NHLHNCQUh0RDtBQUFBLFlBRytFO0FBQ3pFSSxzQkFBY25CLFFBQVFvQixTQUFSLENBQWtCLENBQWxCLEVBQXFCSCxJQUFyQixDQUpwQjtBQUFBLFlBS01JLGVBQWVyQixRQUFRb0IsU0FBUixDQUFrQkYsS0FBbEIsQ0FMckI7QUFBQSxZQU1NSSx3QkFBd0JuQiwwQ0FBMENnQixXQUExQyxFQUF1RHhCLElBQXZELEVBQTZEQyxLQUE3RCxFQUFvRWUsU0FBcEUsQ0FOOUI7QUFBQSxZQU9NWSx5QkFBeUJwQiwwQ0FBMENrQixZQUExQyxFQUF3RDFCLElBQXhELEVBQThEQyxLQUE5RCxFQUFxRUssS0FBckUsQ0FQL0I7O0FBU0FDLDRCQUFvQixHQUFHRSxNQUFILENBQVVrQixxQkFBVixFQUFpQ2xCLE1BQWpDLENBQXdDUyxnQkFBeEMsRUFBMERULE1BQTFELENBQWlFbUIsc0JBQWpFLENBQXBCO0FBQ0Q7QUFDRixLQWxCRCxNQWtCTztBQUNMLFlBQU0sSUFBSUMsS0FBSiw4Q0FBb0R4QixPQUFwRCxtQkFBd0VMLElBQXhFLENBQU47QUFDRDtBQUNGOztBQUVELFNBQU9PLGlCQUFQO0FBQ0QiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpIHtcclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yUmVtYWluaW5nQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBub25TaWduaWZpY2FudFRva2VuID0gdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQ7ICAvLy9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0b2tlbnMucHVzaChub25TaWduaWZpY2FudFRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCkge1xyXG4gIGxldCBzaWduaWZpY2FudFRva2VucyA9IFtdO1xyXG5cclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5nZXRSdWxlKGRlcHRoKTtcclxuXHJcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBuZXh0RGVwdGggPSBkZXB0aCArIDEsXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBydWxlLnNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gLTEpIHtcclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBuZXh0RGVwdGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgICAgICAgbGVmdCA9IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICByaWdodCA9IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyBzaWduaWZpY2FudFRva2VuTGVuZ3RoLCAgLy8vXHJcbiAgICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgICByaWdodENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhyaWdodCksXHJcbiAgICAgICAgICAgICAgbGVmdFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUobGVmdENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBuZXh0RGVwdGgpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShyaWdodENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcblxyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gW10uY29uY2F0KGxlZnRTaWduaWZpY2FudFRva2VucykuY29uY2F0KHNpZ25pZmljYW50VG9rZW4pLmNvbmNhdChyaWdodFNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBydWxlIHRvIHBhcnNlIHRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBvbiBsaW5lICR7bGluZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxufVxyXG4iXX0=