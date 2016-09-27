'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Context = require('./context'),
    CommonLexerLine = require('../commonLexer/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var FlorenceLexerLine = function (_CommonLexerLine) {
    _inherits(FlorenceLexerLine, _CommonLexerLine);

    function FlorenceLexerLine(tokens, inMultiLineComment) {
        _classCallCheck(this, FlorenceLexerLine);

        var _this = _possibleConstructorReturn(this, (FlorenceLexerLine.__proto__ || Object.getPrototypeOf(FlorenceLexerLine)).call(this, tokens));

        _this.inMultiLineComment = inMultiLineComment;

        _this.update();
        return _this;
    }

    _createClass(FlorenceLexerLine, [{
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

            inMultiLineComment = context.isInMultilineComment();

            var tokens = context.getTokens(),
                line = new FlorenceLine(tokens, inMultiLineComment);

            return line;
        }
    }]);

    return FlorenceLexerLine;
}(CommonLexerLine);

module.exports = FlorenceLexerLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL2xpbmUuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJDb21tb25MZXhlckxpbmUiLCJTaWduaWZpY2FudFRva2VucyIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiRmxvcmVuY2VMZXhlckxpbmUiLCJ0b2tlbnMiLCJpbk11bHRpTGluZUNvbW1lbnQiLCJ1cGRhdGUiLCJoYXNFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImhhc1N0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjb250ZW50IiwicHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQiLCJwYXJzZXIiLCJjb250ZXh0IiwicGFzcyIsImlzSW5NdWx0aWxpbmVDb21tZW50IiwiZ2V0VG9rZW5zIiwibGluZSIsIkZsb3JlbmNlTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEdEI7QUFBQSxJQUVJRSxvQkFBb0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdJRyx1QkFBdUJILFFBQVEsd0JBQVIsQ0FIM0I7O0lBS01JLGlCOzs7QUFDSiwrQkFBWUMsTUFBWixFQUFvQkMsa0JBQXBCLEVBQXdDO0FBQUE7O0FBQUEsMElBQ2hDRCxNQURnQzs7QUFHdEMsY0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjs7QUFFQSxjQUFLQyxNQUFMO0FBTHNDO0FBTXZDOzs7OytDQUVzQjtBQUNyQixtQkFBTyxLQUFLRCxrQkFBWjtBQUNEOzs7d0RBRStCO0FBQUUsbUJBQU9ILHFCQUFxQkssNkJBQXJCLENBQW1ELEtBQUtILE1BQXhELENBQVA7QUFBeUU7OzswREFDekU7QUFBRSxtQkFBT0YscUJBQXFCTSwrQkFBckIsQ0FBcUQsS0FBS0osTUFBMUQsQ0FBUDtBQUEyRTs7O29DQUU1RkssTyxFQUFTQyxnQyxFQUFrQ0MsTSxFQUFRO0FBQ3BFLGdCQUFJTixxQkFBcUJLLGdDQUF6QjtBQUFBLGdCQUNJRSxVQUFVLElBQUlkLE9BQUosQ0FBWVcsT0FBWixFQUFxQkosa0JBQXJCLENBRGQ7O0FBR0FILGlDQUFxQlcsSUFBckIsQ0FBMEJELE9BQTFCOztBQUVBWCw4QkFBa0JZLElBQWxCLENBQXVCRCxPQUF2QixFQUFnQ0QsTUFBaEM7O0FBRUFOLGlDQUFxQk8sUUFBUUUsb0JBQVIsRUFBckI7O0FBRUEsZ0JBQUlWLFNBQVNRLFFBQVFHLFNBQVIsRUFBYjtBQUFBLGdCQUNJQyxPQUFPLElBQUlDLFlBQUosQ0FBaUJiLE1BQWpCLEVBQXlCQyxrQkFBekIsQ0FEWDs7QUFHQSxtQkFBT1csSUFBUDtBQUNEOzs7O0VBOUI2QmhCLGU7O0FBaUNoQ2tCLE9BQU9DLE9BQVAsR0FBaUJoQixpQkFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBDb21tb25MZXhlckxpbmUgPSByZXF1aXJlKCcuLi9jb21tb25MZXhlci9saW5lJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKSxcclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9ub25TaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlckxpbmUgZXh0ZW5kcyBDb21tb25MZXhlckxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKHRva2VucywgaW5NdWx0aUxpbmVDb21tZW50KSB7XHJcbiAgICBzdXBlcih0b2tlbnMpO1xyXG5cclxuICAgIHRoaXMuaW5NdWx0aUxpbmVDb21tZW50ID0gaW5NdWx0aUxpbmVDb21tZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk11bHRpTGluZUNvbW1lbnQoKSB7IFxyXG4gICAgcmV0dXJuIHRoaXMuaW5NdWx0aUxpbmVDb21tZW50OyBcclxuICB9XHJcbiAgXHJcbiAgaGFzRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2Vucy5oYXNFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbih0aGlzLnRva2Vucyk7IH1cclxuICBoYXNTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuKCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbnMuaGFzU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbih0aGlzLnRva2Vucyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50LCBwYXJzZXIpIHtcclxuICAgIHZhciBpbk11bHRpTGluZUNvbW1lbnQgPSBwcmV2aW91c0xpbmVJc0luTXVsdGlMaW5lQ29tbWVudCxcclxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQoY29udGVudCwgaW5NdWx0aUxpbmVDb21tZW50KTtcclxuXHJcbiAgICBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRleHQpO1xyXG4gICAgXHJcbiAgICBTaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRleHQsIHBhcnNlcik7XHJcblxyXG4gICAgaW5NdWx0aUxpbmVDb21tZW50ID0gY29udGV4dC5pc0luTXVsdGlsaW5lQ29tbWVudCgpO1xyXG5cclxuICAgIHZhciB0b2tlbnMgPSBjb250ZXh0LmdldFRva2VucygpLFxyXG4gICAgICAgIGxpbmUgPSBuZXcgRmxvcmVuY2VMaW5lKHRva2VucywgaW5NdWx0aUxpbmVDb21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlckxpbmU7XHJcbiJdfQ==