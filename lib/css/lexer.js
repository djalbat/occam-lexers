'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var CSSLexer = function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _possibleConstructorReturn(this, (CSSLexer.__proto__ || Object.getPrototypeOf(CSSLexer)).apply(this, arguments));
  }

  _createClass(CSSLexer, [{
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(CSSLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CSSLexer, entries);
    }
  }]);

  return CSSLexer;
}(CommonLexer);

Object.assign(CSSLexer, {
  entries: entries
});

module.exports = CSSLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIkNTU0xleGVyIiwidG9rZW5zT3JDb250ZW50cyIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7O0lBR01FLFE7Ozs7Ozs7Ozs7OytDQUN1QkMsZ0IsRUFBa0IsQ0FBRTs7O2tDQUUxQjtBQUFFLGFBQU9GLFlBQVlHLFdBQVosQ0FBd0JGLFFBQXhCLENBQVA7QUFBMkM7OztnQ0FFL0NILE8sRUFBUztBQUFFLGFBQU9FLFlBQVlJLFdBQVosQ0FBd0JILFFBQXhCLEVBQWtDSCxPQUFsQyxDQUFQO0FBQW9EOzs7O0VBTDdERSxXOztBQVF2QkssT0FBT0MsTUFBUCxDQUFjTCxRQUFkLEVBQXdCO0FBQ3RCSDtBQURzQixDQUF4Qjs7QUFJQVMsT0FBT0MsT0FBUCxHQUFpQlAsUUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBDU1NMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDU1NMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKENTU0xleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKENTU0xleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ1NTTGV4ZXI7XHJcbiJdfQ==