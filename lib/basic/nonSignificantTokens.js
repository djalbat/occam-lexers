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
          var whitespaceToken = WhitespaceToken.fromContent(content, line),
              whitespaceTokenLength = whitespaceToken.getLength();

          content = content.substring(whitespaceTokenLength);

          nonSignificantTokenOrSignificantContents.push(whitespaceToken);

          continue;
        } else {
          var significantContentLength = util.minBarMinusOne(whitespaceTokenPosition, contentLength),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwiZnJvbUNvbnRlbnQiLCJ3aGl0ZXNwYWNlVG9rZW5MZW5ndGgiLCJnZXRMZW5ndGgiLCJzdWJzdHJpbmciLCJwdXNoIiwic2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoIiwibWluQmFyTWludXNPbmUiLCJzaWduaWZpY2FudENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLG9COzs7Ozs7O3lCQUNRQyxPLEVBQVNDLE8sRUFBU0MsSSxFQUFNO0FBQ2xDLFVBQUlDLDJDQUEyQyxFQUEvQzs7QUFFQSxhQUFPSCxZQUFZLEVBQW5CLEVBQXVCO0FBQ3JCLFlBQUlJLGdCQUFnQkosUUFBUUssTUFBNUI7O0FBRUEsWUFBSUMsMEJBQTBCUixnQkFBZ0JTLFFBQWhCLENBQXlCUCxPQUF6QixDQUE5Qjs7QUFFQSxZQUFJTSw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakMsY0FBSUUsa0JBQWtCVixnQkFBZ0JXLFdBQWhCLENBQTRCVCxPQUE1QixFQUFxQ0UsSUFBckMsQ0FBdEI7QUFBQSxjQUNJUSx3QkFBd0JGLGdCQUFnQkcsU0FBaEIsRUFENUI7O0FBR0FYLG9CQUFVQSxRQUFRWSxTQUFSLENBQWtCRixxQkFBbEIsQ0FBVjs7QUFFQVAsbURBQXlDVSxJQUF6QyxDQUE4Q0wsZUFBOUM7O0FBRUE7QUFDRCxTQVRELE1BU087QUFDTCxjQUFJTSwyQkFBMkJsQixLQUFLbUIsY0FBTCxDQUFvQlQsdUJBQXBCLEVBQTZDRixhQUE3QyxDQUEvQjtBQUFBLGNBQ0lZLHFCQUFxQmhCLFFBQVFZLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJFLHdCQUFyQixDQUR6Qjs7QUFHQWQsb0JBQVVBLFFBQVFZLFNBQVIsQ0FBa0JFLHdCQUFsQixDQUFWOztBQUVBWCxtREFBeUNVLElBQXpDLENBQThDRyxrQkFBOUM7O0FBRUE7QUFDRDtBQUNGOztBQUVELGFBQU9iLHdDQUFQO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCbkIsb0JBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50VG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpIHtcclxuICAgIHZhciBub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzID0gW107XHJcbiAgICBcclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cy5wdXNoKHdoaXRlc3BhY2VUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRMZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==