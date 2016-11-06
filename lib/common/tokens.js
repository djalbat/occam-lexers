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

          offset += tokensOrRemainingContentLength - 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJUb2tlbiIsIm9mZnNldCIsImZvckVhY2giLCJ0b2tlbk9yQ29udGVudCIsImluZGV4IiwiY29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudCIsInRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21Db250ZW50IiwidG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZW1haW5pbmdDb250ZW50IiwidG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwic3Vic3RyaW5nIiwicHVzaCIsInRva2VuIiwiZnJvbUNvbnRlbnQiLCJ0b2tlbkxlbmd0aCIsImdldExlbmd0aCIsInRva2VuT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7O0lBRU1DLE07Ozs7Ozs7eUJBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLEssRUFBTztBQUN6QyxVQUFJQyxTQUFTLENBQWI7O0FBRUFILHVCQUFpQkksT0FBakIsQ0FBeUIsVUFBU0MsY0FBVCxFQUF5QkMsS0FBekIsRUFBZ0M7QUFDdkQsWUFBSSxPQUFPRCxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGNBQUlFLFVBQVVGLGNBQWQ7QUFBQSxjQUErQjtBQUMzQkcscUNBQTJCQyxvQ0FBb0NGLE9BQXBDLEVBQTZDTixJQUE3QyxFQUFtREMsS0FBbkQsQ0FEL0I7QUFBQSxjQUVJUSxpQ0FBaUNGLHlCQUF5QkcsTUFGOUQ7QUFBQSxjQUdJQyxRQUFRTixRQUFRSCxNQUhwQjs7QUFLQU4sZUFBS2dCLFdBQUwsQ0FBaUJiLGdCQUFqQixFQUFtQ1ksS0FBbkMsRUFBMEMsQ0FBMUMsRUFBNkNKLHdCQUE3Qzs7QUFFQUwsb0JBQVVPLGlDQUFpQyxDQUEzQztBQUNEO0FBQ0YsT0FYRDtBQVlEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQmhCLE1BQWpCOztBQUVBLFNBQVNVLG1DQUFULENBQTZDRixPQUE3QyxFQUFzRE4sSUFBdEQsRUFBNERDLEtBQTVELEVBQW1FO0FBQ2pFLE1BQUlNLDJCQUEyQixFQUEvQjtBQUFBLE1BQ0lRLGdCQURKO0FBQUEsTUFFSUMsZ0JBQWdCZixNQUFNZ0IsUUFBTixDQUFlWCxPQUFmLENBRnBCOztBQUlBLFNBQU9VLGtCQUFrQixDQUFDLENBQTFCLEVBQTZCO0FBQzNCLFFBQUlBLGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQkQseUJBQW1CVCxRQUFRWSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRixhQUFyQixDQUFuQjs7QUFFQVQsK0JBQXlCWSxJQUF6QixDQUE4QkosZ0JBQTlCO0FBQ0Q7O0FBRUQsUUFBSUssUUFBUW5CLE1BQU1vQixXQUFOLENBQWtCZixPQUFsQixFQUEyQk4sSUFBM0IsQ0FBWjtBQUFBLFFBQ0lzQixjQUFjRixNQUFNRyxTQUFOLEVBRGxCO0FBQUEsUUFFSUMsY0FBY1IsZ0JBQWdCTSxXQUZsQzs7QUFJQWYsNkJBQXlCWSxJQUF6QixDQUE4QkMsS0FBOUI7O0FBRUFkLGNBQVVBLFFBQVFZLFNBQVIsQ0FBa0JNLFdBQWxCLENBQVY7O0FBRUFSLG9CQUFnQmYsTUFBTWdCLFFBQU4sQ0FBZVgsT0FBZixDQUFoQjtBQUNEOztBQUVELE1BQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEJTLHVCQUFtQlQsT0FBbkI7O0FBRUFDLDZCQUF5QlksSUFBekIsQ0FBOEJKLGdCQUE5QjtBQUNEOztBQUVELFNBQU9SLHdCQUFQO0FBQ0QiLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICB2YXIgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICB0b2tlbnNPckNvbnRlbnRzLmZvckVhY2goZnVuY3Rpb24odG9rZW5PckNvbnRlbnQsIGluZGV4KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tQ29udGVudChjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXggKyBvZmZzZXQ7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgVG9rZW4pIHtcclxuICB2YXIgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gW10sXHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2VuUG9zaXRpb24gPSBUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuICBcclxuICB3aGlsZSAodG9rZW5Qb3NpdGlvbiAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbik7XHJcblxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbiArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbiA9IFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iXX0=