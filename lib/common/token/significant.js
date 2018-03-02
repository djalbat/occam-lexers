'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var significant = true;

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken() {
    _classCallCheck(this, SignificantToken);

    return _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).apply(this, arguments));
  }

  _createClass(SignificantToken, [{
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
    }
  }, {
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      if (endPosition === undefined) {
        endPosition = startPosition;
        startPosition = Class;
        Class = SignificantToken;
      }

      var significantToken = _get(SignificantToken.prototype.__proto__ || Object.getPrototypeOf(SignificantToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition, significant);

      return significantToken;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type) {
      if (type === undefined) {
        type = content;
        content = Class;
        Class = SignificantToken;
      }

      var significantToken = Token.fromContentAndType(Class, content, type, significant);

      return significantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var significantToken = Token.fromContent(Class, content, significant);

      return significantToken;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var significantToken = Token.fromWithinContent(Class, content, significant);

      return significantToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var position = Token.positionWithinContent(Class, content);

      return position;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb24iLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxJQUFwQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7MEJBRUtDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFDdkMsVUFBSUEsZ0JBQWdCQyxTQUFwQixFQUErQjtBQUM3QkQsc0JBQWNELGFBQWQ7QUFDQUEsd0JBQWdCRCxLQUFoQjtBQUNBQSxnQkFBUUYsZ0JBQVI7QUFDRDs7QUFFRCxVQUFNTSw2SUFBK0JKLEtBQS9CLEVBQXNDQyxhQUF0QyxFQUFxREMsV0FBckQsRUFBa0VMLFdBQWxFLENBQU47O0FBRUEsYUFBT08sZ0JBQVA7QUFDRDs7O3VDQUV5QkosSyxFQUFPSyxPLEVBQVNDLEksRUFBTTtBQUM5QyxVQUFJQSxTQUFTSCxTQUFiLEVBQXdCO0FBQ3RCRyxlQUFPRCxPQUFQO0FBQ0FBLGtCQUFVTCxLQUFWO0FBQ0FBLGdCQUFRRixnQkFBUjtBQUNEOztBQUVELFVBQU1NLG1CQUFtQlQsTUFBTVksa0JBQU4sQ0FBeUJQLEtBQXpCLEVBQWdDSyxPQUFoQyxFQUF5Q0MsSUFBekMsRUFBK0NULFdBQS9DLENBQXpCOztBQUVBLGFBQU9PLGdCQUFQO0FBQ0Q7OztnQ0FFa0JKLEssRUFBT0ssTyxFQUFTO0FBQ2pDLFVBQUlBLFlBQVlGLFNBQWhCLEVBQTJCO0FBQ3pCRSxrQkFBVUwsS0FBVjtBQUNBQSxnQkFBUUYsZ0JBQVI7QUFDRDs7QUFFRCxVQUFNTSxtQkFBbUJULE1BQU1hLFdBQU4sQ0FBa0JSLEtBQWxCLEVBQXlCSyxPQUF6QixFQUFrQ1IsV0FBbEMsQ0FBekI7O0FBRUEsYUFBT08sZ0JBQVA7QUFDRDs7O3NDQUV3QkosSyxFQUFPSyxPLEVBQVM7QUFDdkMsVUFBSUEsWUFBWUYsU0FBaEIsRUFBMkI7QUFDekJFLGtCQUFVTCxLQUFWO0FBQ0FBLGdCQUFRRixnQkFBUjtBQUNEOztBQUVELFVBQU1NLG1CQUFtQlQsTUFBTWMsaUJBQU4sQ0FBd0JULEtBQXhCLEVBQStCSyxPQUEvQixFQUF3Q1IsV0FBeEMsQ0FBekI7O0FBRUEsYUFBT08sZ0JBQVA7QUFDRDs7OzBDQUU0QkosSyxFQUFPSyxPLEVBQVM7QUFDM0MsVUFBSUEsWUFBWUYsU0FBaEIsRUFBMkI7QUFDekJFLGtCQUFVTCxLQUFWO0FBQ0FBLGdCQUFRRixnQkFBUjtBQUNEOztBQUVELFVBQU1ZLFdBQVdmLE1BQU1nQixxQkFBTixDQUE0QlgsS0FBNUIsRUFBbUNLLE9BQW5DLENBQWpCOztBQUVBLGFBQU9LLFFBQVA7QUFDRDs7OztFQTlENEJmLEs7O0FBaUUvQmlCLE9BQU9DLE9BQVAsR0FBaUJmLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IHRydWU7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xuICAgIGlmIChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICBzdGFydFBvc2l0aW9uID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==