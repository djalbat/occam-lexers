'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
  function Configuration(minimumContentLength, previousTokenInComment, nextTokenInComment) {
    _classCallCheck(this, Configuration);

    this.minimumContentLength = minimumContentLength;
    this.previousTokenInComment = previousTokenInComment;
    this.nextTokenInComment = nextTokenInComment;
  }

  _createClass(Configuration, [{
    key: 'isPreviousTokenInComment',
    value: function isPreviousTokenInComment() {
      return this.previousTokenInComment;
    }
  }, {
    key: 'isNextTokenInComment',
    value: function isNextTokenInComment() {
      return this.nextTokenInComment;
    }
  }, {
    key: 'setPreviousTokenInComment',
    value: function setPreviousTokenInComment(previousTokenInComment) {
      this.previousTokenInComment = previousTokenInComment;
    }
  }, {
    key: 'shouldTerminate',
    value: function shouldTerminate(contentLength, tokens) {
      var terminate = tokens.some(function (token, index) {
        var terminate = false;

        var tokenContentLength = token.getContentLength();

        contentLength += tokenContentLength;

        if (contentLength >= this.minimumContentLength) {
          var tokenCommentToken = token.isCommentToken();

          terminate = tokenCommentToken === this.nextTokenInComment;

          if (terminate) {
            var start = index + 1;

            tokens.splice(start);
          }
        }

        return terminate;
      }.bind(this));

      return terminate;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwibWluaW11bUNvbnRlbnRMZW5ndGgiLCJwcmV2aW91c1Rva2VuSW5Db21tZW50IiwibmV4dFRva2VuSW5Db21tZW50IiwiY29udGVudExlbmd0aCIsInRva2VucyIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0b2tlbiIsImluZGV4IiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJzdGFydCIsInNwbGljZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGE7QUFDSix5QkFBWUMsb0JBQVosRUFBa0NDLHNCQUFsQyxFQUEwREMsa0JBQTFELEVBQThFO0FBQUE7O0FBQzVFLFNBQUtGLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNEOzs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtELHNCQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7OENBRXlCRCxzQixFQUF3QjtBQUNoRCxXQUFLQSxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0Q7OztvQ0FFZUUsYSxFQUFlQyxNLEVBQVE7QUFDckMsVUFBTUMsWUFBWUQsT0FBT0UsSUFBUCxDQUFZLFVBQVNDLEtBQVQsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25ELFlBQUlILFlBQVksS0FBaEI7O0FBRUEsWUFBTUkscUJBQXFCRixNQUFNRyxnQkFBTixFQUEzQjs7QUFFQVAseUJBQWlCTSxrQkFBakI7O0FBRUEsWUFBSU4saUJBQWlCLEtBQUtILG9CQUExQixFQUFnRDtBQUM5QyxjQUFNVyxvQkFBb0JKLE1BQU1LLGNBQU4sRUFBMUI7O0FBRUFQLHNCQUFhTSxzQkFBc0IsS0FBS1Qsa0JBQXhDOztBQUVBLGNBQUlHLFNBQUosRUFBZTtBQUNiLGdCQUFNUSxRQUFRTCxRQUFRLENBQXRCOztBQUVBSixtQkFBT1UsTUFBUCxDQUFjRCxLQUFkO0FBQ0Q7QUFDRjs7QUFFRCxlQUFPUixTQUFQO0FBQ0QsT0FwQjZCLENBb0I1QlUsSUFwQjRCLENBb0J2QixJQXBCdUIsQ0FBWixDQUFsQjs7QUFzQkEsYUFBT1YsU0FBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb25maWd1cmF0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihtaW5pbXVtQ29udGVudExlbmd0aCwgcHJldmlvdXNUb2tlbkluQ29tbWVudCwgbmV4dFRva2VuSW5Db21tZW50KSB7XHJcbiAgICB0aGlzLm1pbmltdW1Db250ZW50TGVuZ3RoID0gbWluaW11bUNvbnRlbnRMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzVG9rZW5JbkNvbW1lbnQgPSBwcmV2aW91c1Rva2VuSW5Db21tZW50O1xyXG4gICAgdGhpcy5uZXh0VG9rZW5JbkNvbW1lbnQgPSBuZXh0VG9rZW5JbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpb3VzVG9rZW5JbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c1Rva2VuSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNOZXh0VG9rZW5JbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXh0VG9rZW5JbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1Rva2VuSW5Db21tZW50KHByZXZpb3VzVG9rZW5JbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNUb2tlbkluQ29tbWVudCA9IHByZXZpb3VzVG9rZW5JbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzaG91bGRUZXJtaW5hdGUoY29udGVudExlbmd0aCwgdG9rZW5zKSB7XHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSB0b2tlbnMuc29tZShmdW5jdGlvbih0b2tlbiwgaW5kZXgpIHtcclxuICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3QgdG9rZW5Db250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpO1xyXG5cclxuICAgICAgY29udGVudExlbmd0aCArPSB0b2tlbkNvbnRlbnRMZW5ndGg7XHJcblxyXG4gICAgICBpZiAoY29udGVudExlbmd0aCA+PSB0aGlzLm1pbmltdW1Db250ZW50TGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5Db21tZW50VG9rZW4gPSB0b2tlbi5pc0NvbW1lbnRUb2tlbigpO1xyXG5cclxuICAgICAgICB0ZXJtaW5hdGUgPSAodG9rZW5Db21tZW50VG9rZW4gPT09IHRoaXMubmV4dFRva2VuSW5Db21tZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDE7XHJcblxyXG4gICAgICAgICAgdG9rZW5zLnNwbGljZShzdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xyXG4iXX0=