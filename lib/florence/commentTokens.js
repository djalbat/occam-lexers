'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, context) {
      var content = tokensOrContents.pop(),
          commentToken,
          commentTokenLength;

      while (content !== '') {
        var contentLength = content.length,
            inComment = context.isInComment();

        var startOfCommentTokenPosition = StartOfCommentToken.position(content),
            endOfCommentTokenPosition = EndOfCommentToken.position(content);

        if (!inComment) {
          if (startOfCommentTokenPosition === 0) {
            context.setInComment(true);

            commentToken = StartOfCommentToken.fromContent(content, line);

            commentTokenLength = commentToken.getLength();

            tokensOrContents.push(commentToken);

            content = content.substring(commentTokenLength);

            continue;
          }
        } else {
          var previousCommentToken = tokensOrContents.pop();

          if (false) {} else if (endOfCommentTokenPosition === 0) {
            context.setInComment(false);

            commentToken = EndOfCommentToken.fromContent(content, line);

            commentTokenLength = commentToken.getLength();
          } else {
            var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

            commentToken = MiddleOfCommentToken.fromContent(content, line, middleOfCommentTokenLength);

            commentTokenLength = middleOfCommentTokenLength;
          }

          commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);

          continue;
        }

        contentLength = util.minBarMinusOne(startOfCommentTokenPosition, contentLength);

        var remainingContent = content.substring(contentLength);

        content = content.substring(0, contentLength);

        tokensOrContents.push(content);

        content = remainingContent;

        continue;
      }
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpbkNvbW1lbnQiLCJpc0luQ29tbWVudCIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwiZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInNldEluQ29tbWVudCIsImZyb21Db250ZW50IiwiZ2V0TGVuZ3RoIiwicHVzaCIsInN1YnN0cmluZyIsInByZXZpb3VzQ29tbWVudFRva2VuIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsInVuZGVmaW5lZCIsIm1lcmdlIiwicmVtYWluaW5nQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxzQkFBUixDQUR4QjtBQUFBLElBRUlFLHNCQUFzQkYsUUFBUSx3QkFBUixDQUYxQjtBQUFBLElBR0lHLHVCQUF1QkgsUUFBUSx5QkFBUixDQUgzQjs7SUFLTUksYTs7Ozs7Ozt5QkFDUUMsZ0IsRUFBa0JDLEksRUFBTUMsTyxFQUFTO0FBQzNDLFVBQUlDLFVBQVVILGlCQUFpQkksR0FBakIsRUFBZDtBQUFBLFVBQ0lDLFlBREo7QUFBQSxVQUVJQyxrQkFGSjs7QUFJQSxhQUFPSCxZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLFlBQUlJLGdCQUFnQkosUUFBUUssTUFBNUI7QUFBQSxZQUNJQyxZQUFZUCxRQUFRUSxXQUFSLEVBRGhCOztBQUdBLFlBQUlDLDhCQUE4QmQsb0JBQW9CZSxRQUFwQixDQUE2QlQsT0FBN0IsQ0FBbEM7QUFBQSxZQUNJVSw0QkFBNEJqQixrQkFBa0JnQixRQUFsQixDQUEyQlQsT0FBM0IsQ0FEaEM7O0FBR0EsWUFBSSxDQUFDTSxTQUFMLEVBQWdCO0FBQ2QsY0FBSUUsZ0NBQWdDLENBQXBDLEVBQXVDO0FBQ3JDVCxvQkFBUVksWUFBUixDQUFxQixJQUFyQjs7QUFFQVQsMkJBQWVSLG9CQUFvQmtCLFdBQXBCLENBQWdDWixPQUFoQyxFQUF5Q0YsSUFBekMsQ0FBZjs7QUFFQUssaUNBQXFCRCxhQUFhVyxTQUFiLEVBQXJCOztBQUVBaEIsNkJBQWlCaUIsSUFBakIsQ0FBc0JaLFlBQXRCOztBQUVBRixzQkFBVUEsUUFBUWUsU0FBUixDQUFrQlosa0JBQWxCLENBQVY7O0FBRUE7QUFDRDtBQUNGLFNBZEQsTUFjTztBQUNMLGNBQUlhLHVCQUF1Qm5CLGlCQUFpQkksR0FBakIsRUFBM0I7O0FBRUEsY0FBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSVMsOEJBQThCLENBQWxDLEVBQXFDO0FBQzFDWCxvQkFBUVksWUFBUixDQUFxQixLQUFyQjs7QUFFQVQsMkJBQWVULGtCQUFrQm1CLFdBQWxCLENBQThCWixPQUE5QixFQUF1Q0YsSUFBdkMsQ0FBZjs7QUFFQUssaUNBQXFCRCxhQUFhVyxTQUFiLEVBQXJCO0FBQ0QsV0FOTSxNQU1BO0FBQ0wsZ0JBQUlJLDZCQUE2QjFCLEtBQUsyQixjQUFMLENBQW9CUix5QkFBcEIsRUFBK0NOLGFBQS9DLENBQWpDOztBQUVBRiwyQkFBZVAscUJBQXFCaUIsV0FBckIsQ0FBaUNaLE9BQWpDLEVBQTBDRixJQUExQyxFQUFnRG1CLDBCQUFoRCxDQUFmOztBQUVBZCxpQ0FBcUJjLDBCQUFyQjtBQUNEOztBQUVEZix5QkFBZ0JjLHlCQUF5QkcsU0FBMUIsR0FDRWpCLFlBREYsR0FFSWMscUJBQXFCSSxLQUFyQixDQUEyQmxCLFlBQTNCLENBRm5COztBQUlBTCwyQkFBaUJpQixJQUFqQixDQUFzQlosWUFBdEI7O0FBRUFGLG9CQUFVQSxRQUFRZSxTQUFSLENBQWtCWixrQkFBbEIsQ0FBVjs7QUFFQTtBQUNEOztBQUVEQyx3QkFBZ0JiLEtBQUsyQixjQUFMLENBQW9CViwyQkFBcEIsRUFBaURKLGFBQWpELENBQWhCOztBQUVBLFlBQUlpQixtQkFBbUJyQixRQUFRZSxTQUFSLENBQWtCWCxhQUFsQixDQUF2Qjs7QUFFQUosa0JBQVVBLFFBQVFlLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJYLGFBQXJCLENBQVY7O0FBRUFQLHlCQUFpQmlCLElBQWpCLENBQXNCZCxPQUF0Qjs7QUFFQUEsa0JBQVVxQixnQkFBVjs7QUFFQTtBQUNEO0FBQ0Y7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsYUFBakIiLCJmaWxlIjoiY29tbWVudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KHRydWUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiJdfQ==