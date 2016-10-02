'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rules = require('../common/rules');

var Lexer = function () {
  function Lexer(rules) {
    _classCallCheck(this, Lexer);

    this.rules = rules;
  }

  _createClass(Lexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content, this.rules);

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
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          lexer = new Lexer(rules);

      return lexer;
    }
  }]);

  return Lexer;
}();

module.exports = Lexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIlJ1bGVzIiwiTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJsZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFFBQVFELFFBQVEsaUJBQVIsQ0FEWjs7SUFHTUUsSztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O3FDQUVnQkMsTyxFQUFTO0FBQ3hCLFVBQUlDLFdBQVdELFFBQVFFLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0osT0FBVCxFQUFrQjtBQUNyQyxZQUFJSyxPQUFPVixLQUFLVyxXQUFMLENBQWlCTixPQUFqQixFQUEwQixLQUFLRCxLQUEvQixDQUFYOztBQUVBLGVBQU9NLElBQVA7QUFDRCxPQUpvQixDQUluQkUsSUFKbUIsQ0FJZCxJQUpjLENBQWIsQ0FEWjs7QUFPQSxhQUFPSixLQUFQO0FBQ0Q7OztzQ0FFaUJILE8sRUFBUztBQUN6QixVQUFJRyxRQUFRLEtBQUtLLGdCQUFMLENBQXNCUixPQUF0QixDQUFaO0FBQUEsVUFDSVMsU0FBU04sTUFBTU8sTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQzNDLFlBQUlNLGFBQWFOLEtBQUtPLFNBQUwsRUFBakI7O0FBRUFILGlCQUFTQSxPQUFPSSxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPRixNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7OztnQ0FFa0JLLE8sRUFBUztBQUMxQixVQUFJZixRQUFRRixNQUFNa0IsV0FBTixDQUFrQkQsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lFLFFBQVEsSUFBSWxCLEtBQUosQ0FBVUMsS0FBVixDQURaOztBQUdBLGFBQU9pQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKTtcclxuXHJcbmNsYXNzIExleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgdGhpcy5ydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xyXG4gICAgICAgICAgdmFyIGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xyXG5cclxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGxleGVyID0gbmV3IExleGVyKHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gbGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xyXG4iXX0=