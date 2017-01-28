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

                                                            commentToken = EndOfCommentToken.fromContentAndLine(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else {
                                                            var middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

                                                            commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

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

                                                            commentToken = StartOfCommentToken.fromContentAndLine(content, line);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb21tZW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJDb21tZW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiY29udGVudCIsInBvcCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpbkNvbW1lbnQiLCJpc0luQ29tbWVudCIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsInNldEluQ29tbWVudCIsImZyb21Db250ZW50QW5kTGluZSIsImdldExlbmd0aCIsIm1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoIiwibWluQmFyTWludXNPbmUiLCJwcmV2aW91c0NvbW1lbnRUb2tlbiIsInVuZGVmaW5lZCIsIm1lcmdlIiwicHVzaCIsInN1YnN0cmluZyIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInJlbWFpbmluZ0NvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsc0JBQVIsQ0FEeEI7QUFBQSxJQUVJRSxzQkFBc0JGLFFBQVEsd0JBQVIsQ0FGMUI7QUFBQSxJQUdJRyx1QkFBdUJILFFBQVEseUJBQVIsQ0FIM0I7O0lBS01JLGE7Ozs7Ozs7eUNBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLE8sRUFBUztBQUMzQyxrQ0FBSUMsVUFBVUgsaUJBQWlCSSxHQUFqQixFQUFkO0FBQUEsa0NBQ0lDLFlBREo7QUFBQSxrQ0FFSUMsa0JBRko7O0FBSUEscUNBQU9ILFlBQVksRUFBbkIsRUFBdUI7QUFDckIsNENBQUlJLGdCQUFnQkosUUFBUUssTUFBNUI7QUFBQSw0Q0FDSUMsWUFBWVAsUUFBUVEsV0FBUixFQURoQjs7QUFHQSw0Q0FBSUQsU0FBSixFQUFlO0FBQ2Isc0RBQUlFLDRCQUE0QmYsa0JBQWtCZ0IsUUFBbEIsQ0FBMkJULE9BQTNCLENBQWhDOztBQUVBLHNEQUFJUSw4QkFBOEIsQ0FBbEMsRUFBcUM7QUFDbkNULG9FQUFRVyxZQUFSLENBQXFCLEtBQXJCOztBQUVBUiwyRUFBZVQsa0JBQWtCa0Isa0JBQWxCLENBQXFDWCxPQUFyQyxFQUE4Q0YsSUFBOUMsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCO0FBQ0QsbURBTkQsTUFNTztBQUNMLGdFQUFJQyw2QkFBNkJ0QixLQUFLdUIsY0FBTCxDQUFvQk4seUJBQXBCLEVBQStDSixhQUEvQyxDQUFqQzs7QUFFQUYsMkVBQWVQLHFCQUFxQmdCLGtCQUFyQixDQUF3Q1gsT0FBeEMsRUFBaURGLElBQWpELEVBQXVEZSwwQkFBdkQsQ0FBZjs7QUFFQVYsaUZBQXFCVSwwQkFBckI7QUFDRDs7QUFFRCxzREFBSUUsdUJBQXVCbEIsaUJBQWlCSSxHQUFqQixFQUEzQjs7QUFFQUMsaUVBQWdCYSx5QkFBeUJDLFNBQTFCLEdBQ0dkLFlBREgsR0FFS2EscUJBQXFCRSxLQUFyQixDQUEyQmYsWUFBM0IsQ0FGcEI7O0FBSUFMLG1FQUFpQnFCLElBQWpCLENBQXNCaEIsWUFBdEI7O0FBRUFGLDREQUFVQSxRQUFRbUIsU0FBUixDQUFrQmhCLGtCQUFsQixDQUFWO0FBQ0QseUNBMUJELE1BMEJPO0FBQ0wsc0RBQUlpQiw4QkFBOEIxQixvQkFBb0JlLFFBQXBCLENBQTZCVCxPQUE3QixDQUFsQzs7QUFFQSxzREFBSW9CLGdDQUFnQyxDQUFwQyxFQUF1QztBQUNyQ3JCLG9FQUFRVyxZQUFSLENBQXFCLElBQXJCOztBQUVBUiwyRUFBZVIsb0JBQW9CaUIsa0JBQXBCLENBQXVDWCxPQUF2QyxFQUFnREYsSUFBaEQsQ0FBZjs7QUFFQUssaUZBQXFCRCxhQUFhVSxTQUFiLEVBQXJCOztBQUVBZiw2RUFBaUJxQixJQUFqQixDQUFzQmhCLFlBQXRCOztBQUVBRixzRUFBVUEsUUFBUW1CLFNBQVIsQ0FBa0JoQixrQkFBbEIsQ0FBVjtBQUNELG1EQVZELE1BVU87QUFDTEMsNEVBQWdCYixLQUFLdUIsY0FBTCxDQUFvQk0sMkJBQXBCLEVBQWlEaEIsYUFBakQsQ0FBaEI7O0FBRUEsZ0VBQUlpQixtQkFBbUJyQixRQUFRbUIsU0FBUixDQUFrQmYsYUFBbEIsQ0FBdkI7O0FBRUFKLHNFQUFVQSxRQUFRbUIsU0FBUixDQUFrQixDQUFsQixFQUFxQmYsYUFBckIsQ0FBVjs7QUFFQVAsNkVBQWlCcUIsSUFBakIsQ0FBc0JsQixPQUF0Qjs7QUFFQUEsc0VBQVVxQixnQkFBVjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjNCLGFBQWpCIiwiZmlsZSI6ImNvbW1lbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3N0YXJ0T2ZDb21tZW50JyksXHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgIGluQ29tbWVudCA9IGNvbnRleHQuaXNJbkNvbW1lbnQoKTtcclxuXHJcbiAgICAgIGlmIChpbkNvbW1lbnQpIHtcclxuICAgICAgICB2YXIgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQoZmFsc2UpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHZhciByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIl19