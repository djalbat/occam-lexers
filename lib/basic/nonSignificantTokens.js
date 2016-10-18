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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ub25TaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50Q29udGVudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmUiLCJub25TaWduZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsIndoaXRlc3BhY2VUb2tlblBvc2l0aW9uIiwicG9zaXRpb24iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJmcm9tQ29udGVudCIsIndoaXRlc3BhY2VUb2tlbkxlbmd0aCIsImdldExlbmd0aCIsInN1YnN0cmluZyIsInB1c2giLCJzaWduaWZpY2FudENvbnRlbnRMZW5ndGgiLCJtaW5CYXJNaW51c09uZSIsInNpZ25pZmljYW50Q29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLDBCQUEwQkQsUUFBUSxvQ0FBUixDQUQ5QjtBQUFBLElBRUlFLGtCQUFrQkYsUUFBUSw0QkFBUixDQUZ0Qjs7SUFJTUcsb0I7Ozs7Ozs7eUJBQ1FDLE8sRUFBU0MsTyxFQUFTQyxJLEVBQU07QUFDbEMsVUFBSUMsMENBQTBDLEVBQTlDO0FBQUEsVUFDSUMsZ0JBREo7O0FBR0EsYUFBT0osWUFBWSxFQUFuQixFQUF1QjtBQUNyQixZQUFJSyxnQkFBZ0JMLFFBQVFNLE1BQTVCOztBQUVBLFlBQUlDLDBCQUEwQlQsZ0JBQWdCVSxRQUFoQixDQUF5QlIsT0FBekIsQ0FBOUI7O0FBRUEsWUFBSU8sNEJBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLGNBQUlFLGtCQUFrQlgsZ0JBQWdCWSxXQUFoQixDQUE0QlYsT0FBNUIsRUFBcUNFLElBQXJDLENBQXRCO0FBQUEsY0FDSVMsd0JBQXdCRixnQkFBZ0JHLFNBQWhCLEVBRDVCOztBQUdBWixvQkFBVUEsUUFBUWEsU0FBUixDQUFrQkYscUJBQWxCLENBQVY7O0FBRUFSLGtEQUF3Q1csSUFBeEMsQ0FBNkNMLGVBQTdDOztBQUVBO0FBQ0QsU0FURCxNQVNPO0FBQ0wsY0FBSU0sMkJBQTJCcEIsS0FBS3FCLGNBQUwsQ0FBb0JULHVCQUFwQixFQUE2Q0YsYUFBN0MsQ0FBL0I7QUFBQSxjQUNJWSxxQkFBcUJqQixRQUFRYSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRSx3QkFBckIsQ0FEekI7O0FBR0FmLG9CQUFVQSxRQUFRYSxTQUFSLENBQWtCRSx3QkFBbEIsQ0FBVjs7QUFFQVosa0RBQXdDVyxJQUF4QyxDQUE2Q0csa0JBQTdDOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPZCx1Q0FBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQnBCLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgU2lnbmlmaWNhbnRDb250ZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRDb250ZW50JyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpIHtcclxuICAgIHZhciBub25TaWduZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQgPSBbXSxcclxuICAgICAgICByZW1haW5pbmdDb250ZW50O1xyXG4gICAgXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9IFdoaXRlc3BhY2VUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgIGlmICh3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkxlbmd0aCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHdoaXRlc3BhY2VUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25maWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKHdoaXRlc3BhY2VUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudENvbnRlbnRMZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uLCBjb250ZW50TGVuZ3RoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgc2lnbmlmaWNhbnRDb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHNpZ25pZmljYW50Q29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIG5vblNpZ25maWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudC5wdXNoKHNpZ25pZmljYW50Q29udGVudCk7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBub25TaWduZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=