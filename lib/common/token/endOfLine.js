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
    key: 'fromNothing',
    value: function fromNothing(line) {
      var str = '',
          type = EndOfLineToken.type,
          endOfLineToken = new EndOfLineToken(str, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = 'end_of_line';

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsaW5lIiwic3RyIiwidHlwZSIsImVuZE9mTGluZVRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsZUFBUixDQUF2Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7Z0NBQ2VDLEksRUFBTTtBQUN2QixVQUFJQyxNQUFNLEVBQVY7QUFBQSxVQUNJQyxPQUFPSCxlQUFlRyxJQUQxQjtBQUFBLFVBRUlDLGlCQUFpQixJQUFJSixjQUFKLENBQW1CRSxHQUFuQixFQUF3QkQsSUFBeEIsRUFBOEJFLElBQTlCLENBRnJCOztBQUlBLGFBQU9DLGNBQVA7QUFDRDs7OztFQVAwQk4sZ0I7O0FBVTdCRSxlQUFlRyxJQUFmLEdBQXNCLGFBQXRCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobGluZSkge1xuICAgIHZhciBzdHIgPSAnJyxcbiAgICAgICAgdHlwZSA9IEVuZE9mTGluZVRva2VuLnR5cGUsXG4gICAgICAgIGVuZE9mTGluZVRva2VuID0gbmV3IEVuZE9mTGluZVRva2VuKHN0ciwgbGluZSwgdHlwZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG59XG5cbkVuZE9mTGluZVRva2VuLnR5cGUgPSAnZW5kX29mX2xpbmUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19