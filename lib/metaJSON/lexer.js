'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    MetaJSONLine = require('../metaJSON/line'),
    CommonLexer = require('../common/lexer');

var MetaJSONLexer = function (_CommonLexer) {
  _inherits(MetaJSONLexer, _CommonLexer);

  function MetaJSONLexer() {
    _classCallCheck(this, MetaJSONLexer);

    return _possibleConstructorReturn(this, (MetaJSONLexer.__proto__ || Object.getPrototypeOf(MetaJSONLexer)).apply(this, arguments));
  }

  _createClass(MetaJSONLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          plainLexer = new MetaJSONLexer(rules, MetaJSONLine);

      return plainLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var plainLexer = MetaJSONLexer.fromEntries(entries);

      return plainLexer;
    }
  }]);

  return MetaJSONLexer;
}(CommonLexer);

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIk1ldGFKU09OTGluZSIsIkNvbW1vbkxleGVyIiwiTWV0YUpTT05MZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsInBsYWluTGV4ZXIiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxrQkFBUixDQURyQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7O0lBSU1HLGE7Ozs7Ozs7Ozs7O2dDQUNlSixPLEVBQVM7QUFDMUIsVUFBTUssUUFBUUYsWUFBWUcsZ0JBQVosQ0FBNkJOLE9BQTdCLENBQWQ7QUFBQSxVQUNNTyxhQUFhLElBQUlILGFBQUosQ0FBa0JDLEtBQWxCLEVBQXlCSCxZQUF6QixDQURuQjs7QUFHQSxhQUFPSyxVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsYUFBYUgsY0FBY0ksV0FBZCxDQUEwQlIsT0FBMUIsQ0FBbkI7O0FBRUEsYUFBT08sVUFBUDtBQUNEOzs7O0VBWnlCSixXOztBQWU1Qk0sT0FBT0MsTUFBUCxDQUFjTixhQUFkLEVBQTZCO0FBQzNCSixXQUFTQTtBQURrQixDQUE3Qjs7QUFJQVcsT0FBT0MsT0FBUCxHQUFpQlIsYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIE1ldGFKU09OTGluZSA9IHJlcXVpcmUoJy4uL21ldGFKU09OL2xpbmUnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIE1ldGFKU09OTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIHBsYWluTGV4ZXIgPSBuZXcgTWV0YUpTT05MZXhlcihydWxlcywgTWV0YUpTT05MaW5lKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHBsYWluTGV4ZXIgPSBNZXRhSlNPTkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBwbGFpbkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihNZXRhSlNPTkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05MZXhlcjtcclxuIl19