'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(MiddleOfMultiLineCommentToken, _CommentToken);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new MiddleOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      middleOfMultiLine = new MiddleOfMultiLineCommentToken(str, line);

      return middleOfMultiLine;
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(CommentToken);

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvbWlkZGxlT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsImxpbmUiLCJtaWRkbGVPZk11bHRpTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxZQUFSLENBQW5COztJQUVNQyw2Qjs7Ozs7Ozs7Ozs7NEJBQ0k7QUFDTixVQUFJQyxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLDZCQUFKLENBQWtDQyxHQUFsQyxDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBU0MsSSxFQUFNO0FBQ2hDLFVBQUlILE1BQU1FLE9BQVY7QUFBQSxVQUFtQjtBQUNmRSwwQkFBb0IsSUFBSUwsNkJBQUosQ0FBa0NDLEdBQWxDLEVBQXVDRyxJQUF2QyxDQUR4Qjs7QUFHQSxhQUFPQyxpQkFBUDtBQUNEOzs7O0VBWnlDUCxZOztBQWU1Q1EsT0FBT0MsT0FBUCxHQUFpQlAsNkJBQWpCIiwiZmlsZSI6Im1pZGRsZU9mTXVsdGlMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RyID0gY29udGVudCwgLy8vXG4gICAgICAgIG1pZGRsZU9mTXVsdGlMaW5lID0gbmV3IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHN0ciwgbGluZSk7XG5cbiAgICByZXR1cm4gbWlkZGxlT2ZNdWx0aUxpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcblxuIl19