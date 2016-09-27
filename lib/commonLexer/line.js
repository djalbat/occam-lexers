'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

var CommonLine = function () {
  function CommonLine(content) {
    _classCallCheck(this, CommonLine);

    this.content = content;

    this.tokens = [];

    this.html = undefined; ///
  }

  _createClass(CommonLine, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }, {
    key: 'update',
    value: function update() {
      this.html = '';

      this.tokens.forEach(function (token) {
        var tokenHTML = token.html();

        this.html += tokenHTML;
      }.bind(this));
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb25MZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiQ29tbW9uTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJodG1sIiwidW5kZWZpbmVkIiwidG9rZW4iLCJwdXNoIiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm9sZFRva2VuSW5kZXgiLCJpbmRleE9mIiwibmV3VG9rZW5zIiwic3BsaWNlQXJyYXkiLCJmb3JFYWNoIiwidG9rZW5IVE1MIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDs7SUFFTUMsVTtBQUNKLHNCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDs7QUFFQSxTQUFLQyxJQUFMLEdBQVlDLFNBQVosQ0FMbUIsQ0FLSztBQUN6Qjs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzsrQkFFVUYsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTRyxLLEVBQU87QUFDZixXQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUJELEtBQWpCO0FBQ0Q7OztpQ0FFWUUsUSxFQUFVQyxRLEVBQVU7QUFDL0IsVUFBSUMsZ0JBQWdCWCxLQUFLWSxPQUFMLENBQWEsS0FBS1IsTUFBbEIsRUFBMEJLLFFBQTFCLENBQXBCO0FBQUEsVUFDSUksWUFBWSxDQUFDSCxRQUFELENBRGhCOztBQUdBVixXQUFLYyxXQUFMLENBQWlCLEtBQUtWLE1BQXRCLEVBQThCTyxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS1IsSUFBTCxHQUFZLEVBQVo7O0FBRUEsV0FBS0QsTUFBTCxDQUFZVyxPQUFaLENBQW9CLFVBQVNSLEtBQVQsRUFBZ0I7QUFDbEMsWUFBSVMsWUFBWVQsTUFBTUYsSUFBTixFQUFoQjs7QUFFQSxhQUFLQSxJQUFMLElBQWFXLFNBQWI7QUFDRCxPQUptQixDQUlsQkMsSUFKa0IsQ0FJYixJQUphLENBQXBCO0FBS0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCakIsVUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuICAgIFxyXG4gICAgdGhpcy5odG1sID0gdW5kZWZpbmVkOyAgLy8vXHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFRva2VucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gIH1cclxuICBcclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuKSB7XHJcbiAgICB2YXIgb2xkVG9rZW5JbmRleCA9IHV0aWwuaW5kZXhPZih0aGlzLnRva2Vucywgb2xkVG9rZW4pLFxyXG4gICAgICAgIG5ld1Rva2VucyA9IFtuZXdUb2tlbl07XHJcblxyXG4gICAgdXRpbC5zcGxpY2VBcnJheSh0aGlzLnRva2Vucywgb2xkVG9rZW5JbmRleCwgMSwgbmV3VG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuaHRtbCA9ICcnO1xyXG5cclxuICAgIHRoaXMudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odG9rZW4pIHtcclxuICAgICAgdmFyIHRva2VuSFRNTCA9IHRva2VuLmh0bWwoKTtcclxuXHJcbiAgICAgIHRoaXMuaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iXX0=