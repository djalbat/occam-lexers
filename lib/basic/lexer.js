'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BasicLexer = function (_CommonLexer) {
    _inherits(BasicLexer, _CommonLexer);

    function BasicLexer() {
        _classCallCheck(this, BasicLexer);

        return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
    }

    _createClass(BasicLexer, null, [{
        key: 'fromGrammar',
        value: function fromGrammar(grammar) {
            var rules = Rules.fromGrammar(grammar),
                basicLexer = new BasicLexer(rules, Line);

            return basicLexer;
        }
    }]);

    return BasicLexer;
}(CommonLexer);

module.exports = Lexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJCYXNpY0xleGVyIiwiZ3JhbW1hciIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJiYXNpY0xleGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIkxleGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsUUFBUUQsUUFBUSxpQkFBUixDQURaO0FBQUEsSUFFSUUsY0FBY0YsUUFBUSxpQkFBUixDQUZsQjs7SUFJTUcsVTs7Ozs7Ozs7Ozs7b0NBQ2VDLE8sRUFBUztBQUMxQixnQkFBSUMsUUFBUUosTUFBTUssV0FBTixDQUFrQkYsT0FBbEIsQ0FBWjtBQUFBLGdCQUNJRyxhQUFhLElBQUlKLFVBQUosQ0FBZUUsS0FBZixFQUFzQk4sSUFBdEIsQ0FEakI7O0FBR0EsbUJBQU9RLFVBQVA7QUFDRDs7OztFQU5zQkwsVzs7QUFTekJNLE9BQU9DLE9BQVAsR0FBaUJDLEtBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgdmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgYmFzaWNMZXhlciA9IG5ldyBCYXNpY0xleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGV4ZXI7XHJcbiJdfQ==