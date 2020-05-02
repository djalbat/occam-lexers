"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var easylayout = require("easy-layout");

var VerticalSplitterDiv = easylayout.VerticalSplitterDiv;

var MainVerticalSplitterDiv = /*#__PURE__*/function (_VerticalSplitterDiv) {
  _inherits(MainVerticalSplitterDiv, _VerticalSplitterDiv);

  var _super = _createSuper(MainVerticalSplitterDiv);

  function MainVerticalSplitterDiv() {
    _classCallCheck(this, MainVerticalSplitterDiv);

    return _super.apply(this, arguments);
  }

  return MainVerticalSplitterDiv;
}(VerticalSplitterDiv);

Object.assign(MainVerticalSplitterDiv, {
  defaultProperties: {
    className: "main"
  }
});
module.exports = MainVerticalSplitterDiv;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZWFzeWxheW91dCIsInJlcXVpcmUiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiTWFpblZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0lBRVFDLG1CLEdBQXdCRixVLENBQXhCRSxtQjs7SUFFRkMsdUI7Ozs7Ozs7Ozs7OztFQUFnQ0QsbUI7O0FBRXRDRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsdUJBQWQsRUFBdUM7QUFDckNHLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQURrQixDQUF2QztBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLHVCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBlYXN5bGF5b3V0ID0gcmVxdWlyZShcImVhc3ktbGF5b3V0XCIpO1xuXG5jb25zdCB7IFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSA9IGVhc3lsYXlvdXQ7XG5cbmNsYXNzIE1haW5WZXJ0aWNhbFNwbGl0dGVyRGl2IGV4dGVuZHMgVmVydGljYWxTcGxpdHRlckRpdiB7fVxuXG5PYmplY3QuYXNzaWduKE1haW5WZXJ0aWNhbFNwbGl0dGVyRGl2LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcIm1haW5cIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluVmVydGljYWxTcGxpdHRlckRpdjtcbiJdfQ==