'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Context = require('./context'),
    CommonLine = require('../common/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var FlorenceLine = function (_CommonLine) {
    _inherits(FlorenceLine, _CommonLine);

    function FlorenceLine(tokens, inMultiLineComment) {
        _classCallCheck(this, FlorenceLine);

        var _this = _possibleConstructorReturn(this, (FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine)).call(this, tokens));

        _this.inMultiLineComment = inMultiLineComment;

        _this.update();
        return _this;
    }

    _createClass(FlorenceLine, [{
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
                line = new FlorenceLine(tokens, inMultiLineComment);

            return line;
        }
    }]);

    return FlorenceLine;
}(CommonLine);

module.exports = FlorenceLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uTGluZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJGbG9yZW5jZUxpbmUiLCJ0b2tlbnMiLCJpbk11bHRpTGluZUNvbW1lbnQiLCJ1cGRhdGUiLCJoYXNFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImhhc1N0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjb250ZW50IiwicHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQiLCJwYXJzZXIiLCJjb250ZXh0IiwicGFzcyIsImlzSW5NdWx0aUxpbmVDb21tZW50IiwiZ2V0VG9rZW5zIiwibGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxhQUFhRCxRQUFRLGdCQUFSLENBRGpCO0FBQUEsSUFFSUUsb0JBQW9CRixRQUFRLHFCQUFSLENBRnhCO0FBQUEsSUFHSUcsdUJBQXVCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtNSSxZOzs7QUFDSiwwQkFBWUMsTUFBWixFQUFvQkMsa0JBQXBCLEVBQXdDO0FBQUE7O0FBQUEsZ0lBQ2hDRCxNQURnQzs7QUFHdEMsY0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjs7QUFFQSxjQUFLQyxNQUFMO0FBTHNDO0FBTXZDOzs7OytDQUVzQjtBQUNyQixtQkFBTyxLQUFLRCxrQkFBWjtBQUNEOzs7d0RBRStCO0FBQUUsbUJBQU9ILHFCQUFxQkssNkJBQXJCLENBQW1ELEtBQUtILE1BQXhELENBQVA7QUFBeUU7OzswREFDekU7QUFBRSxtQkFBT0YscUJBQXFCTSwrQkFBckIsQ0FBcUQsS0FBS0osTUFBMUQsQ0FBUDtBQUEyRTs7O29DQUU1RkssTyxFQUFTQyxnQyxFQUFrQ0MsTSxFQUFRO0FBQ3BFLGdCQUFJTixxQkFBcUJLLGdDQUF6QjtBQUFBLGdCQUNJRSxVQUFVLElBQUlkLE9BQUosQ0FBWVcsT0FBWixFQUFxQkosa0JBQXJCLENBRGQ7O0FBR0FILGlDQUFxQlcsSUFBckIsQ0FBMEJELE9BQTFCOztBQUVBWCw4QkFBa0JZLElBQWxCLENBQXVCRCxPQUF2QixFQUFnQ0QsTUFBaEM7O0FBRUFOLGlDQUFxQk8sUUFBUUUsb0JBQVIsRUFBckI7O0FBRUEsZ0JBQUlWLFNBQVNRLFFBQVFHLFNBQVIsRUFBYjtBQUFBLGdCQUNJQyxPQUFPLElBQUliLFlBQUosQ0FBaUJDLE1BQWpCLEVBQXlCQyxrQkFBekIsQ0FEWDs7QUFHQSxtQkFBT1csSUFBUDtBQUNEOzs7O0VBOUJ3QmhCLFU7O0FBaUMzQmlCLE9BQU9DLE9BQVAsR0FBaUJmLFlBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKSxcclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9ub25TaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgY29uc3RydWN0b3IodG9rZW5zLCBpbk11bHRpTGluZUNvbW1lbnQpIHtcclxuICAgIHN1cGVyKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy5pbk11bHRpTGluZUNvbW1lbnQgPSBpbk11bHRpTGluZUNvbW1lbnQ7XHJcbiAgICBcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBpc0luTXVsdGlMaW5lQ29tbWVudCgpIHsgXHJcbiAgICByZXR1cm4gdGhpcy5pbk11bHRpTGluZUNvbW1lbnQ7IFxyXG4gIH1cclxuICBcclxuICBoYXNFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbigpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW5zLmhhc0VuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHRoaXMudG9rZW5zKTsgfVxyXG4gIGhhc1N0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2Vucy5oYXNTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKHRoaXMudG9rZW5zKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQsIHBhcnNlcikge1xyXG4gICAgdmFyIGluTXVsdGlMaW5lQ29tbWVudCA9IHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50LFxyXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dChjb250ZW50LCBpbk11bHRpTGluZUNvbW1lbnQpO1xyXG5cclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGV4dCk7XHJcbiAgICBcclxuICAgIFNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGV4dCwgcGFyc2VyKTtcclxuXHJcbiAgICBpbk11bHRpTGluZUNvbW1lbnQgPSBjb250ZXh0LmlzSW5NdWx0aUxpbmVDb21tZW50KCk7XHJcblxyXG4gICAgdmFyIHRva2VucyA9IGNvbnRleHQuZ2V0VG9rZW5zKCksXHJcbiAgICAgICAgbGluZSA9IG5ldyBGbG9yZW5jZUxpbmUodG9rZW5zLCBpbk11bHRpTGluZUNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxpbmU7XHJcbiJdfQ==