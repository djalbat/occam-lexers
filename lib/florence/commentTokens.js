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
                                  commentTokenLength,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImlzUHJldmlvdXNMaW5lSW5Db21tZW50IiwiaW5Db21tZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiZ2V0TGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5pbXVtQmFyTWludXNPbmUiLCJmcm9tQ29udGVudEFuZExpbmUiLCJwcmV2aW91c0NvbW1lbnRUb2tlbiIsInVuZGVmaW5lZCIsIm1lcmdlIiwicHVzaCIsInN1YnN0cmluZyIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50Iiwic2V0UHJldmlvdXNMaW5lSW5Db21tZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsb0JBQW9CRCxRQUFRLHNCQUFSLENBRHhCO0FBQUEsSUFFSUUsc0JBQXNCRixRQUFRLHdCQUFSLENBRjFCO0FBQUEsSUFHSUcsdUJBQXVCSCxRQUFRLHlCQUFSLENBSDNCOztJQUtNSSxhOzs7Ozs7O3lDQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxPLEVBQVM7QUFDM0Msa0NBQUlDLFVBQVVILGlCQUFpQkksR0FBakIsRUFBZDtBQUFBLGtDQUNJQyxZQURKO0FBQUEsa0NBRUlDLGtCQUZKO0FBQUEsa0NBR0lDLHdCQUF3QkwsUUFBUU0sdUJBQVIsRUFINUI7QUFBQSxrQ0FJSUMsWUFBYUYsMEJBQTBCLElBSjNDOztBQU1BLHFDQUFPSixZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLDRDQUFJTyxnQkFBZ0JQLFFBQVFRLE1BQTVCOztBQUVBLDRDQUFJRixTQUFKLEVBQWU7QUFDYixzREFBSUcseUNBQXlDaEIsa0JBQWtCaUIscUJBQWxCLENBQXdDVixPQUF4QyxDQUE3Qzs7QUFFQSxzREFBSVMsMkNBQTJDLENBQS9DLEVBQWtEO0FBQ2hESCx3RUFBWSxLQUFaOztBQUVBSiwyRUFBZVQsa0JBQWtCa0Isd0JBQWxCLENBQTJDWCxPQUEzQyxFQUFvREYsSUFBcEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCO0FBQ0QsbURBTkQsTUFNTztBQUNMLGdFQUFJQyw2QkFBNkJ0QixLQUFLdUIsa0JBQUwsQ0FBd0JMLHNDQUF4QixFQUFnRUYsYUFBaEUsQ0FBakM7O0FBRUFMLDJFQUFlUCxxQkFBcUJvQixrQkFBckIsQ0FBd0NmLE9BQXhDLEVBQWlERixJQUFqRCxFQUF1RGUsMEJBQXZELENBQWY7O0FBRUFWLGlGQUFxQlUsMEJBQXJCO0FBQ0Q7O0FBRUQsc0RBQUlHLHVCQUF1Qm5CLGlCQUFpQkksR0FBakIsRUFBM0I7O0FBRUFDLGlFQUFnQmMseUJBQXlCQyxTQUExQixHQUNHZixZQURILEdBRUtjLHFCQUFxQkUsS0FBckIsQ0FBMkJoQixZQUEzQixDQUZwQjs7QUFJQUwsbUVBQWlCc0IsSUFBakIsQ0FBc0JqQixZQUF0Qjs7QUFFQUYsNERBQVVBLFFBQVFvQixTQUFSLENBQWtCakIsa0JBQWxCLENBQVY7QUFDRCx5Q0ExQkQsTUEwQk87QUFDTCxzREFBSWtCLDJDQUEyQzNCLG9CQUFvQmdCLHFCQUFwQixDQUEwQ1YsT0FBMUMsQ0FBL0M7O0FBRUEsc0RBQUlxQiw2Q0FBNkMsQ0FBakQsRUFBb0Q7QUFDbERmLHdFQUFZLElBQVo7O0FBRUFKLDJFQUFlUixvQkFBb0JpQix3QkFBcEIsQ0FBNkNYLE9BQTdDLEVBQXNERixJQUF0RCxDQUFmOztBQUVBSyxpRkFBcUJELGFBQWFVLFNBQWIsRUFBckI7O0FBRUFmLDZFQUFpQnNCLElBQWpCLENBQXNCakIsWUFBdEI7O0FBRUFGLHNFQUFVQSxRQUFRb0IsU0FBUixDQUFrQmpCLGtCQUFsQixDQUFWO0FBQ0QsbURBVkQsTUFVTztBQUNMSSw0RUFBZ0JoQixLQUFLdUIsa0JBQUwsQ0FBd0JPLHdDQUF4QixFQUFrRWQsYUFBbEUsQ0FBaEI7O0FBRUEsZ0VBQUllLG1CQUFtQnRCLFFBQVFvQixTQUFSLENBQWtCYixhQUFsQixDQUF2Qjs7QUFFQVAsc0VBQVVBLFFBQVFvQixTQUFSLENBQWtCLENBQWxCLEVBQXFCYixhQUFyQixDQUFWOztBQUVBViw2RUFBaUJzQixJQUFqQixDQUFzQm5CLE9BQXRCOztBQUVBQSxzRUFBVXNCLGdCQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVEbEIsc0RBQXdCRSxTQUF4QixDQS9EMkMsQ0ErRFA7O0FBRXBDUCxzQ0FBUXdCLHdCQUFSLENBQWlDbkIscUJBQWpDOztBQUVBLHFDQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIa0IsT0FBT0MsT0FBUCxHQUFpQjdCLGFBQWpCIiwiZmlsZSI6ImNvbW1lbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3N0YXJ0T2ZDb21tZW50JyksXHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCxcclxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBjb250ZXh0LmlzUHJldmlvdXNMaW5lSW5Db21tZW50KCksXHJcbiAgICAgICAgaW5Db21tZW50ID0gKHByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoaW5Db21tZW50KSB7XHJcbiAgICAgICAgdmFyIGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHByZXZpb3VzQ29tbWVudFRva2VuID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudExlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHZhciByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBpbkNvbW1lbnQ7ICAvLy9cclxuXHJcbiAgICBjb250ZXh0LnNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiJdfQ==