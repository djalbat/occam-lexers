'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    specialSymbols = require('./specialSymbols'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var ExtendedBNFLexer = function (_CommonLexer) {
  _inherits(ExtendedBNFLexer, _CommonLexer);

  function ExtendedBNFLexer() {
    _classCallCheck(this, ExtendedBNFLexer);

    return _possibleConstructorReturn(this, (ExtendedBNFLexer.__proto__ || Object.getPrototypeOf(ExtendedBNFLexer)).apply(this, arguments));
  }

  _createClass(ExtendedBNFLexer, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var content = grammar,
          ///
      lines = _get(ExtendedBNFLexer.prototype.__proto__ || Object.getPrototypeOf(ExtendedBNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          extendedBNFLexer = new ExtendedBNFLexer(rules, Line);

      return extendedBNFLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var extendedBNFLexer = ExtendedBNFLexer.fromGrammar(grammar);

      return extendedBNFLexer;
    }
  }]);

  return ExtendedBNFLexer;
}(CommonLexer);

module.exports = ExtendedBNFLexer;

ExtendedBNFLexer.grammar = grammar;

ExtendedBNFLexer.specialSymbols = specialSymbols;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImdyYW1tYXIiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJTdHJpbmdUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJjb250ZW50IiwibGluZXMiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsa0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyxRQUFRSCxRQUFRLGlCQUFSLENBSGQ7QUFBQSxJQUlNSSxjQUFjSixRQUFRLGlCQUFSLENBSnBCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxvQ0FBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSx3Q0FBUixDQU54Qjs7SUFRTU8sZ0I7Ozs7Ozs7Ozs7O3FDQUNhTixPLEVBQVM7QUFDeEIsVUFBTU8sVUFBVVAsT0FBaEI7QUFBQSxVQUEwQjtBQUNwQlEsbUpBQStCRCxPQUEvQixDQUROOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7OzRDQUU4QjtBQUM3QixVQUFNQywrQkFBK0JOLFlBQVlPLGdDQUFaLENBQTZDVixPQUE3QyxDQUFyQztBQUFBLFVBQ01XLHdCQUF3QkYsNkJBQTZCRyxNQUE3QixDQUFvQyxDQUMxRFIsWUFBWVMsSUFEOEMsRUFFMURSLGdCQUFnQlEsSUFGMEMsQ0FBcEMsQ0FEOUI7O0FBTUEsYUFBT0YscUJBQVA7QUFDRDs7O2dDQUVrQlgsTyxFQUFTO0FBQzFCLFVBQU1jLFFBQVFaLE1BQU1hLFdBQU4sQ0FBa0JmLE9BQWxCLENBQWQ7QUFBQSxVQUNNZ0IsbUJBQW1CLElBQUlWLGdCQUFKLENBQXFCUSxLQUFyQixFQUE0QmhCLElBQTVCLENBRHpCOztBQUdBLGFBQU9rQixnQkFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLG1CQUFtQlYsaUJBQWlCUyxXQUFqQixDQUE2QmYsT0FBN0IsQ0FBekI7O0FBRUEsYUFBT2dCLGdCQUFQO0FBQ0Q7Ozs7RUE3QjRCYixXOztBQWdDL0JjLE9BQU9DLE9BQVAsR0FBaUJaLGdCQUFqQjs7QUFFQUEsaUJBQWlCTixPQUFqQixHQUEyQkEsT0FBM0I7O0FBRUFNLGlCQUFpQkwsY0FBakIsR0FBa0NBLGNBQWxDIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICAgIHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi9zcGVjaWFsU3ltYm9scycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEV4dGVuZGVkQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZ3JhbW1hciwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBleHRlbmRlZEJORkxleGVyID0gbmV3IEV4dGVuZGVkQk5GTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBleHRlbmRlZEJORkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGV4dGVuZGVkQk5GTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGVkQk5GTGV4ZXI7XHJcblxyXG5FeHRlbmRlZEJORkxleGVyLmdyYW1tYXIgPSBncmFtbWFyO1xyXG5cclxuRXh0ZW5kZWRCTkZMZXhlci5zcGVjaWFsU3ltYm9scyA9IHNwZWNpYWxTeW1ib2xzO1xyXG4iXX0=