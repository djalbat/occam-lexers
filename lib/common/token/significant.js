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
    key: 'match',
    value: function match(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var significantToken = Token.match.apply(Token, [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var significantToken = Token.fromContent.apply(Token, [Class, content, significant].concat(remainingArguments));

      return significantToken;
    }
  }, {
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type) {
      if (type === undefined) {
        type = content;
        content = Class;
        Class = SignificantToken;
      }

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 3] = arguments[_key4];
      }

      var significantToken = Token.fromContentAndType.apply(Token, [Class, content, type, significant].concat(remainingArguments));

      return significantToken;
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkOztBQUVBLElBQU1DLGNBQWMsSUFBcEI7O0lBRU1DLGdCOzs7Ozs7Ozs7OzswQkFDRUMsSyxFQUFPQyxhLEVBQWVDLFcsRUFBb0M7QUFBQTs7QUFDOUQsVUFBSUEsZ0JBQWdCQyxTQUFwQixFQUErQjtBQUM3QkQsc0JBQWNELGFBQWQ7QUFDQUEsd0JBQWdCRCxLQUFoQjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFMNkQsd0NBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU85RCxVQUFNQyxxS0FBK0JMLEtBQS9CLEVBQXNDQyxhQUF0QyxFQUFxREMsV0FBckQsRUFBa0VKLFdBQWxFLFNBQWtGTSxrQkFBbEYsRUFBTjs7QUFFQSxhQUFPQyxnQkFBUDtBQUNEOzs7MEJBRVlMLEssRUFBT00sTyxFQUFnQztBQUNsRCxVQUFJQSxZQUFZSCxTQUFoQixFQUEyQjtBQUN6Qkcsa0JBQVVOLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSmlELHlDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNbEQsVUFBTUMsbUJBQW1CVCxNQUFNVyxLQUFOLGVBQVlQLEtBQVosRUFBbUJNLE9BQW5CLEVBQTRCUixXQUE1QixTQUE0Q00sa0JBQTVDLEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7OztnQ0FFa0JMLEssRUFBT00sTyxFQUFnQztBQUN4RCxVQUFJQSxZQUFZSCxTQUFoQixFQUEyQjtBQUN6Qkcsa0JBQVVOLEtBQVY7QUFDQUEsZ0JBQVFELGdCQUFSO0FBQ0Q7O0FBSnVELHlDQUFwQkssa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFNeEQsVUFBTUMsbUJBQW1CVCxNQUFNWSxXQUFOLGVBQWtCUixLQUFsQixFQUF5Qk0sT0FBekIsRUFBa0NSLFdBQWxDLFNBQWtETSxrQkFBbEQsRUFBekI7O0FBRUEsYUFBT0MsZ0JBQVA7QUFDRDs7O3VDQUV5QkwsSyxFQUFPTSxPLEVBQVNHLEksRUFBNkI7QUFDckUsVUFBSUEsU0FBU04sU0FBYixFQUF3QjtBQUN0Qk0sZUFBT0gsT0FBUDtBQUNBQSxrQkFBVU4sS0FBVjtBQUNBQSxnQkFBUUQsZ0JBQVI7QUFDRDs7QUFMb0UseUNBQXBCSyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU9yRSxVQUFNQyxtQkFBbUJULE1BQU1jLGtCQUFOLGVBQXlCVixLQUF6QixFQUFnQ00sT0FBaEMsRUFBeUNHLElBQXpDLEVBQStDWCxXQUEvQyxTQUErRE0sa0JBQS9ELEVBQXpCOztBQUVBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUE3QzRCVCxLOztBQWdEL0JlLE9BQU9DLE9BQVAsR0FBaUJiLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IHRydWU7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=