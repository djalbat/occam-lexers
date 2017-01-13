'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../util'),
    Token = require('../../common/token');

var CommentToken = function (_Token) {
    _inherits(CommentToken, _Token);

    function CommentToken() {
        _classCallCheck(this, CommentToken);

        return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
    }

    _createClass(CommentToken, [{
        key: 'clone',
        value: function clone(Class) {
            var content = this.getContent(),
                line = this.getLine(),
                commentToken = new Class(content, line);

            return commentToken;
        }
    }, {
        key: 'merge',
        value: function merge(commentToken) {
            var content = this.getContent(),
                commentTokenContent = commentToken.getContent();

            content += commentTokenContent;

            this.setContent(content);

            return this;
        }
    }, {
        key: 'getHTML',
        value: function getHTML() {
            var content = this.getContent(),
                innerHTML = content,
                ///
            sanitisedInnerHTML = util.sanitise(innerHTML),
                html = '<span class="comment">' + sanitisedInnerHTML + '</span>';

            return html;
        }
    }]);

    return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlRva2VuIiwiQ29tbWVudFRva2VuIiwiQ2xhc3MiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuIiwiY29tbWVudFRva2VuQ29udGVudCIsInNldENvbnRlbnQiLCJpbm5lckhUTUwiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZSIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsWUFBUixDQUFYO0FBQUEsSUFDSUMsUUFBUUQsUUFBUSxvQkFBUixDQURaOztJQUdNRSxZOzs7Ozs7Ozs7Ozs4QkFDRUMsSyxFQUFPO0FBQ1gsZ0JBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkO0FBQUEsZ0JBQ0lDLE9BQU8sS0FBS0MsT0FBTCxFQURYO0FBQUEsZ0JBRUlDLGVBQWUsSUFBSUwsS0FBSixDQUFVQyxPQUFWLEVBQW1CRSxJQUFuQixDQUZuQjs7QUFJQSxtQkFBT0UsWUFBUDtBQUNEOzs7OEJBRUtBLFksRUFBYztBQUNsQixnQkFBSUosVUFBVSxLQUFLQyxVQUFMLEVBQWQ7QUFBQSxnQkFDSUksc0JBQXNCRCxhQUFhSCxVQUFiLEVBRDFCOztBQUdBRCx1QkFBV0ssbUJBQVg7O0FBRUEsaUJBQUtDLFVBQUwsQ0FBZ0JOLE9BQWhCOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7O2tDQUVTO0FBQ1IsZ0JBQUlBLFVBQVUsS0FBS0MsVUFBTCxFQUFkO0FBQUEsZ0JBQ0lNLFlBQVlQLE9BRGhCO0FBQUEsZ0JBQ3lCO0FBQ3JCUSxpQ0FBcUJiLEtBQUtjLFFBQUwsQ0FBY0YsU0FBZCxDQUZ6QjtBQUFBLGdCQUdJRyxrQ0FBZ0NGLGtCQUFoQyxZQUhKOztBQUtBLG1CQUFPRSxJQUFQO0FBQ0Q7Ozs7RUEzQndCYixLOztBQThCM0JjLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpLFxuICAgIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoQ2xhc3MpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lKTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cbiAgXG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuICAgIFxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgc2FuaXRpc2VkSW5uZXJIVE1MID0gdXRpbC5zYW5pdGlzZShpbm5lckhUTUwpLFxuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7c2FuaXRpc2VkSW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=