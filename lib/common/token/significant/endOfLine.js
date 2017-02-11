'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken);
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);

      return endOfLineToken;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = ''; ///

      return html;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImxpbmUiLCJjb250ZW50IiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tQ29udGVudEFuZExpbmUiLCJodG1sIiwidHlwZSIsInR5cGVzIiwiZW5kT2ZMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsZ0JBQVIsQ0FBdkI7O0lBRU1DLGM7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9KLGlCQUFpQkssS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJGLGFBQTdCLEVBQTRDQyxXQUE1QyxFQUF5REYsY0FBekQsQ0FBUDtBQUFrRjs7OzZCQUV0R0ksSSxFQUFNO0FBQ3BCLFVBQUlDLFVBQVUsRUFBZDtBQUFBLFVBQ0lDLGlCQUFpQlIsaUJBQWlCUyxrQkFBakIsQ0FBb0NGLE9BQXBDLEVBQTZDRCxJQUE3QyxFQUFtREosY0FBbkQsQ0FEckI7O0FBR0EsYUFBT00sY0FBUDtBQUNEOzs7b0NBRXNCRCxPLEVBQVM7QUFDOUIsVUFBSUcsT0FBTyxFQUFYLENBRDhCLENBQ2Q7O0FBRWhCLGFBQU9BLElBQVA7QUFDRDs7OztFQWQwQlYsZ0I7O0FBaUI3QkUsZUFBZVMsSUFBZixHQUFzQlgsaUJBQWlCWSxLQUFqQixDQUF1QkMsU0FBN0M7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRW5kT2ZMaW5lVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICB2YXIgY29udGVudCA9ICcnLFxuICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVuZE9mTGluZVRva2VuKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmU7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=