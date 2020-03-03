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

var easy = require('easy');

var InputElement = easy.InputElement;

var EntriesTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(EntriesTextarea, _InputElement);

  function EntriesTextarea() {
    _classCallCheck(this, EntriesTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntriesTextarea).apply(this, arguments));
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
      var value = JSON.stringify(entries, null, '  ');
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
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(EntriesTextarea, properties);
    }
  }]);

  return EntriesTextarea;
}(InputElement);

Object.assign(EntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'entries',
    spellCheck: 'false'
  }
});
module.exports = EntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJFbnRyaWVzVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwiZW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwiZ2V0RW50cmllcyIsImJpbmQiLCJzZXRFbnRyaWVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGU7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQVgsQ0FEaEI7QUFHQSxhQUFPRSxPQUFQO0FBQ0Q7OzsrQkFFVUEsTyxFQUFTO0FBQ2xCLFVBQU1GLEtBQUssR0FBR0csSUFBSSxDQUFDRSxTQUFMLENBQWVILE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FBZDtBQUVBLFdBQUtJLFFBQUwsQ0FBY04sS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFVBQVUsRUFBVkEsVUFETTtBQUVORSxRQUFBQSxVQUFVLEVBQVZBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPWixZQUFZLENBQUNhLGNBQWIsQ0FBNEJaLGVBQTVCLEVBQTZDVyxVQUE3QyxDQUFQO0FBQWtFOzs7O0VBeEIxRVosWTs7QUEyQjlCYyxNQUFNLENBQUNDLE1BQVAsQ0FBY2QsZUFBZCxFQUErQjtBQUM3QmUsRUFBQUEsT0FBTyxFQUFFLFVBRG9CO0FBRTdCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLFNBRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRTtBQUZLO0FBRlUsQ0FBL0I7QUFRQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCAnICAnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RW50cmllcyA9IHRoaXMuc2V0RW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRFbnRyaWVzLFxuICAgICAgc2V0RW50cmllc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhFbnRyaWVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cmllc1RleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZW50cmllcycsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzVGV4dGFyZWE7XG4iXX0=