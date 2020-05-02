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
Object.assign(ExampleView, {
  tagName: "div",
  defaultProperties: {
    className: "example"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJMZXhlciIsImdldExleGVyIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldFRva2VucyIsInNldFRva2VucyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0RW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUZoQjtBQUFBLFVBR01DLEtBQUssR0FBR04sS0FBSyxDQUFDTyxXQUFOLENBQWtCTCxPQUFsQixDQUhkO0FBQUEsVUFJTU0sTUFBTSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUwsT0FBZixDQUpmO0FBTUEsYUFBT0ksTUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJO0FBQ0YsWUFBTUEsTUFBTSxHQUFHLEtBQUtFLFNBQUwsRUFBZjtBQUVBLGFBQUtDLFNBQUwsQ0FBZUgsTUFBZjtBQUNELE9BSkQsQ0FJRSxPQUFPSSxLQUFQLEVBQWM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxhQUFLRyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURyQjtBQUdBLGFBQVEsY0FFTixnQ0FBS0gsS0FBTCxDQUZNLGVBR047QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLHVCQUFELHFCQUNFLDBDQURGLGVBSUUsb0JBQUMsbUJBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVFO0FBQTFCLFFBSkYsZUFLRSwwQ0FMRixlQVFFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQVJGLENBREYsZUFXRSxvQkFBQyxnQkFBRCxPQVhGLGVBWUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLHlDQURGLGVBSUUsb0JBQUMsa0JBQUQsT0FKRixDQVpGLENBSE0sQ0FBUjtBQXdCRDs7OytCQUVVSCxVLEVBQVk7QUFDckIsV0FBS0ssYUFBTDtBQUVNLFVBQUFyQixLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDQXFCLGNBREEsR0FDaUIsS0FBS0MsaUJBQUwsRUFEakI7QUFBQSxVQUVBbkIsT0FGQSxHQUVVa0IsY0FGVjtBQUFBLFVBR0VwQixPQUhGLEdBR2NGLEtBSGQsQ0FHRUUsT0FIRjtBQUtOLFdBQUtzQixVQUFMLENBQWdCcEIsT0FBaEI7QUFDQSxXQUFLcUIsVUFBTCxDQUFnQnZCLE9BQWhCO0FBRUEsV0FBS2lCLFlBQUw7QUFDRDs7OzhCQUVnQk8sSyxFQUFPVixVLEVBQVk7QUFDbEMsVUFBTVcsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QlYsVUFBekIsQ0FBcEI7O0FBRUFXLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1QmQsVUFBdkI7QUFFQSxhQUFPVyxXQUFQO0FBQ0Q7Ozs7RUF6RXNDQyxhOzs7QUE0RXpDRyxNQUFNLENBQUNDLE1BQVAsQ0FBY2pDLFdBQWQsRUFBMkI7QUFDekJrQyxFQUFBQSxPQUFPLEVBQUUsS0FEZ0I7QUFFekJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZNLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgU2l6ZWFibGVEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL2NvbW1vbi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vY29tbW9uL3RleHRhcmVhL2VudHJpZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBNYWluVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9jb21tb24vZGl2L3NwbGlpdGVyL3ZlcnRpY2FsL21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSB0aGlzLmdldEluaXRpYWxDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeGFtcGxlVmlldywge1xuICB0YWdOYW1lOiBcImRpdlwiLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJleGFtcGxlXCJcbiAgfVxufSk7XG4iXX0=