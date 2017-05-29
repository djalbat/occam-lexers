'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util'),
    EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
    StartOfCommentToken = require('../token/nonSignificant/comment/startOf'),
    MiddleOfCommentToken = require('../token/nonSignificant/comment/middleOf');

var CommentTokens = function () {
          function CommentTokens() {
                    _classCallCheck(this, CommentTokens);
          }

          _createClass(CommentTokens, null, [{
                    key: 'pass',
                    value: function pass(tokensOrContents, line, context) {
                              var content = tokensOrContents.pop(),
                                  commentToken = void 0,
                                  commentTokenLength = void 0,
                                  previousLineInComment = context.isPreviousLineInComment(),
                                  inComment = previousLineInComment === true;

                              while (content !== '') {
                                        var contentLength = content.length;

                                        if (inComment) {
                                                  var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

                                                  if (endOfCommentTokenPositionWithinContent === 0) {
                                                            inComment = false;

                                                            commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else {
                                                            var middleOfCommentTokenLength = util.minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

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
                                                            inComment = true;

                                                            commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            tokensOrContents.push(commentToken);

                                                            content = content.substring(commentTokenLength);
                                                  } else {
                                                            contentLength = util.minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

                                                            var remainingContent = content.substring(contentLength);

                                                            content = content.substring(0, contentLength);

                                                            tokensOrContents.push(content);

                                                            content = remainingContent;
                                                  }
                                        }
                              }

                              previousLineInComment = inComment; ///

                              context.setPreviousLineInComment(previousLineInComment);

                              return inComment;
                    }
          }]);

          return CommentTokens;
}();

module.exports = CommentTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW5zL2NvbW1lbnQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJFbmRPZkNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZDb21tZW50VG9rZW4iLCJNaWRkbGVPZkNvbW1lbnRUb2tlbiIsIkNvbW1lbnRUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwibGluZSIsImNvbnRleHQiLCJjb250ZW50IiwicG9wIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudEFuZExpbmUiLCJnZXRMZW5ndGgiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbmltdW1CYXJNaW51c09uZSIsImZyb21Db250ZW50QW5kTGluZSIsInByZXZpb3VzQ29tbWVudFRva2VuIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJwdXNoIiwic3Vic3RyaW5nIiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnQiLCJzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUNBQVIsQ0FEMUI7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEseUNBQVIsQ0FGNUI7QUFBQSxJQUdNRyx1QkFBdUJILFFBQVEsMENBQVIsQ0FIN0I7O0lBS01JLGE7Ozs7Ozs7eUNBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLE8sRUFBUztBQUMzQyxrQ0FBSUMsVUFBVUgsaUJBQWlCSSxHQUFqQixFQUFkO0FBQUEsa0NBQ0lDLHFCQURKO0FBQUEsa0NBRUlDLDJCQUZKO0FBQUEsa0NBR0lDLHdCQUF3QkwsUUFBUU0sdUJBQVIsRUFINUI7QUFBQSxrQ0FJSUMsWUFBYUYsMEJBQTBCLElBSjNDOztBQU1BLHFDQUFPSixZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLDRDQUFJTyxnQkFBZ0JQLFFBQVFRLE1BQTVCOztBQUVBLDRDQUFJRixTQUFKLEVBQWU7QUFDYixzREFBTUcseUNBQXlDaEIsa0JBQWtCaUIscUJBQWxCLENBQXdDVixPQUF4QyxDQUEvQzs7QUFFQSxzREFBSVMsMkNBQTJDLENBQS9DLEVBQWtEO0FBQ2hESCx3RUFBWSxLQUFaOztBQUVBSiwyRUFBZVQsa0JBQWtCa0Isd0JBQWxCLENBQTJDWCxPQUEzQyxFQUFvREYsSUFBcEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCO0FBQ0QsbURBTkQsTUFNTztBQUNMLGdFQUFNQyw2QkFBNkJ0QixLQUFLdUIsa0JBQUwsQ0FBd0JMLHNDQUF4QixFQUFnRUYsYUFBaEUsQ0FBbkM7O0FBRUFMLDJFQUFlUCxxQkFBcUJvQixrQkFBckIsQ0FBd0NmLE9BQXhDLEVBQWlERixJQUFqRCxFQUF1RGUsMEJBQXZELENBQWY7O0FBRUFWLGlGQUFxQlUsMEJBQXJCO0FBQ0Q7O0FBRUQsc0RBQU1HLHVCQUF1Qm5CLGlCQUFpQkksR0FBakIsRUFBN0I7O0FBRUFDLGlFQUFnQmMseUJBQXlCQyxTQUExQixHQUNHZixZQURILEdBRUtjLHFCQUFxQkUsS0FBckIsQ0FBMkJoQixZQUEzQixDQUZwQjs7QUFJQUwsbUVBQWlCc0IsSUFBakIsQ0FBc0JqQixZQUF0Qjs7QUFFQUYsNERBQVVBLFFBQVFvQixTQUFSLENBQWtCakIsa0JBQWxCLENBQVY7QUFDRCx5Q0ExQkQsTUEwQk87QUFDTCxzREFBTWtCLDJDQUEyQzNCLG9CQUFvQmdCLHFCQUFwQixDQUEwQ1YsT0FBMUMsQ0FBakQ7O0FBRUEsc0RBQUlxQiw2Q0FBNkMsQ0FBakQsRUFBb0Q7QUFDbERmLHdFQUFZLElBQVo7O0FBRUFKLDJFQUFlUixvQkFBb0JpQix3QkFBcEIsQ0FBNkNYLE9BQTdDLEVBQXNERixJQUF0RCxDQUFmOztBQUVBSyxpRkFBcUJELGFBQWFVLFNBQWIsRUFBckI7O0FBRUFmLDZFQUFpQnNCLElBQWpCLENBQXNCakIsWUFBdEI7O0FBRUFGLHNFQUFVQSxRQUFRb0IsU0FBUixDQUFrQmpCLGtCQUFsQixDQUFWO0FBQ0QsbURBVkQsTUFVTztBQUNMSSw0RUFBZ0JoQixLQUFLdUIsa0JBQUwsQ0FBd0JPLHdDQUF4QixFQUFrRWQsYUFBbEUsQ0FBaEI7O0FBRUEsZ0VBQU1lLG1CQUFtQnRCLFFBQVFvQixTQUFSLENBQWtCYixhQUFsQixDQUF6Qjs7QUFFQVAsc0VBQVVBLFFBQVFvQixTQUFSLENBQWtCLENBQWxCLEVBQXFCYixhQUFyQixDQUFWOztBQUVBViw2RUFBaUJzQixJQUFqQixDQUFzQm5CLE9BQXRCOztBQUVBQSxzRUFBVXNCLGdCQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVEbEIsc0RBQXdCRSxTQUF4QixDQS9EMkMsQ0ErRFA7O0FBRXBDUCxzQ0FBUXdCLHdCQUFSLENBQWlDbkIscUJBQWpDOztBQUVBLHFDQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIa0IsT0FBT0MsT0FBUCxHQUFpQjdCLGFBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpLFxyXG4gICAgICBFbmRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvZW5kT2YnKSxcclxuICAgICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGxldCBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoLFxyXG4gICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGNvbnRleHQuaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSxcclxuICAgICAgICBpbkNvbW1lbnQgPSAocHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0cnVlKTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChpbkNvbW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBpbkNvbW1lbnQ7ICAvLy9cclxuXHJcbiAgICBjb250ZXh0LnNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiJdfQ==