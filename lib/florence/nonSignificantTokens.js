'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceToken = require('../common/token/whitespace'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment'),
    IncludeDirectiveToken = require('./token/includeDirective');

var NonSignificantTokens = function () {
          function NonSignificantTokens() {
                    _classCallCheck(this, NonSignificantTokens);
          }

          _createClass(NonSignificantTokens, null, [{
                    key: 'pass',
                    value: function pass(content, context, line) {
                              var nonSignificantTokensOrSignificantContent = [],
                                  remainingContent,
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

                                                            remainingContent = content.substring(commentTokenLength);

                                                            content = remainingContent;

                                                            nonSignificantTokensOrSignificantContent.push(commentToken);

                                                            continue;
                                                  }
                                        } else {
                                                  var previousCommentToken = nonSignificantTokensOrSignificantContent.pop(),
                                                      middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

                                                  if (false) {} else if (endOfCommentTokenPosition === 0) {
                                                            context.setInComment(false);

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

                                                  nonSignificantTokensOrSignificantContent.push(commentToken);

                                                  continue;
                                        }

                                        var includeDirectiveTokenPosition = IncludeDirectiveToken.position(content);

                                        if (includeDirectiveTokenPosition === 0) {
                                                  var includeDirectiveToken = IncludeDirectiveToken.fromContent(content, line),
                                                      includeDirectiveTokenLength = includeDirectiveToken.getLength();

                                                  content = content.substring(includeDirectiveTokenLength);

                                                  nonSignificantTokensOrSignificantContent.push(includeDirectiveToken);

                                                  continue;
                                        }

                                        var whitespaceTokenPosition = WhitespaceToken.position(content);

                                        if (whitespaceTokenPosition === 0) {
                                                  var whitespaceToken = WhitespaceToken.fromContent(content, line),
                                                      whitespaceTokenLength = whitespaceToken.getLength();

                                                  content = content.substring(whitespaceTokenLength);

                                                  nonSignificantTokensOrSignificantContent.push(whitespaceToken);

                                                  continue;
                                        }

                                        var significantContentLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength),
                                            significantContent = content.substring(0, significantContentLength);

                                        remainingContent = content.substring(significantContentLength);

                                        content = remainingContent;

                                        nonSignificantTokensOrSignificantContent.push(significantContent);

                                        continue;
                              }

                              var endOfLineToken = EndOfLineToken.fromNothing(line);

                              nonSignificantTokensOrSignificantContent.push(endOfLineToken);

                              return nonSignificantTokensOrSignificantContent;
                    }
          }]);

          return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJJbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50IiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImluQ29tbWVudCIsImlzSW5Db21tZW50Iiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwic2V0SW5Db21tZW50IiwiZnJvbUNvbnRlbnQiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJwb3AiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW5Qb3NpdGlvbiIsImluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsImluY2x1ZGVEaXJlY3RpdmVUb2tlbkxlbmd0aCIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50IiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFw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QVFpQixTQUFSLENBQWtCVSwyQkFBbEIsQ0FBVjs7QUFFQXhCLDJGQUF5Q2UsSUFBekMsQ0FBOENRLHFCQUE5Qzs7QUFFQTtBQUNEOztBQUVELDRDQUFJRSwwQkFBMEJsQyxnQkFBZ0JrQixRQUFoQixDQUF5QlosT0FBekIsQ0FBOUI7O0FBRUEsNENBQUk0Qiw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakMsc0RBQUlDLGtCQUFrQm5DLGdCQUFnQnFCLFdBQWhCLENBQTRCZixPQUE1QixFQUFxQ0UsSUFBckMsQ0FBdEI7QUFBQSxzREFDSTRCLHdCQUF3QkQsZ0JBQWdCYixTQUFoQixFQUQ1Qjs7QUFHQWhCLDREQUFVQSxRQUFRaUIsU0FBUixDQUFrQmEscUJBQWxCLENBQVY7O0FBRUEzQiwyRkFBeUNlLElBQXpDLENBQThDVyxlQUE5Qzs7QUFFQTtBQUNEOztBQUVELDRDQUFJRSwyQkFBMkJ4QyxLQUFLK0IsY0FBTCxDQUFvQlgsMkJBQXBCLEVBQWlEaUIsdUJBQWpELEVBQTBFckIsYUFBMUUsQ0FBL0I7QUFBQSw0Q0FDSXlCLHFCQUFxQmhDLFFBQVFpQixTQUFSLENBQWtCLENBQWxCLEVBQXFCYyx3QkFBckIsQ0FEekI7O0FBR0EzQiwyREFBbUJKLFFBQVFpQixTQUFSLENBQWtCYyx3QkFBbEIsQ0FBbkI7O0FBRUEvQixrREFBVUksZ0JBQVY7O0FBRUFELGlGQUF5Q2UsSUFBekMsQ0FBOENjLGtCQUE5Qzs7QUFFQTtBQUNEOztBQUVELGtDQUFJQyxpQkFBaUJ4QyxlQUFleUMsV0FBZixDQUEyQmhDLElBQTNCLENBQXJCOztBQUVBQyx1RUFBeUNlLElBQXpDLENBQThDZSxjQUE5Qzs7QUFFQSxxQ0FBTzlCLHdDQUFQO0FBQ0Q7Ozs7OztBQUdIZ0MsT0FBT0MsT0FBUCxHQUFpQnJDLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKSxcclxuICAgIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vaW5jbHVkZURpcmVjdGl2ZScpO1xyXG5cclxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpIHtcclxuICAgIHZhciBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50ID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KHRydWUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlvdXNDb21tZW50VG9rZW4gPSBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnBvcCgpLFxyXG4gICAgICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KGZhbHNlKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaW5jbHVkZURpcmVjdGl2ZVRva2VuUG9zaXRpb24gPSBJbmNsdWRlRGlyZWN0aXZlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgaW5jbHVkZURpcmVjdGl2ZVRva2VuID0gSW5jbHVkZURpcmVjdGl2ZVRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlVG9rZW5MZW5ndGggPSBpbmNsdWRlRGlyZWN0aXZlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhpbmNsdWRlRGlyZWN0aXZlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goaW5jbHVkZURpcmVjdGl2ZVRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9IFdoaXRlc3BhY2VUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmICh3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkxlbmd0aCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHdoaXRlc3BhY2VUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudExlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCksXHJcbiAgICAgICAgICBzaWduaWZpY2FudENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBzaWduaWZpY2FudENvbnRlbnRMZW5ndGgpOyBcclxuXHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzaWduaWZpY2FudENvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goc2lnbmlmaWNhbnRDb250ZW50KTtcclxuXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTm90aGluZyhsaW5lKTtcclxuICAgIFxyXG4gICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==