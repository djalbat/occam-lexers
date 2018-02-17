'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLine = require('./line'),
    entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    specialSymbols = require('./specialSymbols'),
    tokensUtilities = require('../utilities/tokens');

var tokensFromLines = tokensUtilities.tokensFromLines;

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'tokensFromBNF',
    value: function tokensFromBNF(bnf) {
      var content = bnf,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content),
          tokens = tokensFromLines(lines);

      return tokens;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, BNFLine);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromEntries(entries);

      return bnfLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiQk5GTGluZSIsInJlcXVpcmUiLCJlbnRyaWVzIiwiUnVsZXMiLCJDb21tb25MZXhlciIsInNwZWNpYWxTeW1ib2xzIiwidG9rZW5zVXRpbGl0aWVzIiwidG9rZW5zRnJvbUxpbmVzIiwiQk5GTGV4ZXIiLCJibmYiLCJjb250ZW50IiwibGluZXMiLCJ0b2tlbnMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiYm5mTGV4ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxRQUFSLENBQWhCO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUUsUUFBUUYsUUFBUSxpQkFBUixDQUZkO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxpQkFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLGtCQUFrQkwsUUFBUSxxQkFBUixDQUx4Qjs7SUFPUU0sZSxHQUFvQkQsZSxDQUFwQkMsZTs7SUFFRkMsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLEcsRUFBSztBQUNqQixVQUFNQyxVQUFVRCxHQUFoQjtBQUFBLFVBQXNCO0FBQ2hCRSxtSUFBK0JELE9BQS9CLENBRE47QUFBQSxVQUVNRSxTQUFTTCxnQkFBZ0JJLEtBQWhCLENBRmY7O0FBSUEsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRWtCVixPLEVBQVM7QUFDMUIsVUFBTVcsUUFBUVYsTUFBTVcsV0FBTixDQUFrQlosT0FBbEIsQ0FBZDtBQUFBLFVBQ01hLFdBQVcsSUFBSVAsUUFBSixDQUFhSyxLQUFiLEVBQW9CYixPQUFwQixDQURqQjs7QUFHQSxhQUFPZSxRQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsV0FBV1AsU0FBU00sV0FBVCxDQUFxQlosT0FBckIsQ0FBakI7O0FBRUEsYUFBT2EsUUFBUDtBQUNEOzs7O0VBcEJvQlgsVzs7QUF1QnZCWSxPQUFPQyxNQUFQLENBQWNULFFBQWQsRUFBd0I7QUFDdEJOLFdBQVNBLE9BRGE7QUFFdEJHLGtCQUFnQkE7QUFGTSxDQUF4Qjs7QUFLQWEsT0FBT0MsT0FBUCxHQUFpQlgsUUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBCTkZMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgc3BlY2lhbFN5bWJvbHMgPSByZXF1aXJlKCcuL3NwZWNpYWxTeW1ib2xzJyksXHJcbiAgICAgIHRva2Vuc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbnMnKTtcclxuXHJcbmNvbnN0IHsgdG9rZW5zRnJvbUxpbmVzIH0gPSB0b2tlbnNVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBCTkZMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbnNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBibmZMZXhlciA9IG5ldyBCTkZMZXhlcihydWxlcywgQk5GTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gYm5mTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEJORkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllcyxcclxuICBzcGVjaWFsU3ltYm9sczogc3BlY2lhbFN5bWJvbHNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG5cclxuIl19