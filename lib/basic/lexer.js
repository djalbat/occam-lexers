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

module.exports = BasicLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJCYXNpY0xleGVyIiwiZ3JhbW1hciIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJiYXNpY0xleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFFBQVFELFFBQVEsaUJBQVIsQ0FEWjtBQUFBLElBRUlFLGNBQWNGLFFBQVEsaUJBQVIsQ0FGbEI7O0lBSU1HLFU7Ozs7Ozs7Ozs7O29DQUNlQyxPLEVBQVM7QUFDMUIsZ0JBQUlDLFFBQVFKLE1BQU1LLFdBQU4sQ0FBa0JGLE9BQWxCLENBQVo7QUFBQSxnQkFDSUcsYUFBYSxJQUFJSixVQUFKLENBQWVFLEtBQWYsRUFBc0JOLElBQXRCLENBRGpCOztBQUdBLG1CQUFPUSxVQUFQO0FBQ0Q7Ozs7RUFOc0JMLFc7O0FBU3pCTSxPQUFPQyxPQUFQLEdBQWlCTixVQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEJhc2ljTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljTGV4ZXI7XHJcbiJdfQ==