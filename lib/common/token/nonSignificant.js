'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var significant = false;

var NonSignificantToken = function (_Token) {
  _inherits(NonSignificantToken, _Token);

  function NonSignificantToken() {
    _classCallCheck(this, NonSignificantToken);

    return _possibleConstructorReturn(this, (NonSignificantToken.__proto__ || Object.getPrototypeOf(NonSignificantToken)).apply(this, arguments));
  }

  _createClass(NonSignificantToken, [{
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      return _get(NonSignificantToken.prototype.__proto__ || Object.getPrototypeOf(NonSignificantToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition, significant);
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type) {
      return Token.fromContentAndType(Class, content, type, significant);
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match) {
      return Token.fromMatch(Class, match, significant);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return Token.fromContent(Class, content, significant);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return Token.fromWithinContent(Class, content, significant);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return Token.positionWithinContent(Class, content);
    }
  }]);

  return NonSignificantToken;
}(Token);

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwidHlwZSIsImZyb21Db250ZW50QW5kVHlwZSIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDs7QUFFQSxJQUFNQyxjQUFjLEtBQXBCOztJQUVNQyxtQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSw2SUFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekMsRUFBc0RKLFdBQXREO0FBQXFFOzs7dUNBRXRGRSxLLEVBQU9HLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBT1IsTUFBTVMsa0JBQU4sQ0FBeUJMLEtBQXpCLEVBQWdDRyxPQUFoQyxFQUF5Q0MsSUFBekMsRUFBK0NOLFdBQS9DLENBQVA7QUFBcUU7Ozs4QkFFdEdFLEssRUFBT00sSyxFQUFPO0FBQUUsYUFBT1YsTUFBTVcsU0FBTixDQUFnQlAsS0FBaEIsRUFBdUJNLEtBQXZCLEVBQThCUixXQUE5QixDQUFQO0FBQW9EOzs7Z0NBRWxFRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLE1BQU1ZLFdBQU4sQ0FBa0JSLEtBQWxCLEVBQXlCRyxPQUF6QixFQUFrQ0wsV0FBbEMsQ0FBUDtBQUF3RDs7O3NDQUVwRUUsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPUCxNQUFNYSxpQkFBTixDQUF3QlQsS0FBeEIsRUFBK0JHLE9BQS9CLEVBQXdDTCxXQUF4QyxDQUFQO0FBQThEOzs7MENBRTVFRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLE1BQU1jLHFCQUFOLENBQTRCVixLQUE1QixFQUFtQ0csT0FBbkMsQ0FBUDtBQUFzRDs7OztFQVhyRVAsSzs7QUFjbENlLE9BQU9DLE9BQVAsR0FBaUJiLG1CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbU1hdGNoKENsYXNzLCBtYXRjaCkgeyByZXR1cm4gVG9rZW4uZnJvbU1hdGNoKENsYXNzLCBtYXRjaCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5mcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSA7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIl19