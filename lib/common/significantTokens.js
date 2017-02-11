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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwibGluZSIsInJ1bGVzIiwidG9rZW5zIiwicmVkdWNlIiwidG9rZW5PclJlbWFpbmluZ0NvbnRlbnQiLCJjb250ZW50IiwiZGVwdGgiLCJzaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiY29uY2F0Iiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZSIsImdldFJ1bGUiLCJuZXh0RGVwdGgiLCJzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJzaWduaWZpY2FudFRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwibGVmdENvbnRlbnQiLCJzdWJzdHJpbmciLCJyaWdodENvbnRlbnQiLCJsZWZ0U2lnbmlmaWNhbnRUb2tlbnMiLCJyaWdodFNpZ25pZmljYW50VG9rZW5zIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsaUI7Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTSCxpQkFBaUJJLE1BQWpCLENBQXdCLFVBQVNELE1BQVQsRUFBaUJFLHVCQUFqQixFQUEwQztBQUM3RSxZQUFJLE9BQU9BLHVCQUFQLEtBQW1DLFFBQXZDLEVBQWlEO0FBQy9DLGNBQUlDLFVBQVVELHVCQUFkO0FBQUEsY0FBd0M7QUFDcENFLGtCQUFRLENBRFo7QUFBQSxjQUVJQyxvQkFBb0JDLDBDQUEwQ0gsT0FBMUMsRUFBbURMLElBQW5ELEVBQXlEQyxLQUF6RCxFQUFnRUssS0FBaEUsQ0FGeEI7O0FBSUFKLG1CQUFTQSxPQUFPTyxNQUFQLENBQWNGLGlCQUFkLENBQVQ7QUFDRCxTQU5ELE1BTU87QUFDTCxjQUFJRyxzQkFBc0JOLHVCQUExQixDQURLLENBQytDOztBQUVwREYsaUJBQU9TLElBQVAsQ0FBWUQsbUJBQVo7QUFDRDs7QUFFRCxlQUFPUixNQUFQO0FBQ0QsT0FkWSxFQWNWLEVBZFUsQ0FBYjs7QUFnQkEsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmYsaUJBQWpCOztBQUVBLFNBQVNVLHlDQUFULENBQW1ESCxPQUFuRCxFQUE0REwsSUFBNUQsRUFBa0VDLEtBQWxFLEVBQXlFSyxLQUF6RSxFQUFnRjtBQUM5RSxNQUFJQyxvQkFBb0IsRUFBeEI7O0FBRUEsTUFBSUYsWUFBWSxFQUFoQixFQUFvQjtBQUNsQixRQUFJUyxPQUFPYixNQUFNYyxPQUFOLENBQWNULEtBQWQsQ0FBWDs7QUFFQSxRQUFJUSxTQUFTLElBQWIsRUFBbUI7QUFDakIsVUFBSUUsWUFBWVYsUUFBUSxDQUF4QjtBQUFBLFVBQ0lXLHdDQUF3Q0gsS0FBS0cscUNBQUwsQ0FBMkNaLE9BQTNDLENBRDVDOztBQUdBLFVBQUlZLDBDQUEwQyxDQUFDLENBQS9DLEVBQWtEO0FBQ2hEViw0QkFBb0JDLDBDQUEwQ0gsT0FBMUMsRUFBbURMLElBQW5ELEVBQXlEQyxLQUF6RCxFQUFnRWUsU0FBaEUsQ0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJRSxtQkFBbUJKLEtBQUtLLHdDQUFMLENBQThDZCxPQUE5QyxFQUF1REwsSUFBdkQsQ0FBdkI7QUFBQSxZQUNJb0IseUJBQXlCRixpQkFBaUJHLFNBQWpCLEVBRDdCO0FBQUEsWUFFSUMsT0FBT0wscUNBRlg7QUFBQSxZQUVtRDtBQUMvQ00sZ0JBQVFOLHdDQUF3Q0csc0JBSHBEO0FBQUEsWUFHNkU7QUFDekVJLHNCQUFjbkIsUUFBUW9CLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJILElBQXJCLENBSmxCO0FBQUEsWUFLSUksZUFBZXJCLFFBQVFvQixTQUFSLENBQWtCRixLQUFsQixDQUxuQjtBQUFBLFlBTUlJLHdCQUF3Qm5CLDBDQUEwQ2dCLFdBQTFDLEVBQXVEeEIsSUFBdkQsRUFBNkRDLEtBQTdELEVBQW9FZSxTQUFwRSxDQU41QjtBQUFBLFlBT0lZLHlCQUF5QnBCLDBDQUEwQ2tCLFlBQTFDLEVBQXdEMUIsSUFBeEQsRUFBOERDLEtBQTlELEVBQXFFSyxLQUFyRSxDQVA3Qjs7QUFTQUMsNEJBQW9CLEdBQUdFLE1BQUgsQ0FBVWtCLHFCQUFWLEVBQWlDbEIsTUFBakMsQ0FBd0NTLGdCQUF4QyxFQUEwRFQsTUFBMUQsQ0FBaUVtQixzQkFBakUsQ0FBcEI7QUFDRDtBQUNGLEtBbEJELE1Ba0JPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLDhDQUFvRHhCLE9BQXBELG1CQUF3RUwsSUFBeEUsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT08saUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgdmFyIHRva2VucyA9IHRva2Vuc09yQ29udGVudHMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yUmVtYWluaW5nQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG5cclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50OyAgLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICB2YXIgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICB2YXIgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIHZhciBuZXh0RGVwdGggPSBkZXB0aCArIDEsXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpLFxyXG4gICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgIHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShyaWdodENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcblxyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gW10uY29uY2F0KGxlZnRTaWduaWZpY2FudFRva2VucykuY29uY2F0KHNpZ25pZmljYW50VG9rZW4pLmNvbmNhdChyaWdodFNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBydWxlIHRvIHBhcnNlIHRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBvbiBsaW5lICR7bGluZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxufVxyXG4iXX0=