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
  }
});

module.exports = EntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRW50cmllc1RleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwib25LZXlVcCIsIm9uIiwidmFsdWUiLCJnZXRWYWx1ZSIsImVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldEVudHJpZXMiLCJiaW5kIiwic2V0RW50cmllcyIsInByb3BlcnRpZXMiLCJlbnRyaWVzVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGU7OztBQUNKLDJCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFBQTs7QUFBQSxrSUFDM0NGLFFBRDJDLEVBQ2pDQyxhQURpQzs7QUFHakQsVUFBS0UsT0FBTCxDQUFhRCxZQUFiO0FBSGlEO0FBSWxEOzs7OzRCQUVPQSxZLEVBQWM7QUFDcEIsV0FBS0UsRUFBTCxDQUFRLE9BQVIsRUFBaUJGLFlBQWpCO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1HLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsVUFBVUMsS0FBS0MsS0FBTCxDQUFXSixLQUFYLENBRGhCOztBQUdBLGFBQU9FLE9BQVA7QUFDRDs7OytCQUVVQSxPLEVBQVM7QUFDbEIsVUFBTUYsUUFBUUcsS0FBS0UsU0FBTCxDQUFlSCxPQUFmLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLENBQWQ7O0FBRUEsV0FBS0ksUUFBTCxDQUFjTixLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxhQUFhLEtBQUtBLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBRG5COztBQUdBLGFBQVE7QUFDTkQsOEJBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUMxQixVQUFFWixPQUFGLEdBQWNZLFVBQWQsQ0FBRVosT0FBRjtBQUFBLFVBQ0FELFlBREEsR0FDZUMsT0FEZjtBQUFBLFVBRUFhLGVBRkEsR0FFa0JsQixhQUFhbUIsY0FBYixDQUE0QmxCLGVBQTVCLEVBQTZDZ0IsVUFBN0MsRUFBeURiLFlBQXpELENBRmxCOzs7QUFJTixhQUFPYyxlQUFQO0FBQ0Q7Ozs7RUF4QzJCbEIsWTs7QUEyQzlCb0IsT0FBT0MsTUFBUCxDQUFjcEIsZUFBZCxFQUErQjtBQUM3QnFCLFdBQVMsVUFEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVyxTQURNO0FBRWpCQyxnQkFBWSxLQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGVSxDQUEvQjs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQjNCLGVBQWpCIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSBvbktleVVwLCAvLy9cbiAgICAgICAgICBlbnRyaWVzVGV4dGFyZWEgPSBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRW50cmllc1RleHRhcmVhLCBwcm9wZXJ0aWVzLCBrZXlVcEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGVudHJpZXNUZXh0YXJlYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHJpZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2VudHJpZXMnLFxuICAgIHNwZWxsY2hlY2s6IGZhbHNlLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXNUZXh0YXJlYTtcbiJdfQ==