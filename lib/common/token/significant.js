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

      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var significantToken = Token.fromContentAndType.apply(Token, [Class, content, type, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var significantToken = Token.fromContent.apply(Token, [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var significantToken = Token.fromWithinContent.apply(Token, [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var position = Token.positionWithinContent.apply(Token, [Class, content].concat(remainingArguments));

      return position;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInR5cGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb24iLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxJQUFwQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQ3ZDLFVBQUlBLGdCQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JELHNCQUFjRCxhQUFkO0FBQ0FBLHdCQUFnQkQsS0FBaEI7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBRUQsVUFBTUssNklBQStCSixLQUEvQixFQUFzQ0MsYUFBdEMsRUFBcURDLFdBQXJELEVBQWtFSixXQUFsRSxDQUFOOztBQUVBLGFBQU9NLGdCQUFQO0FBQ0Q7Ozt1Q0FFeUJKLEssRUFBT0ssTyxFQUFTQyxJLEVBQTZCO0FBQ3JFLFVBQUlBLFNBQVNILFNBQWIsRUFBd0I7QUFDdEJHLGVBQU9ELE9BQVA7QUFDQUEsa0JBQVVMLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBTG9FLHdDQUFwQlEsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFPckUsVUFBTUgsbUJBQW1CUixNQUFNWSxrQkFBTixlQUF5QlIsS0FBekIsRUFBZ0NLLE9BQWhDLEVBQXlDQyxJQUF6QyxFQUErQ1IsV0FBL0MsU0FBK0RTLGtCQUEvRCxFQUF6Qjs7QUFFQSxhQUFPSCxnQkFBUDtBQUNEOzs7Z0NBRWtCSixLLEVBQU9LLE8sRUFBZ0M7QUFDeEQsVUFBSUEsWUFBWUYsU0FBaEIsRUFBMkI7QUFDekJFLGtCQUFVTCxLQUFWO0FBQ0FBLGdCQUFRRCxnQkFBUjtBQUNEOztBQUp1RCx5Q0FBcEJRLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBTXhELFVBQU1ILG1CQUFtQlIsTUFBTWEsV0FBTixlQUFrQlQsS0FBbEIsRUFBeUJLLE9BQXpCLEVBQWtDUCxXQUFsQyxTQUFrRFMsa0JBQWxELEVBQXpCOztBQUVBLGFBQU9ILGdCQUFQO0FBQ0Q7OztzQ0FFd0JKLEssRUFBT0ssTyxFQUFnQztBQUM5RCxVQUFJQSxZQUFZRixTQUFoQixFQUEyQjtBQUN6QkUsa0JBQVVMLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSjZELHlDQUFwQlEsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNOUQsVUFBTUgsbUJBQW1CUixNQUFNYyxpQkFBTixlQUF3QlYsS0FBeEIsRUFBK0JLLE9BQS9CLEVBQXdDUCxXQUF4QyxTQUF3RFMsa0JBQXhELEVBQXpCOztBQUVBLGFBQU9ILGdCQUFQO0FBQ0Q7OzswQ0FFNEJKLEssRUFBT0ssTyxFQUFnQztBQUNsRSxVQUFJQSxZQUFZRixTQUFoQixFQUEyQjtBQUN6QkUsa0JBQVVMLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSmlFLHlDQUFwQlEsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNbEUsVUFBTUksV0FBV2YsTUFBTWdCLHFCQUFOLGVBQTRCWixLQUE1QixFQUFtQ0ssT0FBbkMsU0FBK0NFLGtCQUEvQyxFQUFqQjs7QUFFQSxhQUFPSSxRQUFQO0FBQ0Q7Ozs7RUF4RDRCZixLOztBQTJEL0JpQixPQUFPQyxPQUFQLEdBQWlCZixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19