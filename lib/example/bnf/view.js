'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLexer = require('../../bnf/lexer'),
    ExampleView = require('../../example/view');

var BNFExampleView = function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = BNFLexer; ///

      return Lexer;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'BNF lexer example';

      return title;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var entries = BNFLexer.entries,
          entriesString = JSON.stringify(entries, null, '  '),
          initialContent = entriesString; ///

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(BNFExampleView, properties);
    }
  }]);

  return BNFExampleView;
}(ExampleView);

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQk5GRXhhbXBsZVZpZXciLCJMZXhlciIsInRpdGxlIiwiZW50cmllcyIsImVudHJpZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxpQkFBUixDQUFqQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7O0lBR01FLGM7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsUUFBUUosUUFBZCxDQURTLENBQ2dCOztBQUV6QixhQUFPSSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLFFBQVEsbUJBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ1osVUFBRUMsT0FBRixHQUFjTixRQUFkLENBQUVNLE9BQUY7QUFBQSxVQUNBQyxhQURBLEdBQ2dCQyxLQUFLQyxTQUFMLENBQWVILE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FEaEI7QUFBQSxVQUVBSSxjQUZBLEdBRWlCSCxhQUZqQixDQURZLENBR29COztBQUV0QyxhQUFPRyxjQUFQO0FBQ0Q7OzttQ0FHcUJDLFUsRUFBWTtBQUFFLGFBQU9ULFlBQVlVLGNBQVosQ0FBMkJULGNBQTNCLEVBQTJDUSxVQUEzQyxDQUFQO0FBQStEOzs7O0VBdEJ4RVQsVzs7QUF5QjdCVyxPQUFPQyxNQUFQLENBQWNYLGNBQWQsRUFBOEI7QUFDNUJZLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFMsQ0FBOUI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEJORkxleGVyID0gcmVxdWlyZSgnLi4vLi4vYm5mL2xleGVyJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpO1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnQk5GIGxleGVyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBCTkZMZXhlcixcbiAgICAgICAgICBlbnRyaWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyksXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSBlbnRyaWVzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEJORkV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGVWaWV3O1xuIl19