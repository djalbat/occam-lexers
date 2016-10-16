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

var rules = Rules.fromGrammar(grammar);

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
            var gallinaLexer = new FlorenceLexer(rules, Line);

            return gallinaLexer;
        }
    }]);

    return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsImdhbGxpbmFMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxXQUFSLENBRmQ7QUFBQSxJQUdJRyxRQUFRSCxRQUFRLGlCQUFSLENBSFo7QUFBQSxJQUlJSSxjQUFjSixRQUFRLGlCQUFSLENBSmxCOztBQU1BLElBQUlLLFFBQVFGLE1BQU1HLFdBQU4sQ0FBa0JKLE9BQWxCLENBQVo7O0lBRU1LLGE7Ozs7Ozs7Ozs7O3lDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0Esc0JBQVVBLFdBQVcsSUFBSVIsT0FBSixDQUFZLEtBQVosQ0FBckIsQ0FEaUMsQ0FDUzs7QUFFMUMsZ0JBQUlTLHVJQUErQkYsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsbUJBQU9DLEtBQVA7QUFDRDs7O3NDQUVvQjtBQUNuQixnQkFBSUMsZUFBZSxJQUFJSixhQUFKLENBQWtCRixLQUFsQixFQUF5Qk4sSUFBekIsQ0FBbkI7O0FBRUEsbUJBQU9ZLFlBQVA7QUFDRDs7OztFQWJ5QlAsVzs7QUFpQjVCUSxPQUFPQyxPQUFQLEdBQWlCTixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbnZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KGZhbHNlKTsgIC8vL1xyXG5cclxuICAgIHZhciBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIGdhbGxpbmFMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19