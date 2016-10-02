'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules');

var rules = Rules.fromGrammar(grammar);

var Lexer = function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
  }

  _createClass(Lexer, null, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      context = context || new Context(0); ///

      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content, context, rules);

        return line;
      });

      return lines;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content, context) {
      var lines = Lexer.linesFromContent(content, context),
          tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return Lexer;
}();

module.exports = Lexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImdyYW1tYXIiLCJSdWxlcyIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsUUFBUUgsUUFBUSxpQkFBUixDQUhaOztBQUtBLElBQUlJLFFBQVFELE1BQU1FLFdBQU4sQ0FBa0JILE9BQWxCLENBQVo7O0lBRU1JLEs7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLE8sRUFBUztBQUN4Q0EsZ0JBQVVBLFdBQVcsSUFBSVAsT0FBSixDQUFZLENBQVosQ0FBckIsQ0FEd0MsQ0FDRjs7QUFFdEMsVUFBSVEsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU9kLEtBQUtlLFdBQUwsQ0FBaUJQLE9BQWpCLEVBQTBCQyxPQUExQixFQUFtQ0osS0FBbkMsQ0FBWDs7QUFFQSxlQUFPUyxJQUFQO0FBQ0QsT0FKTyxDQURaOztBQU9BLGFBQU9GLEtBQVA7QUFDRDs7O3NDQUV3QkosTyxFQUFTQyxPLEVBQVM7QUFDekMsVUFBSUcsUUFBUUwsTUFBTVMsZ0JBQU4sQ0FBdUJSLE9BQXZCLEVBQWdDQyxPQUFoQyxDQUFaO0FBQUEsVUFDSVEsU0FBU0wsTUFBTU0sTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJILElBQWpCLEVBQXVCO0FBQzNDLFlBQUlLLGFBQWFMLEtBQUtNLFNBQUwsRUFBakI7O0FBRUFILGlCQUFTQSxPQUFPSSxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPRixNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCaEIsS0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKTtcclxuXHJcbnZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuY2xhc3MgTGV4ZXIge1xyXG4gIHN0YXRpYyBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBsaW5lcyA9IExleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCksXHJcbiAgICAgICAgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xyXG4gICAgICAgICAgdmFyIGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xyXG5cclxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMZXhlcjtcclxuXHJcbiJdfQ==