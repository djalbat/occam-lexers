'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var EndOfLineToken = function (_Token) {
  _inherits(EndOfLineToken, _Token);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, null, [{
    key: 'fromNothing',
    value: function fromNothing(line) {
      var str = '',
          type = 'EOL',
          endOfLineToken = new EndOfLineToken(str, type, line);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(Token);

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsaW5lIiwic3RyIiwidHlwZSIsImVuZE9mTGluZVRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxJLEVBQU07QUFDdkIsVUFBSUMsTUFBTSxFQUFWO0FBQUEsVUFDSUMsT0FBTyxLQURYO0FBQUEsVUFFSUMsaUJBQWlCLElBQUlKLGNBQUosQ0FBbUJFLEdBQW5CLEVBQXdCQyxJQUF4QixFQUE4QkYsSUFBOUIsQ0FGckI7O0FBSUEsYUFBT0csY0FBUDtBQUNEOzs7O0VBUDBCTixLOztBQVU3Qk8sT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4nKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhsaW5lKSB7XG4gICAgdmFyIHN0ciA9ICcnLFxuICAgICAgICB0eXBlID0gJ0VPTCcsXG4gICAgICAgIGVuZE9mTGluZVRva2VuID0gbmV3IEVuZE9mTGluZVRva2VuKHN0ciwgdHlwZSwgbGluZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=