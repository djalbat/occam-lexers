"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

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

var ContentTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(ContentTextarea, _Textarea);

  var _super = _createSuper(ContentTextarea);

  function ContentTextarea() {
    _classCallCheck(this, ContentTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ContentTextarea, [{
    key: "getContent",
    value: function getContent() {
      var value = this.getValue(),
          content = value; ///

      return content;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      var value = content;
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this);
      return {
        getContent: getContent,
        setContent: setContent
      };
    }
  }]);

  return ContentTextarea;
}(_easy.Textarea);

exports["default"] = ContentTextarea;
Object.assign(ContentTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "content",
    spellCheck: "false"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudFRleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRWYWx1ZSIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0Q29udGVudCIsIlRleHRhcmVhIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7O2lDQUNOO0FBQ1gsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsS0FEaEIsQ0FEVyxDQUVZOztBQUV2QixhQUFPRSxPQUFQO0FBQ0Q7OzsrQkFFVUEsTyxFQUFTO0FBQ2xCLFVBQU1GLEtBQUssR0FBR0UsT0FBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFVBQVUsRUFBVkEsVUFETTtBQUVORSxRQUFBQSxVQUFVLEVBQVZBO0FBRk0sT0FBUjtBQUlEOzs7O0VBdEIwQ0MsYzs7O0FBeUI3Q0MsTUFBTSxDQUFDQyxNQUFQLENBQWNWLGVBQWQsRUFBK0I7QUFDN0JXLEVBQUFBLE9BQU8sRUFBRSxVQURvQjtBQUU3QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxTQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUU7QUFGSztBQUZVLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gY29udGVudDtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgc2V0Q29udGVudFxuICAgIH0pO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6IFwidGV4dGFyZWFcIixcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGVudFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59KTtcbiJdfQ==