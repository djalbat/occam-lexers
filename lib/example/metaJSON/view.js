'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaJSONLexer = require('../../metaJSON/lexer'),
    ExampleView = require('../../example/view');

var MetaJSONExampleView = function (_ExampleView) {
  _inherits(MetaJSONExampleView, _ExampleView);

  function MetaJSONExampleView() {
    _classCallCheck(this, MetaJSONExampleView);

    return _possibleConstructorReturn(this, (MetaJSONExampleView.__proto__ || Object.getPrototypeOf(MetaJSONExampleView)).apply(this, arguments));
  }

  _createClass(MetaJSONExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = MetaJSONLexer; ///

      return Lexer;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Meta JSON lexer example';

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
      return ExampleView.fromProperties(MetaJSONExampleView, properties);
    }
  }]);

  return MetaJSONExampleView;
}(ExampleView);

Object.assign(MetaJSONExampleView, {
  defaultProperties: {
    className: 'meta-json'
  }
});

module.exports = MetaJSONExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL21ldGFKU09OL3ZpZXcuanMiXSwibmFtZXMiOlsiTWV0YUpTT05MZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlVmlldyIsIk1ldGFKU09ORXhhbXBsZVZpZXciLCJMZXhlciIsInRpdGxlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxvQkFBUixDQURwQjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsUUFBUUosYUFBZCxDQURTLENBQ29COztBQUU3QixhQUFPSSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLFFBQVEseUJBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGlCQUFpQixFQUF2Qjs7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9MLFlBQVlNLGNBQVosQ0FBMkJMLG1CQUEzQixFQUFnREksVUFBaEQsQ0FBUDtBQUFvRTs7OztFQW5CeEVMLFc7O0FBc0JsQ08sT0FBT0MsTUFBUCxDQUFjUCxtQkFBZCxFQUFtQztBQUNqQ1EscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYyxDQUFuQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlgsbUJBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1ldGFKU09OTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi9tZXRhSlNPTi9sZXhlcicpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKTtcblxuY2xhc3MgTWV0YUpTT05FeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBNZXRhSlNPTkxleGVyOyAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ01ldGEgSlNPTiBsZXhlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoTWV0YUpTT05FeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFKU09ORXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhLWpzb24nXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09ORXhhbXBsZVZpZXc7XG4iXX0=