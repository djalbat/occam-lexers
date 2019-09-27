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
    key: 'match',
    value: function match(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var significantToken = Token.match.apply(Token, [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match) {
      if (match === undefined) {
        match = Class;
        Class = SignificantToken;
      }

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
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

      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
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

      for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        remainingArguments[_key6 - 2] = arguments[_key6];
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

      for (var _len7 = arguments.length, remainingArguments = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
        remainingArguments[_key7 - 2] = arguments[_key7];
      }

      var position = Token.positionWithinContent.apply(Token, [Class, content].concat(remainingArguments));

      return position;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJtYXRjaCIsImZyb21NYXRjaCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbiIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDs7QUFFQSxJQUFNQyxjQUFjLElBQXBCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQW9DO0FBQUE7O0FBQzlELFVBQUlBLGdCQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JELHNCQUFjRCxhQUFkO0FBQ0FBLHdCQUFnQkQsS0FBaEI7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBTDZELHdDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFPOUQsVUFBTUMscUtBQStCTCxLQUEvQixFQUFzQ0MsYUFBdEMsRUFBcURDLFdBQXJELEVBQWtFSixXQUFsRSxTQUFrRk0sa0JBQWxGLEVBQU47O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O3VDQUV5QkwsSyxFQUFPTSxPLEVBQVNDLEksRUFBNkI7QUFDckUsVUFBSUEsU0FBU0osU0FBYixFQUF3QjtBQUN0QkksZUFBT0QsT0FBUDtBQUNBQSxrQkFBVU4sS0FBVjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFMb0UseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU9yRSxVQUFNQyxtQkFBbUJULE1BQU1ZLGtCQUFOLGVBQXlCUixLQUF6QixFQUFnQ00sT0FBaEMsRUFBeUNDLElBQXpDLEVBQStDVCxXQUEvQyxTQUErRE0sa0JBQS9ELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OzswQkFFWUwsSyxFQUFPTSxPLEVBQWdDO0FBQ2xELFVBQUlBLFlBQVlILFNBQWhCLEVBQTJCO0FBQ3pCRyxrQkFBVU4sS0FBVjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFKaUQseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU1sRCxVQUFNQyxtQkFBbUJULE1BQU1hLEtBQU4sZUFBWVQsS0FBWixFQUFtQk0sT0FBbkIsRUFBNEJSLFdBQTVCLFNBQTRDTSxrQkFBNUMsRUFBekI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7OzhCQUVnQkwsSyxFQUFPUyxLLEVBQThCO0FBQ3BELFVBQUlBLFVBQVVOLFNBQWQsRUFBeUI7QUFDdkJNLGdCQUFRVCxLQUFSO0FBQ0FBLGdCQUFRRCxnQkFBUjtBQUNEOztBQUptRCx5Q0FBcEJLLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBTXBELFVBQU1DLG1CQUFtQlQsTUFBTWMsU0FBTixlQUFnQlYsS0FBaEIsRUFBdUJTLEtBQXZCLEVBQThCWCxXQUE5QixTQUE4Q00sa0JBQTlDLEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OztnQ0FFa0JMLEssRUFBT00sTyxFQUFnQztBQUN4RCxVQUFJQSxZQUFZSCxTQUFoQixFQUEyQjtBQUN6Qkcsa0JBQVVOLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSnVELHlDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNeEQsVUFBTUMsbUJBQW1CVCxNQUFNZSxXQUFOLGVBQWtCWCxLQUFsQixFQUF5Qk0sT0FBekIsRUFBa0NSLFdBQWxDLFNBQWtETSxrQkFBbEQsRUFBekI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O3NDQUV3QkwsSyxFQUFPTSxPLEVBQWdDO0FBQzlELFVBQUlBLFlBQVlILFNBQWhCLEVBQTJCO0FBQ3pCRyxrQkFBVU4sS0FBVjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFKNkQseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU05RCxVQUFNQyxtQkFBbUJULE1BQU1nQixpQkFBTixlQUF3QlosS0FBeEIsRUFBK0JNLE9BQS9CLEVBQXdDUixXQUF4QyxTQUF3RE0sa0JBQXhELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OzswQ0FFNEJMLEssRUFBT00sTyxFQUFnQztBQUNsRSxVQUFJQSxZQUFZSCxTQUFoQixFQUEyQjtBQUN6Qkcsa0JBQVVOLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSmlFLHlDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNbEUsVUFBTVMsV0FBV2pCLE1BQU1rQixxQkFBTixlQUE0QmQsS0FBNUIsRUFBbUNNLE9BQW5DLFNBQStDRixrQkFBL0MsRUFBakI7O0FBRUEsYUFBT1MsUUFBUDtBQUNEOzs7O0VBOUU0QmpCLEs7O0FBaUYvQm1CLE9BQU9DLE9BQVAsR0FBaUJqQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY29uc3Qgc2lnbmlmaWNhbnQgPSB0cnVlO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICBzdGFydFBvc2l0aW9uID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4ubWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hdGNoKENsYXNzLCBtYXRjaCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1hdGNoID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21NYXRjaChDbGFzcywgbWF0Y2gsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==