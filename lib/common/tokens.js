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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm9mZnNldEluZGV4IiwidG9rZW5PckNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7O0lBRU1DLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTLENBQWI7O0FBRUEsVUFBTUMseUJBQXlCSixpQkFBaUJLLE1BQWhEOztBQUVBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUYsc0JBQTVCLEVBQW9ERSxPQUFwRCxFQUE2RDtBQUMzRCxZQUFNQyxjQUFjRCxRQUFRSCxNQUE1QjtBQUFBLFlBQ0lLLGlCQUFpQlIsaUJBQWlCTyxXQUFqQixDQURyQjs7QUFHQSxZQUFJLE9BQU9DLGNBQVAsS0FBMEIsUUFBOUIsRUFBd0M7QUFDdEMsY0FBTUMsVUFBVUQsY0FBaEI7QUFBQSxjQUFpQztBQUM3QkUscUNBQTJCQyxpREFBaURGLE9BQWpELEVBQTBEUixJQUExRCxFQUFnRUMsS0FBaEUsQ0FEL0I7QUFBQSxjQUVJVSxpQ0FBaUNGLHlCQUF5QkwsTUFGOUQ7QUFBQSxjQUdJUSxRQUFRTixXQUhaOztBQUtBVixlQUFLaUIsV0FBTCxDQUFpQmQsZ0JBQWpCLEVBQW1DYSxLQUFuQyxFQUEwQyxDQUExQyxFQUE2Q0gsd0JBQTdDOztBQUVBUCxvQkFBVVMsaUNBQWlDLENBQTNDO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCOztBQUVBLFNBQVNZLGdEQUFULENBQTBERixPQUExRCxFQUFtRVIsSUFBbkUsRUFBeUVDLEtBQXpFLEVBQWdGO0FBQzlFLE1BQUllLHlCQUFKO0FBQUEsTUFDSVAsMkJBQTJCLEVBRC9CO0FBQUEsTUFFSVEsNkJBQTZCaEIsTUFBTWlCLHFCQUFOLENBQTRCVixPQUE1QixDQUZqQzs7QUFJQSxTQUFPUywrQkFBK0IsQ0FBQyxDQUF2QyxFQUEwQztBQUN4QyxRQUFJQSw2QkFBNkIsQ0FBakMsRUFBb0M7QUFDbENELHlCQUFtQlIsUUFBUVcsU0FBUixDQUFrQixDQUFsQixFQUFxQkYsMEJBQXJCLENBQW5COztBQUVBUiwrQkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxRQUFNSyxRQUFRcEIsTUFBTXFCLHdCQUFOLENBQStCZCxPQUEvQixFQUF3Q1IsSUFBeEMsQ0FBZDtBQUFBLFFBQ011QixjQUFjRixNQUFNRyxTQUFOLEVBRHBCO0FBQUEsUUFFTUMsY0FBY1IsNkJBQTZCTSxXQUZqRDs7QUFJQWQsNkJBQXlCVyxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFiLGNBQVVBLFFBQVFXLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLGlDQUE2QmhCLE1BQU1pQixxQkFBTixDQUE0QlYsT0FBNUIsQ0FBN0I7QUFDRDs7QUFFRCxNQUFJQSxZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCUSx1QkFBbUJSLE9BQW5COztBQUVBQyw2QkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxTQUFPUCx3QkFBUDtBQUNEIiwiZmlsZSI6InRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQsXHJcbiAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiJdfQ==