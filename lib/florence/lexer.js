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
            var significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

            return significantTokenTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudHMiLCJjb250ZXh0IiwiaW5Db21tZW50IiwibGluZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hciIsInJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsY0FBY0gsUUFBUSxpQkFBUixDQUhsQjs7SUFLTUksYTs7Ozs7Ozs7Ozs7MENBQ2NDLFEsRUFBVUMsTyxFQUFTO0FBQ25DLGdCQUFJQyxZQUFZLEtBQWhCOztBQUVBRCxzQkFBVUEsV0FBVyxJQUFJTCxPQUFKLENBQVlNLFNBQVosQ0FBckIsQ0FIbUMsQ0FHVzs7QUFFOUMsZ0JBQUlDLHdJQUFnQ0gsUUFBaEMsRUFBMENDLE9BQTFDLENBQUo7O0FBRUEsbUJBQU9FLEtBQVA7QUFDRDs7O21EQUVpQztBQUNoQyxnQkFBSUMsd0JBQXdCTixZQUFZTyxnQ0FBWixDQUE2Q1IsT0FBN0MsQ0FBNUI7O0FBRUEsbUJBQU9PLHFCQUFQO0FBQ0Q7OztzQ0FFb0I7QUFDbkIsZ0JBQUlFLFFBQVFSLFlBQVlTLGdCQUFaLENBQTZCVixPQUE3QixDQUFaO0FBQUEsZ0JBQ0lXLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCTyxLQUFsQixFQUF5QlosSUFBekIsQ0FEcEI7O0FBR0EsbUJBQU9jLGFBQVA7QUFDRDs7OztFQXRCeUJWLFc7O0FBeUI1QlcsT0FBT0MsT0FBUCxHQUFpQlgsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpIHtcclxuICAgIHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChpbkNvbW1lbnQpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19