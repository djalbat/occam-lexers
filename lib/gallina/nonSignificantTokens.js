'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
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

                                                            tokens.push(commentToken);

                                                            continue;
                                                  }
                                        } else {
                                                  var previousCommentToken = tokens.pop(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL25vblNpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJTdGFydE9mQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJTaWduaWZpY2FudENvbnRlbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwidG9rZW5zIiwicmVtYWluaW5nQ29udGVudCIsImNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbkxlbmd0aCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJjb21tZW50RGVwdGgiLCJnZXRDb21tZW50RGVwdGgiLCJzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsImVuZE9mQ29tbWVudFRva2VuUG9zaXRpb24iLCJpbmNyZWFzZUNvbW1lbnREZXB0aCIsImZyb21Db250ZW50IiwiZ2V0TGVuZ3RoIiwic3Vic3RyaW5nIiwicHVzaCIsInByZXZpb3VzQ29tbWVudFRva2VuIiwicG9wIiwibWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsImRlY3JlYXNlQ29tbWVudERlcHRoIiwidW5kZWZpbmVkIiwibWVyZ2UiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkxlbmd0aCIsInNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsc0JBQVIsQ0FEeEI7QUFBQSxJQUVJRSxzQkFBc0JGLFFBQVEsd0JBQVIsQ0FG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LFNBQWhCLEVBRDVCOztBQUdBaEIsNERBQVVBLFFBQVFpQixTQUFSLENBQWtCVyxxQkFBbEIsQ0FBVjs7QUFFQXpCLHlEQUFPZSxJQUFQLENBQVlTLGVBQVo7O0FBRUE7QUFDRDs7QUFFRCw0Q0FBSUUsZ0NBQWdDckMsS0FBSzhCLGNBQUwsQ0FBb0JYLDJCQUFwQixFQUFpRGUsdUJBQWpELEVBQTBFbkIsYUFBMUUsQ0FBcEM7O0FBRUFILDJEQUFtQkosUUFBUWlCLFNBQVIsQ0FBa0JZLDZCQUFsQixDQUFuQjs7QUFFQTdCLGtEQUFVQSxRQUFRaUIsU0FBUixDQUFrQixDQUFsQixFQUFxQlksNkJBQXJCLENBQVY7O0FBRUEsNENBQUlDLDBCQUEwQmpDLHdCQUF3QmtCLFdBQXhCLENBQW9DZixPQUFwQyxDQUE5Qjs7QUFFQUEsa0RBQVVJLGdCQUFWOztBQUVBRCwrQ0FBT2UsSUFBUCxDQUFZWSx1QkFBWjs7QUFFQTtBQUNEOztBQUVELHFDQUFPM0IsTUFBUDtBQUNEOzs7Ozs7QUFHSDRCLE9BQU9DLE9BQVAsR0FBaUJqQyxvQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3N0YXJ0T2ZDb21tZW50JyksXHJcbiAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50JyksXHJcbiAgICBTaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudENvbnRlbnQnKSxcclxuICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSkge1xyXG4gICAgdmFyIHRva2VucyA9IFtdLFxyXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICBjb21tZW50RGVwdGggPSBjb250ZXh0LmdldENvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgdmFyIHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCksXHJcbiAgICAgICAgICBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoY29tbWVudERlcHRoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5pbmNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICAgIHRva2Vucy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vucy5wb3AoKSxcclxuICAgICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5pbmNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5kZWNyZWFzZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2god2hpdGVzcGFjZVRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uLCB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcbiAgICAgIFxyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRDb250ZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICBcclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgXHJcbiAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IFNpZ25pZmljYW50Q29udGVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gICAgICBcclxuICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICB0b2tlbnMucHVzaChzaWduaWZpY2FudENvbnRlbnRUb2tlbik7XHJcblxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==