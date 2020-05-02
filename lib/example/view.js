"use strict";

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

var easy = require("easy"),
    easyLayout = require("easy-layout");

var Element = easy.Element,
    SizeableDiv = easyLayout.SizeableDiv;

var TokensTextarea = require("./common/textarea/tokens"),
    EntriesTextarea = require("./common/textarea/entries"),
    ContentTextarea = require("./common/textarea/content"),
    MainVerticalSplitterDiv = require("./common/div/spliiter/vertical/main");

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
        this.hideError();
        this.setTokens(tokens);
      } catch (error) {
        this.showError();
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
      }, /*#__PURE__*/React.createElement(SizeableDiv, null, /*#__PURE__*/React.createElement("h2", null, "Entries"), /*#__PURE__*/React.createElement(EntriesTextarea, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(MainVerticalSplitterDiv, null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Tokens"), /*#__PURE__*/React.createElement(TokensTextarea, null)))];
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
      var exampleView = Element.fromClass(Class, properties);
      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return ExampleView;
}(Element);

Object.assign(ExampleView, {
  tagName: "div",
  defaultProperties: {
    className: "example"
  }
});
module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRGl2IiwiVG9rZW5zVGV4dGFyZWEiLCJFbnRyaWVzVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlckRpdiIsIkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJnZXRMZXhlciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRUb2tlbnMiLCJoaWRlRXJyb3IiLCJzZXRUb2tlbnMiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0RW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBRDFCOztBQUdNLElBQUVFLE9BQUYsR0FBY0gsSUFBZCxDQUFFRyxPQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkYsVUFEbEIsQ0FDRUUsV0FERjs7QUFHTixJQUFNQyxjQUFjLEdBQUdKLE9BQU8sQ0FBQywwQkFBRCxDQUE5QjtBQUFBLElBQ01LLGVBQWUsR0FBR0wsT0FBTyxDQUFDLDJCQUFELENBRC9CO0FBQUEsSUFFTU0sZUFBZSxHQUFHTixPQUFPLENBQUMsMkJBQUQsQ0FGL0I7QUFBQSxJQUdNTyx1QkFBdUIsR0FBR1AsT0FBTyxDQUFDLHFDQUFELENBSHZDOztJQUtNUSxXOzs7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFGaEI7QUFBQSxVQUdNQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkwsT0FBbEIsQ0FIZDtBQUFBLFVBSU1NLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FKZjtBQU1BLGFBQU9JLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLE1BQU0sR0FBRyxLQUFLRSxTQUFMLEVBQWY7QUFFQSxhQUFLQyxTQUFMO0FBRUEsYUFBS0MsU0FBTCxDQUFlSixNQUFmO0FBQ0QsT0FORCxDQU1FLE9BQU9LLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURyQjtBQUdBLGFBQVEsY0FFTixnQ0FBS0gsS0FBTCxDQUZNLGVBR047QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLFdBQUQscUJBQ0UsMENBREYsZUFJRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFRTtBQUExQixRQUpGLGVBS0UsMENBTEYsZUFRRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQVJGLENBREYsZUFXRSxvQkFBQyx1QkFBRCxPQVhGLGVBWUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLHlDQURGLGVBSUUsb0JBQUMsY0FBRCxPQUpGLENBWkYsQ0FITSxDQUFSO0FBd0JEOzs7K0JBRVVILFUsRUFBWTtBQUNyQixXQUFLSyxhQUFMO0FBRU0sVUFBQXJCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNBcUIsY0FEQSxHQUNpQixLQUFLQyxpQkFBTCxFQURqQjtBQUFBLFVBRUFuQixPQUZBLEdBRVVrQixjQUZWO0FBQUEsVUFHRXBCLE9BSEYsR0FHY0YsS0FIZCxDQUdFRSxPQUhGO0FBS04sV0FBS3NCLFVBQUwsQ0FBZ0JwQixPQUFoQjtBQUNBLFdBQUtxQixVQUFMLENBQWdCdkIsT0FBaEI7QUFFQSxXQUFLaUIsWUFBTDtBQUNEOzs7OEJBRWdCTyxLLEVBQU9WLFUsRUFBWTtBQUNsQyxVQUFNVyxXQUFXLEdBQUdsQyxPQUFPLENBQUNtQyxTQUFSLENBQWtCRixLQUFsQixFQUF5QlYsVUFBekIsQ0FBcEI7QUFFQVcsTUFBQUEsV0FBVyxDQUFDRSxVQUFaLENBQXVCYixVQUF2QjtBQUVBLGFBQU9XLFdBQVA7QUFDRDs7OztFQTNFdUJsQyxPOztBQThFMUJxQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hDLFdBQWQsRUFBMkI7QUFDekJpQyxFQUFBQSxPQUFPLEVBQUUsS0FEZ0I7QUFFekJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZNLENBQTNCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJDLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKFwiZWFzeS1sYXlvdXRcIik7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVEaXYgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZShcIi4vY29tbW9uL3RleHRhcmVhL3Rva2Vuc1wiKSxcbiAgICAgIEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoXCIuL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzXCIpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZShcIi4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnRcIiksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlckRpdiA9IHJlcXVpcmUoXCIuL2NvbW1vbi9kaXYvc3BsaWl0ZXIvdmVydGljYWwvbWFpblwiKTtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT4sXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gdGhpcy5nZXRJbml0aWFsQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcjtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogXCJkaXZcIixcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiZXhhbXBsZVwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19