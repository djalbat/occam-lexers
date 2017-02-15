'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
    var previousLineInComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var followingLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Context);

    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Context, [{
    key: 'getMinimumLinesLength',
    value: function getMinimumLinesLength() {
      return this.minimumLinesLength;
    }
  }, {
    key: 'isPreviousLineInComment',
    value: function isPreviousLineInComment() {
      return this.previousLineInComment;
    }
  }, {
    key: 'isFollowingLineInComment',
    value: function isFollowingLineInComment() {
      return this.followingLineInComment;
    }
  }, {
    key: 'setPreviousLineInComment',
    value: function setPreviousLineInComment(previousLineInComment) {
      this.previousLineInComment = previousLineInComment;
    }
  }, {
    key: 'shouldTerminate',
    value: function shouldTerminate(length) {
      var terminate = false;

      if (length >= this.minimumLinesLength) {
        if (this.followingLineInComment === null) {
          terminate = true;
        }

        if (this.previousLineInComment === this.followingLineInComment) {
          terminate = true;
        }
      }

      return terminate;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJDb250ZXh0IiwibWluaW11bUxpbmVzTGVuZ3RoIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwibGVuZ3RoIiwidGVybWluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxPO0FBQ0oscUJBQXdIO0FBQUEsUUFBNUdDLGtCQUE0Ryx1RUFBdkZDLE9BQU9DLGlCQUFnRjtBQUFBLFFBQTdEQyxxQkFBNkQsdUVBQXJDLElBQXFDO0FBQUEsUUFBL0JDLHNCQUErQix1RUFBTixJQUFNOztBQUFBOztBQUN0SCxTQUFLSixrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0cscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFDRDs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLSixrQkFBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0cscUJBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHNCQUFaO0FBQ0Q7Ozs2Q0FFd0JELHFCLEVBQXVCO0FBQzlDLFdBQUtBLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDRDs7O29DQUVlRSxNLEVBQVE7QUFDdEIsVUFBSUMsWUFBWSxLQUFoQjs7QUFFQSxVQUFJRCxVQUFVLEtBQUtMLGtCQUFuQixFQUF1QztBQUNyQyxZQUFJLEtBQUtJLHNCQUFMLEtBQWdDLElBQXBDLEVBQTBDO0FBQ3hDRSxzQkFBWSxJQUFaO0FBQ0Q7O0FBRUQsWUFBSSxLQUFLSCxxQkFBTCxLQUErQixLQUFLQyxzQkFBeEMsRUFBZ0U7QUFDOURFLHNCQUFZLElBQVo7QUFDRDtBQUNGOztBQUVELGFBQU9BLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb250ZXh0IHtcclxuICBjb25zdHJ1Y3RvcihtaW5pbXVtTGluZXNMZW5ndGggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IG51bGwsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCA9IG1pbmltdW1MaW5lc0xlbmd0aDtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gICAgdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxlbmd0aCkge1xyXG4gICAgdmFyIHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsZW5ndGggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hdGU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiJdfQ==