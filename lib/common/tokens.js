'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

var Tokens = function () {
  function Tokens() {
    _classCallCheck(this, Tokens);
  }

  _createClass(Tokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, Token) {
      var index = 0,
          tokensOrContentsLength = tokensOrContents.length;

      while (index < tokensOrContentsLength) {
        var tokenOrContent = tokensOrContents[index],
            tokenOrContentContent = typeof tokenOrContent === 'string';

        if (tokenOrContentContent) {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromWithinContent(content, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = index,
              ///
          deleteCount = 1;

          splice(tokensOrContents, start, deleteCount, tokensOrRemainingContent);

          tokensOrContentsLength -= 1;

          tokensOrContentsLength += tokensOrRemainingContentLength;

          index += tokensOrRemainingContentLength;
        } else {
          index += 1;
        }
      }
    }
  }]);

  return Tokens;
}();

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContent(content, Token) {
  var remainingContent = void 0,
      tokensOrRemainingContent = [],
      tokenPositionWithinContent = Token.positionWithinContent(content);

  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromWithinContent(content),
        tokenContentLength = token.getContentLength(),
        tokenOffset = tokenPositionWithinContent + tokenContentLength;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInNwbGljZSIsIlRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJUb2tlbiIsImluZGV4IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsInRva2VuT3JDb250ZW50IiwidG9rZW5PckNvbnRlbnRDb250ZW50IiwiY29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tV2l0aGluQ29udGVudCIsInRva2VuQ29udGVudExlbmd0aCIsImdldENvbnRlbnRMZW5ndGgiLCJ0b2tlbk9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7O0lBR0FDLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxLLEVBQU87QUFDbkMsVUFBSUMsUUFBUSxDQUFaO0FBQUEsVUFDSUMseUJBQXlCSCxpQkFBaUJJLE1BRDlDOztBQUdBLGFBQU9GLFFBQVFDLHNCQUFmLEVBQXVDO0FBQ3JDLFlBQU1FLGlCQUFpQkwsaUJBQWlCRSxLQUFqQixDQUF2QjtBQUFBLFlBQ01JLHdCQUF5QixPQUFPRCxjQUFQLEtBQTBCLFFBRHpEOztBQUdBLFlBQUlDLHFCQUFKLEVBQTJCO0FBQ3pCLGNBQU1DLFVBQVVGLGNBQWhCO0FBQUEsY0FBaUM7QUFDM0JHLHFDQUEyQkMsMENBQTBDRixPQUExQyxFQUFtRE4sS0FBbkQsQ0FEakM7QUFBQSxjQUVNUyxpQ0FBaUNGLHlCQUF5QkosTUFGaEU7QUFBQSxjQUdNTyxRQUFRVCxLQUhkO0FBQUEsY0FHc0I7QUFDaEJVLHdCQUFjLENBSnBCOztBQU1BZCxpQkFBT0UsZ0JBQVAsRUFBeUJXLEtBQXpCLEVBQWdDQyxXQUFoQyxFQUE2Q0osd0JBQTdDOztBQUVBTCxvQ0FBMEIsQ0FBMUI7O0FBRUFBLG9DQUEwQk8sOEJBQTFCOztBQUVBUixtQkFBU1EsOEJBQVQ7QUFDRCxTQWRELE1BY087QUFDTFIsbUJBQVMsQ0FBVDtBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCOztBQUVBLFNBQVNVLHlDQUFULENBQW1ERixPQUFuRCxFQUE0RE4sS0FBNUQsRUFBbUU7QUFDakUsTUFBSWMseUJBQUo7QUFBQSxNQUNJUCwyQkFBMkIsRUFEL0I7QUFBQSxNQUVJUSw2QkFBNkJmLE1BQU1nQixxQkFBTixDQUE0QlYsT0FBNUIsQ0FGakM7O0FBSUEsU0FBT1MsK0JBQStCLENBQUMsQ0FBdkMsRUFBMEM7QUFDeEMsUUFBSUEsNkJBQTZCLENBQWpDLEVBQW9DO0FBQ2xDRCx5QkFBbUJSLFFBQVFXLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJGLDBCQUFyQixDQUFuQjs7QUFFQVIsK0JBQXlCVyxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsUUFBTUssUUFBUW5CLE1BQU1vQixpQkFBTixDQUF3QmQsT0FBeEIsQ0FBZDtBQUFBLFFBQ01lLHFCQUFxQkYsTUFBTUcsZ0JBQU4sRUFEM0I7QUFBQSxRQUVNQyxjQUFjUiw2QkFBNkJNLGtCQUZqRDs7QUFJQWQsNkJBQXlCVyxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFiLGNBQVVBLFFBQVFXLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLGlDQUE2QmYsTUFBTWdCLHFCQUFOLENBQTRCVixPQUE1QixDQUE3QjtBQUNEOztBQUVELE1BQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEJRLHVCQUFtQlIsT0FBbkI7O0FBRUFDLDZCQUF5QlcsSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFNBQU9QLHdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcclxuXHJcbmNsYXNzIFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgVG9rZW4pIHtcclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGgpIHtcclxuICAgICAgY29uc3QgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW2luZGV4XSxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnRDb250ZW50ID0gKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpO1xyXG5cclxuICAgICAgaWYgKHRva2VuT3JDb250ZW50Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQsIFRva2VuKSxcclxuICAgICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cclxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHNMZW5ndGggLT0gMTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGg7XHJcblxyXG4gICAgICAgIGluZGV4ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudChjb250ZW50KSxcclxuICAgICAgICAgIHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkNvbnRlbnRMZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQ7XHJcbn1cclxuIl19