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
                                                            inComment = true;

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

                              previousLineInComment = inComment; ///

                              context.setPreviousLineInComment(previousLineInComment);

                              return inComment;
                    }
          }]);

          return CommentTokens;
}();

module.exports = CommentTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImlzUHJldmlvdXNMaW5lSW5Db21tZW50IiwiaW5Db21tZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiZ2V0TGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsImZyb21Db250ZW50QW5kTGluZSIsInByZXZpb3VzQ29tbWVudFRva2VuIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJwdXNoIiwic3Vic3RyaW5nIiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnQiLCJzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsc0JBQVIsQ0FEeEI7QUFBQSxJQUVJRSxzQkFBc0JGLFFBQVEsd0JBQVIsQ0FGMUI7QUFBQSxJQUdJRyx1QkFBdUJILFFBQVEseUJBQVIsQ0FIM0I7O0lBS01JLGE7Ozs7Ozs7eUNBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLE8sRUFBUztBQUMzQyxrQ0FBSUMsVUFBVUgsaUJBQWlCSSxHQUFqQixFQUFkO0FBQUEsa0NBQ0lDLFlBREo7QUFBQSxrQ0FFSUMsa0JBRko7QUFBQSxrQ0FHSUMsd0JBQXdCTCxRQUFRTSx1QkFBUixFQUg1QjtBQUFBLGtDQUlJQyxZQUFhRiwwQkFBMEIsSUFKM0M7O0FBTUEscUNBQU9KLFlBQVksRUFBbkIsRUFBdUI7QUFDckIsNENBQUlPLGdCQUFnQlAsUUFBUVEsTUFBNUI7O0FBRUEsNENBQUlGLFNBQUosRUFBZTtBQUNiLHNEQUFJRyx5Q0FBeUNoQixrQkFBa0JpQixxQkFBbEIsQ0FBd0NWLE9BQXhDLENBQTdDOztBQUVBLHNEQUFJUywyQ0FBMkMsQ0FBL0MsRUFBa0Q7QUFDaERILHdFQUFZLEtBQVo7O0FBRUFKLDJFQUFlVCxrQkFBa0JrQix3QkFBbEIsQ0FBMkNYLE9BQTNDLEVBQW9ERixJQUFwRCxDQUFmOztBQUVBSyxpRkFBcUJELGFBQWFVLFNBQWIsRUFBckI7QUFDRCxtREFORCxNQU1PO0FBQ0wsZ0VBQUlDLDZCQUE2QnRCLEtBQUt1QixjQUFMLENBQW9CTCxzQ0FBcEIsRUFBNERGLGFBQTVELENBQWpDOztBQUVBTCwyRUFBZVAscUJBQXFCb0Isa0JBQXJCLENBQXdDZixPQUF4QyxFQUFpREYsSUFBakQsRUFBdURlLDBCQUF2RCxDQUFmOztBQUVBVixpRkFBcUJVLDBCQUFyQjtBQUNEOztBQUVELHNEQUFJRyx1QkFBdUJuQixpQkFBaUJJLEdBQWpCLEVBQTNCOztBQUVBQyxpRUFBZ0JjLHlCQUF5QkMsU0FBMUIsR0FDR2YsWUFESCxHQUVLYyxxQkFBcUJFLEtBQXJCLENBQTJCaEIsWUFBM0IsQ0FGcEI7O0FBSUFMLG1FQUFpQnNCLElBQWpCLENBQXNCakIsWUFBdEI7O0FBRUFGLDREQUFVQSxRQUFRb0IsU0FBUixDQUFrQmpCLGtCQUFsQixDQUFWO0FBQ0QseUNBMUJELE1BMEJPO0FBQ0wsc0RBQUlrQiwyQ0FBMkMzQixvQkFBb0JnQixxQkFBcEIsQ0FBMENWLE9BQTFDLENBQS9DOztBQUVBLHNEQUFJcUIsNkNBQTZDLENBQWpELEVBQW9EO0FBQ2xEZix3RUFBWSxJQUFaOztBQUVBSiwyRUFBZVIsb0JBQW9CaUIsd0JBQXBCLENBQTZDWCxPQUE3QyxFQUFzREYsSUFBdEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCOztBQUVBZiw2RUFBaUJzQixJQUFqQixDQUFzQmpCLFlBQXRCOztBQUVBRixzRUFBVUEsUUFBUW9CLFNBQVIsQ0FBa0JqQixrQkFBbEIsQ0FBVjtBQUNELG1EQVZELE1BVU87QUFDTEksNEVBQWdCaEIsS0FBS3VCLGNBQUwsQ0FBb0JPLHdDQUFwQixFQUE4RGQsYUFBOUQsQ0FBaEI7O0FBRUEsZ0VBQUllLG1CQUFtQnRCLFFBQVFvQixTQUFSLENBQWtCYixhQUFsQixDQUF2Qjs7QUFFQVAsc0VBQVVBLFFBQVFvQixTQUFSLENBQWtCLENBQWxCLEVBQXFCYixhQUFyQixDQUFWOztBQUVBViw2RUFBaUJzQixJQUFqQixDQUFzQm5CLE9BQXRCOztBQUVBQSxzRUFBVXNCLGdCQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVEbEIsc0RBQXdCRSxTQUF4QixDQS9EMkMsQ0ErRFA7O0FBRXBDUCxzQ0FBUXdCLHdCQUFSLENBQWlDbkIscUJBQWpDOztBQUVBLHFDQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIa0IsT0FBT0MsT0FBUCxHQUFpQjdCLGFBQWpCIiwiZmlsZSI6ImNvbW1lbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3N0YXJ0T2ZDb21tZW50JyksXHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCxcclxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBjb250ZXh0LmlzUHJldmlvdXNMaW5lSW5Db21tZW50KCksXHJcbiAgICAgICAgaW5Db21tZW50ID0gKHByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoaW5Db21tZW50KSB7XHJcbiAgICAgICAgdmFyIGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB2YXIgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gaW5Db21tZW50OyAgLy8vXHJcblxyXG4gICAgY29udGV4dC5zZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iXX0=