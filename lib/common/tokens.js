'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array;

var Tokens = function () {
  function Tokens() {
    _classCallCheck(this, Tokens);
  }

  _createClass(Tokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, Token) {
      var offset = 0;

      var tokensOrContentsLength = tokensOrContents.length;

      for (var index = 0; index < tokensOrContentsLength; index++) {
        var offsetIndex = index + offset,
            tokenOrContent = tokensOrContents[offsetIndex];

        if (typeof tokenOrContent === 'string') {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = offsetIndex;

          array.splice(tokensOrContents, start, 1, tokensOrRemainingContent);

          offset += tokensOrRemainingContentLength - 1;
        }
      }
    }
  }]);

  return Tokens;
}();

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  var remainingContent = void 0,
      tokensOrRemainingContent = [],
      tokenPositionWithinContent = Token.positionWithinContent(content);

  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromWithinContentAndLine(content, line),
        tokenLength = token.getLength(),
        tokenOffset = tokenPositionWithinContent + tokenLength;

    tokensOrRemainingContent.push(token);

    content = content.substring(tokenOffset);

    tokenPositionWithinContent = Token.positionWithinContent(content);
  }

  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheSIsIlRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwiVG9rZW4iLCJvZmZzZXQiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJvZmZzZXRJbmRleCIsInRva2VuT3JDb250ZW50IiwiY29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZSIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCIsInN0YXJ0Iiwic3BsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbWFpbmluZ0NvbnRlbnQiLCJ0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInN1YnN0cmluZyIsInB1c2giLCJ0b2tlbiIsImZyb21XaXRoaW5Db250ZW50QW5kTGluZSIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwidG9rZW5PZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0lBRVFDLEssR0FBVUYsUyxDQUFWRSxLOztJQUVGQyxNOzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxLLEVBQU87QUFDekMsVUFBSUMsU0FBUyxDQUFiOztBQUVBLFVBQU1DLHlCQUF5QkosaUJBQWlCSyxNQUFoRDs7QUFFQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLHNCQUE1QixFQUFvREUsT0FBcEQsRUFBNkQ7QUFDM0QsWUFBTUMsY0FBY0QsUUFBUUgsTUFBNUI7QUFBQSxZQUNNSyxpQkFBaUJSLGlCQUFpQk8sV0FBakIsQ0FEdkI7O0FBR0EsWUFBSSxPQUFPQyxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGNBQU1DLFVBQVVELGNBQWhCO0FBQUEsY0FBaUM7QUFDM0JFLHFDQUEyQkMsaURBQWlERixPQUFqRCxFQUEwRFIsSUFBMUQsRUFBZ0VDLEtBQWhFLENBRGpDO0FBQUEsY0FFTVUsaUNBQWlDRix5QkFBeUJMLE1BRmhFO0FBQUEsY0FHTVEsUUFBUU4sV0FIZDs7QUFLQVQsZ0JBQU1nQixNQUFOLENBQWFkLGdCQUFiLEVBQStCYSxLQUEvQixFQUFzQyxDQUF0QyxFQUF5Q0gsd0JBQXpDOztBQUVBUCxvQkFBVVMsaUNBQWlDLENBQTNDO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCOztBQUVBLFNBQVNZLGdEQUFULENBQTBERixPQUExRCxFQUFtRVIsSUFBbkUsRUFBeUVDLEtBQXpFLEVBQWdGO0FBQzlFLE1BQUllLHlCQUFKO0FBQUEsTUFDSVAsMkJBQTJCLEVBRC9CO0FBQUEsTUFFSVEsNkJBQTZCaEIsTUFBTWlCLHFCQUFOLENBQTRCVixPQUE1QixDQUZqQzs7QUFJQSxTQUFPUywrQkFBK0IsQ0FBQyxDQUF2QyxFQUEwQztBQUN4QyxRQUFJQSw2QkFBNkIsQ0FBakMsRUFBb0M7QUFDbENELHlCQUFtQlIsUUFBUVcsU0FBUixDQUFrQixDQUFsQixFQUFxQkYsMEJBQXJCLENBQW5COztBQUVBUiwrQkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxRQUFNSyxRQUFRcEIsTUFBTXFCLHdCQUFOLENBQStCZCxPQUEvQixFQUF3Q1IsSUFBeEMsQ0FBZDtBQUFBLFFBQ011QixjQUFjRixNQUFNRyxTQUFOLEVBRHBCO0FBQUEsUUFFTUMsY0FBY1IsNkJBQTZCTSxXQUZqRDs7QUFJQWQsNkJBQXlCVyxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFiLGNBQVVBLFFBQVFXLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLGlDQUE2QmhCLE1BQU1pQixxQkFBTixDQUE0QlYsT0FBNUIsQ0FBN0I7QUFDRDs7QUFFRCxNQUFJQSxZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCUSx1QkFBbUJSLE9BQW5COztBQUVBQyw2QkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxTQUFPUCx3QkFBUDtBQUNEIiwiZmlsZSI6InRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5O1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgVG9rZW4pLFxyXG4gICAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgYXJyYXkuc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCAxLCB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBvZmZzZXQgKz0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgVG9rZW4pIHtcclxuICBsZXQgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gW10sICAgICAgIFxyXG4gICAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICBcclxuICB3aGlsZSAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgIT09IC0xKSB7XHJcbiAgICBpZiAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPiAwKSB7XHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCk7XHJcblxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgICB0b2tlbk9mZnNldCA9IHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgdG9rZW5MZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQ7XHJcbn1cclxuIl19