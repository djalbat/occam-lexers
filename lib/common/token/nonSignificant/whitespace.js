'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant');

var whitespaceType = types.whitespaceType;

var WhitespaceToken = function (_NonSignificantToken) {
  _inherits(WhitespaceToken, _NonSignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'asHTML',
    value: function asHTML() {
      var html = this.innerHTML; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(WhitespaceToken.prototype.__proto__ || Object.getPrototypeOf(WhitespaceToken.prototype), 'clone', this).call(this, WhitespaceToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromMatch',
    value: function fromMatch(match) {
      return NonSignificantToken.fromMatch(WhitespaceToken, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(WhitespaceToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return NonSignificantToken.fromWithinContent(WhitespaceToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return NonSignificantToken.positionWithinContent(WhitespaceToken, content);
    }
  }]);

  return WhitespaceToken;
}(NonSignificantToken);

var type = whitespaceType,
    ///
regularExpression = /^[\t ]+/;

Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = WhitespaceToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwid2hpdGVzcGFjZVR5cGUiLCJXaGl0ZXNwYWNlVG9rZW4iLCJodG1sIiwiaW5uZXJIVE1MIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibWF0Y2giLCJmcm9tTWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSw0QkFBUixDQUQ1Qjs7SUFHUUUsYyxHQUFtQkgsSyxDQUFuQkcsYzs7SUFFRkMsZTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxPQUFPLEtBQUtDLFNBQWxCLENBRE8sQ0FDdUI7O0FBRTlCLGFBQU9ELElBQVA7QUFDRDs7OzBCQUVLRSxhLEVBQWVDLFcsRUFBYTtBQUFFLHFJQUFtQkosZUFBbkIsRUFBb0NHLGFBQXBDLEVBQW1EQyxXQUFuRDtBQUFrRTs7OzhCQUVyRkMsSyxFQUFPO0FBQUUsYUFBT1Asb0JBQW9CUSxTQUFwQixDQUE4Qk4sZUFBOUIsRUFBK0NLLEtBQS9DLENBQVA7QUFBK0Q7OztnQ0FFdEVFLE8sRUFBUztBQUFFLGFBQU9ULG9CQUFvQlUsV0FBcEIsQ0FBZ0NSLGVBQWhDLEVBQWlETyxPQUFqRCxDQUFQO0FBQW1FOzs7c0NBRXhFQSxPLEVBQVM7QUFBRSxhQUFPVCxvQkFBb0JXLGlCQUFwQixDQUFzQ1QsZUFBdEMsRUFBdURPLE9BQXZELENBQVA7QUFBeUU7OzswQ0FFaEZBLE8sRUFBUztBQUFFLGFBQU9ULG9CQUFvQlkscUJBQXBCLENBQTBDVixlQUExQyxFQUEyRE8sT0FBM0QsQ0FBUDtBQUE2RTs7OztFQWZ6RlQsbUI7O0FBa0I5QixJQUFNYSxPQUFPWixjQUFiO0FBQUEsSUFBOEI7QUFDeEJhLG9CQUFvQixTQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjZCxlQUFkLEVBQStCO0FBQzdCVyxZQUQ2QjtBQUU3QkM7QUFGNkIsQ0FBL0I7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJoQixlQUFqQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyB3aGl0ZXNwYWNlVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaW5uZXJIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShXaGl0ZXNwYWNlVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2gobWF0Y2gpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbU1hdGNoKFdoaXRlc3BhY2VUb2tlbiwgbWF0Y2gpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21XaXRoaW5Db250ZW50KFdoaXRlc3BhY2VUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KFdoaXRlc3BhY2VUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IHdoaXRlc3BhY2VUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eW1xcdCBdKy87XG5cbk9iamVjdC5hc3NpZ24oV2hpdGVzcGFjZVRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG4iXX0=