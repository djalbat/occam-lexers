'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
  function Configuration() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
    var previousLineInComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var followingLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Configuration);

    ///
    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Configuration, [{
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
        if (this.followingLineInComment === false) {
          terminate = true;
        }

        if (this.previousLineInComment === this.followingLineInComment) {
          terminate = true;
        }
      }

      return terminate;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwibWluaW11bUxpbmVzTGVuZ3RoIiwiSW5maW5pdHkiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwibGVuZ3RoIiwidGVybWluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxhO0FBQ0osMkJBQTBHO0FBQUEsUUFBOUZDLGtCQUE4Rix1RUFBekVDLFFBQXlFO0FBQUEsUUFBL0RDLHFCQUErRCx1RUFBdkMsS0FBdUM7QUFBQSxRQUFoQ0Msc0JBQWdDLHVFQUFQLEtBQU87O0FBQUE7O0FBQUU7QUFDMUcsU0FBS0gsa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFNBQUtFLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0Q7Ozs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0gsa0JBQVo7QUFDRDs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtFLHFCQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxzQkFBWjtBQUNEOzs7NkNBRXdCRCxxQixFQUF1QjtBQUM5QyxXQUFLQSxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0Q7OztvQ0FFZUUsTSxFQUFRO0FBQ3RCLFVBQUlDLFlBQVksS0FBaEI7O0FBRUEsVUFBSUQsVUFBVSxLQUFLSixrQkFBbkIsRUFBdUM7QUFDckMsWUFBSSxLQUFLRyxzQkFBTCxLQUFnQyxLQUFwQyxFQUEyQztBQUN6Q0Usc0JBQVksSUFBWjtBQUNEOztBQUVELFlBQUksS0FBS0gscUJBQUwsS0FBK0IsS0FBS0Msc0JBQXhDLEVBQWdFO0FBQzlERSxzQkFBWSxJQUFaO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxTQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUixhQUFqQiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IobWluaW11bUxpbmVzTGVuZ3RoID0gSW5maW5pdHksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGZhbHNlLCBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZmFsc2UpIHsgLy8vXHJcbiAgICB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCA9IG1pbmltdW1MaW5lc0xlbmd0aDtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gICAgdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxlbmd0aCkge1xyXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsZW5ndGggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xyXG4iXX0=