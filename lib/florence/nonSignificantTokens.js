'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfLineToken = require('./token/endOfLine'),
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

                              var endOfLineToken = EndOfLineToken.fromNothing(line);

                              tokens.push(endOfLineToken);

                              return tokens;
                    }
          }]);

          return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJTaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwidG9rZW5zIiwicmVtYWluaW5nQ29udGVudCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJpbkNvbW1lbnQiLCJpc0luQ29tbWVudCIsInN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwiZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiIsInNldEluQ29tbWVudCIsImZyb21Db250ZW50IiwiZ2V0TGVuZ3RoIiwic3Vic3RyaW5nIiwicHVzaCIsInByZXZpb3VzQ29tbWVudFRva2VuIiwicG9wIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsInVuZGVmaW5lZCIsIm1lcmdlIiwid2hpdGVzcGFjZVRva2VuUG9zaXRpb24iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5MZW5ndGgiLCJzaWduaWZpY2FudENvbnRlbnRUb2tlbkxlbmd0aCIsInNpZ25pZmljYW50Q29udGVudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxtQkFBUixDQURyQjtBQUFBLElBRUlFLG9CQUFvQkYsUUFBUSxzQkFBUixDQUZ4QjtBQUFBLElBR0lHLHNCQUFzQkgsUUFBUSx3QkFBUixDQUgxQjtBQUFBLElBSUlJLHVCQUF1QkosUUFBUSx5QkFBUixDQUozQjtBQUFBLElBS0lLLDBCQUEwQkwsUUFBUSxvQ0FBUixDQUw5QjtBQUFBLElBTUlNLGtCQUFrQk4sUUFBUSw0QkFBUixDQU50Qjs7SUFRTU8sb0I7Ozs7Ozs7eUNBQ1FDLE8sRUFBU0MsTyxFQUFTQyxJLEVBQU07QUFDbEMsa0NBQUlDLFNBQVMsRUFBYjtBQUFBLGtDQUNJQyxnQkFESjtBQUFBLGtDQUVJQyxZQUZKO0FBQUEsa0NBR0lDLGtCQUhKOztBQUtBLHFDQUFPTixZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLDRDQUFJTyxnQkFBZ0JQLFFBQVFRLE1BQTVCO0FBQUEsNENBQ0lDLFlBQVlSLFFBQVFTLFdBQVIsRUFEaEI7O0FBR0EsNENBQUlDLDhCQUE4QmhCLG9CQUFvQmlCLFFBQXBCLENBQTZCWixPQUE3QixDQUFsQztBQUFBLDRDQUNJYSw0QkFBNEJuQixrQkFBa0JrQixRQUFsQixDQUEyQlosT0FBM0IsQ0FEaEM7O0FBR0EsNENBQUksQ0FBQ1MsU0FBTCxFQUFnQjtBQUNkLHNEQUFJRSxnQ0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckNWLG9FQUFRYSxZQUFSLENBQXFCLElBQXJCOztBQUVBVCwyRUFBZVYsb0JBQW9Cb0IsV0FBcEIsQ0FBZ0NmLE9BQWhDLEVBQXlDRSxJQUF6QyxDQUFmOztBQUVBSSxpRkFBcUJELGFBQWFXLFNBQWIsRUFBckI7O0FBRUFaLCtFQUFtQkosUUFBUWlCLFNBQVIsQ0FBa0JYLGtCQUFsQixDQUFuQjs7QUFFQU4sc0VBQVVJLGdCQUFWOztBQUVBRCxtRUFBT2UsSUFBUCxDQUFZYixZQUFaOztBQUVBO0FBQ0Q7QUFDRix5Q0FoQkQsTUFnQk87QUFDTCxzREFBSWMsdUJBQXVCaEIsT0FBT2lCLEdBQVAsRUFBM0I7QUFBQSxzREFDSUMsNkJBQTZCOUIsS0FBSytCLGNBQUwsQ0FBb0JULHlCQUFwQixFQUErQ04sYUFBL0MsQ0FEakM7O0FBR0Esc0RBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlNLDhCQUE4QixDQUFsQyxFQUFxQztBQUMxQ1osb0VBQVFhLFlBQVIsQ0FBcUIsS0FBckI7O0FBRUFULDJFQUFlWCxrQkFBa0JxQixXQUFsQixDQUE4QmYsT0FBOUIsRUFBdUNFLElBQXZDLENBQWY7O0FBRUFJLGlGQUFxQkQsYUFBYVcsU0FBYixFQUFyQjs7QUFFQVosK0VBQW1CSixRQUFRaUIsU0FBUixDQUFrQlgsa0JBQWxCLENBQW5CO0FBQ0QsbURBUk0sTUFRQTtBQUNMRiwrRUFBbUJKLFFBQVFpQixTQUFSLENBQWtCSSwwQkFBbEIsQ0FBbkI7O0FBRUFyQixzRUFBVUEsUUFBUWlCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJJLDBCQUFyQixDQUFWOztBQUVBaEIsMkVBQWVULHFCQUFxQm1CLFdBQXJCLENBQWlDZixPQUFqQyxFQUEwQ0UsSUFBMUMsQ0FBZjtBQUNEOztBQUVERyxpRUFBZ0JjLHlCQUF5QkksU0FBMUIsR0FDRWxCLFlBREYsR0FFSWMscUJBQXFCSyxLQUFyQixDQUEyQm5CLFlBQTNCLENBRm5COztBQUlBTCw0REFBVUksZ0JBQVY7O0FBRUFELHlEQUFPZSxJQUFQLENBQVliLFlBQVo7O0FBRUE7QUFDRDs7QUFFRCw0Q0FBSW9CLDBCQUEwQjNCLGdCQUFnQmMsUUFBaEIsQ0FBeUJaLE9BQXpCLENBQTlCOztBQUVBLDRDQUFJeUIsNEJBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLHNEQUFJQyxrQkFBa0I1QixnQkFBZ0JpQixXQUFoQixDQUE0QmYsT0FBNUIsRUFBcUNFLElBQXJDLENBQXRCO0FBQUEsc0RBQ0l5Qix3QkFBd0JELGdCQUFnQlYsU0FBaEIsRUFENUI7O0FBR0FoQiw0REFBVUEsUUFBUWlCLFNBQVIsQ0FBa0JVLHFCQUFsQixDQUFWOztBQUVBeEIseURBQU9lLElBQVAsQ0FBWVEsZUFBWjs7QUFFQTtBQUNEOztBQUVELDRDQUFJRSxnQ0FBZ0NyQyxLQUFLK0IsY0FBTCxDQUFvQlgsMkJBQXBCLEVBQWlEYyx1QkFBakQsRUFBMEVsQixhQUExRSxDQUFwQzs7QUFFQUgsMkRBQW1CSixRQUFRaUIsU0FBUixDQUFrQlcsNkJBQWxCLENBQW5COztBQUVBNUIsa0RBQVVBLFFBQVFpQixTQUFSLENBQWtCLENBQWxCLEVBQXFCVyw2QkFBckIsQ0FBVjs7QUFFQSw0Q0FBSUMsMEJBQTBCaEMsd0JBQXdCa0IsV0FBeEIsQ0FBb0NmLE9BQXBDLENBQTlCOztBQUVBQSxrREFBVUksZ0JBQVY7O0FBRUFELCtDQUFPZSxJQUFQLENBQVlXLHVCQUFaOztBQUVBO0FBQ0Q7O0FBRUQsa0NBQUlDLGlCQUFpQnJDLGVBQWVzQyxXQUFmLENBQTJCN0IsSUFBM0IsQ0FBckI7O0FBRUFDLHFDQUFPZSxJQUFQLENBQVlZLGNBQVo7O0FBRUEscUNBQU8zQixNQUFQO0FBQ0Q7Ozs7OztBQUdINkIsT0FBT0MsT0FBUCxHQUFpQmxDLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mTGluZScpLFxyXG4gICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9taWRkbGVPZkNvbW1lbnQnKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gY29udGV4dC5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoIWluQ29tbWVudCkge1xyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuc2V0SW5Db21tZW50KHRydWUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIHRva2Vucy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vucy5wb3AoKSxcclxuICAgICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LnNldEluQ29tbWVudChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcobWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICAgIHRva2Vucy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5MZW5ndGggPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh3aGl0ZXNwYWNlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24sIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzaWduaWZpY2FudENvbnRlbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuID0gU2lnbmlmaWNhbnRDb250ZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgIHRva2Vucy5wdXNoKHNpZ25pZmljYW50Q29udGVudFRva2VuKTtcclxuXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTm90aGluZyhsaW5lKTtcclxuICAgIFxyXG4gICAgdG9rZW5zLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=