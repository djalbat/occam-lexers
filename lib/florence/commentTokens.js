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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImlzUHJldmlvdXNMaW5lSW5Db21tZW50IiwiaW5Db21tZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lIiwiZ2V0TGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5pbXVtQmFyTWludXNPbmUiLCJmcm9tQ29udGVudEFuZExpbmUiLCJwcmV2aW91c0NvbW1lbnRUb2tlbiIsInVuZGVmaW5lZCIsIm1lcmdlIiwicHVzaCIsInN1YnN0cmluZyIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50Iiwic2V0UHJldmlvdXNMaW5lSW5Db21tZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHNCQUFSLENBRDFCO0FBQUEsSUFFTUUsc0JBQXNCRixRQUFRLHdCQUFSLENBRjVCO0FBQUEsSUFHTUcsdUJBQXVCSCxRQUFRLHlCQUFSLENBSDdCOztJQUtNSSxhOzs7Ozs7O3lDQUNRQyxnQixFQUFrQkMsSSxFQUFNQyxPLEVBQVM7QUFDM0Msa0NBQUlDLFVBQVVILGlCQUFpQkksR0FBakIsRUFBZDtBQUFBLGtDQUNJQyxxQkFESjtBQUFBLGtDQUVJQywyQkFGSjtBQUFBLGtDQUdJQyx3QkFBd0JMLFFBQVFNLHVCQUFSLEVBSDVCO0FBQUEsa0NBSUlDLFlBQWFGLDBCQUEwQixJQUozQzs7QUFNQSxxQ0FBT0osWUFBWSxFQUFuQixFQUF1QjtBQUNyQiw0Q0FBSU8sZ0JBQWdCUCxRQUFRUSxNQUE1Qjs7QUFFQSw0Q0FBSUYsU0FBSixFQUFlO0FBQ2Isc0RBQU1HLHlDQUF5Q2hCLGtCQUFrQmlCLHFCQUFsQixDQUF3Q1YsT0FBeEMsQ0FBL0M7O0FBRUEsc0RBQUlTLDJDQUEyQyxDQUEvQyxFQUFrRDtBQUNoREgsd0VBQVksS0FBWjs7QUFFQUosMkVBQWVULGtCQUFrQmtCLHdCQUFsQixDQUEyQ1gsT0FBM0MsRUFBb0RGLElBQXBELENBQWY7O0FBRUFLLGlGQUFxQkQsYUFBYVUsU0FBYixFQUFyQjtBQUNELG1EQU5ELE1BTU87QUFDTCxnRUFBTUMsNkJBQTZCdEIsS0FBS3VCLGtCQUFMLENBQXdCTCxzQ0FBeEIsRUFBZ0VGLGFBQWhFLENBQW5DOztBQUVBTCwyRUFBZVAscUJBQXFCb0Isa0JBQXJCLENBQXdDZixPQUF4QyxFQUFpREYsSUFBakQsRUFBdURlLDBCQUF2RCxDQUFmOztBQUVBVixpRkFBcUJVLDBCQUFyQjtBQUNEOztBQUVELHNEQUFNRyx1QkFBdUJuQixpQkFBaUJJLEdBQWpCLEVBQTdCOztBQUVBQyxpRUFBZ0JjLHlCQUF5QkMsU0FBMUIsR0FDR2YsWUFESCxHQUVLYyxxQkFBcUJFLEtBQXJCLENBQTJCaEIsWUFBM0IsQ0FGcEI7O0FBSUFMLG1FQUFpQnNCLElBQWpCLENBQXNCakIsWUFBdEI7O0FBRUFGLDREQUFVQSxRQUFRb0IsU0FBUixDQUFrQmpCLGtCQUFsQixDQUFWO0FBQ0QseUNBMUJELE1BMEJPO0FBQ0wsc0RBQU1rQiwyQ0FBMkMzQixvQkFBb0JnQixxQkFBcEIsQ0FBMENWLE9BQTFDLENBQWpEOztBQUVBLHNEQUFJcUIsNkNBQTZDLENBQWpELEVBQW9EO0FBQ2xEZix3RUFBWSxJQUFaOztBQUVBSiwyRUFBZVIsb0JBQW9CaUIsd0JBQXBCLENBQTZDWCxPQUE3QyxFQUFzREYsSUFBdEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCOztBQUVBZiw2RUFBaUJzQixJQUFqQixDQUFzQmpCLFlBQXRCOztBQUVBRixzRUFBVUEsUUFBUW9CLFNBQVIsQ0FBa0JqQixrQkFBbEIsQ0FBVjtBQUNELG1EQVZELE1BVU87QUFDTEksNEVBQWdCaEIsS0FBS3VCLGtCQUFMLENBQXdCTyx3Q0FBeEIsRUFBa0VkLGFBQWxFLENBQWhCOztBQUVBLGdFQUFNZSxtQkFBbUJ0QixRQUFRb0IsU0FBUixDQUFrQmIsYUFBbEIsQ0FBekI7O0FBRUFQLHNFQUFVQSxRQUFRb0IsU0FBUixDQUFrQixDQUFsQixFQUFxQmIsYUFBckIsQ0FBVjs7QUFFQVYsNkVBQWlCc0IsSUFBakIsQ0FBc0JuQixPQUF0Qjs7QUFFQUEsc0VBQVVzQixnQkFBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRGxCLHNEQUF3QkUsU0FBeEIsQ0EvRDJDLENBK0RQOztBQUVwQ1Asc0NBQVF3Qix3QkFBUixDQUFpQ25CLHFCQUFqQzs7QUFFQSxxQ0FBT0UsU0FBUDtBQUNEOzs7Ozs7QUFHSGtCLE9BQU9DLE9BQVAsR0FBaUI3QixhQUFqQiIsImZpbGUiOiJjb21tZW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgICBTdGFydE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zdGFydE9mQ29tbWVudCcpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCxcclxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBjb250ZXh0LmlzUHJldmlvdXNMaW5lSW5Db21tZW50KCksXHJcbiAgICAgICAgaW5Db21tZW50ID0gKHByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoaW5Db21tZW50KSB7XHJcbiAgICAgICAgY29uc3QgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBFbmRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZShlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29tbWVudFRva2VuID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5pbXVtQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gaW5Db21tZW50OyAgLy8vXHJcblxyXG4gICAgY29udGV4dC5zZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iXX0=