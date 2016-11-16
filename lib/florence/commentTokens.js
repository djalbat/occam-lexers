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

                                        if (inComment) {
                                                  var endOfCommentTokenPosition = EndOfCommentToken.position(content);

                                                  if (endOfCommentTokenPosition === 0) {
                                                            context.setInComment(false);

                                                            commentToken = EndOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else {
                                                            var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

                                                            commentToken = MiddleOfCommentToken.fromContent(content, line, middleOfCommentTokenLength);

                                                            commentTokenLength = middleOfCommentTokenLength;
                                                  }

                                                  var previousCommentToken = tokensOrContents.pop();

                                                  commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

                                                  tokensOrContents.push(commentToken);

                                                  content = content.substring(commentTokenLength);
                                        } else {
                                                  var startOfCommentTokenPosition = StartOfCommentToken.position(content);

                                                  if (startOfCommentTokenPosition === 0) {
                                                            context.setInComment(true);

                                                            commentToken = StartOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            tokensOrContents.push(commentToken);

                                                            content = content.substring(commentTokenLength);
                                                  } else {
                                                            contentLength = util.minBarMinusOne(startOfCommentTokenPosition, contentLength);

                                                            var remainingContent = content.substring(contentLength);

                                                            content = content.substring(0, contentLength);

                                                            tokensOrContents.push(content);

                                                            content = remainingContent;
                                                  }
                                        }
                              }
                    }
          }]);

          return CommentTokens;
}();

module.exports = CommentTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpbkNvbW1lbnQiLCJpc0luQ29tbWVudCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsInNldEluQ29tbWVudCIsImZyb21Db250ZW50IiwiZ2V0TGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsInByZXZpb3VzQ29tbWVudFRva2VuIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJwdXNoIiwic3Vic3RyaW5nIiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicmVtYWluaW5nQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxzQkFBUixDQUR4QjtBQUFBLElBRUlFLHNCQUFzQkYsUUFBUSx3QkFBUixDQUYxQjtBQUFBLElBR0lHLHVCQUF1QkgsUUFBUSx5QkFBUixDQUgzQjs7SUFLTUksYTs7Ozs7Ozt5Q0FDUUMsZ0IsRUFBa0JDLEksRUFBTUMsTyxFQUFTO0FBQzNDLGtDQUFJQyxVQUFVSCxpQkFBaUJJLEdBQWpCLEVBQWQ7QUFBQSxrQ0FDSUMsWUFESjtBQUFBLGtDQUVJQyxrQkFGSjs7QUFJQSxxQ0FBT0gsWUFBWSxFQUFuQixFQUF1QjtBQUNyQiw0Q0FBSUksZ0JBQWdCSixRQUFRSyxNQUE1QjtBQUFBLDRDQUNJQyxZQUFZUCxRQUFRUSxXQUFSLEVBRGhCOztBQUdBLDRDQUFJRCxTQUFKLEVBQWU7QUFDYixzREFBSUUsNEJBQTRCZixrQkFBa0JnQixRQUFsQixDQUEyQlQsT0FBM0IsQ0FBaEM7O0FBRUEsc0RBQUlRLDhCQUE4QixDQUFsQyxFQUFxQztBQUNuQ1Qsb0VBQVFXLFlBQVIsQ0FBcUIsS0FBckI7O0FBRUFSLDJFQUFlVCxrQkFBa0JrQixXQUFsQixDQUE4QlgsT0FBOUIsRUFBdUNGLElBQXZDLENBQWY7O0FBRUFLLGlGQUFxQkQsYUFBYVUsU0FBYixFQUFyQjtBQUNELG1EQU5ELE1BTU87QUFDTCxnRUFBSUMsNkJBQTZCdEIsS0FBS3VCLGNBQUwsQ0FBb0JOLHlCQUFwQixFQUErQ0osYUFBL0MsQ0FBakM7O0FBRUFGLDJFQUFlUCxxQkFBcUJnQixXQUFyQixDQUFpQ1gsT0FBakMsRUFBMENGLElBQTFDLEVBQWdEZSwwQkFBaEQsQ0FBZjs7QUFFQVYsaUZBQXFCVSwwQkFBckI7QUFDRDs7QUFFRCxzREFBSUUsdUJBQXVCbEIsaUJBQWlCSSxHQUFqQixFQUEzQjs7QUFFQUMsaUVBQWdCYSx5QkFBeUJDLFNBQTFCLEdBQ0dkLFlBREgsR0FFS2EscUJBQXFCRSxLQUFyQixDQUEyQmYsWUFBM0IsQ0FGcEI7O0FBSUFMLG1FQUFpQnFCLElBQWpCLENBQXNCaEIsWUFBdEI7O0FBRUFGLDREQUFVQSxRQUFRbUIsU0FBUixDQUFrQmhCLGtCQUFsQixDQUFWO0FBQ0QseUNBMUJELE1BMEJPO0FBQ0wsc0RBQUlpQiw4QkFBOEIxQixvQkFBb0JlLFFBQXBCLENBQTZCVCxPQUE3QixDQUFsQzs7QUFFQSxzREFBSW9CLGdDQUFnQyxDQUFwQyxFQUF1QztBQUNyQ3JCLG9FQUFRVyxZQUFSLENBQXFCLElBQXJCOztBQUVBUiwyRUFBZVIsb0JBQW9CaUIsV0FBcEIsQ0FBZ0NYLE9BQWhDLEVBQXlDRixJQUF6QyxDQUFmOztBQUVBSyxpRkFBcUJELGFBQWFVLFNBQWIsRUFBckI7O0FBRUFmLDZFQUFpQnFCLElBQWpCLENBQXNCaEIsWUFBdEI7O0FBRUFGLHNFQUFVQSxRQUFRbUIsU0FBUixDQUFrQmhCLGtCQUFsQixDQUFWO0FBQ0QsbURBVkQsTUFVTztBQUNMQyw0RUFBZ0JiLEtBQUt1QixjQUFMLENBQW9CTSwyQkFBcEIsRUFBaURoQixhQUFqRCxDQUFoQjs7QUFFQSxnRUFBSWlCLG1CQUFtQnJCLFFBQVFtQixTQUFSLENBQWtCZixhQUFsQixDQUF2Qjs7QUFFQUosc0VBQVVBLFFBQVFtQixTQUFSLENBQWtCLENBQWxCLEVBQXFCZixhQUFyQixDQUFWOztBQUVBUCw2RUFBaUJxQixJQUFqQixDQUFzQmxCLE9BQXRCOztBQUVBQSxzRUFBVXFCLGdCQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsYUFBakIiLCJmaWxlIjoiY29tbWVudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIHZhciBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdmFyIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iXX0=