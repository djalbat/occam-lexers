"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _tokens = _interopRequireDefault(require("./common/textarea/tokens"));

var _entries = _interopRequireDefault(require("./common/textarea/entries"));

var _content = _interopRequireDefault(require("./common/textarea/content"));

var _main = _interopRequireDefault(require("./common/div/spliiter/vertical/main"));

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

var ExampleView = /*#__PURE__*/function (_Element) {
  _inherits(ExampleView, _Element);

  var _super = _createSuper(ExampleView);

  function ExampleView() {
    _classCallCheck(this, ExampleView);

    return _super.apply(this, arguments);
  }

  _createClass(ExampleView, [{
    key: "getTokens",
    value: function getTokens() {
      var Lexer = this.getLexer(),
          entries = this.getEntries(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
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
      var title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);
      return [/*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
        className: "columns"
      }, /*#__PURE__*/React.createElement(_easyLayout.SizeableDiv, null, /*#__PURE__*/React.createElement("h2", null, "Entries"), /*#__PURE__*/React.createElement(_entries["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(_main["default"], null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null)))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      var Lexer = this.getLexer(),
          initialContent = this.getInitialContent(),
          content = initialContent,
          entries = Lexer.entries;
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

  return ExampleView;
}(_easy.Element);

exports["default"] = ExampleView;

_defineProperty(ExampleView, "tagName", "div");

_defineProperty(ExampleView, "defaultProperties", {
  className: "example"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJMZXhlciIsImdldExleGVyIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldFRva2VucyIsInNldFRva2VucyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0RW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7OztnQ0FDUDtBQUNWLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFVBRU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRmhCO0FBQUEsVUFHTUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLFdBQU4sQ0FBa0JMLE9BQWxCLENBSGQ7QUFBQSxVQUlNTSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixDQUFlTCxPQUFmLENBSmY7QUFNQSxhQUFPSSxNQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUk7QUFDRixZQUFNQSxNQUFNLEdBQUcsS0FBS0UsU0FBTCxFQUFmO0FBRUEsYUFBS0MsU0FBTCxDQUFlSCxNQUFmO0FBQ0QsT0FKRCxDQUlFLE9BQU9JLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLGFBQUtHLFdBQUw7QUFDRDtBQUNGOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRHJCO0FBR0EsYUFBUSxjQUVOLGdDQUFLSCxLQUFMLENBRk0sZUFHTjtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0Usb0JBQUMsdUJBQUQscUJBQ0UsMENBREYsZUFJRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUU7QUFBMUIsUUFKRixlQUtFLDBDQUxGLGVBUUUsb0JBQUMsbUJBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVBO0FBQTFCLFFBUkYsQ0FERixlQVdFLG9CQUFDLGdCQUFELE9BWEYsZUFZRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0UseUNBREYsZUFJRSxvQkFBQyxrQkFBRCxPQUpGLENBWkYsQ0FITSxDQUFSO0FBd0JEOzs7K0JBRVVILFUsRUFBWTtBQUNyQixXQUFLSyxhQUFMO0FBRU0sVUFBQXJCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNBcUIsY0FEQSxHQUNpQixLQUFLQyxpQkFBTCxFQURqQjtBQUFBLFVBRUFuQixPQUZBLEdBRVVrQixjQUZWO0FBQUEsVUFHRXBCLE9BSEYsR0FHY0YsS0FIZCxDQUdFRSxPQUhGO0FBS04sV0FBS3NCLFVBQUwsQ0FBZ0JwQixPQUFoQjtBQUNBLFdBQUtxQixVQUFMLENBQWdCdkIsT0FBaEI7QUFFQSxXQUFLaUIsWUFBTDtBQUNEOzs7OEJBUWdCTyxLLEVBQU9WLFUsRUFBWTtBQUNsQyxVQUFNVyxXQUFXLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCVixVQUF6QixDQUFwQjs7QUFFQVcsTUFBQUEsV0FBVyxDQUFDRyxVQUFaLENBQXVCZCxVQUF2QjtBQUVBLGFBQU9XLFdBQVA7QUFDRDs7OztFQS9Fc0NDLGE7Ozs7Z0JBQXBCN0IsVyxhQW1FRixLOztnQkFuRUVBLFcsdUJBcUVRO0FBQ3pCZ0MsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFNpemVhYmxlRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi9jb21tb24vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgRW50cmllc1RleHRhcmVhIGZyb20gXCIuL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWFpblZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vY29tbW9uL2Rpdi9zcGxpaXRlci92ZXJ0aWNhbC9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGVWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT4sXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gdGhpcy5nZXRJbml0aWFsQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcjtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhhbXBsZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXX0=