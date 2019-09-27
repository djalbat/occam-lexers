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
      var _get2;

      if (endPosition === undefined) {
        endPosition = startPosition;
        startPosition = Class;
        Class = SignificantToken;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var significantToken = (_get2 = _get(SignificantToken.prototype.__proto__ || Object.getPrototypeOf(SignificantToken.prototype), 'clone', this)).call.apply(_get2, [this, Class, startPosition, endPosition, significant].concat(remainingArguments));

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

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 3] = arguments[_key2];
      }

      var significantToken = Token.fromContentAndType.apply(Token, [Class, content, type, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match) {
      if (match === undefined) {
        match = Class;
        Class = SignificantToken;
      }

      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var significantToken = Token.fromMatch.apply(Token, [Class, match, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
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

      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
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

      for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        remainingArguments[_key6 - 2] = arguments[_key6];
      }

      var position = Token.positionWithinContent.apply(Token, [Class, content].concat(remainingArguments));

      return position;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJtYXRjaCIsImZyb21NYXRjaCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbiIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDs7QUFFQSxJQUFNQyxjQUFjLElBQXBCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQW9DO0FBQUE7O0FBQzlELFVBQUlBLGdCQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JELHNCQUFjRCxhQUFkO0FBQ0FBLHdCQUFnQkQsS0FBaEI7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBTDZELHdDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFPOUQsVUFBTUMscUtBQStCTCxLQUEvQixFQUFzQ0MsYUFBdEMsRUFBcURDLFdBQXJELEVBQWtFSixXQUFsRSxTQUFrRk0sa0JBQWxGLEVBQU47O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O3VDQUV5QkwsSyxFQUFPTSxPLEVBQVNDLEksRUFBNkI7QUFDckUsVUFBSUEsU0FBU0osU0FBYixFQUF3QjtBQUN0QkksZUFBT0QsT0FBUDtBQUNBQSxrQkFBVU4sS0FBVjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFMb0UseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU9yRSxVQUFNQyxtQkFBbUJULE1BQU1ZLGtCQUFOLGVBQXlCUixLQUF6QixFQUFnQ00sT0FBaEMsRUFBeUNDLElBQXpDLEVBQStDVCxXQUEvQyxTQUErRE0sa0JBQS9ELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs4QkFFZ0JMLEssRUFBT1MsSyxFQUE4QjtBQUNwRCxVQUFJQSxVQUFVTixTQUFkLEVBQXlCO0FBQ3ZCTSxnQkFBUVQsS0FBUjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFKbUQseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU1wRCxVQUFNQyxtQkFBbUJULE1BQU1jLFNBQU4sZUFBZ0JWLEtBQWhCLEVBQXVCUyxLQUF2QixFQUE4QlgsV0FBOUIsU0FBOENNLGtCQUE5QyxFQUF6Qjs7QUFFQSxhQUFPQyxnQkFBUDtBQUNEOzs7Z0NBRWtCTCxLLEVBQU9NLE8sRUFBZ0M7QUFDeEQsVUFBSUEsWUFBWUgsU0FBaEIsRUFBMkI7QUFDekJHLGtCQUFVTixLQUFWO0FBQ0FBLGdCQUFRRCxnQkFBUjtBQUNEOztBQUp1RCx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBTXhELFVBQU1DLG1CQUFtQlQsTUFBTWUsV0FBTixlQUFrQlgsS0FBbEIsRUFBeUJNLE9BQXpCLEVBQWtDUixXQUFsQyxTQUFrRE0sa0JBQWxELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OztzQ0FFd0JMLEssRUFBT00sTyxFQUFnQztBQUM5RCxVQUFJQSxZQUFZSCxTQUFoQixFQUEyQjtBQUN6Qkcsa0JBQVVOLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSjZELHlDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNOUQsVUFBTUMsbUJBQW1CVCxNQUFNZ0IsaUJBQU4sZUFBd0JaLEtBQXhCLEVBQStCTSxPQUEvQixFQUF3Q1IsV0FBeEMsU0FBd0RNLGtCQUF4RCxFQUF6Qjs7QUFFQSxhQUFPQyxnQkFBUDtBQUNEOzs7MENBRTRCTCxLLEVBQU9NLE8sRUFBZ0M7QUFDbEUsVUFBSUEsWUFBWUgsU0FBaEIsRUFBMkI7QUFDekJHLGtCQUFVTixLQUFWO0FBQ0FBLGdCQUFRRCxnQkFBUjtBQUNEOztBQUppRSx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBTWxFLFVBQU1TLFdBQVdqQixNQUFNa0IscUJBQU4sZUFBNEJkLEtBQTVCLEVBQW1DTSxPQUFuQyxTQUErQ0Ysa0JBQS9DLEVBQWpCOztBQUVBLGFBQU9TLFFBQVA7QUFDRDs7OztFQW5FNEJqQixLOztBQXNFL0JtQixPQUFPQyxPQUFQLEdBQWlCakIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBzdXBlci5jbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXRjaChDbGFzcywgbWF0Y2gsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChtYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXRjaCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tTWF0Y2goQ2xhc3MsIG1hdGNoLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIDtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=