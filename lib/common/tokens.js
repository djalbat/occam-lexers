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
          tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
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

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  var tokensOrRemainingContent = [],
      remainingContent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm9mZnNldEluZGV4IiwidG9rZW5PckNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7O0lBRU1DLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTLENBQWI7QUFBQSxVQUNJQyx5QkFBeUJKLGlCQUFpQkssTUFEOUM7O0FBR0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixzQkFBNUIsRUFBb0RFLE9BQXBELEVBQTZEO0FBQzNELFlBQUlDLGNBQWNELFFBQVFILE1BQTFCO0FBQUEsWUFDSUssaUJBQWlCUixpQkFBaUJPLFdBQWpCLENBRHJCOztBQUdBLFlBQUksT0FBT0MsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUN0QyxjQUFJQyxVQUFVRCxjQUFkO0FBQUEsY0FBK0I7QUFDM0JFLHFDQUEyQkMsaURBQWlERixPQUFqRCxFQUEwRFIsSUFBMUQsRUFBZ0VDLEtBQWhFLENBRC9CO0FBQUEsY0FFSVUsaUNBQWlDRix5QkFBeUJMLE1BRjlEO0FBQUEsY0FHSVEsUUFBUU4sV0FIWjs7QUFLQVYsZUFBS2lCLFdBQUwsQ0FBaUJkLGdCQUFqQixFQUFtQ2EsS0FBbkMsRUFBMEMsQ0FBMUMsRUFBNkNILHdCQUE3Qzs7QUFFQVAsb0JBQVVTLGlDQUFpQyxDQUEzQztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJqQixNQUFqQjs7QUFFQSxTQUFTWSxnREFBVCxDQUEwREYsT0FBMUQsRUFBbUVSLElBQW5FLEVBQXlFQyxLQUF6RSxFQUFnRjtBQUM5RSxNQUFJUSwyQkFBMkIsRUFBL0I7QUFBQSxNQUNJTyxnQkFESjtBQUFBLE1BRUlDLDZCQUE2QmhCLE1BQU1pQixxQkFBTixDQUE0QlYsT0FBNUIsQ0FGakM7O0FBSUEsU0FBT1MsK0JBQStCLENBQUMsQ0FBdkMsRUFBMEM7QUFDeEMsUUFBSUEsNkJBQTZCLENBQWpDLEVBQW9DO0FBQ2xDRCx5QkFBbUJSLFFBQVFXLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJGLDBCQUFyQixDQUFuQjs7QUFFQVIsK0JBQXlCVyxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsUUFBSUssUUFBUXBCLE1BQU1xQix3QkFBTixDQUErQmQsT0FBL0IsRUFBd0NSLElBQXhDLENBQVo7QUFBQSxRQUNJdUIsY0FBY0YsTUFBTUcsU0FBTixFQURsQjtBQUFBLFFBRUlDLGNBQWNSLDZCQUE2Qk0sV0FGL0M7O0FBSUFkLDZCQUF5QlcsSUFBekIsQ0FBOEJDLEtBQTlCOztBQUVBYixjQUFVQSxRQUFRVyxTQUFSLENBQWtCTSxXQUFsQixDQUFWOztBQUVBUixpQ0FBNkJoQixNQUFNaUIscUJBQU4sQ0FBNEJWLE9BQTVCLENBQTdCO0FBQ0Q7O0FBRUQsTUFBSUEsWUFBWSxFQUFoQixFQUFvQjtBQUNsQlEsdUJBQW1CUixPQUFuQjs7QUFFQUMsNkJBQXlCVyxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsU0FBT1Asd0JBQVA7QUFDRCIsImZpbGUiOiJ0b2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgVG9rZW4pIHtcclxuICAgIHZhciBvZmZzZXQgPSAwLFxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICB2YXIgb2Zmc2V0SW5kZXggPSBpbmRleCArIG9mZnNldCxcclxuICAgICAgICAgIHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tvZmZzZXRJbmRleF07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgdmFyIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLFxyXG4gICAgICByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICBcclxuICB3aGlsZSAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgIT09IC0xKSB7XHJcbiAgICBpZiAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPiAwKSB7XHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCk7XHJcblxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICB0b2tlbk9mZnNldCA9IHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgdG9rZW5MZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQ7XHJcbn1cclxuIl19