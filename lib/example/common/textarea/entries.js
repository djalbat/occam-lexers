'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var EntriesTextarea = function (_InputElement) {
  _inherits(EntriesTextarea, _InputElement);

  function EntriesTextarea() {
    _classCallCheck(this, EntriesTextarea);

    return _possibleConstructorReturn(this, (EntriesTextarea.__proto__ || Object.getPrototypeOf(EntriesTextarea)).apply(this, arguments));
  }

  _createClass(EntriesTextarea, [{
    key: 'getEntries',
    value: function getEntries() {
      var value = this.getValue(),
          entries = JSON.parse(value);

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
      return InputElement.fromProperties(EntriesTextarea, properties, keyUpHandler);
    }
  }]);

  return EntriesTextarea;
}(InputElement);

Object.assign(EntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'entries',
    spellCheck: false,
    readOnly: true
  }
});

module.exports = EntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRW50cmllc1RleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldEVudHJpZXMiLCJiaW5kIiwic2V0RW50cmllcyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGU7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxVQUFVQyxLQUFLQyxLQUFMLENBQVdKLEtBQVgsQ0FEaEI7O0FBR0EsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVVBLE8sRUFBUztBQUNsQixVQUFNRixRQUFRRyxLQUFLRSxTQUFMLENBQWVILE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FBZDs7QUFFQSxXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sYUFBYSxLQUFLQSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFuQjtBQUFBLFVBQ01DLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7O0FBR0EsYUFBUTtBQUNORCw4QkFETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1osYUFBYWEsY0FBYixDQUE0QlosZUFBNUIsRUFBNkNXLFVBQTdDLEVBQXlERSxZQUF6RCxDQUFQO0FBQWdGOzs7O0VBeEJ4RmQsWTs7QUEyQjlCZSxPQUFPQyxNQUFQLENBQWNmLGVBQWQsRUFBK0I7QUFDN0JnQixXQUFTLFVBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVcsU0FETTtBQUVqQkMsZ0JBQVksS0FGSztBQUdqQkMsY0FBVTtBQUhPO0FBRlUsQ0FBL0I7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUJ0QixlQUFqQiIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0RW50cmllcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHNldEVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RW50cmllcyA9IHRoaXMuZ2V0RW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEVudHJpZXMgPSB0aGlzLnNldEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RW50cmllcyxcbiAgICAgIHNldEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRW50cmllc1RleHRhcmVhLCBwcm9wZXJ0aWVzLCBrZXlVcEhhbmRsZXIpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cmllc1RleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZW50cmllcycsXG4gICAgc3BlbGxDaGVjazogZmFsc2UsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllc1RleHRhcmVhO1xuIl19