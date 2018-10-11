'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    key: 'getTokens',
    value: function getTokens() {
      var entries = this.getEntries(),
          content = this.getContent(),
          bnfLexer = BNFLexer.fromEntries(entries),
          tokens = bnfLexer.tokenise(content);

      return tokens;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'BNF lexer example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(BNFExampleView.prototype.__proto__ || Object.getPrototypeOf(BNFExampleView.prototype), 'initialise', this).call(this);

      var entries = BNFLexer.entries;


      this.setEntries(entries);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQk5GRXhhbXBsZVZpZXciLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYm5mTGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwidGl0bGUiLCJzZXRFbnRyaWVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxpQkFBUixDQUFqQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7O0lBR01FLGM7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsVUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsVUFBVSxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsV0FBV1IsU0FBU1MsV0FBVCxDQUFxQkwsT0FBckIsQ0FGakI7QUFBQSxVQUdNTSxTQUFTRixTQUFTRyxRQUFULENBQWtCTCxPQUFsQixDQUhmOztBQUtBLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUUsUUFBUSxtQkFBZDs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYOztBQURXLFVBR0hSLE9BSEcsR0FHU0osUUFIVCxDQUdISSxPQUhHOzs7QUFLWCxXQUFLUyxVQUFMLENBQWdCVCxPQUFoQjtBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFBRSxhQUFPWixZQUFZYSxjQUFaLENBQTJCWixjQUEzQixFQUEyQ1csVUFBM0MsQ0FBUDtBQUErRDs7OztFQXhCeEVaLFc7O0FBMkI3QmMsT0FBT0MsTUFBUCxDQUFjZCxjQUFkLEVBQThCO0FBQzVCZSxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURTLENBQTlCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCbEIsY0FBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQk5GTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi9ibmYvbGV4ZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNsYXNzIEJORkV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBibmZMZXhlciA9IEJORkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0JORiBsZXhlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZSgpO1xuXG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBCTkZMZXhlcjtcblxuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==