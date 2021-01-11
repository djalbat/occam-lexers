"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EntriesTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(EntriesTextarea, _Textarea);

  var _super = _createSuper(EntriesTextarea);

  function EntriesTextarea() {
    _classCallCheck(this, EntriesTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(EntriesTextarea, [{
    key: "getEntries",
    value: function getEntries() {
      var value = this.getValue(),
          entries = JSON.parse(value);
      return entries;
    }
  }, {
    key: "setEntries",
    value: function setEntries(entries) {
      var value = JSON.stringify(entries, null, "  ");
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getEntries = this.getEntries.bind(this),
          setEntries = this.setEntries.bind(this);
      return {
        getEntries: getEntries,
        setEntries: setEntries
      };
    }
  }]);

  return EntriesTextarea;
}(_textarea["default"]);

exports["default"] = EntriesTextarea;

_defineProperty(EntriesTextarea, "defaultProperties", {
  className: "entries",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiRW50cmllc1RleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldEVudHJpZXMiLCJiaW5kIiwic2V0RW50cmllcyIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7OztpQ0FDTjtBQUNYLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBRGhCO0FBR0EsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVVBLE8sRUFBUztBQUNsQixVQUFNRixLQUFLLEdBQUdHLElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxPQUFmLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLENBQWQ7QUFFQSxXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sVUFBVSxHQUFHLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQW5CO0FBQUEsVUFDTUMsVUFBVSxHQUFHLEtBQUtBLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBRG5CO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxVQUFVLEVBQVZBLFVBRE07QUFFTkUsUUFBQUEsVUFBVSxFQUFWQTtBQUZNLE9BQVI7QUFJRDs7OztFQXRCMENDLG9COzs7O2dCQUF4QlgsZSx1QkF3QlE7QUFDekJZLEVBQUFBLFNBQVMsRUFBRSxTQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYSxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdfQ==