'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

var Tokens = function () {
  function Tokens() {
    _classCallCheck(this, Tokens);
  }

  _createClass(Tokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, Token) {
      var offset = 0,
          tokensOrContentsLength = tokensOrContents.length;

      for (var index = 0; index < tokensOrContentsLength; index++) {
        var offsetIndex = index + offset,
            tokenOrContent = tokensOrContents[offsetIndex];

        if (typeof tokenOrContent === 'string') {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromContent(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = offsetIndex;

          util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

          offset += tokensOrRemainingContentLength - 1;
        }
      }
    }
  }]);

  return Tokens;
}();

module.exports = Tokens;

function tokensOrRemainingContentFromContent(content, line, Token) {
  var tokensOrRemainingContent = [],
      remainingContent,
      tokenPosition = Token.position(content);

  while (tokenPosition !== -1) {
    if (tokenPosition > 0) {
      remainingContent = content.substring(0, tokenPosition);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromContent(content, line),
        tokenLength = token.getLength(),
        tokenOffset = tokenPosition + tokenLength;

    tokensOrRemainingContent.push(token);

    content = content.substring(tokenOffset);

    tokenPosition = Token.position(content);
  }

  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm9mZnNldEluZGV4IiwidG9rZW5PckNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbUNvbnRlbnQiLCJ0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGgiLCJzdGFydCIsInNwbGljZUFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbWFpbmluZ0NvbnRlbnQiLCJ0b2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tQ29udGVudCIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwidG9rZW5PZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDs7SUFFTUMsTTs7Ozs7Ozt5QkFDUUMsZ0IsRUFBa0JDLEksRUFBTUMsSyxFQUFPO0FBQ3pDLFVBQUlDLFNBQVMsQ0FBYjtBQUFBLFVBQ0lDLHlCQUF5QkosaUJBQWlCSyxNQUQ5Qzs7QUFHQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLHNCQUE1QixFQUFvREUsT0FBcEQsRUFBNkQ7QUFDM0QsWUFBSUMsY0FBY0QsUUFBUUgsTUFBMUI7QUFBQSxZQUNJSyxpQkFBaUJSLGlCQUFpQk8sV0FBakIsQ0FEckI7O0FBR0EsWUFBSSxPQUFPQyxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGNBQUlDLFVBQVVELGNBQWQ7QUFBQSxjQUErQjtBQUMzQkUscUNBQTJCQyxvQ0FBb0NGLE9BQXBDLEVBQTZDUixJQUE3QyxFQUFtREMsS0FBbkQsQ0FEL0I7QUFBQSxjQUVJVSxpQ0FBaUNGLHlCQUF5QkwsTUFGOUQ7QUFBQSxjQUdJUSxRQUFRTixXQUhaOztBQUtBVixlQUFLaUIsV0FBTCxDQUFpQmQsZ0JBQWpCLEVBQW1DYSxLQUFuQyxFQUEwQyxDQUExQyxFQUE2Q0gsd0JBQTdDOztBQUVBUCxvQkFBVVMsaUNBQWlDLENBQTNDO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCOztBQUVBLFNBQVNZLG1DQUFULENBQTZDRixPQUE3QyxFQUFzRFIsSUFBdEQsRUFBNERDLEtBQTVELEVBQW1FO0FBQ2pFLE1BQUlRLDJCQUEyQixFQUEvQjtBQUFBLE1BQ0lPLGdCQURKO0FBQUEsTUFFSUMsZ0JBQWdCaEIsTUFBTWlCLFFBQU4sQ0FBZVYsT0FBZixDQUZwQjs7QUFJQSxTQUFPUyxrQkFBa0IsQ0FBQyxDQUExQixFQUE2QjtBQUMzQixRQUFJQSxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJELHlCQUFtQlIsUUFBUVcsU0FBUixDQUFrQixDQUFsQixFQUFxQkYsYUFBckIsQ0FBbkI7O0FBRUFSLCtCQUF5QlcsSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFFBQUlLLFFBQVFwQixNQUFNcUIsV0FBTixDQUFrQmQsT0FBbEIsRUFBMkJSLElBQTNCLENBQVo7QUFBQSxRQUNJdUIsY0FBY0YsTUFBTUcsU0FBTixFQURsQjtBQUFBLFFBRUlDLGNBQWNSLGdCQUFnQk0sV0FGbEM7O0FBSUFkLDZCQUF5QlcsSUFBekIsQ0FBOEJDLEtBQTlCOztBQUVBYixjQUFVQSxRQUFRVyxTQUFSLENBQWtCTSxXQUFsQixDQUFWOztBQUVBUixvQkFBZ0JoQixNQUFNaUIsUUFBTixDQUFlVixPQUFmLENBQWhCO0FBQ0Q7O0FBRUQsTUFBSUEsWUFBWSxFQUFoQixFQUFvQjtBQUNsQlEsdUJBQW1CUixPQUFuQjs7QUFFQUMsNkJBQXlCVyxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsU0FBT1Asd0JBQVA7QUFDRCIsImZpbGUiOiJ0b2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgVG9rZW4pIHtcclxuICAgIHZhciBvZmZzZXQgPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICB2YXIgb2Zmc2V0SW5kZXggPSBpbmRleCArIG9mZnNldCxcclxuICAgICAgICAgIHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tvZmZzZXRJbmRleF07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgVG9rZW4pLFxyXG4gICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgICBzdGFydCA9IG9mZnNldEluZGV4O1xyXG5cclxuICAgICAgICB1dGlsLnNwbGljZUFycmF5KHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCAxLCB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBvZmZzZXQgKz0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIHZhciB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSxcclxuICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgdG9rZW5Qb3NpdGlvbiA9IFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb24gPiAwKSB7XHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCB0b2tlblBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0b2tlbiA9IFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uICsgdG9rZW5MZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uID0gVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiJdfQ==