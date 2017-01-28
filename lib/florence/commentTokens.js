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
                                                  var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

                                                  if (endOfCommentTokenPositionWithinContent === 0) {
                                                            context.setInComment(false);

                                                            commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else {
                                                            var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

                                                            commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

                                                            commentTokenLength = middleOfCommentTokenLength;
                                                  }

                                                  var previousCommentToken = tokensOrContents.pop();

                                                  commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

                                                  tokensOrContents.push(commentToken);

                                                  content = content.substring(commentTokenLength);
                                        } else {
                                                  var startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

                                                  if (startOfCommentTokenPositionWithinContent === 0) {
                                                            context.setInComment(true);

                                                            commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            tokensOrContents.push(commentToken);

                                                            content = content.substring(commentTokenLength);
                                                  } else {
                                                            contentLength = util.minBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpbkNvbW1lbnQiLCJpc0luQ29tbWVudCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50Iiwic2V0SW5Db21tZW50IiwiZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiZ2V0TGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsImZyb21Db250ZW50QW5kTGluZSIsInByZXZpb3VzQ29tbWVudFRva2VuIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJwdXNoIiwic3Vic3RyaW5nIiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsc0JBQVIsQ0FEeEI7QUFBQSxJQUVJRSxzQkFBc0JGLFFBQVEsd0JBQVIsQ0FGMUI7QUFBQSxJQUdJRyx1QkFBdUJILFFBQVEseUJBQVIsQ0FIM0I7O0lBS01JLGE7Ozs7Ozs7eUNBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLE8sRUFBUztBQUMzQyxrQ0FBSUMsVUFBVUgsaUJBQWlCSSxHQUFqQixFQUFkO0FBQUEsa0NBQ0lDLFlBREo7QUFBQSxrQ0FFSUMsa0JBRko7O0FBSUEscUNBQU9ILFlBQVksRUFBbkIsRUFBdUI7QUFDckIsNENBQUlJLGdCQUFnQkosUUFBUUssTUFBNUI7QUFBQSw0Q0FDSUMsWUFBWVAsUUFBUVEsV0FBUixFQURoQjs7QUFHQSw0Q0FBSUQsU0FBSixFQUFlO0FBQ2Isc0RBQUlFLHlDQUF5Q2Ysa0JBQWtCZ0IscUJBQWxCLENBQXdDVCxPQUF4QyxDQUE3Qzs7QUFFQSxzREFBSVEsMkNBQTJDLENBQS9DLEVBQWtEO0FBQ2hEVCxvRUFBUVcsWUFBUixDQUFxQixLQUFyQjs7QUFFQVIsMkVBQWVULGtCQUFrQmtCLHdCQUFsQixDQUEyQ1gsT0FBM0MsRUFBb0RGLElBQXBELENBQWY7O0FBRUFLLGlGQUFxQkQsYUFBYVUsU0FBYixFQUFyQjtBQUNELG1EQU5ELE1BTU87QUFDTCxnRUFBSUMsNkJBQTZCdEIsS0FBS3VCLGNBQUwsQ0FBb0JOLHNDQUFwQixFQUE0REosYUFBNUQsQ0FBakM7O0FBRUFGLDJFQUFlUCxxQkFBcUJvQixrQkFBckIsQ0FBd0NmLE9BQXhDLEVBQWlERixJQUFqRCxFQUF1RGUsMEJBQXZELENBQWY7O0FBRUFWLGlGQUFxQlUsMEJBQXJCO0FBQ0Q7O0FBRUQsc0RBQUlHLHVCQUF1Qm5CLGlCQUFpQkksR0FBakIsRUFBM0I7O0FBRUFDLGlFQUFnQmMseUJBQXlCQyxTQUExQixHQUNHZixZQURILEdBRUtjLHFCQUFxQkUsS0FBckIsQ0FBMkJoQixZQUEzQixDQUZwQjs7QUFJQUwsbUVBQWlCc0IsSUFBakIsQ0FBc0JqQixZQUF0Qjs7QUFFQUYsNERBQVVBLFFBQVFvQixTQUFSLENBQWtCakIsa0JBQWxCLENBQVY7QUFDRCx5Q0ExQkQsTUEwQk87QUFDTCxzREFBSWtCLDJDQUEyQzNCLG9CQUFvQmUscUJBQXBCLENBQTBDVCxPQUExQyxDQUEvQzs7QUFFQSxzREFBSXFCLDZDQUE2QyxDQUFqRCxFQUFvRDtBQUNsRHRCLG9FQUFRVyxZQUFSLENBQXFCLElBQXJCOztBQUVBUiwyRUFBZVIsb0JBQW9CaUIsd0JBQXBCLENBQTZDWCxPQUE3QyxFQUFzREYsSUFBdEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCOztBQUVBZiw2RUFBaUJzQixJQUFqQixDQUFzQmpCLFlBQXRCOztBQUVBRixzRUFBVUEsUUFBUW9CLFNBQVIsQ0FBa0JqQixrQkFBbEIsQ0FBVjtBQUNELG1EQVZELE1BVU87QUFDTEMsNEVBQWdCYixLQUFLdUIsY0FBTCxDQUFvQk8sd0NBQXBCLEVBQThEakIsYUFBOUQsQ0FBaEI7O0FBRUEsZ0VBQUlrQixtQkFBbUJ0QixRQUFRb0IsU0FBUixDQUFrQmhCLGFBQWxCLENBQXZCOztBQUVBSixzRUFBVUEsUUFBUW9CLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJoQixhQUFyQixDQUFWOztBQUVBUCw2RUFBaUJzQixJQUFqQixDQUFzQm5CLE9BQXRCOztBQUVBQSxzRUFBVXNCLGdCQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUIsYUFBakIiLCJmaWxlIjoiY29tbWVudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIHZhciBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB2YXIgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiJdfQ==