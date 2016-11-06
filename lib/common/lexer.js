'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
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
          tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var type = util.typeFromEntry(entry),
            significantTokenType = type; ///

        return significantTokenType;
      });

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwiY29udGV4dCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsIm1hcCIsImxpbmUiLCJmcm9tQ29udGVudCIsImJpbmQiLCJsaW5lc0Zyb21Db250ZW50IiwidG9rZW5zIiwicmVkdWNlIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVudHJ5IiwidHlwZSIsInV0aWwiLCJ0eXBlRnJvbUVudHJ5Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxRQUFRRCxRQUFRLFNBQVIsQ0FEWjs7SUFHTUUsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CSixJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLSSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JLLE8sRUFBU0MsTyxFQUFTO0FBQ2pDLFVBQUlDLFdBQVdGLFFBQVFHLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0wsT0FBVCxFQUFrQjtBQUNyQyxZQUFJTSxPQUFPLEtBQUtYLElBQUwsQ0FBVVksV0FBVixDQUFzQlAsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDLEtBQUtGLEtBQTdDLENBQVg7O0FBRUEsZUFBT08sSUFBUDtBQUNELE9BSm9CLENBSW5CRSxJQUptQixDQUlkLElBSmMsQ0FBYixDQURaOztBQU9BLGFBQU9KLEtBQVA7QUFDRDs7O3NDQUVpQkosTyxFQUFTO0FBQ3pCLFVBQUlJLFFBQVEsS0FBS0ssZ0JBQUwsQ0FBc0JULE9BQXRCLENBQVo7QUFBQSxVQUNJVSxTQUFTTixNQUFNTyxNQUFOLENBQWEsVUFBU0QsTUFBVCxFQUFpQkosSUFBakIsRUFBdUI7QUFDM0MsWUFBSU0sYUFBYU4sS0FBS08sU0FBTCxFQUFqQjs7QUFFQUgsaUJBQVNBLE9BQU9JLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLGVBQU9GLE1BQVA7QUFDRCxPQU5RLEVBTU4sRUFOTSxDQURiOztBQVNBLGFBQU9BLE1BQVA7QUFDRDs7O3FDQUV1QkssTyxFQUFTO0FBQUUsYUFBT2xCLE1BQU1tQixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7MENBRTFDQSxPLEVBQVM7QUFDcEMsVUFBSUUsd0JBQXdCRixRQUFRVixHQUFSLENBQVksVUFBU2EsS0FBVCxFQUFnQjtBQUN0RCxZQUFJQyxPQUFPQyxLQUFLQyxhQUFMLENBQW1CSCxLQUFuQixDQUFYO0FBQUEsWUFDSUksdUJBQXVCSCxJQUQzQixDQURzRCxDQUVwQjs7QUFFbEMsZUFBT0csb0JBQVA7QUFDRCxPQUwyQixDQUE1Qjs7QUFPQSxhQUFPTCxxQkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjFCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoZ3JhbW1hcikge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XHJcbiAgICAgIHZhciB0eXBlID0gdXRpbC50eXBlRnJvbUVudHJ5KGVudHJ5KSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdHlwZTsgIC8vL1xyXG5cclxuICAgICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==