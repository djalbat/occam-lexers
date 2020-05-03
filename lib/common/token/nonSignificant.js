"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _token = _interopRequireDefault(require("../token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var significant = false;

var NonSignificantToken = /*#__PURE__*/function (_Token) {
  _inherits(NonSignificantToken, _Token);

  var _super = _createSuper(NonSignificantToken);

  function NonSignificantToken() {
    _classCallCheck(this, NonSignificantToken);

    return _super.apply(this, arguments);
  }

  _createClass(NonSignificantToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      return _get(_getPrototypeOf(NonSignificantToken.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      return _token["default"].match(Class, content, significant);
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      return _token["default"].fromContent(Class, content, significant);
    }
  }, {
    key: "fromContentAndType",
    value: function fromContentAndType(Class, content, type) {
      return _token["default"].fromContentAndType(Class, content, type, significant);
    }
  }]);

  return NonSignificantToken;
}(_token["default"]);

exports["default"] = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblNpZ25pZmljYW50LmpzIl0sIm5hbWVzIjpbInNpZ25pZmljYW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIlRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxLQUFwQjs7SUFFcUJDLG1COzs7Ozs7Ozs7Ozs7OzBCQUNiQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQUUsNEZBQW1CRixLQUFuQixFQUEwQkMsYUFBMUIsRUFBeUNDLFdBQXpDLEVBQXNESixXQUF0RDtBQUFxRTs7OzBCQUVuR0UsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPQyxrQkFBTUMsS0FBTixDQUFZTCxLQUFaLEVBQW1CRyxPQUFuQixFQUE0QkwsV0FBNUIsQ0FBUDtBQUFrRDs7O2dDQUU5REUsSyxFQUFPRyxPLEVBQVM7QUFBRSxhQUFPQyxrQkFBTUUsV0FBTixDQUFrQk4sS0FBbEIsRUFBeUJHLE9BQXpCLEVBQWtDTCxXQUFsQyxDQUFQO0FBQXdEOzs7dUNBRW5FRSxLLEVBQU9HLE8sRUFBU0ksSSxFQUFNO0FBQUUsYUFBT0gsa0JBQU1JLGtCQUFOLENBQXlCUixLQUF6QixFQUFnQ0csT0FBaEMsRUFBeUNJLElBQXpDLEVBQStDVCxXQUEvQyxDQUFQO0FBQXFFOzs7O0VBUHhFTSxpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4uL3Rva2VuXCI7XG5cbmNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50KTsgfVxufVxuIl19