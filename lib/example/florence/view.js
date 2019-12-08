'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleView = require('../../example/view'),
    FlorenceLexer = require('../../florence/lexer'),
    defaultLexicalPattern = require('../../florence/defaultLexicalPattern');

var FlorenceExampleView = function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'getTokens',
    value: function getTokens() {
      var entries = this.getEntries();

      var custom = '^(?:' + defaultLexicalPattern + ')';

      entries = [{ "custom": custom }].concat(_toConsumableArray(entries));

      var Lexer = this.getLexer(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

      return tokens;
    }
  }, {
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = FlorenceLexer; ///

      return Lexer;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Florence lexer example';

      return title;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '';

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsIkZsb3JlbmNlRXhhbXBsZVZpZXciLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImN1c3RvbSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCO0FBQUEsSUFFTUUsd0JBQXdCRixRQUFRLHNDQUFSLENBRjlCOztJQUlNRyxtQjs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDs7QUFFQSxVQUFNQyxrQkFBZ0JKLHFCQUFoQixNQUFOOztBQUVBRSxpQkFBWSxFQUFFLFVBQVdFLE1BQWIsRUFBWiw0QkFBc0NGLE9BQXRDOztBQUVBLFVBQU1HLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsVUFBVSxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsUUFBUUosTUFBTUssV0FBTixDQUFrQlIsT0FBbEIsQ0FGZDtBQUFBLFVBR01TLFNBQVNGLE1BQU1HLFFBQU4sQ0FBZUwsT0FBZixDQUhmOztBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU4sUUFBUU4sYUFBZCxDQURTLENBQ3FCOztBQUU5QixhQUFPTSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1RLFFBQVEsd0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGlCQUFpQixFQUF2Qjs7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9sQixZQUFZbUIsY0FBWixDQUEyQmYsbUJBQTNCLEVBQWdEYyxVQUFoRCxDQUFQO0FBQW9FOzs7O0VBbEN4RWxCLFc7O0FBcUNsQ29CLE9BQU9DLE1BQVAsQ0FBY2pCLG1CQUFkLEVBQW1DO0FBQ2pDa0IscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYyxDQUFuQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQnJCLG1CQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IHJlcXVpcmUoJy4uLy4uL2Zsb3JlbmNlL2xleGVyJyksXG4gICAgICBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuLi8uLi9mbG9yZW5jZS9kZWZhdWx0TGV4aWNhbFBhdHRlcm4nKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGxldCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCk7XG5cbiAgICBjb25zdCBjdXN0b20gPSBgXig/OiR7ZGVmYXVsdExleGljYWxQYXR0ZXJufSlgO1xuXG4gICAgZW50cmllcyA9IFsgeyBcImN1c3RvbVwiIDogY3VzdG9tIH0sIC4uLmVudHJpZXMgXTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnRmxvcmVuY2UgbGV4ZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcnO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEZsb3JlbmNlRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZmxvcmVuY2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZVZpZXc7XG4iXX0=