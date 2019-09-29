'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant');

var brokenCommentType = types.brokenCommentType;

var BrokenCommentToken = function (_NonSignificantToken) {
  _inherits(BrokenCommentToken, _NonSignificantToken);

  function BrokenCommentToken() {
    _classCallCheck(this, BrokenCommentToken);

    return _possibleConstructorReturn(this, (BrokenCommentToken.__proto__ || Object.getPrototypeOf(BrokenCommentToken)).apply(this, arguments));
  }

  _createClass(BrokenCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(BrokenCommentToken.prototype.__proto__ || Object.getPrototypeOf(BrokenCommentToken.prototype), 'clone', this).call(this, BrokenCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(BrokenCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(BrokenCommentToken, content);
    }
  }]);

  return BrokenCommentToken;
}(NonSignificantToken);

var type = brokenCommentType,
    ///
regularExpression = /^\//;

Object.assign(BrokenCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = BrokenCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvYnJva2VuQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwiYnJva2VuQ29tbWVudFR5cGUiLCJCcm9rZW5Db21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSw0QkFBUixDQUQ1Qjs7SUFHUUUsaUIsR0FBc0JILEssQ0FBdEJHLGlCOztJQUVGQyxrQjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsMklBQW1CRixrQkFBbkIsRUFBdUNDLGFBQXZDLEVBQXNEQyxXQUF0RDtBQUFxRTs7OzBCQUU1RkMsTyxFQUFTO0FBQUUsYUFBT0wsb0JBQW9CTSxLQUFwQixDQUEwQkosa0JBQTFCLEVBQThDRyxPQUE5QyxDQUFQO0FBQWdFOzs7Z0NBRXJFQSxPLEVBQVM7QUFBRSxhQUFPTCxvQkFBb0JPLFdBQXBCLENBQWdDTCxrQkFBaEMsRUFBb0RHLE9BQXBELENBQVA7QUFBc0U7Ozs7RUFMckVMLG1COztBQVFqQyxJQUFNUSxPQUFPUCxpQkFBYjtBQUFBLElBQWlDO0FBQzNCUSxvQkFBb0IsS0FEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY1Qsa0JBQWQsRUFBa0M7QUFDaENNLFlBRGdDO0FBRWhDQztBQUZnQyxDQUFsQzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQlgsa0JBQWpCIiwiZmlsZSI6ImJyb2tlbkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGJyb2tlbkNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgQnJva2VuQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShCcm9rZW5Db21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEJyb2tlbkNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChCcm9rZW5Db21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBicm9rZW5Db21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcLy87XG5cbk9iamVjdC5hc3NpZ24oQnJva2VuQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCcm9rZW5Db21tZW50VG9rZW47XG4iXX0=