'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLexer = require('../../basic/lexer'),
    ExampleView = require('../../example/view');

var BasicExampleView = function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'getTokens',
    value: function getTokens() {
      var entries = this.getEntries(),
          content = this.getContent(),
          basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content);

      return tokens;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Basic lexer example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(BasicExampleView.prototype.__proto__ || Object.getPrototypeOf(BasicExampleView.prototype), 'initialise', this).call(this);

      var entries = BasicLexer.entries;


      this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(BasicExampleView, properties);
    }
  }]);

  return BasicExampleView;
}(ExampleView);

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlVmlldyIsIkJhc2ljRXhhbXBsZVZpZXciLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJ0aXRsZSIsInNldEVudHJpZXMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLG1CQUFSLENBQW5CO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxvQkFBUixDQURwQjs7SUFHTUUsZ0I7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsVUFBVSxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsYUFBYVIsV0FBV1MsV0FBWCxDQUF1QkwsT0FBdkIsQ0FGbkI7QUFBQSxVQUdNTSxTQUFTRixXQUFXRyxRQUFYLENBQW9CTCxPQUFwQixDQUhmOztBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUUsUUFBUSxxQkFBZDs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYOztBQURXLFVBR0hSLE9BSEcsR0FHU0osVUFIVCxDQUdISSxPQUhHOzs7QUFLWCxXQUFLUyxVQUFMLENBQWdCVCxPQUFoQjtBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFBRSxhQUFPWixZQUFZYSxjQUFaLENBQTJCWixnQkFBM0IsRUFBNkNXLFVBQTdDLENBQVA7QUFBaUU7Ozs7RUF4QnhFWixXOztBQTJCL0JjLE9BQU9DLE1BQVAsQ0FBY2QsZ0JBQWQsRUFBZ0M7QUFDOUJlLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFcsQ0FBaEM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJsQixnQkFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQmFzaWNMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljL2xleGVyJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0Jhc2ljIGxleGVyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IEJhc2ljTGV4ZXI7XG5cbiAgICB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdiYXNpYydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlVmlldztcbiJdfQ==