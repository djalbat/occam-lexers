'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
  function Configuration(previousTokenCommentToken, nextTokenCommentToken, minimumContentLength) {
    _classCallCheck(this, Configuration);

    this.previousTokenCommentToken = previousTokenCommentToken;
    this.nextTokenCommentToken = nextTokenCommentToken;
    this.minimumContentLength = minimumContentLength;
  }

  _createClass(Configuration, [{
    key: 'isPreviousTokenCommentToken',
    value: function isPreviousTokenCommentToken() {
      return this.previousTokenCommentToken;
    }
  }, {
    key: 'isNextTokenCommentToken',
    value: function isNextTokenCommentToken() {
      return this.nextTokenCommentToken;
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

          terminate = tokenCommentToken === this.nextTokenCommentToken;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwicHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbiIsIm5leHRUb2tlbkNvbW1lbnRUb2tlbiIsIm1pbmltdW1Db250ZW50TGVuZ3RoIiwiY29udGVudExlbmd0aCIsInRva2VucyIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0b2tlbiIsImluZGV4IiwidG9rZW5Db250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsInRva2VuQ29tbWVudFRva2VuIiwiaXNDb21tZW50VG9rZW4iLCJzdGFydCIsInNwbGljZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGE7QUFDSix5QkFBWUMseUJBQVosRUFBdUNDLHFCQUF2QyxFQUE4REMsb0JBQTlELEVBQW9GO0FBQUE7O0FBQ2xGLFNBQUtGLHlCQUFMLEdBQWlDQSx5QkFBakM7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNEOzs7O2tEQUU2QjtBQUM1QixhQUFPLEtBQUtGLHlCQUFaO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7b0NBRWVFLGEsRUFBZUMsTSxFQUFRO0FBQ3JDLFVBQU1DLFlBQVlELE9BQU9FLElBQVAsQ0FBWSxVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUF1QjtBQUNuRCxZQUFJSCxZQUFZLEtBQWhCOztBQUVBLFlBQU1JLHFCQUFxQkYsTUFBTUcsZ0JBQU4sRUFBM0I7O0FBRUFQLHlCQUFpQk0sa0JBQWpCOztBQUVBLFlBQUlOLGlCQUFpQixLQUFLRCxvQkFBMUIsRUFBZ0Q7QUFDOUMsY0FBTVMsb0JBQW9CSixNQUFNSyxjQUFOLEVBQTFCOztBQUVBUCxzQkFBYU0sc0JBQXNCLEtBQUtWLHFCQUF4Qzs7QUFFQSxjQUFJSSxTQUFKLEVBQWU7QUFDYixnQkFBTVEsUUFBUUwsUUFBUSxDQUF0Qjs7QUFFQUosbUJBQU9VLE1BQVAsQ0FBY0QsS0FBZDtBQUNEO0FBQ0Y7O0FBRUQsZUFBT1IsU0FBUDtBQUNELE9BcEI2QixDQW9CNUJVLElBcEI0QixDQW9CdkIsSUFwQnVCLENBQVosQ0FBbEI7O0FBc0JBLGFBQU9WLFNBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbiwgbmV4dFRva2VuQ29tbWVudFRva2VuLCBtaW5pbXVtQ29udGVudExlbmd0aCkge1xyXG4gICAgdGhpcy5wcmV2aW91c1Rva2VuQ29tbWVudFRva2VuID0gcHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbjtcclxuICAgIHRoaXMubmV4dFRva2VuQ29tbWVudFRva2VuID0gbmV4dFRva2VuQ29tbWVudFRva2VuO1xyXG4gICAgdGhpcy5taW5pbXVtQ29udGVudExlbmd0aCA9IG1pbmltdW1Db250ZW50TGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNQcmV2aW91c1Rva2VuQ29tbWVudFRva2VuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNUb2tlbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIGlzTmV4dFRva2VuQ29tbWVudFRva2VuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmV4dFRva2VuQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGNvbnRlbnRMZW5ndGgsIHRva2Vucykge1xyXG4gICAgY29uc3QgdGVybWluYXRlID0gdG9rZW5zLnNvbWUoZnVuY3Rpb24odG9rZW4sIGluZGV4KSB7XHJcbiAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudExlbmd0aCA9IHRva2VuLmdldENvbnRlbnRMZW5ndGgoKTtcclxuXHJcbiAgICAgIGNvbnRlbnRMZW5ndGggKz0gdG9rZW5Db250ZW50TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPj0gdGhpcy5taW5pbXVtQ29udGVudExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuQ29tbWVudFRva2VuID0gdG9rZW4uaXNDb21tZW50VG9rZW4oKTtcclxuXHJcbiAgICAgICAgdGVybWluYXRlID0gKHRva2VuQ29tbWVudFRva2VuID09PSB0aGlzLm5leHRUb2tlbkNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxO1xyXG5cclxuICAgICAgICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlndXJhdGlvbjtcclxuIl19