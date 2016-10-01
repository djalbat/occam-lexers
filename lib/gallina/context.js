'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context(multiLineCommentDepth) {
    _classCallCheck(this, Context);

    this.multiLineCommentDepth = multiLineCommentDepth;
  }

  _createClass(Context, [{
    key: 'getMultiLineCommentDepth',
    value: function getMultiLineCommentDepth() {
      return this.multiLineCommentDepth;
    }
  }, {
    key: 'setMultiLineCommentDepth',
    value: function setMultiLineCommentDepth(multiLineCommentDepth) {
      this.multiLineCommentDepth = multiLineCommentDepth;
    }
  }, {
    key: 'increaseMultiLineCommentDepth',
    value: function increaseMultiLineCommentDepth() {
      this.multiLineCommentDepth++;
    }
  }, {
    key: 'decreaseMultiLineCommentDepth',
    value: function decreaseMultiLineCommentDepth() {
      this.multiLineCommentDepth--;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2NvbnRleHQuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsIm11bHRpTGluZUNvbW1lbnREZXB0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxTQUFLQSxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0Q7Ozs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7OzZDQUV3QkEscUIsRUFBdUI7QUFDOUMsV0FBS0EscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtBLHFCQUFMO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0EscUJBQUw7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJILE9BQWpCIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb250ZXh0IHtcclxuICBjb25zdHJ1Y3RvcihtdWx0aUxpbmVDb21tZW50RGVwdGgpIHtcclxuICAgIHRoaXMubXVsdGlMaW5lQ29tbWVudERlcHRoID0gbXVsdGlMaW5lQ29tbWVudERlcHRoO1xyXG4gIH1cclxuICBcclxuICBnZXRNdWx0aUxpbmVDb21tZW50RGVwdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aUxpbmVDb21tZW50RGVwdGg7XHJcbiAgfVxyXG4gIFxyXG4gIHNldE11bHRpTGluZUNvbW1lbnREZXB0aChtdWx0aUxpbmVDb21tZW50RGVwdGgpIHtcclxuICAgIHRoaXMubXVsdGlMaW5lQ29tbWVudERlcHRoID0gbXVsdGlMaW5lQ29tbWVudERlcHRoO1xyXG4gIH1cclxuXHJcbiAgaW5jcmVhc2VNdWx0aUxpbmVDb21tZW50RGVwdGgoKSB7XHJcbiAgICB0aGlzLm11bHRpTGluZUNvbW1lbnREZXB0aCsrO1xyXG4gIH1cclxuXHJcbiAgZGVjcmVhc2VNdWx0aUxpbmVDb21tZW50RGVwdGgoKSB7XHJcbiAgICB0aGlzLm11bHRpTGluZUNvbW1lbnREZXB0aC0tO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iXX0=