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
      var grammar = ExtendedBNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
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
      var grammar = ExtendedBNFLexer.grammar,
          extendedBNFLexer = ExtendedBNFLexer.fromGrammar(grammar);

      return extendedBNFLexer;
    }
  }]);

  return ExtendedBNFLexer;
}(CommonLexer);

module.exports = ExtendedBNFLexer;

ExtendedBNFLexer.grammar = grammar;

ExtendedBNFLexer.specialSymbols = specialSymbols;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImdyYW1tYXIiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJTdHJpbmdUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJjb250ZW50IiwibGluZXMiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsa0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyxRQUFRSCxRQUFRLGlCQUFSLENBSGQ7QUFBQSxJQUlNSSxjQUFjSixRQUFRLGlCQUFSLENBSnBCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxvQ0FBUixDQUxwQjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSx3Q0FBUixDQU54Qjs7SUFRTU8sZ0I7Ozs7Ozs7Ozs7O3FDQUNhTixPLEVBQVM7QUFDeEIsVUFBTU8sVUFBVVAsT0FBaEI7QUFBQSxVQUEwQjtBQUNwQlEsbUpBQStCRCxPQUEvQixDQUROOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7OzRDQUU4QjtBQUM3QixVQUFNUixVQUFVTSxpQkFBaUJOLE9BQWpDO0FBQUEsVUFDTVMsK0JBQStCTixZQUFZTyxnQ0FBWixDQUE2Q1YsT0FBN0MsQ0FEckM7QUFBQSxVQUVNVyx3QkFBd0JGLDZCQUE2QkcsTUFBN0IsQ0FBb0MsQ0FDMURSLFlBQVlTLElBRDhDLEVBRTFEUixnQkFBZ0JRLElBRjBDLENBQXBDLENBRjlCOztBQU9BLGFBQU9GLHFCQUFQO0FBQ0Q7OztnQ0FFa0JYLE8sRUFBUztBQUMxQixVQUFNYyxRQUFRWixNQUFNYSxXQUFOLENBQWtCZixPQUFsQixDQUFkO0FBQUEsVUFDTWdCLG1CQUFtQixJQUFJVixnQkFBSixDQUFxQlEsS0FBckIsRUFBNEJoQixJQUE1QixDQUR6Qjs7QUFHQSxhQUFPa0IsZ0JBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNaEIsVUFBVU0saUJBQWlCTixPQUFqQztBQUFBLFVBQ01nQixtQkFBbUJWLGlCQUFpQlMsV0FBakIsQ0FBNkJmLE9BQTdCLENBRHpCOztBQUdBLGFBQU9nQixnQkFBUDtBQUNEOzs7O0VBL0I0QmIsVzs7QUFrQy9CYyxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakI7O0FBRUFBLGlCQUFpQk4sT0FBakIsR0FBMkJBLE9BQTNCOztBQUVBTSxpQkFBaUJMLGNBQWpCLEdBQWtDQSxjQUFsQyIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgU3RyaW5nVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBFeHRlbmRlZEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdyYW1tYXIsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEV4dGVuZGVkQk5GTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGV4dGVuZGVkQk5GTGV4ZXIgPSBuZXcgRXh0ZW5kZWRCTkZMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGV4dGVuZGVkQk5GTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gRXh0ZW5kZWRCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGV4dGVuZGVkQk5GTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGVkQk5GTGV4ZXI7XHJcblxyXG5FeHRlbmRlZEJORkxleGVyLmdyYW1tYXIgPSBncmFtbWFyO1xyXG5cclxuRXh0ZW5kZWRCTkZMZXhlci5zcGVjaWFsU3ltYm9scyA9IHNwZWNpYWxTeW1ib2xzO1xyXG4iXX0=