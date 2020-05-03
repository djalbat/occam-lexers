"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _heading = _interopRequireDefault(require("./heading"));

var _back = _interopRequireDefault(require("./link/back"));

var _paragraph = _interopRequireDefault(require("./paragraph"));

var _column = _interopRequireDefault(require("./div/column"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _tokens = _interopRequireDefault(require("./textarea/tokens"));

var _entries = _interopRequireDefault(require("./textarea/entries"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "getTokens",
    value: function getTokens() {
      var entries = this.getEntries(),
          content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var tokens = this.getTokens();
        this.setTokens(tokens);
      } catch (error) {
        console.log(error);
        this.clearTokens();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, this.heading), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Entries"), /*#__PURE__*/React.createElement(_entries["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null))), /*#__PURE__*/React.createElement(_paragraph["default"], null, /*#__PURE__*/React.createElement(_back["default"], null))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      var content = this.initialContent,
          entries = this.Lexer.entries;
      this.setContent(content);
      this.setEntries(entries);
      this.keyUpHandler();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldFRva2VucyIsInNldFRva2VucyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJoZWFkaW5nIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Q29udGVudCIsInNldEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixVQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1Qk4sT0FBdkIsQ0FGZDtBQUFBLFVBR01PLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxRQUFOLENBQWVOLE9BQWYsQ0FIZjtBQUtBLGFBQU9LLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLE1BQU0sR0FBRyxLQUFLRSxTQUFMLEVBQWY7QUFFQSxhQUFLQyxTQUFMLENBQWVILE1BQWY7QUFDRCxPQUpELENBSUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsYUFBS0csV0FBTDtBQUNEO0FBQ0Y7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFVBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUVBLGFBQVEsY0FFTixvQkFBQyxtQkFBRCxRQUNHLEtBQUtDLE9BRFIsQ0FGTSxlQUtOLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLG9CQUFELHFCQUNFLG9CQUFDLHNCQUFELGtCQURGLGVBSUUsb0JBQUMsbUJBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVGO0FBQTFCLFFBSkYsZUFLRSxvQkFBQyxzQkFBRCxrQkFMRixlQVFFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQVJGLENBREYsZUFXRSxvQkFBQyxvQkFBRCxPQVhGLGVBWUUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQsaUJBREYsZUFJRSxvQkFBQyxrQkFBRCxPQUpGLENBWkYsQ0FMTSxlQXdCTixvQkFBQyxxQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBeEJNLENBQVI7QUE2QkQ7OzsrQkFFVUQsVSxFQUFZO0FBQ3JCLFdBQUtJLGFBQUw7QUFFTSxVQUFBakIsT0FBTyxHQUFHLEtBQUtrQixjQUFmO0FBQUEsVUFDRXBCLE9BREYsR0FDYyxLQUFLSyxLQURuQixDQUNFTCxPQURGO0FBR04sV0FBS3FCLFVBQUwsQ0FBZ0JuQixPQUFoQjtBQUNBLFdBQUtvQixVQUFMLENBQWdCdEIsT0FBaEI7QUFFQSxXQUFLZ0IsWUFBTDtBQUNEOzs7OEJBSWdCTyxLLEVBQU9SLFUsRUFBWTtBQUNsQyxVQUFNUyxXQUFXLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCUixVQUF6QixDQUFwQjs7QUFFQVMsTUFBQUEsV0FBVyxDQUFDRyxVQUFaLENBQXVCWixVQUF2QjtBQUVBLGFBQU9TLFdBQVA7QUFDRDs7OztFQTVFK0JDLGE7Ozs7Z0JBQWIxQixJLGFBb0VGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBCYWNrTGluayBmcm9tIFwiLi9saW5rL2JhY2tcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvZW50cmllc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICB7dGhpcy5oZWFkaW5nfVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+LFxuICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgPEJhY2tMaW5rIC8+XG4gICAgICA8L1BhcmFncmFwaD5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXX0=