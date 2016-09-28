'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialToken = require('../common/token/special'),
    ParseableToken = require('../common/token/parseable');

var specialTokenRegExp = /(!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|)/;

var SpecialTokens = function () {
  function SpecialTokens() {
    _classCallCheck(this, SpecialTokens);
  }

  _createClass(SpecialTokens, null, [{
    key: 'pass',
    value: function pass(line) {
      var tokens = line.getTokens();

      tokens = tokens.reduce(function (tokens, token) {
        if (token instanceof ParseableToken) {
          var content = token.getContent(),
              contentTokens = tokensFromContent(content, line);

          tokens = tokens.concat(contentTokens);
        } else {
          tokens.push(token);
        }

        return tokens;
      }, []);

      line.setTokens(tokens);
    }
  }]);

  return SpecialTokens;
}();

module.exports = SpecialTokens;

function tokensFromContent(content, line) {
  var contents = content.split(specialTokenRegExp),
      tokens = contents.reduce(function (tokens, content) {
    if (content !== '') {
      var contentIsSpecial = content.search(specialTokenRegExp) == 0;

      if (contentIsSpecial) {
        var significantToken = new SpecialToken(content, line);

        tokens.push(significantToken);
      } else {
        var parseableToken = new ParseableToken(content);

        tokens.push(parseableToken);
      }
    }

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NwZWNpYWxUb2tlbnMuanMiXSwibmFtZXMiOlsiU3BlY2lhbFRva2VuIiwicmVxdWlyZSIsIlBhcnNlYWJsZVRva2VuIiwic3BlY2lhbFRva2VuUmVnRXhwIiwiU3BlY2lhbFRva2VucyIsImxpbmUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwiY29uY2F0IiwicHVzaCIsInNldFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZW50cyIsInNwbGl0IiwiY29udGVudElzU3BlY2lhbCIsInNlYXJjaCIsInNpZ25pZmljYW50VG9rZW4iLCJwYXJzZWFibGVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEseUJBQVIsQ0FBbkI7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsMkJBQVIsQ0FEckI7O0FBR0EsSUFBSUUscUJBQXFCLDZKQUF6Qjs7SUFFTUMsYTs7Ozs7Ozt5QkFDUUMsSSxFQUFNO0FBQ2hCLFVBQUlDLFNBQVNELEtBQUtFLFNBQUwsRUFBYjs7QUFFQUQsZUFBU0EsT0FBT0UsTUFBUCxDQUFjLFVBQVNGLE1BQVQsRUFBaUJHLEtBQWpCLEVBQXdCO0FBQzdDLFlBQUlBLGlCQUFpQlAsY0FBckIsRUFBcUM7QUFDbkMsY0FBSVEsVUFBVUQsTUFBTUUsVUFBTixFQUFkO0FBQUEsY0FDSUMsZ0JBQWdCQyxrQkFBa0JILE9BQWxCLEVBQTJCTCxJQUEzQixDQURwQjs7QUFHQUMsbUJBQVNBLE9BQU9RLE1BQVAsQ0FBY0YsYUFBZCxDQUFUO0FBQ0QsU0FMRCxNQUtPO0FBQ0xOLGlCQUFPUyxJQUFQLENBQVlOLEtBQVo7QUFDRDs7QUFFRCxlQUFPSCxNQUFQO0FBQ0QsT0FYUSxFQVdOLEVBWE0sQ0FBVDs7QUFhQUQsV0FBS1csU0FBTCxDQUFlVixNQUFmO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQjs7QUFFQSxTQUFTUyxpQkFBVCxDQUEyQkgsT0FBM0IsRUFBb0NMLElBQXBDLEVBQTBDO0FBQ3hDLE1BQUljLFdBQVdULFFBQVFVLEtBQVIsQ0FBY2pCLGtCQUFkLENBQWY7QUFBQSxNQUNJRyxTQUFTYSxTQUFTWCxNQUFULENBQWdCLFVBQVNGLE1BQVQsRUFBaUJJLE9BQWpCLEVBQTBCO0FBQ2pELFFBQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsVUFBSVcsbUJBQW9CWCxRQUFRWSxNQUFSLENBQWVuQixrQkFBZixLQUFzQyxDQUE5RDs7QUFFQSxVQUFJa0IsZ0JBQUosRUFBc0I7QUFDcEIsWUFBSUUsbUJBQW1CLElBQUl2QixZQUFKLENBQWlCVSxPQUFqQixFQUEwQkwsSUFBMUIsQ0FBdkI7O0FBRUFDLGVBQU9TLElBQVAsQ0FBWVEsZ0JBQVo7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFJQyxpQkFBaUIsSUFBSXRCLGNBQUosQ0FBbUJRLE9BQW5CLENBQXJCOztBQUVBSixlQUFPUyxJQUFQLENBQVlTLGNBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9sQixNQUFQO0FBQ0QsR0FoQlEsRUFnQk4sRUFoQk0sQ0FEYjs7QUFtQkEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6InNwZWNpYWxUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgU3BlY2lhbFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NwZWNpYWwnKSxcclxuICAgIFBhcnNlYWJsZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3BhcnNlYWJsZScpO1xyXG5cclxudmFyIHNwZWNpYWxUb2tlblJlZ0V4cCA9IC8oIXwlfCYmfCZ8QHx+fFxcKFxcKXxcXCh8XFwpfFxcKnxcXCtcXCt8XFwrfCx8XFwuXFwofFxcLlxcLnxcXC58XFxcXFxcL3xcXC9cXFxcfFxcL3w6Onw6PHw6PXw6Pnw6fDt8PC0+fD4tPnw8LXwtPnwtfDw6fDw9fDw+fDx8PT58PV9EfD18Pj18PnxcXD98XFw/PXxcXFt8XFxdfFxcXnxcXHt8XFx9fFxcfFxcfHxcXHwtfFxcfCkvO1xyXG5cclxuY2xhc3MgU3BlY2lhbFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MobGluZSkge1xyXG4gICAgdmFyIHRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcbiAgICBcclxuICAgIHRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbikge1xyXG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWFibGVUb2tlbikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgICBjb250ZW50VG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoY29udGVudFRva2Vucyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNwZWNpYWxUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XHJcbiAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdChzcGVjaWFsVG9rZW5SZWdFeHApLFxyXG4gICAgICB0b2tlbnMgPSBjb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBjb250ZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICB2YXIgY29udGVudElzU3BlY2lhbCA9IChjb250ZW50LnNlYXJjaChzcGVjaWFsVG9rZW5SZWdFeHApID09IDApO1xyXG5cclxuICAgICAgICAgIGlmIChjb250ZW50SXNTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gbmV3IFNwZWNpYWxUb2tlbihjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBhcnNlYWJsZVRva2VuID0gbmV3IFBhcnNlYWJsZVRva2VuKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgdG9rZW5zLnB1c2gocGFyc2VhYmxlVG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbiJdfQ==