'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    NewlineToken = require('./token/newline'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment'),
    SignificantContentToken = require('../common/token/significantContent'),
    WhitespaceToken = require('../common/token/whitespace');

var NonSignificantTokens = function () {
          function NonSignificantTokens() {
                    _classCallCheck(this, NonSignificantTokens);
          }

          _createClass(NonSignificantTokens, null, [{
                    key: 'pass',
                    value: function pass(content, context, line) {
                              var tokens = [],
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

                                                            tokens.push(commentToken);

                                                            continue;
                                                  }
                                        } else {
                                                  var previousCommentToken = tokens.pop(),
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

                                                  tokens.push(commentToken);

                                                  continue;
                                        }

                                        var whitespaceTokenPosition = WhitespaceToken.position(content);

                                        if (whitespaceTokenPosition === 0) {
                                                  var whitespaceToken = WhitespaceToken.fromContent(content, line),
                                                      whitespaceTokenLength = whitespaceToken.getLength();

                                                  content = content.substring(whitespaceTokenLength);

                                                  tokens.push(whitespaceToken);

                                                  continue;
                                        }

                                        var significantContentTokenLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength);

                                        remainingContent = content.substring(significantContentTokenLength);

                                        content = content.substring(0, significantContentTokenLength);

                                        var significantContentToken = SignificantContentToken.fromContent(content);

                                        content = remainingContent;

                                        tokens.push(significantContentToken);

                                        continue;
                              }

                              return tokens;
                    }
          }]);

          return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIk5ld2xpbmVUb2tlbiIsIkVuZE9mQ29tbWVudFRva2VuIiwiU3RhcnRPZkNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwiU2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJOb25TaWduaWZpY2FudFRva2VucyIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsInRva2VucyIsInJlbWFpbmluZ0NvbnRlbnQiLCJjb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW5MZW5ndGgiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiaW5Db21tZW50IiwiaXNJbkNvbW1lbnQiLCJzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJzZXRJbkNvbW1lbnQiLCJmcm9tQ29udGVudCIsImdldExlbmd0aCIsInN1YnN0cmluZyIsInB1c2giLCJwcmV2aW91c0NvbW1lbnRUb2tlbiIsInBvcCIsIm1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoIiwibWluQmFyTWludXNPbmUiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW5MZW5ndGgiLCJzaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGVBQWVELFFBQVEsaUJBQVIsQ0FEbkI7QUFBQSxJQUVJRSxvQkFBb0JGLFFBQVEsc0JBQVIsQ0FGeEI7QUFBQSxJQUdJRyxzQkFBc0JILFFB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RUFILDJEQUFtQkosUUFBUWlCLFNBQVIsQ0FBa0JXLDZCQUFsQixDQUFuQjs7QUFFQTVCLGtEQUFVQSxRQUFRaUIsU0FBUixDQUFrQixDQUFsQixFQUFxQlcsNkJBQXJCLENBQVY7O0FBRUEsNENBQUlDLDBCQUEwQmhDLHdCQUF3QmtCLFdBQXhCLENBQW9DZixPQUFwQyxDQUE5Qjs7QUFFQUEsa0RBQVVJLGdCQUFWOztBQUVBRCwrQ0FBT2UsSUFBUCxDQUFZVyx1QkFBWjs7QUFFQTtBQUNEOztBQUVELHFDQUFPMUIsTUFBUDtBQUNEOzs7Ozs7QUFHSDJCLE9BQU9DLE9BQVAsR0FBaUJoQyxvQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIE5ld2xpbmVUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbmV3bGluZScpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KHRydWUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIHRva2Vucy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vucy5wb3AoKSxcclxuICAgICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcobWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgIHRva2Vucy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5MZW5ndGggPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh3aGl0ZXNwYWNlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzaWduaWZpY2FudENvbnRlbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuID0gU2lnbmlmaWNhbnRDb250ZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHNpZ25pZmljYW50Q29udGVudFRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=