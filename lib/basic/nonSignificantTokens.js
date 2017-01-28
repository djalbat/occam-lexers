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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cyIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsInBvc2l0aW9uIiwid2hpdGVzcGFjZVRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwid2hpdGVzcGFjZVRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic3Vic3RyaW5nIiwicHVzaCIsInNpZ25pZmljYW50Q29udGVudExlbmd0aCIsIm1pbkJhck1pbnVzT25lIiwic2lnbmlmaWNhbnRDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCOztJQUdNRSxvQjs7Ozs7Ozt5QkFDUUMsTyxFQUFTQyxPLEVBQVNDLEksRUFBTTtBQUNsQyxVQUFJQywyQ0FBMkMsRUFBL0M7O0FBRUEsYUFBT0gsWUFBWSxFQUFuQixFQUF1QjtBQUNyQixZQUFJSSxnQkFBZ0JKLFFBQVFLLE1BQTVCOztBQUVBLFlBQUlDLDBCQUEwQlIsZ0JBQWdCUyxRQUFoQixDQUF5QlAsT0FBekIsQ0FBOUI7O0FBRUEsWUFBSU0sNEJBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLGNBQUlFLGtCQUFrQlYsZ0JBQWdCVyxrQkFBaEIsQ0FBbUNULE9BQW5DLEVBQTRDRSxJQUE1QyxDQUF0QjtBQUFBLGNBQ0lRLHdCQUF3QkYsZ0JBQWdCRyxTQUFoQixFQUQ1Qjs7QUFHQVgsb0JBQVVBLFFBQVFZLFNBQVIsQ0FBa0JGLHFCQUFsQixDQUFWOztBQUVBUCxtREFBeUNVLElBQXpDLENBQThDTCxlQUE5Qzs7QUFFQTtBQUNELFNBVEQsTUFTTztBQUNMLGNBQUlNLDJCQUEyQmxCLEtBQUttQixjQUFMLENBQW9CVCx1QkFBcEIsRUFBNkNGLGFBQTdDLENBQS9CO0FBQUEsY0FDSVkscUJBQXFCaEIsUUFBUVksU0FBUixDQUFrQixDQUFsQixFQUFxQkUsd0JBQXJCLENBRHpCOztBQUdBZCxvQkFBVUEsUUFBUVksU0FBUixDQUFrQkUsd0JBQWxCLENBQVY7O0FBRUFYLG1EQUF5Q1UsSUFBekMsQ0FBOENHLGtCQUE5Qzs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsYUFBT2Isd0NBQVA7QUFDRDs7Ozs7O0FBR0hjLE9BQU9DLE9BQVAsR0FBaUJuQixvQkFBakIiLCJmaWxlIjoibm9uU2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSkge1xyXG4gICAgdmFyIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMgPSBbXTtcclxuICAgIFxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICB2YXIgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPSBXaGl0ZXNwYWNlVG9rZW4ucG9zaXRpb24oY29udGVudCk7XHJcblxyXG4gICAgICBpZiAod2hpdGVzcGFjZVRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuTGVuZ3RoID0gd2hpdGVzcGFjZVRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcod2hpdGVzcGFjZVRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cy5wdXNoKHdoaXRlc3BhY2VUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRMZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMucHVzaChzaWduaWZpY2FudENvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==