'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;

var TokensTextarea = require('./common/textarea/tokens'),
    EntriesTextarea = require('./common/textarea/entries'),
    ContentTextarea = require('./common/textarea/content'),
    MainVerticalSplitter = require('./common/verticalSplitter/main');

var ExampleView = /*#__PURE__*/function (_Element) {
  _inherits(ExampleView, _Element);

  function ExampleView() {
    _classCallCheck(this, ExampleView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleView).apply(this, arguments));
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
      return [React.createElement("h1", null, title), React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Entries"), React.createElement(EntriesTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Tokens"), React.createElement(TokensTextarea, null)))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
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
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var exampleView = Element.fromProperties(Class, properties);
      exampleView.initialise();
      return exampleView;
    }
  }]);

  return ExampleView;
}(Element);

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});
module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIlRva2Vuc1RleHRhcmVhIiwiRW50cmllc1RleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0VG9rZW5zIiwiaGlkZUVycm9yIiwic2V0VG9rZW5zIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhclRva2VucyIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdldFRpdGxlIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImdldEluaXRpYWxDb250ZW50Iiwic2V0Q29udGVudCIsInNldEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjtBQUFBLElBQ01DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FEMUI7O0FBR00sSUFBRUUsT0FBRixHQUFjSCxJQUFkLENBQUVHLE9BQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixVQUR0QixDQUNFRSxlQURGOztBQUdOLElBQU1DLGNBQWMsR0FBR0osT0FBTyxDQUFDLDBCQUFELENBQTlCO0FBQUEsSUFDTUssZUFBZSxHQUFHTCxPQUFPLENBQUMsMkJBQUQsQ0FEL0I7QUFBQSxJQUVNTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQywyQkFBRCxDQUYvQjtBQUFBLElBR01PLG9CQUFvQixHQUFHUCxPQUFPLENBQUMsZ0NBQUQsQ0FIcEM7O0lBS01RLFc7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFGaEI7QUFBQSxVQUdNQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkwsT0FBbEIsQ0FIZDtBQUFBLFVBSU1NLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FKZjtBQU1BLGFBQU9JLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLE1BQU0sR0FBRyxLQUFLRSxTQUFMLEVBQWY7QUFFQSxhQUFLQyxTQUFMO0FBRUEsYUFBS0MsU0FBTCxDQUFlSixNQUFmO0FBQ0QsT0FORCxDQU1FLE9BQU9LLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURyQjtBQUdBLGFBQVEsQ0FFTixnQ0FBS0gsS0FBTCxDQUZNLEVBR047QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0Usb0JBQUMsZUFBRCxRQUNFLDBDQURGLEVBSUUsb0JBQUMsZUFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUU7QUFBMUIsUUFKRixFQUtFLDBDQUxGLEVBUUUsb0JBQUMsZUFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFSRixDQURGLEVBV0Usb0JBQUMsb0JBQUQsT0FYRixFQVlFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLHlDQURGLEVBSUUsb0JBQUMsY0FBRCxPQUpGLENBWkYsQ0FITSxDQUFSO0FBd0JEOzs7aUNBRVk7QUFDWCxXQUFLRSxhQUFMO0FBRU0sVUFBQXJCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNBcUIsY0FEQSxHQUNpQixLQUFLQyxpQkFBTCxFQURqQjtBQUFBLFVBRUFuQixPQUZBLEdBRVVrQixjQUZWO0FBQUEsVUFHRXBCLE9BSEYsR0FHY0YsS0FIZCxDQUdFRSxPQUhGO0FBS04sV0FBS3NCLFVBQUwsQ0FBZ0JwQixPQUFoQjtBQUNBLFdBQUtxQixVQUFMLENBQWdCdkIsT0FBaEI7QUFFQSxXQUFLaUIsWUFBTDtBQUNEOzs7bUNBRXFCTyxLLEVBQU9WLFUsRUFBWTtBQUN2QyxVQUFNVyxXQUFXLEdBQUdsQyxPQUFPLENBQUNtQyxjQUFSLENBQXVCRixLQUF2QixFQUE4QlYsVUFBOUIsQ0FBcEI7QUFFQVcsTUFBQUEsV0FBVyxDQUFDRSxVQUFaO0FBRUEsYUFBT0YsV0FBUDtBQUNEOzs7O0VBM0V1QmxDLE87O0FBOEUxQnFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEMsV0FBZCxFQUEyQjtBQUN6QmlDLEVBQUFBLE9BQU8sRUFBRSxLQURnQjtBQUV6QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRk0sQ0FBM0I7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvdG9rZW5zJyksXG4gICAgICBFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jbGFzcyBFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gdGhpcy5nZXRJbml0aWFsQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcjtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZVZpZXc7XG4iXX0=