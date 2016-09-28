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
        var tokenHTML = token.getHTML();

        this.html += tokenHTML;
      }.bind(this));
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkNvbW1vbkxpbmUiLCJjb250ZW50IiwidG9rZW5zIiwiaHRtbCIsInVuZGVmaW5lZCIsInRva2VuIiwicHVzaCIsIm9sZFRva2VuIiwibmV3VG9rZW4iLCJvbGRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm5ld1Rva2VucyIsInNwbGljZUFycmF5IiwiZm9yRWFjaCIsInRva2VuSFRNTCIsImdldEhUTUwiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYOztJQUVNQyxVO0FBQ0osc0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFNBQUtDLE1BQUwsR0FBYyxFQUFkOztBQUVBLFNBQUtDLElBQUwsR0FBWUMsU0FBWixDQUxtQixDQUtLO0FBQ3pCOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSCxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OytCQUVVRixPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OEJBRVNHLEssRUFBTztBQUNmLFdBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQkQsS0FBakI7QUFDRDs7O2lDQUVZRSxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JYLEtBQUtZLE9BQUwsQ0FBYSxLQUFLUixNQUFsQixFQUEwQkssUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FWLFdBQUtjLFdBQUwsQ0FBaUIsS0FBS1YsTUFBdEIsRUFBOEJPLGFBQTlCLEVBQTZDLENBQTdDLEVBQWdERSxTQUFoRDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLUixJQUFMLEdBQVksRUFBWjs7QUFFQSxXQUFLRCxNQUFMLENBQVlXLE9BQVosQ0FBb0IsVUFBU1IsS0FBVCxFQUFnQjtBQUNsQyxZQUFJUyxZQUFZVCxNQUFNVSxPQUFOLEVBQWhCOztBQUVBLGFBQUtaLElBQUwsSUFBYVcsU0FBYjtBQUNELE9BSm1CLENBSWxCRSxJQUprQixDQUliLElBSmEsQ0FBcEI7QUFLRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQixVQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBDb21tb25MaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG4gICAgXHJcbiAgICB0aGlzLmh0bWwgPSB1bmRlZmluZWQ7ICAvLy9cclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VUb2tlbihvbGRUb2tlbiwgbmV3VG9rZW4pIHtcclxuICAgIHZhciBvbGRUb2tlbkluZGV4ID0gdXRpbC5pbmRleE9mKHRoaXMudG9rZW5zLCBvbGRUb2tlbiksXHJcbiAgICAgICAgbmV3VG9rZW5zID0gW25ld1Rva2VuXTtcclxuXHJcbiAgICB1dGlsLnNwbGljZUFycmF5KHRoaXMudG9rZW5zLCBvbGRUb2tlbkluZGV4LCAxLCBuZXdUb2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5odG1sID0gJyc7XHJcblxyXG4gICAgdGhpcy50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0b2tlbikge1xyXG4gICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG5cclxuICAgICAgdGhpcy5odG1sICs9IHRva2VuSFRNTDtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxpbmU7XHJcbiJdfQ==