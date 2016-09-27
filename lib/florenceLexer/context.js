'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context(content, inMultilineComment) {
    _classCallCheck(this, Context);

    this.content = content;
    this.inMultilineComment = inMultilineComment;

    this.tokens = [];
  }

  _createClass(Context, [{
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getContentLength',
    value: function getContentLength() {
      return this.content.length;
    }
  }, {
    key: 'getContentSubstring',
    value: function getContentSubstring(length) {
      return this.content.substring(0, length);
    }
  }, {
    key: 'isInMultilineComment',
    value: function isInMultilineComment() {
      return this.inMultilineComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'chopContent',
    value: function chopContent(length) {
      this.content = this.content.substring(length);
    }
  }, {
    key: 'setInMultilineComment',
    value: function setInMultilineComment(inMultilineComment) {
      this.inMultilineComment = inMultilineComment;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL2NvbnRleHQuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsImNvbnRlbnQiLCJpbk11bHRpbGluZUNvbW1lbnQiLCJ0b2tlbnMiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0b2tlbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsT0FBWixFQUFxQkMsa0JBQXJCLEVBQXlDO0FBQUE7O0FBQ3ZDLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtBLE9BQUwsQ0FBYUcsTUFBcEI7QUFDRDs7O3dDQUVtQkEsTSxFQUFRO0FBQzFCLGFBQU8sS0FBS0gsT0FBTCxDQUFhSSxTQUFiLENBQXVCLENBQXZCLEVBQTBCRCxNQUExQixDQUFQO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLRixrQkFBWjtBQUNEOzs7OEJBRVNJLEssRUFBTztBQUNmLFdBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQkQsS0FBakI7QUFDRDs7OytCQUVVTCxPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OztnQ0FFV0csTSxFQUFRO0FBQ2xCLFdBQUtILE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFJLFNBQWIsQ0FBdUJELE1BQXZCLENBQWY7QUFDRDs7OzBDQUVxQkYsa0IsRUFBb0I7QUFDeEMsV0FBS0Esa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlQsT0FBakIiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGluTXVsdGlsaW5lQ29tbWVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMuaW5NdWx0aWxpbmVDb21tZW50ID0gaW5NdWx0aWxpbmVDb21tZW50O1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRva2VucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q29udGVudFN1YnN0cmluZyhsZW5ndGgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBpc0luTXVsdGlsaW5lQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluTXVsdGlsaW5lQ29tbWVudDtcclxuICB9XHJcbiAgXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICB9XHJcblxyXG4gIGNob3BDb250ZW50KGxlbmd0aCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnN1YnN0cmluZyhsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5NdWx0aWxpbmVDb21tZW50KGluTXVsdGlsaW5lQ29tbWVudCkge1xyXG4gICAgdGhpcy5pbk11bHRpbGluZUNvbW1lbnQgPSBpbk11bHRpbGluZUNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiJdfQ==