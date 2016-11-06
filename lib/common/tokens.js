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

      tokensOrContents.forEach(function (tokenOrContent, index) {
        if (typeof tokenOrContent === 'string') {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromContent(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = index + offset;

          util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

          offset += tokensOrRemainingContentLength;
        }
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsImZvckVhY2giLCJ0b2tlbk9yQ29udGVudCIsImluZGV4IiwiY29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21Db250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwic3Vic3RyaW5nIiwicHVzaCIsInRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7O0lBRU1DLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTLENBQWI7O0FBRUFILHVCQUFpQkksT0FBakIsQ0FBeUIsVUFBU0MsY0FBVCxFQUF5QkMsS0FBekIsRUFBZ0M7QUFDdkQsWUFBSSxPQUFPRCxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGNBQUlFLFVBQVVGLGNBQWQ7QUFBQSxjQUErQjtBQUMzQkcscUNBQTJCQyxvQ0FBb0NGLE9BQXBDLEVBQTZDTixJQUE3QyxFQUFtREMsS0FBbkQsQ0FEL0I7QUFBQSxjQUVJUSxpQ0FBaUNGLHlCQUF5QkcsTUFGOUQ7QUFBQSxjQUdJQyxRQUFRTixRQUFRSCxNQUhwQjs7QUFLQU4sZUFBS2dCLFdBQUwsQ0FBaUJiLGdCQUFqQixFQUFtQ1ksS0FBbkMsRUFBMEMsQ0FBMUMsRUFBNkNKLHdCQUE3Qzs7QUFFQUwsb0JBQVVPLDhCQUFWO0FBQ0Q7QUFDRixPQVhEO0FBWUQ7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCaEIsTUFBakI7O0FBRUEsU0FBU1UsbUNBQVQsQ0FBNkNGLE9BQTdDLEVBQXNETixJQUF0RCxFQUE0REMsS0FBNUQsRUFBbUU7QUFDakUsTUFBSU0sMkJBQTJCLEVBQS9CO0FBQUEsTUFDSVEsZ0JBREo7QUFBQSxNQUVJQyxnQkFBZ0JmLE1BQU1nQixRQUFOLENBQWVYLE9BQWYsQ0FGcEI7O0FBSUEsU0FBT1Usa0JBQWtCLENBQUMsQ0FBMUIsRUFBNkI7QUFDM0IsUUFBSUEsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRCx5QkFBbUJULFFBQVFZLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJGLGFBQXJCLENBQW5COztBQUVBVCwrQkFBeUJZLElBQXpCLENBQThCSixnQkFBOUI7QUFDRDs7QUFFRCxRQUFJSyxRQUFRbkIsTUFBTW9CLFdBQU4sQ0FBa0JmLE9BQWxCLEVBQTJCTixJQUEzQixDQUFaO0FBQUEsUUFDSXNCLGNBQWNGLE1BQU1HLFNBQU4sRUFEbEI7QUFBQSxRQUVJQyxjQUFjUixnQkFBZ0JNLFdBRmxDOztBQUlBZiw2QkFBeUJZLElBQXpCLENBQThCQyxLQUE5Qjs7QUFFQWQsY0FBVUEsUUFBUVksU0FBUixDQUFrQk0sV0FBbEIsQ0FBVjs7QUFFQVIsb0JBQWdCZixNQUFNZ0IsUUFBTixDQUFlWCxPQUFmLENBQWhCO0FBQ0Q7O0FBRUQsTUFBSUEsWUFBWSxFQUFoQixFQUFvQjtBQUNsQlMsdUJBQW1CVCxPQUFuQjs7QUFFQUMsNkJBQXlCWSxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsU0FBT1Isd0JBQVA7QUFDRCIsImZpbGUiOiJ0b2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgVG9rZW4pIHtcclxuICAgIHZhciBvZmZzZXQgPSAwO1xyXG5cclxuICAgIHRva2Vuc09yQ29udGVudHMuZm9yRWFjaChmdW5jdGlvbih0b2tlbk9yQ29udGVudCwgaW5kZXgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBpbmRleCArIG9mZnNldDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgdmFyIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLFxyXG4gICAgICByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlblBvc2l0aW9uID0gVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb24gIT09IC0xKSB7XHJcbiAgICBpZiAodG9rZW5Qb3NpdGlvbiA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb24pO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICB0b2tlbk9mZnNldCA9IHRva2VuUG9zaXRpb24gKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb24gPSBUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQ7XHJcbn1cclxuIl19