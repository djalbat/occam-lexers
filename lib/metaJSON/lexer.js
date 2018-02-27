'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    CommentTokens = require('./tokens/comment'),
    EndOfLineTokens = require('./tokens/endOfLine'),
    WhitespaceTokens = require('./tokens/whitespace'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var MetaJSONLexer = function (_CommonLexer) {
  _inherits(MetaJSONLexer, _CommonLexer);

  function MetaJSONLexer() {
    _classCallCheck(this, MetaJSONLexer);

    return _possibleConstructorReturn(this, (MetaJSONLexer.__proto__ || Object.getPrototypeOf(MetaJSONLexer)).apply(this, arguments));
  }

  _createClass(MetaJSONLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          metaJSONLexer = new MetaJSONLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return metaJSONLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return metaJSONLexer.fromEntries(entries);
    }
  }]);

  return MetaJSONLexer;
}(CommonLexer);

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiQ29tbWVudFRva2VucyIsIkVuZE9mTGluZVRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJNZXRhSlNPTkxleGVyIiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwibWV0YUpTT05MZXhlciIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBRnRCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLG9CQUFSLENBSHhCO0FBQUEsSUFJTUksbUJBQW1CSixRQUFRLHFCQUFSLENBSnpCO0FBQUEsSUFLTUssc0JBQXNCTCxRQUFRLHdCQUFSLENBTDVCO0FBQUEsSUFNTU0sMEJBQTBCTixRQUFRLDRCQUFSLENBTmhDOztJQVFNTyxhOzs7Ozs7Ozs7OztnQ0FDZVIsTyxFQUFTO0FBQzFCLFVBQU1TLFFBQVFQLFlBQVlRLGdCQUFaLENBQTZCVixPQUE3QixDQUFkO0FBQUEsVUFDTVcsZ0JBQWdCLElBQUlILGFBQUosQ0FBa0JDLEtBQWxCLEVBQXlCTCxlQUF6QixFQUEwQ0QsYUFBMUMsRUFBeURFLGdCQUF6RCxFQUEyRUMsbUJBQTNFLEVBQWdHQyx1QkFBaEcsQ0FEdEI7O0FBR0EsYUFBT0ksYUFBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT0EsY0FBY0MsV0FBZCxDQUEwQlosT0FBMUIsQ0FBUDtBQUE0Qzs7OztFQVJ6Q0UsVzs7QUFXNUJXLE9BQU9DLE1BQVAsQ0FBY04sYUFBZCxFQUE2QjtBQUMzQlIsV0FBU0E7QUFEa0IsQ0FBN0I7O0FBSUFlLE9BQU9DLE9BQVAsR0FBaUJSLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9lbmRPZkxpbmUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgTWV0YUpTT05MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbWV0YUpTT05MZXhlciA9IG5ldyBNZXRhSlNPTkxleGVyKHJ1bGVzLCBFbmRPZkxpbmVUb2tlbnMsIENvbW1lbnRUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbWV0YUpTT05MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIG1ldGFKU09OTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihNZXRhSlNPTkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05MZXhlcjtcclxuIl19