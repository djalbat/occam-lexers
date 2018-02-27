'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var EndOfLineSignificantToken = function (_SignificantToken) {
  _inherits(EndOfLineSignificantToken, _SignificantToken);

  function EndOfLineSignificantToken() {
    _classCallCheck(this, EndOfLineSignificantToken);

    return _possibleConstructorReturn(this, (EndOfLineSignificantToken.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken)).apply(this, arguments));
  }

  _createClass(EndOfLineSignificantToken, [{
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = true;

      return endOfLineToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = '\n'; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfLineSignificantToken.prototype.__proto__ || Object.getPrototypeOf(EndOfLineSignificantToken.prototype), 'clone', this).call(this, EndOfLineSignificantToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SignificantToken.fromContent(EndOfLineSignificantToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SignificantToken.fromWithinContent(EndOfLineSignificantToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SignificantToken.positionWithinContent(EndOfLineSignificantToken, content);
    }
  }]);

  return EndOfLineSignificantToken;
}(SignificantToken);

var type = 'endOfLine',
    regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineSignificantToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfLineSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsImVuZE9mTGluZVRva2VuIiwiZmlsZVBhdGgiLCJodG1sIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLGdCQUFSLENBQXpCOztJQUVNQyx5Qjs7Ozs7Ozs7Ozs7dUNBQ2U7QUFDakIsVUFBTUMsaUJBQWlCLElBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7OzJCQUVNQyxRLEVBQVU7QUFDZixVQUFNQyxPQUFPLElBQWIsQ0FEZSxDQUNLOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSx5SkFBbUJMLHlCQUFuQixFQUE4Q0ksYUFBOUMsRUFBNkRDLFdBQTdEO0FBQTRFOzs7Z0NBRTdGQyxPLEVBQVM7QUFBRSxhQUFPUixpQkFBaUJTLFdBQWpCLENBQTZCUCx5QkFBN0IsRUFBd0RNLE9BQXhELENBQVA7QUFBMEU7OztzQ0FFL0VBLE8sRUFBUztBQUFFLGFBQU9SLGlCQUFpQlUsaUJBQWpCLENBQW1DUix5QkFBbkMsRUFBOERNLE9BQTlELENBQVA7QUFBZ0Y7OzswQ0FFdkZBLE8sRUFBUztBQUFFLGFBQU9SLGlCQUFpQlcscUJBQWpCLENBQXVDVCx5QkFBdkMsRUFBa0VNLE9BQWxFLENBQVA7QUFBb0Y7Ozs7RUFuQnRGUixnQjs7QUFzQnhDLElBQU1ZLE9BQU8sV0FBYjtBQUFBLElBQ01DLG9CQUFvQixZQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjYix5QkFBZCxFQUF5QztBQUN2Q1UsUUFBTUEsSUFEaUM7QUFFdkNDLHFCQUFtQkE7QUFGb0IsQ0FBekM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJmLHlCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgaHRtbCA9ICdcXG4nOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFxyXFxufFxccnxcXG4vO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xuIl19