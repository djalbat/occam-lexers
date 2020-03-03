'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Token = require('../token');

var significant = false;

var NonSignificantToken = /*#__PURE__*/function (_Token) {
  _inherits(NonSignificantToken, _Token);

  function NonSignificantToken() {
    _classCallCheck(this, NonSignificantToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(NonSignificantToken).apply(this, arguments));
  }

  _createClass(NonSignificantToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      return _get(_getPrototypeOf(NonSignificantToken.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      return Token.match(Class, content, significant);
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      return Token.fromContent(Class, content, significant);
    }
  }, {
    key: "fromContentAndType",
    value: function fromContentAndType(Class, content, type) {
      return Token.fromContentAndType(Class, content, type, significant);
    }
  }]);

  return NonSignificantToken;
}(Token);

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsInNpZ25pZmljYW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwiZnJvbUNvbnRlbnRBbmRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLEtBQXBCOztJQUVNQyxtQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSw0RkFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekMsRUFBc0RKLFdBQXREO0FBQXFFOzs7MEJBRW5HRSxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9QLEtBQUssQ0FBQ1EsS0FBTixDQUFZSixLQUFaLEVBQW1CRyxPQUFuQixFQUE0QkwsV0FBNUIsQ0FBUDtBQUFrRDs7O2dDQUU5REUsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPUCxLQUFLLENBQUNTLFdBQU4sQ0FBa0JMLEtBQWxCLEVBQXlCRyxPQUF6QixFQUFrQ0wsV0FBbEMsQ0FBUDtBQUF3RDs7O3VDQUVuRUUsSyxFQUFPRyxPLEVBQVNHLEksRUFBTTtBQUFFLGFBQU9WLEtBQUssQ0FBQ1csa0JBQU4sQ0FBeUJQLEtBQXpCLEVBQWdDRyxPQUFoQyxFQUF5Q0csSUFBekMsRUFBK0NSLFdBQS9DLENBQVA7QUFBcUU7Ozs7RUFQdkZGLEs7O0FBVWxDWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLG1CQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5tYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSkgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIl19