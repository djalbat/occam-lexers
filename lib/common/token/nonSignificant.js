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
    key: 'match',
    value: function match(Class, content) {
      return Token.match(Class, content, significant);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return Token.fromContent(Class, content, significant);
    }
  }, {
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type) {
      return Token.fromContentAndType(Class, content, type, significant);
    }
  }]);

  return NonSignificantToken;
}(Token);

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxLQUFwQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsNklBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDLEVBQXNESixXQUF0RDtBQUFxRTs7OzBCQUVuR0UsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPUCxNQUFNUSxLQUFOLENBQVlKLEtBQVosRUFBbUJHLE9BQW5CLEVBQTRCTCxXQUE1QixDQUFQO0FBQWtEOzs7Z0NBRTlERSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLE1BQU1TLFdBQU4sQ0FBa0JMLEtBQWxCLEVBQXlCRyxPQUF6QixFQUFrQ0wsV0FBbEMsQ0FBUDtBQUF3RDs7O3VDQUVuRUUsSyxFQUFPRyxPLEVBQVNHLEksRUFBTTtBQUFFLGFBQU9WLE1BQU1XLGtCQUFOLENBQXlCUCxLQUF6QixFQUFnQ0csT0FBaEMsRUFBeUNHLElBQXpDLEVBQStDUixXQUEvQyxDQUFQO0FBQXFFOzs7O0VBUHZGRixLOztBQVVsQ1ksT0FBT0MsT0FBUCxHQUFpQlYsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=