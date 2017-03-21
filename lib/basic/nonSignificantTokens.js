'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    WhitespaceToken = require('../common/token/significant/whitespace');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic3Vic3RyaW5nIiwicHVzaCIsInNpZ25pZmljYW50Q29udGVudExlbmd0aCIsIm1pbmltdW1CYXJNaW51c09uZSIsInNpZ25pZmljYW50Q29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3Q0FBUixDQUR4Qjs7SUFHTUUsb0I7Ozs7Ozs7eUJBQ1FDLE8sRUFBU0MsTyxFQUFTQyxJLEVBQU07QUFDbEMsVUFBTUMsMkNBQTJDLEVBQWpEOztBQUVBLGFBQU9ILFlBQVksRUFBbkIsRUFBdUI7QUFDckIsWUFBTUksZ0JBQWdCSixRQUFRSyxNQUE5Qjs7QUFFQSxZQUFNQywwQkFBMEJSLGdCQUFnQlMsUUFBaEIsQ0FBeUJQLE9BQXpCLENBQWhDOztBQUVBLFlBQUlNLDRCQUE0QixDQUFoQyxFQUFtQztBQUNqQyxjQUFNRSxrQkFBa0JWLGdCQUFnQlcsa0JBQWhCLENBQW1DVCxPQUFuQyxFQUE0Q0UsSUFBNUMsQ0FBeEI7QUFBQSxjQUNNUSx3QkFBd0JGLGdCQUFnQkcsU0FBaEIsRUFEOUI7O0FBR0FYLG9CQUFVQSxRQUFRWSxTQUFSLENBQWtCRixxQkFBbEIsQ0FBVjs7QUFFQVAsbURBQXlDVSxJQUF6QyxDQUE4Q0wsZUFBOUM7O0FBRUE7QUFDRCxTQVRELE1BU087QUFDTCxjQUFNTSwyQkFBMkJsQixLQUFLbUIsa0JBQUwsQ0FBd0JULHVCQUF4QixFQUFpREYsYUFBakQsQ0FBakM7QUFBQSxjQUNNWSxxQkFBcUJoQixRQUFRWSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRSx3QkFBckIsQ0FEM0I7O0FBR0FkLG9CQUFVQSxRQUFRWSxTQUFSLENBQWtCRSx3QkFBbEIsQ0FBVjs7QUFFQVgsbURBQXlDVSxJQUF6QyxDQUE4Q0csa0JBQTlDOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPYix3Q0FBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQm5CLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSkge1xyXG4gICAgY29uc3Qgbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyA9IFtdO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkxlbmd0aCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHdoaXRlc3BhY2VUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaCh3aGl0ZXNwYWNlVG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaWduaWZpY2FudENvbnRlbnRMZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZSh3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCksXHJcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==