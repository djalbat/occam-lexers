"use strict";

var _significant = _interopRequireDefault(require("../../token/significant"));

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

var StringLiteralToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  var _super = _createSuper(StringLiteralToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _super.apply(this, arguments);
  }

  _createClass(StringLiteralToken, [{
    key: "clone",
    value: function clone(Class, startPosition, endPosition) {
      return _get(_getPrototypeOf(StringLiteralToken.prototype), "clone", this).call(this, Class, startPosition, endPosition);
    }
  }, {
    key: "getString",
    value: function getString() {
      var content = this.getContent(),
          contentLength = content.length,
          start = 1,
          end = contentLength - 1,
          string = content.substring(start, end);
      return string;
    }
  }], [{
    key: "match",
    value: function match(Class, content) {
      return _significant["default"].match(Class, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(Class, content) {
      return _significant["default"].fromContent(Class, content);
    }
  }]);

  return StringLiteralToken;
}(_significant["default"]);

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZ0xpdGVyYWwuanMiXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbFRva2VuIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInN0cmluZyIsInN1YnN0cmluZyIsIlNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImZyb21Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7OzswQkFDRUMsSyxFQUFPQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDJGQUFtQkYsS0FBbkIsRUFBMEJDLGFBQTFCLEVBQXlDQyxXQUF6QztBQUF3RDs7O2dDQUV2RjtBQUNWLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsYUFBYSxHQUFHRixPQUFPLENBQUNHLE1BRDlCO0FBQUEsVUFFTUMsS0FBSyxHQUFHLENBRmQ7QUFBQSxVQUdNQyxHQUFHLEdBQUdILGFBQWEsR0FBRyxDQUg1QjtBQUFBLFVBSU1JLE1BQU0sR0FBR04sT0FBTyxDQUFDTyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QkMsR0FBekIsQ0FKZjtBQU1BLGFBQU9DLE1BQVA7QUFDRDs7OzBCQUVZVCxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9RLHdCQUFpQkMsS0FBakIsQ0FBdUJaLEtBQXZCLEVBQThCRyxPQUE5QixDQUFQO0FBQWdEOzs7Z0NBRTVESCxLLEVBQU9HLE8sRUFBUztBQUFFLGFBQU9RLHdCQUFpQkUsV0FBakIsQ0FBNkJiLEtBQTdCLEVBQW9DRyxPQUFwQyxDQUFQO0FBQXNEOzs7O0VBZjVEUSx1Qjs7QUFrQmpDRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZ25pZmljYW50VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL3NpZ25pZmljYW50XCI7XG5cbmNsYXNzIFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aCxcbiAgICAgICAgICBzdGFydCA9IDEsXG4gICAgICAgICAgZW5kID0gY29udGVudExlbmd0aCAtIDEsXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoKENsYXNzLCBjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLm1hdGNoKENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=