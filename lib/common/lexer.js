'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = this.Line.fromContent(content, context, this.rules);

        return line;
      }.bind(this));

      return lines;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content) {
      var lines = this.linesFromContent(content),
          tokens = tokensFromLines(lines);

      return tokens;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var type = util.typeFromEntry(entry),
            significantTokenType = type; ///

        return significantTokenType;
      });

      significantTokenTypes.unshift('string'); ///

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInVuc2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7QUFBQSxJQUVJRSxRQUFRRixRQUFRLFNBQVIsQ0FGWjs7SUFJTUcsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTCxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLSyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JNLE8sRUFBU0MsTyxFQUFTO0FBQ2pDLFVBQUlDLFdBQVdGLFFBQVFHLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0wsT0FBVCxFQUFrQjtBQUNyQyxZQUFJTSxPQUFPLEtBQUtaLElBQUwsQ0FBVWEsV0FBVixDQUFzQlAsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDLEtBQUtGLEtBQTdDLENBQVg7O0FBRUEsZUFBT08sSUFBUDtBQUNELE9BSm9CLENBSW5CRSxJQUptQixDQUlkLElBSmMsQ0FBYixDQURaOztBQU9BLGFBQU9KLEtBQVA7QUFDRDs7O3NDQUVpQkosTyxFQUFTO0FBQ3pCLFVBQUlJLFFBQVEsS0FBS0ssZ0JBQUwsQ0FBc0JULE9BQXRCLENBQVo7QUFBQSxVQUNJVSxTQUFTQyxnQkFBZ0JQLEtBQWhCLENBRGI7O0FBR0EsYUFBT00sTUFBUDtBQUNEOzs7cUNBRXVCRSxPLEVBQVM7QUFBRSxhQUFPZixNQUFNZ0IsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7OzZDQUV2Q0EsTyxFQUFTO0FBQ3ZDLFVBQUlFLHdCQUF3QkYsUUFBUVAsR0FBUixDQUFZLFVBQVNVLEtBQVQsRUFBZ0I7QUFDdEQsWUFBSUMsT0FBT3BCLEtBQUtxQixhQUFMLENBQW1CRixLQUFuQixDQUFYO0FBQUEsWUFDSUcsdUJBQXVCRixJQUQzQixDQURzRCxDQUVwQjs7QUFFbEMsZUFBT0Usb0JBQVA7QUFDRCxPQUwyQixDQUE1Qjs7QUFPQUosNEJBQXNCSyxPQUF0QixDQUE4QixRQUE5QixFQVJ1QyxDQVFHOztBQUUxQyxhQUFPTCxxQkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnZCLFdBQWpCOztBQUVBLFNBQVNhLGVBQVQsQ0FBeUJQLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlNLFNBQVNOLE1BQU1rQixNQUFOLENBQWEsVUFBU1osTUFBVCxFQUFpQkosSUFBakIsRUFBdUI7QUFDL0MsUUFBSWlCLGFBQWFqQixLQUFLa0IsU0FBTCxFQUFqQjs7QUFFQWQsYUFBU0EsT0FBT2UsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT2IsTUFBUDtBQUNELEdBTlksRUFNVixFQU5VLENBQWI7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgdmFyIGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihlbnRyeSkge1xyXG4gICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcy51bnNoaWZ0KCdzdHJpbmcnKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XHJcbiAgdmFyIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbiJdfQ==