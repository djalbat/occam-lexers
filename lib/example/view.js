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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRGl2IiwiVG9rZW5zVGV4dGFyZWEiLCJFbnRyaWVzVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlckRpdiIsIkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJnZXRMZXhlciIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRUb2tlbnMiLCJzZXRUb2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdldFRpdGxlIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImdldEluaXRpYWxDb250ZW50Iiwic2V0Q29udGVudCIsInNldEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUQxQjs7QUFHTSxJQUFFRSxPQUFGLEdBQWNILElBQWQsQ0FBRUcsT0FBRjtBQUFBLElBQ0VDLFdBREYsR0FDa0JGLFVBRGxCLENBQ0VFLFdBREY7O0FBR04sSUFBTUMsY0FBYyxHQUFHSixPQUFPLENBQUMsMEJBQUQsQ0FBOUI7QUFBQSxJQUNNSyxlQUFlLEdBQUdMLE9BQU8sQ0FBQywyQkFBRCxDQUQvQjtBQUFBLElBRU1NLGVBQWUsR0FBR04sT0FBTyxDQUFDLDJCQUFELENBRi9CO0FBQUEsSUFHTU8sdUJBQXVCLEdBQUdQLE9BQU8sQ0FBQyxxQ0FBRCxDQUh2Qzs7SUFLTVEsVzs7Ozs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFVBRU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRmhCO0FBQUEsVUFHTUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLFdBQU4sQ0FBa0JMLE9BQWxCLENBSGQ7QUFBQSxVQUlNTSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixDQUFlTCxPQUFmLENBSmY7QUFNQSxhQUFPSSxNQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUk7QUFDRixZQUFNQSxNQUFNLEdBQUcsS0FBS0UsU0FBTCxFQUFmO0FBRUEsYUFBS0MsU0FBTCxDQUFlSCxNQUFmO0FBQ0QsT0FKRCxDQUlFLE9BQU9JLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLGFBQUtHLFdBQUw7QUFDRDtBQUNGOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRHJCO0FBR0EsYUFBUSxjQUVOLGdDQUFLSCxLQUFMLENBRk0sZUFHTjtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0Usb0JBQUMsV0FBRCxxQkFDRSwwQ0FERixlQUlFLG9CQUFDLGVBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVFO0FBQTFCLFFBSkYsZUFLRSwwQ0FMRixlQVFFLG9CQUFDLGVBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVBO0FBQTFCLFFBUkYsQ0FERixlQVdFLG9CQUFDLHVCQUFELE9BWEYsZUFZRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0UseUNBREYsZUFJRSxvQkFBQyxjQUFELE9BSkYsQ0FaRixDQUhNLENBQVI7QUF3QkQ7OzsrQkFFVUgsVSxFQUFZO0FBQ3JCLFdBQUtLLGFBQUw7QUFFTSxVQUFBckIsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBUjtBQUFBLFVBQ0FxQixjQURBLEdBQ2lCLEtBQUtDLGlCQUFMLEVBRGpCO0FBQUEsVUFFQW5CLE9BRkEsR0FFVWtCLGNBRlY7QUFBQSxVQUdFcEIsT0FIRixHQUdjRixLQUhkLENBR0VFLE9BSEY7QUFLTixXQUFLc0IsVUFBTCxDQUFnQnBCLE9BQWhCO0FBQ0EsV0FBS3FCLFVBQUwsQ0FBZ0J2QixPQUFoQjtBQUVBLFdBQUtpQixZQUFMO0FBQ0Q7Ozs4QkFFZ0JPLEssRUFBT1YsVSxFQUFZO0FBQ2xDLFVBQU1XLFdBQVcsR0FBR2xDLE9BQU8sQ0FBQ21DLFNBQVIsQ0FBa0JGLEtBQWxCLEVBQXlCVixVQUF6QixDQUFwQjtBQUVBVyxNQUFBQSxXQUFXLENBQUNFLFVBQVosQ0FBdUJiLFVBQXZCO0FBRUEsYUFBT1csV0FBUDtBQUNEOzs7O0VBekV1QmxDLE87O0FBNEUxQnFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEMsV0FBZCxFQUEyQjtBQUN6QmlDLEVBQUFBLE9BQU8sRUFBRSxLQURnQjtBQUV6QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRk0sQ0FBM0I7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoXCJlYXN5XCIpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoXCJlYXN5LWxheW91dFwiKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZURpdiB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgVG9rZW5zVGV4dGFyZWEgPSByZXF1aXJlKFwiLi9jb21tb24vdGV4dGFyZWEvdG9rZW5zXCIpLFxuICAgICAgRW50cmllc1RleHRhcmVhID0gcmVxdWlyZShcIi4vY29tbW9uL3RleHRhcmVhL2VudHJpZXNcIiksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKFwiLi9jb21tb24vdGV4dGFyZWEvY29udGVudFwiKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyRGl2ID0gcmVxdWlyZShcIi4vY29tbW9uL2Rpdi9zcGxpaXRlci92ZXJ0aWNhbC9tYWluXCIpO1xuXG5jbGFzcyBFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IHRoaXMuZ2V0SW5pdGlhbENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXI7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRFbnRyaWVzKGVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6IFwiZGl2XCIsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcImV4YW1wbGVcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlVmlldztcbiJdfQ==