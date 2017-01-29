'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
    _inherits(FlorenceLexer, _CommonLexer);

    function FlorenceLexer() {
        _classCallCheck(this, FlorenceLexer);

        return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
    }

    _createClass(FlorenceLexer, [{
        key: 'linesFromContents',
        value: function linesFromContents(contents, context) {
            var inComment = false;

            context = context || new Context(inComment); ///

            var lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContents', this).call(this, contents, context);

            return lines;
        }
    }], [{
        key: 'getSignificantTokenTypes',
        value: function getSignificantTokenTypes() {
            return CommonLexer.getSignificantTokenTypes(grammar);
        }
    }, {
        key: 'fromNothing',
        value: function fromNothing() {
            var rules = CommonLexer.rulesFromGrammar(grammar),
                florenceLexer = new FlorenceLexer(rules, Line);

            return florenceLexer;
        }
    }]);

    return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudHMiLCJjb250ZXh0IiwiaW5Db21tZW50IiwibGluZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJydWxlcyIsInJ1bGVzRnJvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLGNBQWNILFFBQVEsaUJBQVIsQ0FIbEI7O0lBS01JLGE7Ozs7Ozs7Ozs7OzBDQUNjQyxRLEVBQVVDLE8sRUFBUztBQUNuQyxnQkFBSUMsWUFBWSxLQUFoQjs7QUFFQUQsc0JBQVVBLFdBQVcsSUFBSUwsT0FBSixDQUFZTSxTQUFaLENBQXJCLENBSG1DLENBR1c7O0FBRTlDLGdCQUFJQyx3SUFBZ0NILFFBQWhDLEVBQTBDQyxPQUExQyxDQUFKOztBQUVBLG1CQUFPRSxLQUFQO0FBQ0Q7OzttREFFaUM7QUFBRSxtQkFBT0wsWUFBWU0sd0JBQVosQ0FBcUNQLE9BQXJDLENBQVA7QUFBdUQ7OztzQ0FFdEU7QUFDbkIsZ0JBQUlRLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCVCxPQUE3QixDQUFaO0FBQUEsZ0JBQ0lVLGdCQUFnQixJQUFJUixhQUFKLENBQWtCTSxLQUFsQixFQUF5QlgsSUFBekIsQ0FEcEI7O0FBR0EsbUJBQU9hLGFBQVA7QUFDRDs7OztFQWxCeUJULFc7O0FBcUI1QlUsT0FBT0MsT0FBUCxHQUFpQlYsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpIHtcclxuICAgIHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChpbkNvbW1lbnQpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSB7IHJldHVybiBDb21tb25MZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgdmFyIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=