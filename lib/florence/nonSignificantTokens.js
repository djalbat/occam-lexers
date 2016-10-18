'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfLineToken = require('../common/token/endOfLine'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50IiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImluQ29tbWVudCIsImlzSW5Db21tZW50Iiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwic2V0SW5Db21tZW50IiwiZnJvbUNvbnRlbnQiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJwb3AiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkxlbmd0aCIsInNpZ25pZmljYW50Q29udGVudExlbmd0aCIsInNpZ25pZmljYW50Q29udGVudCIsImVuZE9mTGluZVRva2VuIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsMkJBQVIsQ0FEckI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEs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QUExRSxDQUEvQjtBQUFBLDRDQUNJc0IscUJBQXFCN0IsUUFBUWlCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJXLHdCQUFyQixDQUR6Qjs7QUFHQXhCLDJEQUFtQkosUUFBUWlCLFNBQVIsQ0FBa0JXLHdCQUFsQixDQUFuQjs7QUFFQTVCLGtEQUFVSSxnQkFBVjs7QUFFQUQsaUZBQXlDZSxJQUF6QyxDQUE4Q1csa0JBQTlDOztBQUVBO0FBQ0Q7O0FBRUQsa0NBQUlDLGlCQUFpQnBDLGVBQWVxQyxXQUFmLENBQTJCN0IsSUFBM0IsQ0FBckI7O0FBRUFDLHVFQUF5Q2UsSUFBekMsQ0FBOENZLGNBQTlDOztBQUVBLHFDQUFPM0Isd0NBQVA7QUFDRDs7Ozs7O0FBR0g2QixPQUFPQyxPQUFQLEdBQWlCbEMsb0JBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9lbmRPZkxpbmUnKSxcclxuICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi93aGl0ZXNwYWNlJyksXHJcbiAgICBFbmRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vZW5kT2ZDb21tZW50JyksXHJcbiAgICBTdGFydE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zdGFydE9mQ29tbWVudCcpLFxyXG4gICAgTWlkZGxlT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL21pZGRsZU9mQ29tbWVudCcpO1xyXG5cclxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpIHtcclxuICAgIHZhciBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50ID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KHRydWUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlvdXNDb21tZW50VG9rZW4gPSBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnBvcCgpLFxyXG4gICAgICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KGZhbHNlKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5MZW5ndGggPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh3aGl0ZXNwYWNlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2god2hpdGVzcGFjZVRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRMZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTsgXHJcblxyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKHNpZ25pZmljYW50Q29udGVudCk7XHJcblxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbU5vdGhpbmcobGluZSk7XHJcbiAgICBcclxuICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=