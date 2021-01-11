"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stringLiteral = _interopRequireDefault(require("../../significant/stringLiteral"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SinglyQuotedStringLiteralToken = /*#__PURE__*/function (_StringLiteralToken) {
  _inherits(SinglyQuotedStringLiteralToken, _StringLiteralToken);

  var _super = _createSuper(SinglyQuotedStringLiteralToken);

  function SinglyQuotedStringLiteralToken() {
    _classCallCheck(this, SinglyQuotedStringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(SinglyQuotedStringLiteralToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(SinglyQuotedStringLiteralToken.prototype), "clone", this).call(this, SinglyQuotedStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _stringLiteral["default"].match(SinglyQuotedStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _stringLiteral["default"].fromContent(SinglyQuotedStringLiteralToken, content);
    }
  }]);

  return SinglyQuotedStringLiteralToken;
}(_stringLiteral["default"]);

exports["default"] = SinglyQuotedStringLiteralToken;

_defineProperty(SinglyQuotedStringLiteralToken, "type", _types.stringLiteralType);

_defineProperty(SinglyQuotedStringLiteralToken, "regularExpression", /^'(?:\\.|[^'])*'/);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInN0cmluZ0xpdGVyYWxUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsOEI7Ozs7Ozs7Ozs7Ozs7MEJBQ2JDLGEsRUFBZUMsVyxFQUFhO0FBQUUsdUdBQW1CRiw4QkFBbkIsRUFBbURDLGFBQW5ELEVBQWtFQyxXQUFsRTtBQUFpRjs7OzBCQU14R0MsTyxFQUFTO0FBQUUsYUFBT0MsMEJBQW1CQyxLQUFuQixDQUF5QkwsOEJBQXpCLEVBQXlERyxPQUF6RCxDQUFQO0FBQTJFOzs7Z0NBRWhGQSxPLEVBQVM7QUFBRSxhQUFPQywwQkFBbUJFLFdBQW5CLENBQStCTiw4QkFBL0IsRUFBK0RHLE9BQS9ELENBQVA7QUFBaUY7Ozs7RUFUckRDLHlCOzs7O2dCQUF2Q0osOEIsVUFHTE8sd0I7O2dCQUhLUCw4Qix1QkFLUSxrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi8uLi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7XG5cbmltcG9ydCB7IHN0cmluZ0xpdGVyYWxUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFN0cmluZ0xpdGVyYWxUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyB0eXBlID0gc3RyaW5nTGl0ZXJhbFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14nKD86XFxcXC58W14nXSkqJy87XG5cbiAgc3RhdGljIG1hdGNoKGNvbnRlbnQpIHsgcmV0dXJuIFN0cmluZ0xpdGVyYWxUb2tlbi5tYXRjaChTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFN0cmluZ0xpdGVyYWxUb2tlbi5mcm9tQ29udGVudChTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXX0=