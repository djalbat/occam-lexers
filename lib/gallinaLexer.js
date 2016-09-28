'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GallinaLine = require('./gallina/line'),
    GallinaContext = require('./gallina/context');

var GallinaLexer = function () {
    function GallinaLexer() {
        _classCallCheck(this, GallinaLexer);
    }

    _createClass(GallinaLexer, null, [{
        key: 'linesFromContent',
        value: function linesFromContent(content, gallinaContext) {
            gallinaContext = gallinaContext || new GallinaContext(0); ///

            var contents = content.split(/\n/),
                multiLineCommentDepth = gallinaContext.getMultiLineCommentDepth(),
                lines = contents.map(function (content) {
                var line = GallinaLine.fromContent(content, multiLineCommentDepth);

                multiLineCommentDepth = line.getMultiLineCommentDepth();

                return line;
            });

            gallinaContext.setMultiLineCommentDepth(multiLineCommentDepth);

            return lines;
        }
    }]);

    return GallinaLexer;
}();

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hTGV4ZXIuanMiXSwibmFtZXMiOlsiR2FsbGluYUxpbmUiLCJyZXF1aXJlIiwiR2FsbGluYUNvbnRleHQiLCJHYWxsaW5hTGV4ZXIiLCJjb250ZW50IiwiZ2FsbGluYUNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibXVsdGlMaW5lQ29tbWVudERlcHRoIiwiZ2V0TXVsdGlMaW5lQ29tbWVudERlcHRoIiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJzZXRNdWx0aUxpbmVDb21tZW50RGVwdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsY0FBY0MsUUFBUSxnQkFBUixDQUFsQjtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxtQkFBUixDQURyQjs7SUFHTUUsWTs7Ozs7Ozt5Q0FDb0JDLE8sRUFBU0MsYyxFQUFnQjtBQUMvQ0EsNkJBQWlCQSxrQkFBa0IsSUFBSUgsY0FBSixDQUFtQixDQUFuQixDQUFuQyxDQUQrQyxDQUNZOztBQUUzRCxnQkFBSUksV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLGdCQUNJQyx3QkFBd0JILGVBQWVJLHdCQUFmLEVBRDVCO0FBQUEsZ0JBRUlDLFFBQVFKLFNBQVNLLEdBQVQsQ0FBYSxVQUFTUCxPQUFULEVBQWtCO0FBQ3JDLG9CQUFJUSxPQUFPWixZQUFZYSxXQUFaLENBQXdCVCxPQUF4QixFQUFpQ0kscUJBQWpDLENBQVg7O0FBRUFBLHdDQUF3QkksS0FBS0gsd0JBQUwsRUFBeEI7O0FBRUEsdUJBQU9HLElBQVA7QUFDRCxhQU5PLENBRlo7O0FBVUFQLDJCQUFlUyx3QkFBZixDQUF3Q04scUJBQXhDOztBQUVBLG1CQUFPRSxLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCYixZQUFqQiIsImZpbGUiOiJnYWxsaW5hTGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgR2FsbGluYUxpbmUgPSByZXF1aXJlKCcuL2dhbGxpbmEvbGluZScpLFxyXG4gICAgR2FsbGluYUNvbnRleHQgPSByZXF1aXJlKCcuL2dhbGxpbmEvY29udGV4dCcpO1xyXG5cclxuY2xhc3MgR2FsbGluYUxleGVyIHtcclxuICBzdGF0aWMgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBnYWxsaW5hQ29udGV4dCkge1xyXG4gICAgZ2FsbGluYUNvbnRleHQgPSBnYWxsaW5hQ29udGV4dCB8fCBuZXcgR2FsbGluYUNvbnRleHQoMCk7ICAvLy9cclxuXHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBtdWx0aUxpbmVDb21tZW50RGVwdGggPSBnYWxsaW5hQ29udGV4dC5nZXRNdWx0aUxpbmVDb21tZW50RGVwdGgoKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IEdhbGxpbmFMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIG11bHRpTGluZUNvbW1lbnREZXB0aCk7XHJcblxyXG4gICAgICAgICAgbXVsdGlMaW5lQ29tbWVudERlcHRoID0gbGluZS5nZXRNdWx0aUxpbmVDb21tZW50RGVwdGgoKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgZ2FsbGluYUNvbnRleHQuc2V0TXVsdGlMaW5lQ29tbWVudERlcHRoKG11bHRpTGluZUNvbW1lbnREZXB0aCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hTGV4ZXI7XHJcbiJdfQ==