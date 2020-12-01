"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _significant = _interopRequireDefault(require("../../token/significant"));

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

var RegularExpressionToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(RegularExpressionToken, _SignificantToken);

  var _super = _createSuper(RegularExpressionToken);

  function RegularExpressionToken() {
    _classCallCheck(this, RegularExpressionToken);

    return _super.apply(this, arguments);
  }

  _createClass(RegularExpressionToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(RegularExpressionToken.prototype), "clone", this).call(this, RegularExpressionToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _significant["default"].match(RegularExpressionToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _significant["default"].fromContent(RegularExpressionToken, content);
    }
  }]);

  return RegularExpressionToken;
}(_significant["default"]);

exports["default"] = RegularExpressionToken;

_defineProperty(RegularExpressionToken, "type", _types.regularExpressionType);

_defineProperty(RegularExpressionToken, "regularExpression", /^\/(?:\\.|[^\/])*\//);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvblR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxhLEVBQWVDLFcsRUFBYTtBQUFFLCtGQUFtQkYsc0JBQW5CLEVBQTJDQyxhQUEzQyxFQUEwREMsV0FBMUQ7QUFBeUU7OzswQkFNaEdDLE8sRUFBUztBQUFFLGFBQU9DLHdCQUFpQkMsS0FBakIsQ0FBdUJMLHNCQUF2QixFQUErQ0csT0FBL0MsQ0FBUDtBQUFpRTs7O2dDQUV0RUEsTyxFQUFTO0FBQUUsYUFBT0Msd0JBQWlCRSxXQUFqQixDQUE2Qk4sc0JBQTdCLEVBQXFERyxPQUFyRCxDQUFQO0FBQXVFOzs7O0VBVG5EQyx1Qjs7OztnQkFBL0JKLHNCLFVBR0xPLDRCOztnQkFIS1Asc0IsdUJBS1EscUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgdHlwZSA9IHJlZ3VsYXJFeHByZXNzaW9uVHlwZTtcblxuICBzdGF0aWMgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcLyg/OlxcXFwufFteXFwvXSkqXFwvLztcblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sIGNvbnRlbnQpOyB9XG59XG4iXX0=