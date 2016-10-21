'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceToken = require('../common/token/whitespace'),
    IncludeDirectiveToken = require('../common/token/includeDirective'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiSW5jbHVkZURpcmVjdGl2ZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50IiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImluQ29tbWVudCIsImlzSW5Db21tZW50Iiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwic2V0SW5Db21tZW50IiwiZnJvbUNvbnRlbnQiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJwb3AiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW5Qb3NpdGlvbiIsImluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsImluY2x1ZGVEaXJlY3RpdmVUb2tlbkxlbmd0aCIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50IiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFw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QVFpQixTQUFSLENBQWtCVSwyQkFBbEIsQ0FBVjs7QUFFQXhCLDJGQUF5Q2UsSUFBekMsQ0FBOENRLHFCQUE5Qzs7QUFFQTtBQUNEOztBQUVELDRDQUFJRSwwQkFBMEJsQyxnQkFBZ0JrQixRQUFoQixDQUF5QlosT0FBekIsQ0FBOUI7O0FBRUEsNENBQUk0Qiw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakMsc0RBQUlDLGtCQUFrQm5DLGdCQUFnQnFCLFdBQWhCLENBQTRCZixPQUE1QixFQUFxQ0UsSUFBckMsQ0FBdEI7QUFBQSxzREFDSTRCLHdCQUF3QkQsZ0JBQWdCYixTQUFoQixFQUQ1Qjs7QUFHQWhCLDREQUFVQSxRQUFRaUIsU0FBUixDQUFrQmEscUJBQWxCLENBQVY7O0FBRUEzQiwyRkFBeUNlLElBQXpDLENBQThDVyxlQUE5Qzs7QUFFQTtBQUNEOztBQUVELDRDQUFJRSwyQkFBMkJ4QyxLQUFLK0IsY0FBTCxDQUFvQlgsMkJBQXBCLEVBQWlEaUIsdUJBQWpELEVBQTBFckIsYUFBMUUsQ0FBL0I7QUFBQSw0Q0FDSXlCLHFCQUFxQmhDLFFBQVFpQixTQUFSLENBQWtCLENBQWxCLEVBQXFCYyx3QkFBckIsQ0FEekI7O0FBR0EzQiwyREFBbUJKLFFBQVFpQixTQUFSLENBQWtCYyx3QkFBbEIsQ0FBbkI7O0FBRUEvQixrREFBVUksZ0JBQVY7O0FBRUFELGlGQUF5Q2UsSUFBekMsQ0FBOENjLGtCQUE5Qzs7QUFFQTtBQUNEOztBQUVELGtDQUFJQyxpQkFBaUJ4QyxlQUFleUMsV0FBZixDQUEyQmhDLElBQTNCLENBQXJCOztBQUVBQyx1RUFBeUNlLElBQXpDLENBQThDZSxjQUE5Qzs7QUFFQSxxQ0FBTzlCLHdDQUFQO0FBQ0Q7Ozs7OztBQUdIZ0MsT0FBT0MsT0FBUCxHQUFpQnJDLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpLFxyXG4gICAgSW5jbHVkZURpcmVjdGl2ZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL2luY2x1ZGVEaXJlY3RpdmUnKSxcclxuICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3N0YXJ0T2ZDb21tZW50JyksXHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSkge1xyXG4gICAgdmFyIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQgPSBbXSxcclxuICAgICAgICByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbixcclxuICAgICAgICBjb21tZW50VG9rZW5MZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBjb250ZXh0LmlzSW5Db21tZW50KCk7XHJcblxyXG4gICAgICB2YXIgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KSxcclxuICAgICAgICAgIGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24gPSBFbmRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmICghaW5Db21tZW50KSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucG9wKCksXHJcbiAgICAgICAgICAgIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGZhbHNlKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5zZXRJbkNvbW1lbnQoZmFsc2UpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBpbmNsdWRlRGlyZWN0aXZlVG9rZW5Qb3NpdGlvbiA9IEluY2x1ZGVEaXJlY3RpdmVUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlVG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciBpbmNsdWRlRGlyZWN0aXZlVG9rZW4gPSBJbmNsdWRlRGlyZWN0aXZlVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVUb2tlbkxlbmd0aCA9IGluY2x1ZGVEaXJlY3RpdmVUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGluY2x1ZGVEaXJlY3RpdmVUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChpbmNsdWRlRGlyZWN0aXZlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKHdoaXRlc3BhY2VUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7IFxyXG5cclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Ob3RoaW5nKGxpbmUpO1xyXG4gICAgXHJcbiAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VucztcclxuIl19