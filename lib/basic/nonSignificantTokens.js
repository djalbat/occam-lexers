'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    WhitespaceToken = require('../common/token/whitespace');

var NonSignificantTokens = function () {
  function NonSignificantTokens() {
    _classCallCheck(this, NonSignificantTokens);
  }

  _createClass(NonSignificantTokens, null, [{
    key: 'pass',
    value: function pass(content, context, line) {
      var nonSignficantTokensOrSignificantContent = [],
          remainingContent;

      while (content !== '') {
        var contentLength = content.length;

        var whitespaceTokenPosition = WhitespaceToken.position(content);

        if (whitespaceTokenPosition === 0) {
          var whitespaceToken = WhitespaceToken.fromContent(content, line),
              whitespaceTokenLength = whitespaceToken.getLength();

          content = content.substring(whitespaceTokenLength);

          nonSignficantTokensOrSignificantContent.push(whitespaceToken);

          continue;
        } else {
          var significantContentLength = util.minBarMinusOne(whitespaceTokenPosition, contentLength),
              significantContent = content.substring(0, significantContentLength);

          content = content.substring(significantContentLength);

          nonSignficantTokensOrSignificantContent.push(significantContent);

          continue;
        }
      }

      return nonSignficantTokensOrSignificantContent;
    }
  }]);

  return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwibm9uU2lnbmZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50IiwicmVtYWluaW5nQ29udGVudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwiZnJvbUNvbnRlbnQiLCJ3aGl0ZXNwYWNlVG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwic2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoIiwibWluQmFyTWludXNPbmUiLCJzaWduaWZpY2FudENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLG9COzs7Ozs7O3lCQUNRQyxPLEVBQVNDLE8sRUFBU0MsSSxFQUFNO0FBQ2xDLFVBQUlDLDBDQUEwQyxFQUE5QztBQUFBLFVBQ0lDLGdCQURKOztBQUdBLGFBQU9KLFlBQVksRUFBbkIsRUFBdUI7QUFDckIsWUFBSUssZ0JBQWdCTCxRQUFRTSxNQUE1Qjs7QUFFQSxZQUFJQywwQkFBMEJULGdCQUFnQlUsUUFBaEIsQ0FBeUJSLE9BQXpCLENBQTlCOztBQUVBLFlBQUlPLDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQyxjQUFJRSxrQkFBa0JYLGdCQUFnQlksV0FBaEIsQ0FBNEJWLE9BQTVCLEVBQXFDRSxJQUFyQyxDQUF0QjtBQUFBLGNBQ0lTLHdCQUF3QkYsZ0JBQWdCRyxTQUFoQixFQUQ1Qjs7QUFHQVosb0JBQVVBLFFBQVFhLFNBQVIsQ0FBa0JGLHFCQUFsQixDQUFWOztBQUVBUixrREFBd0NXLElBQXhDLENBQTZDTCxlQUE3Qzs7QUFFQTtBQUNELFNBVEQsTUFTTztBQUNMLGNBQUlNLDJCQUEyQm5CLEtBQUtvQixjQUFMLENBQW9CVCx1QkFBcEIsRUFBNkNGLGFBQTdDLENBQS9CO0FBQUEsY0FDSVkscUJBQXFCakIsUUFBUWEsU0FBUixDQUFrQixDQUFsQixFQUFxQkUsd0JBQXJCLENBRHpCOztBQUdBZixvQkFBVUEsUUFBUWEsU0FBUixDQUFrQkUsd0JBQWxCLENBQVY7O0FBRUFaLGtEQUF3Q1csSUFBeEMsQ0FBNkNHLGtCQUE3Qzs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsYUFBT2QsdUNBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJwQixvQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSkge1xyXG4gICAgdmFyIG5vblNpZ25maWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudCA9IFtdLFxyXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICBcclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2god2hpdGVzcGFjZVRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudExlbmd0aCA9IHV0aWwubWluQmFyTWludXNPbmUod2hpdGVzcGFjZVRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBzaWduaWZpY2FudENvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LnB1c2goc2lnbmlmaWNhbnRDb250ZW50KTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIG5vblNpZ25maWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==