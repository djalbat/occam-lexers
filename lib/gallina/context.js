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
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2NvbnRleHQuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsIm11bHRpTGluZUNvbW1lbnREZXB0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxxQkFBWixFQUFtQztBQUFBOztBQUNqQyxTQUFLQSxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0Q7Ozs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7OzZDQUV3QkEscUIsRUFBdUI7QUFDOUMsV0FBS0EscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQkgsT0FBakIiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG11bHRpTGluZUNvbW1lbnREZXB0aCkge1xyXG4gICAgdGhpcy5tdWx0aUxpbmVDb21tZW50RGVwdGggPSBtdWx0aUxpbmVDb21tZW50RGVwdGg7XHJcbiAgfVxyXG4gIFxyXG4gIGdldE11bHRpTGluZUNvbW1lbnREZXB0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpTGluZUNvbW1lbnREZXB0aDtcclxuICB9XHJcbiAgXHJcbiAgc2V0TXVsdGlMaW5lQ29tbWVudERlcHRoKG11bHRpTGluZUNvbW1lbnREZXB0aCkge1xyXG4gICAgdGhpcy5tdWx0aUxpbmVDb21tZW50RGVwdGggPSBtdWx0aUxpbmVDb21tZW50RGVwdGg7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiJdfQ==