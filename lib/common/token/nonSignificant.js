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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwic2lnbmlmaWNhbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwidHlwZSIsImZyb21Db250ZW50QW5kVHlwZSIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxLQUFwQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsNklBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDLEVBQXNESixXQUF0RDtBQUFxRTs7O3VDQUV0RkUsSyxFQUFPRyxPLEVBQVNDLEksRUFBTTtBQUFFLGFBQU9SLE1BQU1TLGtCQUFOLENBQXlCTCxLQUF6QixFQUFnQ0csT0FBaEMsRUFBeUNDLElBQXpDLEVBQStDTixXQUEvQyxDQUFQO0FBQXFFOzs7Z0NBRXBHRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLE1BQU1VLFdBQU4sQ0FBa0JOLEtBQWxCLEVBQXlCRyxPQUF6QixFQUFrQ0wsV0FBbEMsQ0FBUDtBQUF3RDs7O3NDQUVwRUUsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPUCxNQUFNVyxpQkFBTixDQUF3QlAsS0FBeEIsRUFBK0JHLE9BQS9CLEVBQXdDTCxXQUF4QyxDQUFQO0FBQThEOzs7MENBRTVFRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLE1BQU1ZLHFCQUFOLENBQTRCUixLQUE1QixFQUFtQ0csT0FBbkMsQ0FBUDtBQUFzRDs7OztFQVRyRVAsSzs7QUFZbENhLE9BQU9DLE9BQVAsR0FBaUJYLG1CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLmZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIDsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=