'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var NewlineToken = function (_Token) {
  _inherits(NewlineToken, _Token);

  function NewlineToken(line) {
    _classCallCheck(this, NewlineToken);

    var str = undefined;

    return _possibleConstructorReturn(this, (NewlineToken.__proto__ || Object.getPrototypeOf(NewlineToken)).call(this, str, line));
  }

  _createClass(NewlineToken, null, [{
    key: 'fromNothing',
    value: function fromNothing(line) {
      var newLineToken = new NewlineToken(line);

      return newLineToken;
    }
  }]);

  return NewlineToken;
}(Token);

module.exports = NewlineToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9uZXdsaW5lLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIk5ld2xpbmVUb2tlbiIsImxpbmUiLCJzdHIiLCJ1bmRlZmluZWQiLCJuZXdMaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsb0JBQVIsQ0FBWjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBSUMsTUFBTUMsU0FBVjs7QUFEZ0IsdUhBR1ZELEdBSFUsRUFHTEQsSUFISztBQUlqQjs7OztnQ0FFa0JBLEksRUFBTTtBQUN2QixVQUFJRyxlQUFlLElBQUlKLFlBQUosQ0FBaUJDLElBQWpCLENBQW5COztBQUVBLGFBQU9HLFlBQVA7QUFDRDs7OztFQVh3Qk4sSzs7QUFjM0JPLE9BQU9DLE9BQVAsR0FBaUJOLFlBQWpCIiwiZmlsZSI6Im5ld2xpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBOZXdsaW5lVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGxpbmUpIHtcbiAgICB2YXIgc3RyID0gdW5kZWZpbmVkO1xuICAgIFxuICAgIHN1cGVyKHN0ciwgbGluZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm90aGluZyhsaW5lKSB7XG4gICAgdmFyIG5ld0xpbmVUb2tlbiA9IG5ldyBOZXdsaW5lVG9rZW4obGluZSk7XG4gICAgXG4gICAgcmV0dXJuIG5ld0xpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5ld2xpbmVUb2tlbjtcbiJdfQ==