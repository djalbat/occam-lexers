'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

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
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7O0lBRU1DLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkgsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCSSxPLEVBQVNDLE8sRUFBUztBQUNqQyxVQUFJQyxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNMLE9BQVQsRUFBa0I7QUFDckMsWUFBSU0sT0FBTyxLQUFLVixJQUFMLENBQVVXLFdBQVYsQ0FBc0JQLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3QyxLQUFLRixLQUE3QyxDQUFYOztBQUVBLGVBQU9PLElBQVA7QUFDRCxPQUpvQixDQUluQkUsSUFKbUIsQ0FJZCxJQUpjLENBQWIsQ0FEWjs7QUFPQSxhQUFPSixLQUFQO0FBQ0Q7OztzQ0FFaUJKLE8sRUFBUztBQUN6QixVQUFJSSxRQUFRLEtBQUtLLGdCQUFMLENBQXNCVCxPQUF0QixDQUFaO0FBQUEsVUFDSVUsU0FBU04sTUFBTU8sTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQzNDLFlBQUlNLGFBQWFOLEtBQUtPLFNBQUwsRUFBakI7O0FBRUFILGlCQUFTQSxPQUFPSSxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPRixNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCbEIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=