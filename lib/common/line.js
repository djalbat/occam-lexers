'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

var Line = function () {
  function Line() {
    _classCallCheck(this, Line);

    this.tokens = undefined; ///
  }

  _createClass(Line, [{
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpbmUiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm9sZFRva2VuSW5kZXgiLCJpbmRleE9mIiwibmV3VG9rZW5zIiwic3BsaWNlQXJyYXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7O0lBRU1DLEk7QUFDSixrQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBY0MsU0FBZCxDQURZLENBQ2M7QUFDM0I7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtELE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUUsT0FBTyxLQUFLRixNQUFMLENBQVlHLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZTyxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JaLEtBQUthLE9BQUwsQ0FBYSxLQUFLVixNQUFsQixFQUEwQk8sUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FYLFdBQUtlLFdBQUwsQ0FBaUIsS0FBS1osTUFBdEIsRUFBOEJTLGFBQTlCLEVBQTZDLENBQTdDLEVBQWdERSxTQUFoRDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmYsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDsgIC8vL1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHZhciBodG1sID0gdGhpcy50b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIHZhciB0b2tlbkhUTUwgPSB0b2tlbi5nZXRIVE1MKCk7XHJcbiAgICAgIFxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuICBcclxuICByZXBsYWNlVG9rZW4ob2xkVG9rZW4sIG5ld1Rva2VuKSB7XHJcbiAgICB2YXIgb2xkVG9rZW5JbmRleCA9IHV0aWwuaW5kZXhPZih0aGlzLnRva2Vucywgb2xkVG9rZW4pLFxyXG4gICAgICAgIG5ld1Rva2VucyA9IFtuZXdUb2tlbl07XHJcblxyXG4gICAgdXRpbC5zcGxpY2VBcnJheSh0aGlzLnRva2Vucywgb2xkVG9rZW5JbmRleCwgMSwgbmV3VG9rZW5zKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19