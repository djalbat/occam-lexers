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

    var token = Token.fromContentAndLine(content, line),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsInRva2Vuc09yQ29udGVudHNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm9mZnNldEluZGV4IiwidG9rZW5PckNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbUNvbnRlbnQiLCJ0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGgiLCJzdGFydCIsInNwbGljZUFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbWFpbmluZ0NvbnRlbnQiLCJ0b2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJzdWJzdHJpbmciLCJwdXNoIiwidG9rZW4iLCJmcm9tQ29udGVudEFuZExpbmUiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7O0lBRU1DLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTLENBQWI7QUFBQSxVQUNJQyx5QkFBeUJKLGlCQUFpQkssTUFEOUM7O0FBR0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixzQkFBNUIsRUFBb0RFLE9BQXBELEVBQTZEO0FBQzNELFlBQUlDLGNBQWNELFFBQVFILE1BQTFCO0FBQUEsWUFDSUssaUJBQWlCUixpQkFBaUJPLFdBQWpCLENBRHJCOztBQUdBLFlBQUksT0FBT0MsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUN0QyxjQUFJQyxVQUFVRCxjQUFkO0FBQUEsY0FBK0I7QUFDM0JFLHFDQUEyQkMsb0NBQW9DRixPQUFwQyxFQUE2Q1IsSUFBN0MsRUFBbURDLEtBQW5ELENBRC9CO0FBQUEsY0FFSVUsaUNBQWlDRix5QkFBeUJMLE1BRjlEO0FBQUEsY0FHSVEsUUFBUU4sV0FIWjs7QUFLQVYsZUFBS2lCLFdBQUwsQ0FBaUJkLGdCQUFqQixFQUFtQ2EsS0FBbkMsRUFBMEMsQ0FBMUMsRUFBNkNILHdCQUE3Qzs7QUFFQVAsb0JBQVVTLGlDQUFpQyxDQUEzQztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJqQixNQUFqQjs7QUFFQSxTQUFTWSxtQ0FBVCxDQUE2Q0YsT0FBN0MsRUFBc0RSLElBQXRELEVBQTREQyxLQUE1RCxFQUFtRTtBQUNqRSxNQUFJUSwyQkFBMkIsRUFBL0I7QUFBQSxNQUNJTyxnQkFESjtBQUFBLE1BRUlDLGdCQUFnQmhCLE1BQU1pQixRQUFOLENBQWVWLE9BQWYsQ0FGcEI7O0FBSUEsU0FBT1Msa0JBQWtCLENBQUMsQ0FBMUIsRUFBNkI7QUFDM0IsUUFBSUEsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRCx5QkFBbUJSLFFBQVFXLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJGLGFBQXJCLENBQW5COztBQUVBUiwrQkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxRQUFJSyxRQUFRcEIsTUFBTXFCLGtCQUFOLENBQXlCZCxPQUF6QixFQUFrQ1IsSUFBbEMsQ0FBWjtBQUFBLFFBQ0l1QixjQUFjRixNQUFNRyxTQUFOLEVBRGxCO0FBQUEsUUFFSUMsY0FBY1IsZ0JBQWdCTSxXQUZsQzs7QUFJQWQsNkJBQXlCVyxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFiLGNBQVVBLFFBQVFXLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLG9CQUFnQmhCLE1BQU1pQixRQUFOLENBQWVWLE9BQWYsQ0FBaEI7QUFDRDs7QUFFRCxNQUFJQSxZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCUSx1QkFBbUJSLE9BQW5COztBQUVBQyw2QkFBeUJXLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxTQUFPUCx3QkFBUDtBQUNEIiwiZmlsZSI6InRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgdmFyIG9mZnNldCA9IDAsXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIHZhciBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgdmFyIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLFxyXG4gICAgICByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlblBvc2l0aW9uID0gVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb24gIT09IC0xKSB7XHJcbiAgICBpZiAodG9rZW5Qb3NpdGlvbiA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb24pO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uICsgdG9rZW5MZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uID0gVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiJdfQ==