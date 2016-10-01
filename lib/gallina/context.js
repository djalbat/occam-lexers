'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context(commentDepth) {
    _classCallCheck(this, Context);

    this.commentDepth = commentDepth;
  }

  _createClass(Context, [{
    key: 'getCommentDepth',
    value: function getCommentDepth() {
      return this.commentDepth;
    }
  }, {
    key: 'increaseCommentDepth',
    value: function increaseCommentDepth() {
      this.commentDepth++;
    }
  }, {
    key: 'decreaseCommentDepth',
    value: function decreaseCommentDepth() {
      this.commentDepth--;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2NvbnRleHQuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsImNvbW1lbnREZXB0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtBLFlBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLQSxZQUFMO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCSCxPQUFqQiIsImZpbGUiOiJjb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29udGV4dCB7XHJcbiAgY29uc3RydWN0b3IoY29tbWVudERlcHRoKSB7XHJcbiAgICB0aGlzLmNvbW1lbnREZXB0aCA9IGNvbW1lbnREZXB0aDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q29tbWVudERlcHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbWVudERlcHRoO1xyXG4gIH1cclxuICBcclxuICBpbmNyZWFzZUNvbW1lbnREZXB0aCgpIHtcclxuICAgIHRoaXMuY29tbWVudERlcHRoKys7XHJcbiAgfVxyXG5cclxuICBkZWNyZWFzZUNvbW1lbnREZXB0aCgpIHtcclxuICAgIHRoaXMuY29tbWVudERlcHRoLS07XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiJdfQ==