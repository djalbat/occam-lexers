'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var EntriesTextarea = function (_InputElement) {
  _inherits(EntriesTextarea, _InputElement);

  function EntriesTextarea(selector, changeHandler, keyUpHandler) {
    _classCallCheck(this, EntriesTextarea);

    var _this = _possibleConstructorReturn(this, (EntriesTextarea.__proto__ || Object.getPrototypeOf(EntriesTextarea)).call(this, selector, changeHandler));

    _this.onKeyUp(keyUpHandler);
    return _this;
  }

  _createClass(EntriesTextarea, [{
    key: 'onKeyUp',
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: 'getEntries',
    value: function getEntries() {
      var entries = void 0;

      try {
        var value = this.getValue();

        entries = JSON.parse(value);
      } catch (error) {
        entries = {};
      }

      return entries;
    }
  }, {
    key: 'setEntries',
    value: function setEntries(entries) {
      var value = JSON.stringify(entries, null, '  ');

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getEntries = this.getEntries.bind(this),
          setEntries = this.setEntries.bind(this);

      return {
        getEntries: getEntries,
        setEntries: setEntries
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onKeyUp = properties.onKeyUp,
          keyUpHandler = onKeyUp,
          entriesTextarea = InputElement.fromProperties(EntriesTextarea, properties, keyUpHandler);


      return entriesTextarea;
    }
  }]);

  return EntriesTextarea;
}(InputElement);

Object.assign(EntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'entries',
    spellcheck: false,
    readOnly: true
  }
});

module.exports = EntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRW50cmllc1RleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwib25LZXlVcCIsIm9uIiwiZW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwiZ2V0RW50cmllcyIsImJpbmQiLCJzZXRFbnRyaWVzIiwicHJvcGVydGllcyIsImVudHJpZXNUZXh0YXJlYSIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxjaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsZTs7O0FBQ0osMkJBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxZQUFyQyxFQUFtRDtBQUFBOztBQUFBLGtJQUMzQ0YsUUFEMkMsRUFDakNDLGFBRGlDOztBQUdqRCxVQUFLRSxPQUFMLENBQWFELFlBQWI7QUFIaUQ7QUFJbEQ7Ozs7NEJBRU9BLFksRUFBYztBQUNwQixXQUFLRSxFQUFMLENBQVEsT0FBUixFQUFpQkYsWUFBakI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUcsZ0JBQUo7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkOztBQUVBRixrQkFBVUcsS0FBS0MsS0FBTCxDQUFXSCxLQUFYLENBQVY7QUFDRCxPQUpELENBSUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RMLGtCQUFVLEVBQVY7QUFDRDs7QUFFRCxhQUFPQSxPQUFQO0FBQ0Q7OzsrQkFFVUEsTyxFQUFTO0FBQ2xCLFVBQU1DLFFBQVFFLEtBQUtHLFNBQUwsQ0FBZU4sT0FBZixFQUF3QixJQUF4QixFQUE4QixJQUE5QixDQUFkOztBQUVBLFdBQUtPLFFBQUwsQ0FBY04sS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxhQUFhLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQW5CO0FBQUEsVUFDTUMsYUFBYSxLQUFLQSxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQURuQjs7QUFHQSxhQUFRO0FBQ05ELDhCQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRWIsT0FBRixHQUFjYSxVQUFkLENBQUViLE9BQUY7QUFBQSxVQUNBRCxZQURBLEdBQ2VDLE9BRGY7QUFBQSxVQUVBYyxlQUZBLEdBRWtCbkIsYUFBYW9CLGNBQWIsQ0FBNEJuQixlQUE1QixFQUE2Q2lCLFVBQTdDLEVBQXlEZCxZQUF6RCxDQUZsQjs7O0FBSU4sYUFBT2UsZUFBUDtBQUNEOzs7O0VBL0MyQm5CLFk7O0FBa0Q5QnFCLE9BQU9DLE1BQVAsQ0FBY3JCLGVBQWQsRUFBK0I7QUFDN0JzQixXQUFTLFVBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVcsU0FETTtBQUVqQkMsZ0JBQVksS0FGSztBQUdqQkMsY0FBVTtBQUhPO0FBRlUsQ0FBL0I7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUI1QixlQUFqQiIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGtleVVwSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25LZXlVcChrZXlVcEhhbmRsZXIpO1xuICB9XG5cbiAgb25LZXlVcChrZXlVcEhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdrZXlVcCcsIGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIGxldCBlbnRyaWVzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGVudHJpZXMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHNldEVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RW50cmllcyA9IHRoaXMuZ2V0RW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEVudHJpZXMgPSB0aGlzLnNldEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RW50cmllcyxcbiAgICAgIHNldEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IG9uS2V5VXAsIC8vL1xuICAgICAgICAgIGVudHJpZXNUZXh0YXJlYSA9IElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhFbnRyaWVzVGV4dGFyZWEsIHByb3BlcnRpZXMsIGtleVVwSGFuZGxlcik7XG5cbiAgICByZXR1cm4gZW50cmllc1RleHRhcmVhO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cmllc1RleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZW50cmllcycsXG4gICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllc1RleHRhcmVhO1xuIl19