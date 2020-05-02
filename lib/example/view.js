'use strict';

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

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableDiv = easyLayout.SizeableDiv;

var TokensTextarea = require('./common/textarea/tokens'),
    EntriesTextarea = require('./common/textarea/entries'),
    ContentTextarea = require('./common/textarea/content'),
    MainVerticalSplitterDiv = require('./common/div/spliiter/vertical/main');

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
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});
module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRGl2IiwiVG9rZW5zVGV4dGFyZWEiLCJFbnRyaWVzVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlckRpdiIsIkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJnZXRMZXhlciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRUb2tlbnMiLCJoaWRlRXJyb3IiLCJzZXRUb2tlbnMiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyVG9rZW5zIiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0RW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBRDFCOztBQUdNLElBQUVFLE9BQUYsR0FBY0gsSUFBZCxDQUFFRyxPQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkYsVUFEbEIsQ0FDRUUsV0FERjs7QUFHTixJQUFNQyxjQUFjLEdBQUdKLE9BQU8sQ0FBQywwQkFBRCxDQUE5QjtBQUFBLElBQ01LLGVBQWUsR0FBR0wsT0FBTyxDQUFDLDJCQUFELENBRC9CO0FBQUEsSUFFTU0sZUFBZSxHQUFHTixPQUFPLENBQUMsMkJBQUQsQ0FGL0I7QUFBQSxJQUdNTyx1QkFBdUIsR0FBR1AsT0FBTyxDQUFDLHFDQUFELENBSHZDOztJQUtNUSxXOzs7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFGaEI7QUFBQSxVQUdNQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkwsT0FBbEIsQ0FIZDtBQUFBLFVBSU1NLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVMLE9BQWYsQ0FKZjtBQU1BLGFBQU9JLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLE1BQU0sR0FBRyxLQUFLRSxTQUFMLEVBQWY7QUFFQSxhQUFLQyxTQUFMO0FBRUEsYUFBS0MsU0FBTCxDQUFlSixNQUFmO0FBQ0QsT0FORCxDQU1FLE9BQU9LLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURyQjtBQUdBLGFBQVEsY0FFTixnQ0FBS0gsS0FBTCxDQUZNLGVBR047QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLFdBQUQscUJBQ0UsMENBREYsZUFJRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFRTtBQUExQixRQUpGLGVBS0UsMENBTEYsZUFRRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQVJGLENBREYsZUFXRSxvQkFBQyx1QkFBRCxPQVhGLGVBWUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFLHlDQURGLGVBSUUsb0JBQUMsY0FBRCxPQUpGLENBWkYsQ0FITSxDQUFSO0FBd0JEOzs7K0JBRVVILFUsRUFBWTtBQUNyQixXQUFLSyxhQUFMO0FBRU0sVUFBQXJCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNBcUIsY0FEQSxHQUNpQixLQUFLQyxpQkFBTCxFQURqQjtBQUFBLFVBRUFuQixPQUZBLEdBRVVrQixjQUZWO0FBQUEsVUFHRXBCLE9BSEYsR0FHY0YsS0FIZCxDQUdFRSxPQUhGO0FBS04sV0FBS3NCLFVBQUwsQ0FBZ0JwQixPQUFoQjtBQUNBLFdBQUtxQixVQUFMLENBQWdCdkIsT0FBaEI7QUFFQSxXQUFLaUIsWUFBTDtBQUNEOzs7OEJBRWdCTyxLLEVBQU9WLFUsRUFBWTtBQUNsQyxVQUFNVyxXQUFXLEdBQUdsQyxPQUFPLENBQUNtQyxTQUFSLENBQWtCRixLQUFsQixFQUF5QlYsVUFBekIsQ0FBcEI7QUFFQVcsTUFBQUEsV0FBVyxDQUFDRSxVQUFaLENBQXVCYixVQUF2QjtBQUVBLGFBQU9XLFdBQVA7QUFDRDs7OztFQTNFdUJsQyxPOztBQThFMUJxQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hDLFdBQWQsRUFBMkI7QUFDekJpQyxFQUFBQSxPQUFPLEVBQUUsS0FEZ0I7QUFFekJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZNLENBQTNCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJDLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVEaXYgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IFRva2Vuc1RleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvdG9rZW5zJyksXG4gICAgICBFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlckRpdiA9IHJlcXVpcmUoJy4vY29tbW9uL2Rpdi9zcGxpaXRlci92ZXJ0aWNhbC9tYWluJyk7XG5cbmNsYXNzIEV4YW1wbGVWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IHRoaXMuZ2V0SW5pdGlhbENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXI7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRFbnRyaWVzKGVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2V4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19