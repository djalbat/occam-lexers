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
    value: function shouldTerminate(index) {
      var terminate = false;

      if (index >= this.minimumLinesLength) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJDb250ZXh0IiwibWluaW11bUxpbmVzTGVuZ3RoIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiaW5kZXgiLCJ0ZXJtaW5hdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixxQkFBd0g7QUFBQSxRQUE1R0Msa0JBQTRHLHVFQUF2RkMsT0FBT0MsaUJBQWdGO0FBQUEsUUFBN0RDLHFCQUE2RCx1RUFBckMsSUFBcUM7QUFBQSxRQUEvQkMsc0JBQStCLHVFQUFOLElBQU07O0FBQUE7O0FBQ3RILFNBQUtKLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxTQUFLRyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsU0FBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUNEOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtKLGtCQUFaO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLRyxxQkFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0Msc0JBQVo7QUFDRDs7OzZDQUV3QkQscUIsRUFBdUI7QUFDOUMsV0FBS0EscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7b0NBRWVFLEssRUFBTztBQUNyQixVQUFJQyxZQUFZLEtBQWhCOztBQUVBLFVBQUlELFNBQVMsS0FBS0wsa0JBQWxCLEVBQXNDO0FBQ3BDLFlBQUksS0FBS0ksc0JBQUwsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeENFLHNCQUFZLElBQVo7QUFDRDs7QUFFRCxZQUFJLEtBQUtILHFCQUFMLEtBQStCLEtBQUtDLHNCQUF4QyxFQUFnRTtBQUM5REUsc0JBQVksSUFBWjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsT0FBakIiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gbnVsbCwgZm9sbG93aW5nTGluZUluQ29tbWVudCA9IG51bGwpIHtcclxuICAgIHRoaXMubWluaW11bUxpbmVzTGVuZ3RoID0gbWluaW11bUxpbmVzTGVuZ3RoO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBwcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgICB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBmb2xsb3dpbmdMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWluaW11bUxpbmVzTGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWluaW11bUxpbmVzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBpc0ZvbGxvd2luZ0xpbmVJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNMaW5lSW5Db21tZW50KHByZXZpb3VzTGluZUluQ29tbWVudCkge1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBwcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzaG91bGRUZXJtaW5hdGUoaW5kZXgpIHtcclxuICAgIHZhciB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hdGU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiJdfQ==