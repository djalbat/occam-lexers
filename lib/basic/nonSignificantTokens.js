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
      var nonSignificantTokenOrSignificantContents = [];

      while (content !== '') {
        var contentLength = content.length;

        var whitespaceTokenPosition = WhitespaceToken.position(content);

        if (whitespaceTokenPosition === 0) {
          var whitespaceToken = WhitespaceToken.fromContentAndLine(content, line),
              whitespaceTokenLength = whitespaceToken.getLength();

          content = content.substring(whitespaceTokenLength);

          nonSignificantTokenOrSignificantContents.push(whitespaceToken);

          continue;
        } else {
          var significantContentLength = util.minimumBarMinusOne(whitespaceTokenPosition, contentLength),
              significantContent = content.substring(0, significantContentLength);

          content = content.substring(significantContentLength);

          nonSignificantTokenOrSignificantContents.push(significantContent);

          continue;
        }
      }

      return nonSignificantTokenOrSignificantContents;
    }
  }]);

  return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic3Vic3RyaW5nIiwicHVzaCIsInNpZ25pZmljYW50Q29udGVudExlbmd0aCIsIm1pbmltdW1CYXJNaW51c09uZSIsInNpZ25pZmljYW50Q29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsb0I7Ozs7Ozs7eUJBQ1FDLE8sRUFBU0MsTyxFQUFTQyxJLEVBQU07QUFDbEMsVUFBSUMsMkNBQTJDLEVBQS9DOztBQUVBLGFBQU9ILFlBQVksRUFBbkIsRUFBdUI7QUFDckIsWUFBSUksZ0JBQWdCSixRQUFRSyxNQUE1Qjs7QUFFQSxZQUFJQywwQkFBMEJSLGdCQUFnQlMsUUFBaEIsQ0FBeUJQLE9BQXpCLENBQTlCOztBQUVBLFlBQUlNLDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQyxjQUFJRSxrQkFBa0JWLGdCQUFnQlcsa0JBQWhCLENBQW1DVCxPQUFuQyxFQUE0Q0UsSUFBNUMsQ0FBdEI7QUFBQSxjQUNJUSx3QkFBd0JGLGdCQUFnQkcsU0FBaEIsRUFENUI7O0FBR0FYLG9CQUFVQSxRQUFRWSxTQUFSLENBQWtCRixxQkFBbEIsQ0FBVjs7QUFFQVAsbURBQXlDVSxJQUF6QyxDQUE4Q0wsZUFBOUM7O0FBRUE7QUFDRCxTQVRELE1BU087QUFDTCxjQUFJTSwyQkFBMkJsQixLQUFLbUIsa0JBQUwsQ0FBd0JULHVCQUF4QixFQUFpREYsYUFBakQsQ0FBL0I7QUFBQSxjQUNJWSxxQkFBcUJoQixRQUFRWSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRSx3QkFBckIsQ0FEekI7O0FBR0FkLG9CQUFVQSxRQUFRWSxTQUFSLENBQWtCRSx3QkFBbEIsQ0FBVjs7QUFFQVgsbURBQXlDVSxJQUF6QyxDQUE4Q0csa0JBQTlDOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPYix3Q0FBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQm5CLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyA9IFtdO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9IFdoaXRlc3BhY2VUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmICh3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5MZW5ndGggPSB3aGl0ZXNwYWNlVG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh3aGl0ZXNwYWNlVG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICBub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzLnB1c2god2hpdGVzcGFjZVRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHNpZ25pZmljYW50Q29udGVudExlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==