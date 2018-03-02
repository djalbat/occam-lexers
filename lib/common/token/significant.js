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

      var significantToken = _get(SignificantToken.prototype.__proto__ || Object.getPrototypeOf(SignificantToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);

      return significantToken;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(content, type) {
      return Token.fromContentAndType(SignificantToken, content, type, significant);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb24iLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxJQUFwQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7MEJBRUtDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFDdkMsVUFBSUEsZ0JBQWdCQyxTQUFwQixFQUErQjtBQUM3QkQsc0JBQWNELGFBQWQ7QUFDQUEsd0JBQWdCRCxLQUFoQjtBQUNBQSxnQkFBUUYsZ0JBQVI7QUFDRDs7QUFFRCxVQUFNTSw2SUFBK0JKLEtBQS9CLEVBQXNDQyxhQUF0QyxFQUFxREMsV0FBckQsQ0FBTjs7QUFFQSxhQUFPRSxnQkFBUDtBQUNEOzs7dUNBRXlCQyxPLEVBQVNDLEksRUFBTTtBQUFFLGFBQU9YLE1BQU1ZLGtCQUFOLENBQXlCVCxnQkFBekIsRUFBMkNPLE9BQTNDLEVBQW9EQyxJQUFwRCxFQUEwRFQsV0FBMUQsQ0FBUDtBQUFnRjs7O2dDQUV4R0csSyxFQUFPSyxPLEVBQVM7QUFDakMsVUFBSUEsWUFBWUYsU0FBaEIsRUFBMkI7QUFDekJFLGtCQUFVTCxLQUFWO0FBQ0FBLGdCQUFRRixnQkFBUjtBQUNEOztBQUVELFVBQU1NLG1CQUFtQlQsTUFBTWEsV0FBTixDQUFrQlIsS0FBbEIsRUFBeUJLLE9BQXpCLEVBQWtDUixXQUFsQyxDQUF6Qjs7QUFFQSxhQUFPTyxnQkFBUDtBQUNEOzs7c0NBRXdCSixLLEVBQU9LLE8sRUFBUztBQUN2QyxVQUFJQSxZQUFZRixTQUFoQixFQUEyQjtBQUN6QkUsa0JBQVVMLEtBQVY7QUFDQUEsZ0JBQVFGLGdCQUFSO0FBQ0Q7O0FBRUQsVUFBTU0sbUJBQW1CVCxNQUFNYyxpQkFBTixDQUF3QlQsS0FBeEIsRUFBK0JLLE9BQS9CLEVBQXdDUixXQUF4QyxDQUF6Qjs7QUFFQSxhQUFPTyxnQkFBUDtBQUNEOzs7MENBRTRCSixLLEVBQU9LLE8sRUFBUztBQUMzQyxVQUFJQSxZQUFZRixTQUFoQixFQUEyQjtBQUN6QkUsa0JBQVVMLEtBQVY7QUFDQUEsZ0JBQVFGLGdCQUFSO0FBQ0Q7O0FBRUQsVUFBTVksV0FBV2YsTUFBTWdCLHFCQUFOLENBQTRCWCxLQUE1QixFQUFtQ0ssT0FBbkMsQ0FBakI7O0FBRUEsYUFBT0ssUUFBUDtBQUNEOzs7O0VBcEQ0QmYsSzs7QUF1RC9CaUIsT0FBT0MsT0FBUCxHQUFpQmYsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoU2lnbmlmaWNhbnRUb2tlbiwgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIDtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=