'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
    _inherits(FlorenceLexer, _CommonLexer);

    function FlorenceLexer() {
        _classCallCheck(this, FlorenceLexer);

        return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
    }

    _createClass(FlorenceLexer, [{
        key: 'linesFromContent',
        value: function linesFromContent(content, context) {
            context = context || new Context(false); ///

            var lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, context);

            return lines;
        }
    }], [{
        key: 'fromNothing',
        value: function fromNothing() {
            var rules = Rules.fromGrammar(grammar),
                gallinaLexer = new FlorenceLexer(rules, Line);

            return gallinaLexer;
        }
    }]);

    return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImdhbGxpbmFMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxXQUFSLENBRmQ7QUFBQSxJQUdJRyxRQUFRSCxRQUFRLGlCQUFSLENBSFo7QUFBQSxJQUlJSSxjQUFjSixRQUFRLGlCQUFSLENBSmxCOztJQU1NSyxhOzs7Ozs7Ozs7Ozt5Q0FDYUMsTyxFQUFTQyxPLEVBQVM7QUFDakNBLHNCQUFVQSxXQUFXLElBQUlOLE9BQUosQ0FBWSxLQUFaLENBQXJCLENBRGlDLENBQ1M7O0FBRTFDLGdCQUFJTyx1SUFBK0JGLE9BQS9CLEVBQXdDQyxPQUF4QyxDQUFKOztBQUVBLG1CQUFPQyxLQUFQO0FBQ0Q7OztzQ0FFb0I7QUFDbkIsZ0JBQUlDLFFBQVFOLE1BQU1PLFdBQU4sQ0FBa0JSLE9BQWxCLENBQVo7QUFBQSxnQkFDSVMsZUFBZSxJQUFJTixhQUFKLENBQWtCSSxLQUFsQixFQUF5QlYsSUFBekIsQ0FEbkI7O0FBR0EsbUJBQU9ZLFlBQVA7QUFDRDs7OztFQWR5QlAsVzs7QUFrQjVCUSxPQUFPQyxPQUFQLEdBQWlCUixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChmYWxzZSk7ICAvLy9cclxuXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19