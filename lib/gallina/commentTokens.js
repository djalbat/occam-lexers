'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

var NonSignificantTokens = function () {
          function NonSignificantTokens() {
                    _classCallCheck(this, NonSignificantTokens);
          }

          _createClass(NonSignificantTokens, null, [{
                    key: 'pass',
                    value: function pass(tokensOrContents, line, context) {
                              var firstTokenOrRemainingContent = tokensOrContents.pop(),
                                  content = firstTokenOrRemainingContent,
                                  ///
                              commentToken,
                                  commentTokenLength;

                              while (content !== '') {
                                        var contentLength = content.length,
                                            commentDepth = context.getCommentDepth();

                                        var startOfCommentTokenPosition = StartOfCommentToken.position(content),
                                            endOfCommentTokenPosition = EndOfCommentToken.position(content);

                                        if (commentDepth === 0) {
                                                  if (startOfCommentTokenPosition === 0) {
                                                            context.increaseCommentDepth();

                                                            commentToken = StartOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            tokensOrContents.push(commentToken);

                                                            content = content.substring(commentTokenLength);

                                                            continue;
                                                  }
                                        } else {
                                                  var previousCommentToken = tokensOrContents.pop();

                                                  if (false) {} else if (startOfCommentTokenPosition === 0) {
                                                            context.increaseCommentDepth();

                                                            commentToken = StartOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else if (endOfCommentTokenPosition === 0) {
                                                            context.decreaseCommentDepth();

                                                            commentToken = EndOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();
                                                  } else {
                                                            var middleOfCommentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, endOfCommentTokenPosition, contentLength);

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

          return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2NvbW1lbnRUb2tlbnMuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJFbmRPZkNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZDb21tZW50VG9rZW4iLCJNaWRkbGVPZkNvbW1lbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsImxpbmUiLCJjb250ZXh0IiwiZmlyc3RUb2tlbk9yUmVtYWluaW5nQ29udGVudCIsInBvcCIsImNvbnRlbnQiLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5MZW5ndGgiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiY29tbWVudERlcHRoIiwiZ2V0Q29tbWVudERlcHRoIiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwiaW5jcmVhc2VDb21tZW50RGVwdGgiLCJmcm9tQ29udGVudCIsImdldExlbmd0aCIsInB1c2giLCJzdWJzdHJpbmciLCJwcmV2aW91c0NvbW1lbnRUb2tlbiIsImRlY3JlYXNlQ29tbWVudERlcHRoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsInVuZGVmaW5lZCIsIm1lcmdlIiwicmVtYWluaW5nQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxzQkFBUixDQUR4QjtBQUFBLElBRUlFLHNCQUFzQkYsUUFBUSx3QkFBUixDQUYxQjtBQUFBLElBR0lHLHVCQUF1QkgsUUFBUSx5QkFBUixDQUgzQjs7SUFLTUksb0I7Ozs7Ozs7eUNBQ1FDLGdCLEVBQWtCQyxJLEVBQU1DLE8sRUFBUztBQUMzQyxrQ0FBSUMsK0JBQStCSCxpQkFBaUJJLEdBQWpCLEVBQW5DO0FBQUEsa0NBQ0lDLFVBQVVGLDRCQURkO0FBQUEsa0NBQzZDO0FBQ3pDRywwQ0FGSjtBQUFBLGtDQUdJQyxrQkFISjs7QUFLQSxxQ0FBT0YsWUFBWSxFQUFuQixFQUF1QjtBQUNyQiw0Q0FBSUcsZ0JBQWdCSCxRQUFRSSxNQUE1QjtBQUFBLDRDQUNJQyxlQUFlUixRQUFRUyxlQUFSLEVBRG5COztBQUdBLDRDQUFJQyw4QkFBOEJmLG9CQUFvQmdCLFFBQXBCLENBQTZCUixPQUE3QixDQUFsQztBQUFBLDRDQUNJUyw0QkFBNEJsQixrQkFBa0JpQixRQUFsQixDQUEyQlIsT0FBM0IsQ0FEaEM7O0FBR0EsNENBQUlLLGlCQUFpQixDQUFyQixFQUF3QjtBQUN0QixzREFBSUUsZ0NBQWdDLENBQXBDLEVBQXVDO0FBQ3JDVixvRUFBUWEsb0JBQVI7O0FBRUFULDJFQUFlVCxvQkFBb0JtQixXQUFwQixDQUFnQ1gsT0FBaEMsRUFBeUNKLElBQXpDLENBQWY7O0FBRUFNLGlGQUFxQkQsYUFBYVcsU0FBYixFQUFyQjs7QUFFQWpCLDZFQUFpQmtCLElBQWpCLENBQXNCWixZQUF0Qjs7QUFFQUQsc0VBQVVBLFFBQVFjLFNBQVIsQ0FBa0JaLGtCQUFsQixDQUFWOztBQUVBO0FBQ0Q7QUFDRix5Q0FkRCxNQWNPO0FBQ0wsc0RBQUlhLHVCQUF1QnBCLGlCQUFpQkksR0FBakIsRUFBM0I7O0FBRUEsc0RBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlRLGdDQUFnQyxDQUFwQyxFQUF1QztBQUM1Q1Ysb0VBQVFhLG9CQUFSOztBQUVBVCwyRUFBZVQsb0JBQW9CbUIsV0FBcEIsQ0FBZ0NYLE9BQWhDLEVBQXlDSixJQUF6QyxDQUFmOztBQUVBTSxpRkFBcUJELGFBQWFXLFNBQWIsRUFBckI7QUFDRCxtREFOTSxNQU1BLElBQUlILDhCQUE4QixDQUFsQyxFQUFxQztBQUMxQ1osb0VBQVFtQixvQkFBUjs7QUFFQWYsMkVBQWVWLGtCQUFrQm9CLFdBQWxCLENBQThCWCxPQUE5QixFQUF1Q0osSUFBdkMsQ0FBZjs7QUFFQU0saUZBQXFCRCxhQUFhVyxTQUFiLEVBQXJCO0FBQ0QsbURBTk0sTUFNQTtBQUNMLGdFQUFJSyw2QkFBNkI1QixLQUFLNkIsY0FBTCxDQUFvQlgsMkJBQXBCLEVBQWlERSx5QkFBakQsRUFBNEVOLGFBQTVFLENBQWpDOztBQUVBRiwyRUFBZVIscUJBQXFCa0IsV0FBckIsQ0FBaUNYLE9BQWpDLEVBQTBDSixJQUExQyxFQUFnRHFCLDBCQUFoRCxDQUFmOztBQUVBZixpRkFBcUJlLDBCQUFyQjtBQUNEOztBQUVEaEIsaUVBQWdCYyx5QkFBeUJJLFNBQTFCLEdBQ0VsQixZQURGLEdBRUljLHFCQUFxQkssS0FBckIsQ0FBMkJuQixZQUEzQixDQUZuQjs7QUFJQU4sbUVBQWlCa0IsSUFBakIsQ0FBc0JaLFlBQXRCOztBQUVBRCw0REFBVUEsUUFBUWMsU0FBUixDQUFrQlosa0JBQWxCLENBQVY7O0FBRUE7QUFDRDs7QUFFREMsd0RBQWdCZCxLQUFLNkIsY0FBTCxDQUFvQlgsMkJBQXBCLEVBQWlESixhQUFqRCxDQUFoQjs7QUFFQSw0Q0FBSWtCLG1CQUFtQnJCLFFBQVFjLFNBQVIsQ0FBa0JYLGFBQWxCLENBQXZCOztBQUVBSCxrREFBVUEsUUFBUWMsU0FBUixDQUFrQixDQUFsQixFQUFxQlgsYUFBckIsQ0FBVjs7QUFFQVIseURBQWlCa0IsSUFBakIsQ0FBc0JiLE9BQXRCOztBQUVBQSxrREFBVXFCLGdCQUFWOztBQUVBO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI3QixvQkFBakIiLCJmaWxlIjoiY29tbWVudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgZmlyc3RUb2tlbk9yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29udGVudCA9IGZpcnN0VG9rZW5PclJlbWFpbmluZ0NvbnRlbnQsICAvLy9cclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgIGNvbW1lbnREZXB0aCA9IGNvbnRleHQuZ2V0Q29tbWVudERlcHRoKCk7XHJcblxyXG4gICAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KSxcclxuICAgICAgICAgIGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24gPSBFbmRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChjb21tZW50RGVwdGggPT09IDApIHtcclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmluY3JlYXNlQ29tbWVudERlcHRoKCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5pbmNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5kZWNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgdmFyIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=