"use strict";

var _nonSignificant = _interopRequireDefault(require("../../token/nonSignificant"));

var _types = require("../../types");

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

var BrokenCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(BrokenCommentToken, _NonSignificantToken);

  var _super = _createSuper(BrokenCommentToken);

  function BrokenCommentToken() {
    _classCallCheck(this, BrokenCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(BrokenCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(BrokenCommentToken.prototype), "clone", this).call(this, BrokenCommentToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _nonSignificant["default"].match(BrokenCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(BrokenCommentToken, content);
    }
  }]);

  return BrokenCommentToken;
}(_nonSignificant["default"]);

var type = _types.brokenCommentType,
    ///
regularExpression = /^\//;
Object.assign(BrokenCommentToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = BrokenCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlbkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQnJva2VuQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsImJyb2tlbkNvbW1lbnRUeXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDJGQUFtQkYsa0JBQW5CLEVBQXVDQyxhQUF2QyxFQUFzREMsV0FBdEQ7QUFBcUU7OzswQkFFNUZDLE8sRUFBUztBQUFFLGFBQU9DLDJCQUFvQkMsS0FBcEIsQ0FBMEJMLGtCQUExQixFQUE4Q0csT0FBOUMsQ0FBUDtBQUFnRTs7O2dDQUVyRUEsTyxFQUFTO0FBQUUsYUFBT0MsMkJBQW9CRSxXQUFwQixDQUFnQ04sa0JBQWhDLEVBQW9ERyxPQUFwRCxDQUFQO0FBQXNFOzs7O0VBTHJFQywwQjs7QUFRakMsSUFBTUcsSUFBSSxHQUFHQyx3QkFBYjtBQUFBLElBQWlDO0FBQzNCQyxpQkFBaUIsR0FBRyxLQUQxQjtBQUdBQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsa0JBQWQsRUFBa0M7QUFDaENPLEVBQUFBLElBQUksRUFBSkEsSUFEZ0M7QUFFaENFLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFGZ0MsQ0FBbEM7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IGJyb2tlbkNvbW1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNsYXNzIEJyb2tlbkNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQnJva2VuQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChCcm9rZW5Db21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQnJva2VuQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gYnJva2VuQ29tbWVudFR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8vO1xuXG5PYmplY3QuYXNzaWduKEJyb2tlbkNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQnJva2VuQ29tbWVudFRva2VuO1xuIl19