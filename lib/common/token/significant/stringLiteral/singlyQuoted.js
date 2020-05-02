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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
var type = _types.stringLiteralType,
    ///
regularExpression = /^'(?:\\.|[^'])*'/;
Object.assign(SinglyQuotedStringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdseVF1b3RlZC5qcyJdLCJuYW1lcyI6WyJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU3RyaW5nTGl0ZXJhbFRva2VuIiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJzdHJpbmdMaXRlcmFsVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDhCOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHVHQUFtQkYsOEJBQW5CLEVBQW1EQyxhQUFuRCxFQUFrRUMsV0FBbEU7QUFBaUY7OzswQkFFeEdDLE8sRUFBUztBQUFFLGFBQU9DLDBCQUFtQkMsS0FBbkIsQ0FBeUJMLDhCQUF6QixFQUF5REcsT0FBekQsQ0FBUDtBQUEyRTs7O2dDQUVoRkEsTyxFQUFTO0FBQUUsYUFBT0MsMEJBQW1CRSxXQUFuQixDQUErQk4sOEJBQS9CLEVBQStERyxPQUEvRCxDQUFQO0FBQWlGOzs7O0VBTHJEQyx5Qjs7O0FBUTVELElBQU1HLElBQUksR0FBR0Msd0JBQWI7QUFBQSxJQUFnQztBQUMxQkMsaUJBQWlCLEdBQUcsa0JBRDFCO0FBR0FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCw4QkFBZCxFQUE4QztBQUM1Q08sRUFBQUEsSUFBSSxFQUFKQSxJQUQ0QztBQUU1Q0UsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUY0QyxDQUE5QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RyaW5nTGl0ZXJhbFRva2VuIGZyb20gXCIuLi8uLi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsXCI7XG5cbmltcG9ydCB7IHN0cmluZ0xpdGVyYWxUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFN0cmluZ0xpdGVyYWxUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4ubWF0Y2goU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbUNvbnRlbnQoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXicoPzpcXFxcLnxbXiddKSonLztcblxuT2JqZWN0LmFzc2lnbihTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuIl19