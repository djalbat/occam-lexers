'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSSLexer = require('../../css/lexer'),
    ExampleView = require('../../example/view');

var CSSExampleView = function (_ExampleView) {
  _inherits(CSSExampleView, _ExampleView);

  function CSSExampleView() {
    _classCallCheck(this, CSSExampleView);

    return _possibleConstructorReturn(this, (CSSExampleView.__proto__ || Object.getPrototypeOf(CSSExampleView)).apply(this, arguments));
  }

  _createClass(CSSExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = CSSLexer; ///

      return Lexer;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'CSS lexer example';

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
      return ExampleView.fromProperties(CSSExampleView, properties);
    }
  }]);

  return CSSExampleView;
}(ExampleView);

Object.assign(CSSExampleView, {
  defaultProperties: {
    className: 'css'
  }
});

module.exports = CSSExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Nzcy92aWV3LmpzIl0sIm5hbWVzIjpbIkNTU0xleGVyIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQ1NTRXhhbXBsZVZpZXciLCJMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxpQkFBUixDQUFqQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7O0lBR01FLGM7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsUUFBUUosUUFBZCxDQURTLENBQ2U7O0FBRXhCLGFBQU9JLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBUSxtQkFBZDs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLEVBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT0wsWUFBWU0sY0FBWixDQUEyQkwsY0FBM0IsRUFBMkNJLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUFuQnhFTCxXOztBQXNCN0JPLE9BQU9DLE1BQVAsQ0FBY1AsY0FBZCxFQUE4QjtBQUM1QlEscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEUyxDQUE5Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlgsY0FBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ1NTTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi9jc3MvbGV4ZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNsYXNzIENTU0V4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IENTU0xleGVyOyAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0NTUyBsZXhlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQ1NTRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2NzcydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTRXhhbXBsZVZpZXc7XG4iXX0=