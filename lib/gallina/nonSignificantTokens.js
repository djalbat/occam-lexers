'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    WhitespaceToken = require('../common/token/whitespace'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

var NonSignificantTokens = function () {
          function NonSignificantTokens() {
                    _classCallCheck(this, NonSignificantTokens);
          }

          _createClass(NonSignificantTokens, null, [{
                    key: 'pass',
                    value: function pass(content, context, line) {
                              var nonSignificantTokenOrSignificantContents = [],
                                  remainingContent,
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

                                                            remainingContent = content.substring(commentTokenLength);

                                                            content = remainingContent;

                                                            nonSignificantTokenOrSignificantContents.push(commentToken);

                                                            continue;
                                                  }
                                        } else {
                                                  var previousCommentToken = nonSignificantTokenOrSignificantContents.pop(),
                                                      middleOfCommentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, endOfCommentTokenPosition, contentLength);

                                                  if (false) {} else if (startOfCommentTokenPosition === 0) {
                                                            context.increaseCommentDepth();

                                                            commentToken = StartOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            remainingContent = content.substring(commentTokenLength);
                                                  } else if (endOfCommentTokenPosition === 0) {
                                                            context.decreaseCommentDepth();

                                                            commentToken = EndOfCommentToken.fromContent(content, line);

                                                            commentTokenLength = commentToken.getLength();

                                                            remainingContent = content.substring(commentTokenLength);
                                                  } else {
                                                            remainingContent = content.substring(middleOfCommentTokenLength);

                                                            content = content.substring(0, middleOfCommentTokenLength);

                                                            commentToken = MiddleOfCommentToken.fromContent(content, line);
                                                  }

                                                  commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

                                                  content = remainingContent;

                                                  nonSignificantTokenOrSignificantContents.push(commentToken);

                                                  continue;
                                        }

                                        var whitespaceTokenPosition = WhitespaceToken.position(content);

                                        if (whitespaceTokenPosition === 0) {
                                                  var whitespaceToken = WhitespaceToken.fromContent(content, line),
                                                      whitespaceTokenLength = whitespaceToken.getLength();

                                                  remainingContent = content.substring(whitespaceTokenLength);

                                                  content = remainingContent;

                                                  nonSignificantTokenOrSignificantContents.push(whitespaceToken);

                                                  continue;
                                        }

                                        var significantContentLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength),
                                            significantContent = content.substring(0, significantContentLength);

                                        remainingContent = content.substring(significantContentLength);

                                        content = remainingContent;

                                        nonSignificantTokenOrSignificantContents.push(significantContent);

                                        continue;
                              }

                              return nonSignificantTokenOrSignificantContents;
                    }
          }]);

          return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL25vblNpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMiLCJyZW1haW5pbmdDb250ZW50IiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImNvbW1lbnREZXB0aCIsImdldENvbW1lbnREZXB0aCIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwiZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsImluY3JlYXNlQ29tbWVudERlcHRoIiwiZnJvbUNvbnRlbnQiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJwb3AiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwiZGVjcmVhc2VDb21tZW50RGVwdGgiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCO0FBQUEsSUFFSUUsb0JBQW9CRixRQUFRLHNCQUFSLENBRnhC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QkosUUFBUWlCLFNBQVIsQ0FBa0JXLHFCQUFsQixDQUFuQjs7QUFFQTVCLDREQUFVSSxnQkFBVjs7QUFFQUQsMkZBQXlDZSxJQUF6QyxDQUE4Q1MsZUFBOUM7O0FBRUE7QUFDRDs7QUFFRCw0Q0FBSUUsMkJBQTJCcEMsS0FBSzZCLGNBQUwsQ0FBb0JYLDJCQUFwQixFQUFpRGUsdUJBQWpELEVBQTBFbkIsYUFBMUUsQ0FBL0I7QUFBQSw0Q0FDSXVCLHFCQUFxQjlCLFFBQVFpQixTQUFSLENBQWtCLENBQWxCLEVBQXFCWSx3QkFBckIsQ0FEekI7O0FBR0F6QiwyREFBbUJKLFFBQVFpQixTQUFSLENBQWtCWSx3QkFBbEIsQ0FBbkI7O0FBRUE3QixrREFBVUksZ0JBQVY7O0FBRUFELGlGQUF5Q2UsSUFBekMsQ0FBOENZLGtCQUE5Qzs7QUFFQTtBQUNEOztBQUVELHFDQUFPM0Isd0NBQVA7QUFDRDs7Ozs7O0FBR0g0QixPQUFPQyxPQUFQLEdBQWlCakMsb0JBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyA9IFtdLFxyXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICBjb21tZW50RGVwdGggPSBjb250ZXh0LmdldENvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoY29tbWVudERlcHRoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5pbmNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlvdXNDb21tZW50VG9rZW4gPSBub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGZhbHNlKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmluY3JlYXNlQ29tbWVudERlcHRoKCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmRlY3JlYXNlQ29tbWVudERlcHRoKCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcobWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudExlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCksXHJcbiAgICAgICAgICBzaWduaWZpY2FudENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBzaWduaWZpY2FudENvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VucztcclxuIl19