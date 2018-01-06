'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    MetaJSONLine = require('./line'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIk1ldGFKU09OTGluZSIsIkNvbW1vbkxleGVyIiwiTWV0YUpTT05MZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsInBsYWluTGV4ZXIiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxRQUFSLENBRHJCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjs7SUFJTUcsYTs7Ozs7Ozs7Ozs7Z0NBQ2VKLE8sRUFBUztBQUMxQixVQUFNSyxRQUFRRixZQUFZRyxnQkFBWixDQUE2Qk4sT0FBN0IsQ0FBZDtBQUFBLFVBQ01PLGFBQWEsSUFBSUgsYUFBSixDQUFrQkMsS0FBbEIsRUFBeUJILFlBQXpCLENBRG5COztBQUdBLGFBQU9LLFVBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxhQUFhSCxjQUFjSSxXQUFkLENBQTBCUixPQUExQixDQUFuQjs7QUFFQSxhQUFPTyxVQUFQO0FBQ0Q7Ozs7RUFaeUJKLFc7O0FBZTVCTSxPQUFPQyxNQUFQLENBQWNOLGFBQWQsRUFBNkI7QUFDM0JKLFdBQVNBO0FBRGtCLENBQTdCOztBQUlBVyxPQUFPQyxPQUFQLEdBQWlCUixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgTWV0YUpTT05MaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBNZXRhSlNPTkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBwbGFpbkxleGVyID0gbmV3IE1ldGFKU09OTGV4ZXIocnVsZXMsIE1ldGFKU09OTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIHBsYWluTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBwbGFpbkxleGVyID0gTWV0YUpTT05MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oTWV0YUpTT05MZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09OTGV4ZXI7XHJcbiJdfQ==