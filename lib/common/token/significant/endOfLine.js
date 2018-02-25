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
    key: 'getLength',
    value: function getLength() {
      var length = 0; ///

      return length;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = ''; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return EndOfLineToken.clone(this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone(endOfLineToken) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : endOfLineToken.getLength();

      var clonedEndOfLineToken = null;

      if (startPosition !== endPosition) {
        var content = null,
            line = endOfLineToken.getLine(),
            _type = endOfLineToken.getType(),
            _clonedEndOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, _type);
      }

      return clonedEndOfLineToken;
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = null,
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var innerHTML = null,
          ///
      endOfLineToken = new EndOfLineToken(content, line, type, innerHTML);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZMaW5lVG9rZW4iLCJsZW5ndGgiLCJmaWxlUGF0aCIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImVuZE9mTGluZVRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkRW5kT2ZMaW5lVG9rZW4iLCJjb250ZW50IiwibGluZSIsImdldExpbmUiLCJ0eXBlIiwiZ2V0VHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSxnQkFBUixDQUF6Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFNQyxTQUFTLENBQWYsQ0FEVSxDQUNROztBQUVsQixhQUFPQSxNQUFQO0FBQ0Q7OzsyQkFFTUMsUSxFQUFVO0FBQ2YsVUFBTUMsT0FBTyxFQUFiLENBRGUsQ0FDRzs7QUFFbEIsYUFBT0EsSUFBUDtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT0wsZUFBZU0sS0FBZixDQUFxQixJQUFyQixFQUEyQkYsYUFBM0IsRUFBMENDLFdBQTFDLENBQVA7QUFBZ0U7OzswQkFFdkZFLGMsRUFBNkU7QUFBQSxVQUE3REgsYUFBNkQsdUVBQTdDLENBQTZDO0FBQUEsVUFBMUNDLFdBQTBDLHVFQUE1QkUsZUFBZUMsU0FBZixFQUE0Qjs7QUFDeEYsVUFBSUMsdUJBQXVCLElBQTNCOztBQUVBLFVBQUlMLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBTUssVUFBVSxJQUFoQjtBQUFBLFlBQ01DLE9BQU9KLGVBQWVLLE9BQWYsRUFEYjtBQUFBLFlBRU1DLFFBQU9OLGVBQWVPLE9BQWYsRUFGYjtBQUFBLFlBSUFMLHdCQUF1QlQsZUFBZWUsc0JBQWYsQ0FBc0NMLE9BQXRDLEVBQStDQyxJQUEvQyxFQUFxREUsS0FBckQsQ0FKdkI7QUFLRDs7QUFFRCxhQUFPSixvQkFBUDtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNkLG9CQUFVLElBQVY7QUFBQSxVQUNFRSxJQURGLEdBQ1diLGNBRFgsQ0FDRWEsSUFERjtBQUFBLFVBRUFOLGNBRkEsR0FFaUJQLGVBQWVlLHNCQUFmLENBQXNDTCxPQUF0QyxFQUErQ0MsSUFBL0MsRUFBcURFLElBQXJELENBRmpCOztBQUlOLGFBQU9OLGNBQVA7QUFDRDs7OzJDQUU2QkcsTyxFQUFTQyxJLEVBQU1FLEksRUFBTTtBQUNqRCxVQUFNRyxZQUFZLElBQWxCO0FBQUEsVUFBd0I7QUFDbEJULHVCQUFpQixJQUFJUCxjQUFKLENBQW1CVSxPQUFuQixFQUE0QkMsSUFBNUIsRUFBa0NFLElBQWxDLEVBQXdDRyxTQUF4QyxDQUR2Qjs7QUFHQSxhQUFPVCxjQUFQO0FBQ0Q7Ozs7RUExQzBCVCxnQjs7QUE2QzdCLElBQU1lLE9BQU8sV0FBYjs7QUFFQUksT0FBT0MsTUFBUCxDQUFjbEIsY0FBZCxFQUE4QjtBQUM1QmEsUUFBTUE7QUFEc0IsQ0FBOUI7O0FBSUFNLE9BQU9DLE9BQVAsR0FBaUJwQixjQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gMDsgLy8vXG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gRW5kT2ZMaW5lVG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKGVuZE9mTGluZVRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSBlbmRPZkxpbmVUb2tlbi5nZXRMZW5ndGgoKSkge1xuICAgIGxldCBjbG9uZWRFbmRPZkxpbmVUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBudWxsLFxuICAgICAgICAgICAgbGluZSA9IGVuZE9mTGluZVRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBlbmRPZkxpbmVUb2tlbi5nZXRUeXBlKCksXG5cbiAgICAgIGNsb25lZEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkRW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBudWxsLCAvLy9cbiAgICAgICAgICB7IHR5cGUgfSA9IEVuZE9mTGluZVRva2VuLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gbnVsbCwgLy8vXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBuZXcgRW5kT2ZMaW5lVG9rZW4oY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ2VuZE9mTGluZSc7XG5cbk9iamVjdC5hc3NpZ24oRW5kT2ZMaW5lVG9rZW4sIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iXX0=