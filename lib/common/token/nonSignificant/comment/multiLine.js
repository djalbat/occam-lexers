'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonSignificantToken = require('../../nonSignificant');

var MultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(MultiLineCommentToken, _NonSignificantToken);

  function MultiLineCommentToken() {
    _classCallCheck(this, MultiLineCommentToken);

    return _possibleConstructorReturn(this, (MultiLineCommentToken.__proto__ || Object.getPrototypeOf(MultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MultiLineCommentToken, [{
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      return _get(MultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MultiLineCommentToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return NonSignificantToken.fromContent(Class, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return NonSignificantToken.fromWithinContent(Class, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return NonSignificantToken.positionWithinContent(Class, content);
    }
  }]);

  return MultiLineCommentToken;
}(NonSignificantToken);

module.exports = MultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiTm9uU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQkMsUUFBUSxzQkFBUixDQUE1Qjs7SUFFTUMscUI7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsaUpBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDO0FBQXdEOzs7Z0NBRWhGRixLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQk8sV0FBcEIsQ0FBZ0NKLEtBQWhDLEVBQXVDRyxPQUF2QyxDQUFQO0FBQXlEOzs7c0NBRXJFSCxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQlEsaUJBQXBCLENBQXNDTCxLQUF0QyxFQUE2Q0csT0FBN0MsQ0FBUDtBQUErRDs7OzBDQUU3RUgsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JTLHFCQUFwQixDQUEwQ04sS0FBMUMsRUFBaURHLE9BQWpELENBQVA7QUFBbUU7Ozs7RUFQaEZOLG1COztBQVVwQ1UsT0FBT0MsT0FBUCxHQUFpQlQscUJBQWpCIiwiZmlsZSI6Im11bHRpTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNsYXNzIE11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==