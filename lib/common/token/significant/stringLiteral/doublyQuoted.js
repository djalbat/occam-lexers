"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stringLiteral = _interopRequireDefault(require("../../significant/stringLiteral"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DoublyQuotedStringLiteralToken = /*#__PURE__*/function (_StringLiteralToken) {
  _inherits(DoublyQuotedStringLiteralToken, _StringLiteralToken);

  var _super = _createSuper(DoublyQuotedStringLiteralToken);

  function DoublyQuotedStringLiteralToken() {
    _classCallCheck(this, DoublyQuotedStringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(DoublyQuotedStringLiteralToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(DoublyQuotedStringLiteralToken.prototype), "clone", this).call(this, DoublyQuotedStringLiteralToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _stringLiteral["default"].match(DoublyQuotedStringLiteralToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _stringLiteral["default"].fromContent(DoublyQuotedStringLiteralToken, content);
    }
  }]);

  return DoublyQuotedStringLiteralToken;
}(_stringLiteral["default"]);

exports["default"] = DoublyQuotedStringLiteralToken;

_defineProperty(DoublyQuotedStringLiteralToken, "type", _types.stringLiteralType);

_defineProperty(DoublyQuotedStringLiteralToken, "regularExpression", /^"(?:\\.|[^"\\])*"/);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInN0cmluZ0xpdGVyYWxUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw4Qjs7Ozs7Ozs7Ozs7OzswQkFDYkMsYSxFQUFlQyxXLEVBQWE7QUFBRSx1R0FBbUJGLDhCQUFuQixFQUFtREMsYUFBbkQsRUFBa0VDLFdBQWxFO0FBQWlGOzs7MEJBTXhHQyxPLEVBQVM7QUFBRSxhQUFPQywwQkFBbUJDLEtBQW5CLENBQXlCTCw4QkFBekIsRUFBeURHLE9BQXpELENBQVA7QUFBMkU7OztnQ0FFaEZBLE8sRUFBUztBQUFFLGFBQU9DLDBCQUFtQkUsV0FBbkIsQ0FBK0JOLDhCQUEvQixFQUErREcsT0FBL0QsQ0FBUDtBQUFpRjs7OztFQVRyREMseUI7Ozs7Z0JBQXZDSiw4QixVQUdMTyx3Qjs7Z0JBSEtQLDhCLHVCQUtRLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHJpbmdMaXRlcmFsVG9rZW4gZnJvbSBcIi4uLy4uL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWxcIjtcblxuaW1wb3J0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSBmcm9tXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTdHJpbmdMaXRlcmFsVG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlO1xuXG4gIHN0YXRpYyByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLm1hdGNoKERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU3RyaW5nTGl0ZXJhbFRva2VuLmZyb21Db250ZW50KERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdfQ==