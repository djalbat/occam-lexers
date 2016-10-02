'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
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
                      remainingContent;

                  while (content !== '') {
                        var contentLength = content.length;

                        var whitespaceTokenPosition = WhitespaceToken.position(content);

                        if (whitespaceTokenPosition === 0) {
                              var whitespaceToken = WhitespaceToken.fromContent(content, line),
                                  whitespaceTokenLength = whitespaceToken.getLength();

                              content = content.substring(whitespaceTokenLength);

                              tokens.push(whitespaceToken);

                              continue;
                        }

                        var significantContentTokenLength = util.minBarMinusOne(whitespaceTokenPosition, contentLength);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50Q29udGVudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmUiLCJ0b2tlbnMiLCJyZW1haW5pbmdDb250ZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJmcm9tQ29udGVudCIsIndoaXRlc3BhY2VUb2tlbkxlbmd0aCIsImdldExlbmd0aCIsInN1YnN0cmluZyIsInB1c2giLCJzaWduaWZpY2FudENvbnRlbnRUb2tlbkxlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwic2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQywwQkFBMEJELFFBQVEsb0NBQVIsQ0FEOUI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsNEJBQVIsQ0FGdEI7O0lBSU1HLG9COzs7Ozs7O2lDQUNRQyxPLEVBQVNDLE8sRUFBU0MsSSxFQUFNO0FBQ2xDLHNCQUFJQyxTQUFTLEVBQWI7QUFBQSxzQkFDSUMsZ0JBREo7O0FBR0EseUJBQU9KLFlBQVksRUFBbkIsRUFBdUI7QUFDckIsNEJBQUlLLGdCQUFnQkwsUUFBUU0sTUFBNUI7O0FBRUEsNEJBQUlDLDBCQUEwQlQsZ0JBQWdCVSxRQUFoQixDQUF5QlIsT0FBekIsQ0FBOUI7O0FBRUEsNEJBQUlPLDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQyxrQ0FBSUUsa0JBQWtCWCxnQkFBZ0JZLFdBQWhCLENBQTRCVixPQUE1QixFQUFxQ0UsSUFBckMsQ0FBdEI7QUFBQSxrQ0FDSVMsd0JBQXdCRixnQkFBZ0JHLFNBQWhCLEVBRDVCOztBQUdBWix3Q0FBVUEsUUFBUWEsU0FBUixDQUFrQkYscUJBQWxCLENBQVY7O0FBRUFSLHFDQUFPVyxJQUFQLENBQVlMLGVBQVo7O0FBRUE7QUFDRDs7QUFFRCw0QkFBSU0sZ0NBQWdDcEIsS0FBS3FCLGNBQUwsQ0FBb0JULHVCQUFwQixFQUE2Q0YsYUFBN0MsQ0FBcEM7O0FBRUFELDJDQUFtQkosUUFBUWEsU0FBUixDQUFrQkUsNkJBQWxCLENBQW5COztBQUVBZixrQ0FBVUEsUUFBUWEsU0FBUixDQUFrQixDQUFsQixFQUFxQkUsNkJBQXJCLENBQVY7O0FBRUEsNEJBQUlFLDBCQUEwQnBCLHdCQUF3QmEsV0FBeEIsQ0FBb0NWLE9BQXBDLENBQTlCOztBQUVBQSxrQ0FBVUksZ0JBQVY7O0FBRUFELCtCQUFPVyxJQUFQLENBQVlHLHVCQUFaOztBQUVBO0FBQ0Q7O0FBRUQseUJBQU9kLE1BQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJwQixvQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudDtcclxuICAgIFxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICB2YXIgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5MZW5ndGggPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh3aGl0ZXNwYWNlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5CYXJNaW51c09uZSh3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRDb250ZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHNpZ25pZmljYW50Q29udGVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRUb2tlbiA9IFNpZ25pZmljYW50Q29udGVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcblxyXG4gICAgICB0b2tlbnMucHVzaChzaWduaWZpY2FudENvbnRlbnRUb2tlbik7XHJcblxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==