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

var easy = require('easy');

var Textarea = easy.Textarea;

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
}(Textarea);

Object.assign(ContentTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'content',
    spellCheck: 'false'
  }
});
module.exports = ContentTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50Iiwic2V0VmFsdWUiLCJnZXRDb250ZW50IiwiYmluZCIsInNldENvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFEsR0FBYUYsSSxDQUFiRSxROztJQUVGQyxlOzs7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsS0FEaEIsQ0FEVyxDQUVZOztBQUV2QixhQUFPRSxPQUFQO0FBQ0Q7OzsrQkFFVUEsTyxFQUFTO0FBQ2xCLFVBQU1GLEtBQUssR0FBR0UsT0FBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFVBQVUsRUFBVkEsVUFETTtBQUVORSxRQUFBQSxVQUFVLEVBQVZBO0FBRk0sT0FBUjtBQUlEOzs7O0VBdEIyQlIsUTs7QUF5QjlCUyxNQUFNLENBQUNDLE1BQVAsQ0FBY1QsZUFBZCxFQUErQjtBQUM3QlUsRUFBQUEsT0FBTyxFQUFFLFVBRG9CO0FBRTdCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLFNBRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRTtBQUZLO0FBRlUsQ0FBL0I7QUFRQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixlQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeTtcblxuY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gY29udGVudDtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgc2V0Q29udGVudFxuICAgIH0pO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnY29udGVudCcsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50VGV4dGFyZWE7XG4iXX0=