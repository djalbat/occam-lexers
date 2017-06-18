'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

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

          arrayUtil.splice(tokensOrContents, start, 1, tokensOrRemainingContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwibGluZSIsIlRva2VuIiwib2Zmc2V0IiwidG9rZW5zT3JDb250ZW50c0xlbmd0aCIsImxlbmd0aCIsImluZGV4Iiwib2Zmc2V0SW5kZXgiLCJ0b2tlbk9yQ29udGVudCIsImNvbnRlbnQiLCJ0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQiLCJ0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJ0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGgiLCJzdGFydCIsInNwbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxlQUFSLENBQWxCOztJQUVNQyxNOzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxLLEVBQU87QUFDekMsVUFBSUMsU0FBUyxDQUFiOztBQUVBLFVBQU1DLHlCQUF5QkosaUJBQWlCSyxNQUFoRDs7QUFFQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLHNCQUE1QixFQUFvREUsT0FBcEQsRUFBNkQ7QUFDM0QsWUFBTUMsY0FBY0QsUUFBUUgsTUFBNUI7QUFBQSxZQUNJSyxpQkFBaUJSLGlCQUFpQk8sV0FBakIsQ0FEckI7O0FBR0EsWUFBSSxPQUFPQyxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGNBQU1DLFVBQVVELGNBQWhCO0FBQUEsY0FBaUM7QUFDN0JFLHFDQUEyQkMsaURBQWlERixPQUFqRCxFQUEwRFIsSUFBMUQsRUFBZ0VDLEtBQWhFLENBRC9CO0FBQUEsY0FFSVUsaUNBQWlDRix5QkFBeUJMLE1BRjlEO0FBQUEsY0FHSVEsUUFBUU4sV0FIWjs7QUFLQVYsb0JBQVVpQixNQUFWLENBQWlCZCxnQkFBakIsRUFBbUNhLEtBQW5DLEVBQTBDLENBQTFDLEVBQTZDSCx3QkFBN0M7O0FBRUFQLG9CQUFVUyxpQ0FBaUMsQ0FBM0M7QUFDRDtBQUNGO0FBQ0Y7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCakIsTUFBakI7O0FBRUEsU0FBU1ksZ0RBQVQsQ0FBMERGLE9BQTFELEVBQW1FUixJQUFuRSxFQUF5RUMsS0FBekUsRUFBZ0Y7QUFDOUUsTUFBSWUseUJBQUo7QUFBQSxNQUNJUCwyQkFBMkIsRUFEL0I7QUFBQSxNQUVJUSw2QkFBNkJoQixNQUFNaUIscUJBQU4sQ0FBNEJWLE9BQTVCLENBRmpDOztBQUlBLFNBQU9TLCtCQUErQixDQUFDLENBQXZDLEVBQTBDO0FBQ3hDLFFBQUlBLDZCQUE2QixDQUFqQyxFQUFvQztBQUNsQ0QseUJBQW1CUixRQUFRVyxTQUFSLENBQWtCLENBQWxCLEVBQXFCRiwwQkFBckIsQ0FBbkI7O0FBRUFSLCtCQUF5QlcsSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFFBQU1LLFFBQVFwQixNQUFNcUIsd0JBQU4sQ0FBK0JkLE9BQS9CLEVBQXdDUixJQUF4QyxDQUFkO0FBQUEsUUFDTXVCLGNBQWNGLE1BQU1HLFNBQU4sRUFEcEI7QUFBQSxRQUVNQyxjQUFjUiw2QkFBNkJNLFdBRmpEOztBQUlBZCw2QkFBeUJXLElBQXpCLENBQThCQyxLQUE5Qjs7QUFFQWIsY0FBVUEsUUFBUVcsU0FBUixDQUFrQk0sV0FBbEIsQ0FBVjs7QUFFQVIsaUNBQTZCaEIsTUFBTWlCLHFCQUFOLENBQTRCVixPQUE1QixDQUE3QjtBQUNEOztBQUVELE1BQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEJRLHVCQUFtQlIsT0FBbkI7O0FBRUFDLDZCQUF5QlcsSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFNBQU9QLHdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIGFycmF5VXRpbC5zcGxpY2UodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIGxldCByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSwgICAgICAgXHJcbiAgICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iXX0=