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
      return SignificantToken.clone(EndOfLineToken, this, startPosition, endPosition);
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = ''; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(EndOfLineToken, content, line, type);
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = null,
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

var type = 'endOfLine';

Object.assign(EndOfLineToken, {
  type: type
});

module.exports = EndOfLineToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImZpbGVQYXRoIiwiaHRtbCIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLGdCQUFSLENBQXpCOztJQUVNQyxjOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPSixpQkFBaUJLLEtBQWpCLENBQXVCSCxjQUF2QixFQUF1QyxJQUF2QyxFQUE2Q0MsYUFBN0MsRUFBNERDLFdBQTVELENBQVA7QUFBa0Y7OzsyQkFJL0dFLFEsRUFBVTtBQUNmLFVBQU1DLE9BQU8sRUFBYixDQURlLENBQ0c7O0FBRWxCLGFBQU9BLElBQVA7QUFDRDs7OzJDQU42QkMsTyxFQUFTQyxJLEVBQU1DLEksRUFBTTtBQUFFLGFBQU9WLGlCQUFpQlcsc0JBQWpCLENBQXdDVCxjQUF4QyxFQUF3RE0sT0FBeEQsRUFBaUVDLElBQWpFLEVBQXVFQyxJQUF2RSxDQUFQO0FBQXNGOzs7NkJBUTNIRCxJLEVBQU07QUFDZCxvQkFBVSxJQUFWO0FBQUEsVUFDRUMsSUFERixHQUNXUixjQURYLENBQ0VRLElBREY7QUFBQSxVQUVBRSxjQUZBLEdBRWlCVixlQUFlUyxzQkFBZixDQUFzQ0gsT0FBdEMsRUFBK0NDLElBQS9DLEVBQXFEQyxJQUFyRCxDQUZqQjs7QUFJTixhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFqQjBCWixnQjs7QUFvQjdCLElBQU1VLE9BQU8sV0FBYjs7QUFFQUcsT0FBT0MsTUFBUCxDQUFjWixjQUFkLEVBQThCO0FBQzVCUSxRQUFNQTtBQURzQixDQUE5Qjs7QUFJQUssT0FBT0MsT0FBUCxHQUFpQmQsY0FBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoRW5kT2ZMaW5lVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKEVuZE9mTGluZVRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuICBcbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBudWxsLCAvLy9cbiAgICAgICAgICB7IHR5cGUgfSA9IEVuZE9mTGluZVRva2VuLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdlbmRPZkxpbmUnO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTGluZVRva2VuLCB7XG4gIHR5cGU6IHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIl19