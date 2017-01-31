'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    var lineNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var minimumLinesLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var previousLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var followingLineInComment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Context);

    this.lineNumber = lineNumber;
    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Context, [{
    key: 'getLineNumber',
    value: function getLineNumber() {
      return this.lineNumber;
    }
  }, {
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
    key: 'incrementLineNumber',
    value: function incrementLineNumber() {
      this.lineNumber++;
    }
  }, {
    key: 'setPreviousLineInComment',
    value: function setPreviousLineInComment(previousLineInComment) {
      this.previousLineInComment = previousLineInComment;
    }
  }, {
    key: 'shouldTerminate',
    value: function shouldTerminate(linesLength) {
      var terminate = false;

      if (this.minimumLinesLength <= linesLength) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJDb250ZXh0IiwibGluZU51bWJlciIsIm1pbmltdW1MaW5lc0xlbmd0aCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImxpbmVzTGVuZ3RoIiwidGVybWluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxPO0FBQ0oscUJBQXdJO0FBQUEsUUFBNUhDLFVBQTRILHVFQUEvRyxDQUErRztBQUFBLFFBQTVHQyxrQkFBNEcsdUVBQXZGQyxPQUFPQyxpQkFBZ0Y7QUFBQSxRQUE3REMscUJBQTZELHVFQUFyQyxJQUFxQztBQUFBLFFBQS9CQyxzQkFBK0IsdUVBQU4sSUFBTTs7QUFBQTs7QUFDdEksU0FBS0wsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0cscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0wsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtHLHFCQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxzQkFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLFdBQUtMLFVBQUw7QUFDRDs7OzZDQUV3QkkscUIsRUFBdUI7QUFDOUMsV0FBS0EscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7b0NBRWVFLFcsRUFBYTtBQUMzQixVQUFJQyxZQUFZLEtBQWhCOztBQUVBLFVBQUksS0FBS04sa0JBQUwsSUFBMkJLLFdBQS9CLEVBQTRDO0FBQzFDLFlBQUksS0FBS0Qsc0JBQUwsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeENFLHNCQUFZLElBQVo7QUFDRDs7QUFFRCxZQUFJLEtBQUtILHFCQUFMLEtBQStCLEtBQUtDLHNCQUF4QyxFQUFnRTtBQUM5REUsc0JBQVksSUFBWjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlYsT0FBakIiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKGxpbmVOdW1iZXIgPSAxLCBtaW5pbXVtTGluZXNMZW5ndGggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IG51bGwsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lTnVtYmVyO1xyXG4gICAgdGhpcy5taW5pbXVtTGluZXNMZW5ndGggPSBtaW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICAgIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRMaW5lTnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGluZU51bWJlcjtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGluY3JlbWVudExpbmVOdW1iZXIoKSB7XHJcbiAgICB0aGlzLmxpbmVOdW1iZXIrKztcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxpbmVzTGVuZ3RoKSB7XHJcbiAgICB2YXIgdGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMubWluaW11bUxpbmVzTGVuZ3RoIDw9IGxpbmVzTGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iXX0=