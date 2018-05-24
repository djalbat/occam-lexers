'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var LaTeXLexer = function (_CommonLexer) {
  _inherits(LaTeXLexer, _CommonLexer);

  function LaTeXLexer() {
    _classCallCheck(this, LaTeXLexer);

    return _possibleConstructorReturn(this, (LaTeXLexer.__proto__ || Object.getPrototypeOf(LaTeXLexer)).apply(this, arguments));
  }

  _createClass(LaTeXLexer, [{
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(LaTeXLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(LaTeXLexer, entries);
    }
  }]);

  return LaTeXLexer;
}(CommonLexer);

Object.assign(LaTeXLexer, {
  entries: entries
});

module.exports = LaTeXLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiTGFUZVhMZXhlciIsInRva2Vuc09yQ29udGVudHMiLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCOztJQUdNRSxVOzs7Ozs7Ozs7OzttREFDMkJDLGdCLEVBQWtCLENBQUU7OztrQ0FFOUI7QUFBRSxhQUFPRixZQUFZRyxXQUFaLENBQXdCRixVQUF4QixDQUFQO0FBQTZDOzs7Z0NBRWpESCxPLEVBQVM7QUFBRSxhQUFPRSxZQUFZSSxXQUFaLENBQXdCSCxVQUF4QixFQUFvQ0gsT0FBcEMsQ0FBUDtBQUFzRDs7OztFQUw3REUsVzs7QUFRekJLLE9BQU9DLE1BQVAsQ0FBY0wsVUFBZCxFQUEwQjtBQUN4QkgsV0FBU0E7QUFEZSxDQUExQjs7QUFJQVMsT0FBT0MsT0FBUCxHQUFpQlAsVUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBMYVRlWExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHByb2Nlc3NSZWd1bGFyRXhwcmVzc2lvblRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhMYVRlWExleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoTGFUZVhMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihMYVRlWExleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGFUZVhMZXhlcjtcclxuIl19