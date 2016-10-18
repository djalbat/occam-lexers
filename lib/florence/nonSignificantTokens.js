'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfLineToken = require('./token/endOfLine'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50IiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuTGVuZ3RoIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsImluQ29tbWVudCIsImlzSW5Db21tZW50Iiwic3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uIiwic2V0SW5Db21tZW50IiwiZnJvbUNvbnRlbnQiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwicHJldmlvdXNDb21tZW50VG9rZW4iLCJwb3AiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkxlbmd0aCIsInNpZ25pZmljYW50Q29udGVudExlbmd0aCIsInNpZ25pZmljYW50Q29udGVudCIsImVuZE9mTGluZVRva2VuIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEckI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEs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QUExRSxDQUEvQjtBQUFBLDRDQUNJc0IscUJBQXFCN0IsUUFBUWlCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJXLHdCQUFyQixDQUR6Qjs7QUFHQXhCLDJEQUFtQkosUUFBUWlCLFNBQVIsQ0FBa0JXLHdCQUFsQixDQUFuQjs7QUFFQTVCLGtEQUFVSSxnQkFBVjs7QUFFQUQsaUZBQXlDZSxJQUF6QyxDQUE4Q1csa0JBQTlDOztBQUVBO0FBQ0Q7O0FBRUQsa0NBQUlDLGlCQUFpQnBDLGVBQWVxQyxXQUFmLENBQTJCN0IsSUFBM0IsQ0FBckI7O0FBRUFDLHVFQUF5Q2UsSUFBekMsQ0FBOENZLGNBQTlDOztBQUVBLHFDQUFPM0Isd0NBQVA7QUFDRDs7Ozs7O0FBR0g2QixPQUFPQyxPQUFQLEdBQWlCbEMsb0JBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vZW5kT2ZMaW5lJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudCA9IFtdLFxyXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgIGluQ29tbWVudCA9IGNvbnRleHQuaXNJbkNvbW1lbnQoKTtcclxuXHJcbiAgICAgIHZhciBzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpLFxyXG4gICAgICAgICAgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKCFpbkNvbW1lbnQpIHtcclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzQ29tbWVudFRva2VuID0gbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wb3AoKSxcclxuICAgICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcobWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKHdoaXRlc3BhY2VUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7IFxyXG5cclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgIG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Ob3RoaW5nKGxpbmUpO1xyXG4gICAgXHJcbiAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VucztcclxuIl19