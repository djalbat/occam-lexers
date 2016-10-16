'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = require('./example'),
    FlorenceLexer = require('../../es6/florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

var FlorenceExample = function (_Example) {
  _inherits(FlorenceExample, _Example);

  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);

    return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).apply(this, arguments));
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      Example.contentTextArea.onChange(function (contextTextAreaValue) {
        Example.updateTokens(contextTextAreaValue, florenceLexer);
      });
    }
  }]);

  return FlorenceExample;
}(Example);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiRmxvcmVuY2VFeGFtcGxlIiwiY29udGVudFRleHRBcmVhIiwib25DaGFuZ2UiLCJjb250ZXh0VGV4dEFyZWFWYWx1ZSIsInVwZGF0ZVRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEcEI7O0FBR0EsSUFBSUUsZ0JBQWdCRCxjQUFjRSxXQUFkLEVBQXBCOztJQUVNQyxlOzs7Ozs7Ozs7OzswQkFDUztBQUNYTCxjQUFRTSxlQUFSLENBQXdCQyxRQUF4QixDQUFpQyxVQUFTQyxvQkFBVCxFQUErQjtBQUM5RFIsZ0JBQVFTLFlBQVIsQ0FBcUJELG9CQUFyQixFQUEyQ0wsYUFBM0M7QUFDRCxPQUZEO0FBR0Q7Ozs7RUFMMkJILE87O0FBUTlCVSxPQUFPQyxPQUFQLEdBQWlCTixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oY29udGV4dFRleHRBcmVhVmFsdWUpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGNvbnRleHRUZXh0QXJlYVZhbHVlLCBmbG9yZW5jZUxleGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==