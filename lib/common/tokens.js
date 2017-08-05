'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    splice = array.splice;

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

          splice(tokensOrContents, start, 1, tokensOrRemainingContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheSIsInNwbGljZSIsIlRva2VucyIsInRva2Vuc09yQ29udGVudHMiLCJsaW5lIiwiVG9rZW4iLCJvZmZzZXQiLCJ0b2tlbnNPckNvbnRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJvZmZzZXRJbmRleCIsInRva2VuT3JDb250ZW50IiwiY29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZSIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCIsInN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbWFpbmluZ0NvbnRlbnQiLCJ0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInN1YnN0cmluZyIsInB1c2giLCJ0b2tlbiIsImZyb21XaXRoaW5Db250ZW50QW5kTGluZSIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwidG9rZW5PZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixTQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELEtBRGIsQ0FDRUMsTUFERjs7SUFHQUMsTTs7Ozs7Ozt5QkFDUUMsZ0IsRUFBa0JDLEksRUFBTUMsSyxFQUFPO0FBQ3pDLFVBQUlDLFNBQVMsQ0FBYjs7QUFFQSxVQUFNQyx5QkFBeUJKLGlCQUFpQkssTUFBaEQ7O0FBRUEsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixzQkFBNUIsRUFBb0RFLE9BQXBELEVBQTZEO0FBQzNELFlBQU1DLGNBQWNELFFBQVFILE1BQTVCO0FBQUEsWUFDTUssaUJBQWlCUixpQkFBaUJPLFdBQWpCLENBRHZCOztBQUdBLFlBQUksT0FBT0MsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUN0QyxjQUFNQyxVQUFVRCxjQUFoQjtBQUFBLGNBQWlDO0FBQzNCRSxxQ0FBMkJDLGlEQUFpREYsT0FBakQsRUFBMERSLElBQTFELEVBQWdFQyxLQUFoRSxDQURqQztBQUFBLGNBRU1VLGlDQUFpQ0YseUJBQXlCTCxNQUZoRTtBQUFBLGNBR01RLFFBQVFOLFdBSGQ7O0FBS0FULGlCQUFPRSxnQkFBUCxFQUF5QmEsS0FBekIsRUFBZ0MsQ0FBaEMsRUFBbUNILHdCQUFuQzs7QUFFQVAsb0JBQVVTLGlDQUFpQyxDQUEzQztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJoQixNQUFqQjs7QUFFQSxTQUFTWSxnREFBVCxDQUEwREYsT0FBMUQsRUFBbUVSLElBQW5FLEVBQXlFQyxLQUF6RSxFQUFnRjtBQUM5RSxNQUFJYyx5QkFBSjtBQUFBLE1BQ0lOLDJCQUEyQixFQUQvQjtBQUFBLE1BRUlPLDZCQUE2QmYsTUFBTWdCLHFCQUFOLENBQTRCVCxPQUE1QixDQUZqQzs7QUFJQSxTQUFPUSwrQkFBK0IsQ0FBQyxDQUF2QyxFQUEwQztBQUN4QyxRQUFJQSw2QkFBNkIsQ0FBakMsRUFBb0M7QUFDbENELHlCQUFtQlAsUUFBUVUsU0FBUixDQUFrQixDQUFsQixFQUFxQkYsMEJBQXJCLENBQW5COztBQUVBUCwrQkFBeUJVLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxRQUFNSyxRQUFRbkIsTUFBTW9CLHdCQUFOLENBQStCYixPQUEvQixFQUF3Q1IsSUFBeEMsQ0FBZDtBQUFBLFFBQ01zQixjQUFjRixNQUFNRyxTQUFOLEVBRHBCO0FBQUEsUUFFTUMsY0FBY1IsNkJBQTZCTSxXQUZqRDs7QUFJQWIsNkJBQXlCVSxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFaLGNBQVVBLFFBQVFVLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLGlDQUE2QmYsTUFBTWdCLHFCQUFOLENBQTRCVCxPQUE1QixDQUE3QjtBQUNEOztBQUVELE1BQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEJPLHVCQUFtQlAsT0FBbkI7O0FBRUFDLDZCQUF5QlUsSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFNBQU9OLHdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XHJcblxyXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXHJcbiAgICAgIHsgc3BsaWNlIH0gPSBhcnJheTtcclxuXHJcbmNsYXNzIFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgVG9rZW4pIHtcclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoID0gdG9rZW5zT3JDb250ZW50cy5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRva2Vuc09yQ29udGVudHNMZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0SW5kZXggPSBpbmRleCArIG9mZnNldCxcclxuICAgICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIHNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiJdfQ==