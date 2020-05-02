"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var ExampleView = require("../../example/view"),
    FlorenceLexer = require("../../florence/lexer"),
    defaultLexicalPattern = require("../../florence/defaultLexicalPattern");

var FlorenceExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  var _super = _createSuper(FlorenceExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _super.apply(this, arguments);
  }

  _createClass(FlorenceExampleView, [{
    key: "getTokens",
    value: function getTokens() {
      var entries = this.getEntries();
      var custom = "^(?:".concat(defaultLexicalPattern, ")");
      entries = [{
        "custom": custom
      }].concat(_toConsumableArray(entries));
      var Lexer = this.getLexer(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "getLexer",
    value: function getLexer() {
      var Lexer = FlorenceLexer; ///

      return Lexer;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = "Florence lexer example";
      return title;
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = "";
      return initialContent;
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: "florence"
  }
});
module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsIkZsb3JlbmNlRXhhbXBsZVZpZXciLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImN1c3RvbSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxvQkFBRCxDQUEzQjtBQUFBLElBQ01DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBRDdCO0FBQUEsSUFFTUUscUJBQXFCLEdBQUdGLE9BQU8sQ0FBQyxzQ0FBRCxDQUZyQzs7SUFJTUcsbUI7Ozs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFJQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFkO0FBRUEsVUFBTUMsTUFBTSxpQkFBVUoscUJBQVYsTUFBWjtBQUVBRSxNQUFBQSxPQUFPLElBQUs7QUFBRSxrQkFBV0U7QUFBYixPQUFMLDRCQUErQkYsT0FBL0IsRUFBUDtBQUVBLFVBQU1HLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQURoQjtBQUFBLFVBRU1DLEtBQUssR0FBR0osS0FBSyxDQUFDSyxXQUFOLENBQWtCUixPQUFsQixDQUZkO0FBQUEsVUFHTVMsTUFBTSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUwsT0FBZixDQUhmO0FBS0EsYUFBT0ksTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTixLQUFLLEdBQUdOLGFBQWQsQ0FEUyxDQUNxQjs7QUFFOUIsYUFBT00sS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNUSxLQUFLLEdBQUcsd0JBQWQ7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBRUEsYUFBT0EsY0FBUDtBQUNEOzs7O0VBaEMrQmpCLFc7O0FBbUNsQ2tCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZixtQkFBZCxFQUFtQztBQUNqQ2dCLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQURjLENBQW5DO0FBTUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLG1CQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFeGFtcGxlVmlldyA9IHJlcXVpcmUoXCIuLi8uLi9leGFtcGxlL3ZpZXdcIiksXG4gICAgICBGbG9yZW5jZUxleGVyID0gcmVxdWlyZShcIi4uLy4uL2Zsb3JlbmNlL2xleGVyXCIpLFxuICAgICAgZGVmYXVsdExleGljYWxQYXR0ZXJuID0gcmVxdWlyZShcIi4uLy4uL2Zsb3JlbmNlL2RlZmF1bHRMZXhpY2FsUGF0dGVyblwiKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGxldCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCk7XG5cbiAgICBjb25zdCBjdXN0b20gPSBgXig/OiR7ZGVmYXVsdExleGljYWxQYXR0ZXJufSlgO1xuXG4gICAgZW50cmllcyA9IFsgeyBcImN1c3RvbVwiIDogY3VzdG9tIH0sIC4uLmVudHJpZXMgXTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBcIkZsb3JlbmNlIGxleGVyIGV4YW1wbGVcIjtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGVWaWV3O1xuIl19