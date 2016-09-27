'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeparatorToken = require('../separator');

var ColonSeparatorToken = function (_SeparatorToken) {
  _inherits(ColonSeparatorToken, _SeparatorToken);

  function ColonSeparatorToken(str) {
    _classCallCheck(this, ColonSeparatorToken);

    return _possibleConstructorReturn(this, (ColonSeparatorToken.__proto__ || Object.getPrototypeOf(ColonSeparatorToken)).call(this, str));
  }

  _createClass(ColonSeparatorToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new ColonSeparatorToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/(^:)\b/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          equals = new ColonSeparatorToken(str);

      return equals;
    }
  }]);

  return ColonSeparatorToken;
}(SeparatorToken);

module.exports = ColonSeparatorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL3NlcGFyYXRvci9jb2xvbi5qcyJdLCJuYW1lcyI6WyJTZXBhcmF0b3JUb2tlbiIsInJlcXVpcmUiLCJDb2xvblNlcGFyYXRvclRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFscyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQWlCQyxRQUFRLGNBQVIsQ0FBckI7O0lBRU1DLG1COzs7QUFDSiwrQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBLHFJQUNUQSxHQURTO0FBRWhCOzs7OzRCQUVPO0FBQ04sVUFBSUEsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRixtQkFBSixDQUF3QkMsR0FBeEIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjLFFBQWQsQ0FBZDs7QUFFQSxVQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlILE1BQU1HLFFBQVEsQ0FBUixDQUFWO0FBQUEsVUFDSUUsU0FBUyxJQUFJTixtQkFBSixDQUF3QkMsR0FBeEIsQ0FEYjs7QUFHQSxhQUFPSyxNQUFQO0FBQ0Q7Ozs7RUF0QitCUixjOztBQXlCbENTLE9BQU9DLE9BQVAsR0FBaUJSLG1CQUFqQiIsImZpbGUiOiJjb2xvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcGFyYXRvclRva2VuID0gcmVxdWlyZSgnLi4vc2VwYXJhdG9yJyk7XG5cbmNsYXNzIENvbG9uU2VwYXJhdG9yVG9rZW4gZXh0ZW5kcyBTZXBhcmF0b3JUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHN1cGVyKHN0cik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKTtcblxuICAgIHJldHVybiBuZXcgQ29sb25TZXBhcmF0b3JUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyheOilcXGIvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IG1hdGNoZXNbMV0sXG4gICAgICAgIGVxdWFscyA9IG5ldyBDb2xvblNlcGFyYXRvclRva2VuKHN0cik7XG5cbiAgICByZXR1cm4gZXF1YWxzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb25TZXBhcmF0b3JUb2tlbjtcblxuIl19