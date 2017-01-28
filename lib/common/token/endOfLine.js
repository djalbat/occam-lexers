'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('./significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, null, [{
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = '';

      return html;
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          endOfLineToken = SignificantToken.fromContentAndLine(content, line, EndOfLineToken);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = SignificantToken.types.endOfLine;

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJjb250ZW50IiwiaHRtbCIsImxpbmUiLCJlbmRPZkxpbmVUb2tlbiIsImZyb21Db250ZW50QW5kTGluZSIsInR5cGUiLCJ0eXBlcyIsImVuZE9mTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGVBQVIsQ0FBdkI7O0lBRU1DLGM7Ozs7Ozs7Ozs7O29DQUNtQkMsTyxFQUFTO0FBQzlCLFVBQUlDLE9BQU8sRUFBWDs7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLFVBQUlGLFVBQVUsRUFBZDtBQUFBLFVBQ0lHLGlCQUFpQk4saUJBQWlCTyxrQkFBakIsQ0FBb0NKLE9BQXBDLEVBQTZDRSxJQUE3QyxFQUFtREgsY0FBbkQsQ0FEckI7O0FBR0EsYUFBT0ksY0FBUDtBQUNEOzs7O0VBWjBCTixnQjs7QUFlN0JFLGVBQWVNLElBQWYsR0FBc0JSLGlCQUFpQlMsS0FBakIsQ0FBdUJDLFNBQTdDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSkge1xuICAgIHZhciBjb250ZW50ID0gJycsXG4gICAgICAgIGVuZE9mTGluZVRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgRW5kT2ZMaW5lVG9rZW4pO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmU7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=