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
  },
  ignoredProperties: ['onKeyUp']
});

module.exports = EntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRW50cmllc1RleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwib25LZXlVcCIsIm9uIiwidmFsdWUiLCJnZXRWYWx1ZSIsImVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldEVudHJpZXMiLCJiaW5kIiwic2V0RW50cmllcyIsInByb3BlcnRpZXMiLCJlbnRyaWVzVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJyZWFkT25seSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsZTs7O0FBQ0osMkJBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxZQUFyQyxFQUFtRDtBQUFBOztBQUFBLGtJQUMzQ0YsUUFEMkMsRUFDakNDLGFBRGlDOztBQUdqRCxVQUFLRSxPQUFMLENBQWFELFlBQWI7QUFIaUQ7QUFJbEQ7Ozs7NEJBRU9BLFksRUFBYztBQUNwQixXQUFLRSxFQUFMLENBQVEsT0FBUixFQUFpQkYsWUFBakI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUcsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxVQUFVQyxLQUFLQyxLQUFMLENBQVdKLEtBQVgsQ0FEaEI7O0FBR0EsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVVBLE8sRUFBUztBQUNsQixVQUFNRixRQUFRRyxLQUFLRSxTQUFMLENBQWVILE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FBZDs7QUFFQSxXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sYUFBYSxLQUFLQSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFuQjtBQUFBLFVBQ01DLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7O0FBR0EsYUFBUTtBQUNORCw4QkFETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQzFCLFVBQUVaLE9BQUYsR0FBY1ksVUFBZCxDQUFFWixPQUFGO0FBQUEsVUFDQUQsWUFEQSxHQUNlQyxPQURmO0FBQUEsVUFFQWEsZUFGQSxHQUVrQmxCLGFBQWFtQixjQUFiLENBQTRCbEIsZUFBNUIsRUFBNkNnQixVQUE3QyxFQUF5RGIsWUFBekQsQ0FGbEI7OztBQUlOLGFBQU9jLGVBQVA7QUFDRDs7OztFQXhDMkJsQixZOztBQTJDOUJvQixPQUFPQyxNQUFQLENBQWNwQixlQUFkLEVBQStCO0FBQzdCcUIsV0FBUyxVQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXLFNBRE07QUFFakJDLGdCQUFZLEtBRks7QUFHakJDLGNBQVU7QUFITyxHQUZVO0FBTzdCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFQVSxDQUEvQjs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQjVCLGVBQWpCIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSBvbktleVVwLCAvLy9cbiAgICAgICAgICBlbnRyaWVzVGV4dGFyZWEgPSBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRW50cmllc1RleHRhcmVhLCBwcm9wZXJ0aWVzLCBrZXlVcEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGVudHJpZXNUZXh0YXJlYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHJpZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2VudHJpZXMnLFxuICAgIHNwZWxsY2hlY2s6IGZhbHNlLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH0sXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uS2V5VXAnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXNUZXh0YXJlYTtcbiJdfQ==