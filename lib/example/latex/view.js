'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaTeXLexer = require('../../latex/lexer'),
    ExampleView = require('../../example/view');

var LaTeXExampleView = function (_ExampleView) {
  _inherits(LaTeXExampleView, _ExampleView);

  function LaTeXExampleView() {
    _classCallCheck(this, LaTeXExampleView);

    return _possibleConstructorReturn(this, (LaTeXExampleView.__proto__ || Object.getPrototypeOf(LaTeXExampleView)).apply(this, arguments));
  }

  _createClass(LaTeXExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = LaTeXLexer; ///

      return Lexer;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'LaTeX lexer example';

      return title;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '';

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(LaTeXExampleView, properties);
    }
  }]);

  return LaTeXExampleView;
}(ExampleView);

Object.assign(LaTeXExampleView, {
  defaultProperties: {
    className: 'latex'
  }
});

module.exports = LaTeXExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2xhdGV4L3ZpZXcuanMiXSwibmFtZXMiOlsiTGFUZVhMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlVmlldyIsIkxhVGVYRXhhbXBsZVZpZXciLCJMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxtQkFBUixDQUFuQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7O0lBR01FLGdCOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVFKLFVBQWQsQ0FEUyxDQUNpQjs7QUFFMUIsYUFBT0ksS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxRQUFRLHFCQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxpQkFBaUIsRUFBdkI7O0FBRUEsYUFBT0EsY0FBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPTCxZQUFZTSxjQUFaLENBQTJCTCxnQkFBM0IsRUFBNkNJLFVBQTdDLENBQVA7QUFBaUU7Ozs7RUFuQnhFTCxXOztBQXNCL0JPLE9BQU9DLE1BQVAsQ0FBY1AsZ0JBQWQsRUFBZ0M7QUFDOUJRLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFcsQ0FBaEM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJYLGdCQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMYVRlWExleGVyID0gcmVxdWlyZSgnLi4vLi4vbGF0ZXgvbGV4ZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNsYXNzIExhVGVYRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gTGFUZVhMZXhlcjsgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9ICdMYVRlWCBsZXhlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoTGFUZVhFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKExhVGVYRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdsYXRleCdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGFUZVhFeGFtcGxlVmlldztcbiJdfQ==