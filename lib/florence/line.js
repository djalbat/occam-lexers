'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Context = require('./context'),
    CommonLine = require('../common/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var Line = function (_CommonLine) {
    _inherits(Line, _CommonLine);

    function Line(tokens, inMultiLineComment) {
        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, tokens));

        _this.inMultiLineComment = inMultiLineComment;

        _this.update();
        return _this;
    }

    _createClass(Line, [{
        key: 'isInMultiLineComment',
        value: function isInMultiLineComment() {
            return this.inMultiLineComment;
        }
    }, {
        key: 'hasEndOfMultiLineCommentToken',
        value: function hasEndOfMultiLineCommentToken() {
            return NonSignificantTokens.hasEndOfMultiLineCommentToken(this.tokens);
        }
    }, {
        key: 'hasStartOfMultiLineCommentToken',
        value: function hasStartOfMultiLineCommentToken() {
            return NonSignificantTokens.hasStartOfMultiLineCommentToken(this.tokens);
        }
    }], [{
        key: 'fromContent',
        value: function fromContent(content, previousLineIsInMultiLineComment, parser) {
            var inMultiLineComment = previousLineIsInMultiLineComment,
                context = new Context(content, inMultiLineComment);

            NonSignificantTokens.pass(context);

            SignificantTokens.pass(context, parser);

            inMultiLineComment = context.isInMultiLineComment();

            var tokens = context.getTokens(),
                line = new Line(tokens, inMultiLineComment);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uTGluZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJMaW5lIiwidG9rZW5zIiwiaW5NdWx0aUxpbmVDb21tZW50IiwidXBkYXRlIiwiaGFzRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJoYXNTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiY29udGVudCIsInByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50IiwicGFyc2VyIiwiY29udGV4dCIsInBhc3MiLCJpc0luTXVsdGlMaW5lQ29tbWVudCIsImdldFRva2VucyIsImxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUMsYUFBYUQsUUFBUSxnQkFBUixDQURqQjtBQUFBLElBRUlFLG9CQUFvQkYsUUFBUSxxQkFBUixDQUZ4QjtBQUFBLElBR0lHLHVCQUF1QkgsUUFBUSx3QkFBUixDQUgzQjs7SUFLTUksSTs7O0FBQ0osa0JBQVlDLE1BQVosRUFBb0JDLGtCQUFwQixFQUF3QztBQUFBOztBQUFBLGdIQUNoQ0QsTUFEZ0M7O0FBR3RDLGNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsY0FBS0MsTUFBTDtBQUxzQztBQU12Qzs7OzsrQ0FFc0I7QUFDckIsbUJBQU8sS0FBS0Qsa0JBQVo7QUFDRDs7O3dEQUUrQjtBQUFFLG1CQUFPSCxxQkFBcUJLLDZCQUFyQixDQUFtRCxLQUFLSCxNQUF4RCxDQUFQO0FBQXlFOzs7MERBQ3pFO0FBQUUsbUJBQU9GLHFCQUFxQk0sK0JBQXJCLENBQXFELEtBQUtKLE1BQTFELENBQVA7QUFBMkU7OztvQ0FFNUZLLE8sRUFBU0MsZ0MsRUFBa0NDLE0sRUFBUTtBQUNwRSxnQkFBSU4scUJBQXFCSyxnQ0FBekI7QUFBQSxnQkFDSUUsVUFBVSxJQUFJZCxPQUFKLENBQVlXLE9BQVosRUFBcUJKLGtCQUFyQixDQURkOztBQUdBSCxpQ0FBcUJXLElBQXJCLENBQTBCRCxPQUExQjs7QUFFQVgsOEJBQWtCWSxJQUFsQixDQUF1QkQsT0FBdkIsRUFBZ0NELE1BQWhDOztBQUVBTixpQ0FBcUJPLFFBQVFFLG9CQUFSLEVBQXJCOztBQUVBLGdCQUFJVixTQUFTUSxRQUFRRyxTQUFSLEVBQWI7QUFBQSxnQkFDSUMsT0FBTyxJQUFJYixJQUFKLENBQVNDLE1BQVQsRUFBaUJDLGtCQUFqQixDQURYOztBQUdBLG1CQUFPVyxJQUFQO0FBQ0Q7Ozs7RUE5QmdCaEIsVTs7QUFpQ25CaUIsT0FBT0MsT0FBUCxHQUFpQmYsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpLFxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL25vblNpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgY29uc3RydWN0b3IodG9rZW5zLCBpbk11bHRpTGluZUNvbW1lbnQpIHtcclxuICAgIHN1cGVyKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy5pbk11bHRpTGluZUNvbW1lbnQgPSBpbk11bHRpTGluZUNvbW1lbnQ7XHJcbiAgICBcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBpc0luTXVsdGlMaW5lQ29tbWVudCgpIHsgXHJcbiAgICByZXR1cm4gdGhpcy5pbk11bHRpTGluZUNvbW1lbnQ7IFxyXG4gIH1cclxuICBcclxuICBoYXNFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbigpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW5zLmhhc0VuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHRoaXMudG9rZW5zKTsgfVxyXG4gIGhhc1N0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2Vucy5oYXNTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHRoaXMudG9rZW5zKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQsIHBhcnNlcikge1xyXG4gICAgdmFyIGluTXVsdGlMaW5lQ29tbWVudCA9IHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50LFxyXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dChjb250ZW50LCBpbk11bHRpTGluZUNvbW1lbnQpO1xyXG5cclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGV4dCk7XHJcbiAgICBcclxuICAgIFNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGV4dCwgcGFyc2VyKTtcclxuXHJcbiAgICBpbk11bHRpTGluZUNvbW1lbnQgPSBjb250ZXh0LmlzSW5NdWx0aUxpbmVDb21tZW50KCk7XHJcblxyXG4gICAgdmFyIHRva2VucyA9IGNvbnRleHQuZ2V0VG9rZW5zKCksXHJcbiAgICAgICAgbGluZSA9IG5ldyBMaW5lKHRva2VucywgaW5NdWx0aUxpbmVDb21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19