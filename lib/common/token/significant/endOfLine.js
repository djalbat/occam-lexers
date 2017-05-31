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
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = '';

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken);
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = 'endOfLine';

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImh0bWwiLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSxnQkFBUixDQUF6Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0osaUJBQWlCSyxLQUFqQixDQUF1QixJQUF2QixFQUE2QkYsYUFBN0IsRUFBNENDLFdBQTVDLEVBQXlERixjQUF6RCxDQUFQO0FBQWtGOzs7OEJBSTVHO0FBQ1IsVUFBTUksT0FBTyxFQUFiOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7OzJDQU42QkMsTyxFQUFTQyxJLEVBQU1DLEksRUFBTTtBQUFFLGFBQU9ULGlCQUFpQlUsc0JBQWpCLENBQXdDSCxPQUF4QyxFQUFpREMsSUFBakQsRUFBdURDLElBQXZELEVBQTZEUCxjQUE3RCxDQUFQO0FBQXNGOzs7NkJBUTNITSxJLEVBQU07QUFDcEIsVUFBTUQsVUFBVSxFQUFoQjtBQUFBLFVBQ01FLE9BQU9QLGVBQWVPLElBRDVCO0FBQUEsVUFFTUUsaUJBQWlCVCxlQUFlUSxzQkFBZixDQUFzQ0gsT0FBdEMsRUFBK0NDLElBQS9DLEVBQXFEQyxJQUFyRCxDQUZ2Qjs7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFqQjBCWCxnQjs7QUFvQjdCRSxlQUFlTyxJQUFmLEdBQXNCLFdBQXRCOztBQUVBRyxPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRW5kT2ZMaW5lVG9rZW4pOyB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgRW5kT2ZMaW5lVG9rZW4pOyB9XG4gIFxuICBnZXRIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJztcbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lKSB7XG4gICAgY29uc3QgY29udGVudCA9ICcnLFxuICAgICAgICAgIHR5cGUgPSBFbmRPZkxpbmVUb2tlbi50eXBlLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cbn1cblxuRW5kT2ZMaW5lVG9rZW4udHlwZSA9ICdlbmRPZkxpbmUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19