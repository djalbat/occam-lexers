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
        key: 'linesFromContent',
        value: function linesFromContent(content, context) {
            var inComment = false;

            context = context || new Context(inComment); ///

            var lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, context);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJpbkNvbW1lbnQiLCJsaW5lcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsY0FBY0gsUUFBUSxpQkFBUixDQUhsQjs7SUFLTUksYTs7Ozs7Ozs7Ozs7eUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDLGdCQUFJQyxZQUFZLEtBQWhCOztBQUVBRCxzQkFBVUEsV0FBVyxJQUFJTCxPQUFKLENBQVlNLFNBQVosQ0FBckIsQ0FIaUMsQ0FHYTs7QUFFOUMsZ0JBQUlDLHVJQUErQkgsT0FBL0IsRUFBd0NDLE9BQXhDLENBQUo7O0FBRUEsbUJBQU9FLEtBQVA7QUFDRDs7O21EQUVpQztBQUFFLG1CQUFPTCxZQUFZTSx3QkFBWixDQUFxQ1AsT0FBckMsQ0FBUDtBQUF1RDs7O3NDQUV0RTtBQUNuQixnQkFBSVEsUUFBUVAsWUFBWVEsZ0JBQVosQ0FBNkJULE9BQTdCLENBQVo7QUFBQSxnQkFDSVUsZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JNLEtBQWxCLEVBQXlCWCxJQUF6QixDQURwQjs7QUFHQSxtQkFBT2EsYUFBUDtBQUNEOzs7O0VBbEJ5QlQsVzs7QUFxQjVCVSxPQUFPQyxPQUFQLEdBQWlCVixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChpbkNvbW1lbnQpOyAgLy8vXHJcblxyXG4gICAgdmFyIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIl19