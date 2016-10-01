'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    WhitespaceToken = require('../common/token/whitespace'),
    SignificantContentToken = require('../common/token/significantContent'),
    EndOfMultiLineCommentToken = require('./token/comment/endOfMultiLine'),
    StartOfMultiLineCommentToken = require('./token/comment/startOfMultiLine'),
    MiddleOfMultiLineCommentToken = require('./token/comment/middleOfMultiLine');

var NonSignificantTokens = function () {
        function NonSignificantTokens() {
                _classCallCheck(this, NonSignificantTokens);
        }

        _createClass(NonSignificantTokens, null, [{
                key: 'pass',
                value: function pass(content, context, line) {
                        var tokens = [],
                            remainingContent,
                            tokenLength,
                            token;

                        while (content !== '') {
                                var startOfMultiLineCommentTokenPosition = StartOfMultiLineCommentToken.position(content);

                                if (startOfMultiLineCommentTokenPosition === 0) {
                                        var startOfMultiLineCommentToken = StartOfMultiLineCommentToken.fromContent(content, line);

                                        token = startOfMultiLineCommentToken; ///

                                        tokenLength = token.getLength();

                                        content = content.substring(tokenLength);

                                        context.increaseMultiLineCommentDepth();

                                        tokens.push(token);

                                        continue;
                                }

                                var contentLength = content.length,
                                    multiLineCommentDepth = context.getMultiLineCommentDepth();

                                if (multiLineCommentDepth > 0) {
                                        var endOfMultiLineCommentTokenPosition = EndOfMultiLineCommentToken.position(content);

                                        if (endOfMultiLineCommentTokenPosition === 0) {
                                                var endOfMultiLineCommentToken = EndOfMultiLineCommentToken.fromContent(content, line);

                                                token = endOfMultiLineCommentToken; ///

                                                tokenLength = token.getLength();

                                                context.decreaseMultiLineCommentDepth();

                                                content = content.substring(tokenLength);

                                                tokens.push(token);

                                                continue;
                                        }

                                        tokenLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, endOfMultiLineCommentTokenPosition, contentLength);

                                        remainingContent = content.substring(tokenLength);

                                        content = content.substring(0, tokenLength);

                                        var middleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken.fromContent(content, line);

                                        token = middleOfMultiLineCommentToken; ///

                                        tokenLength = token.getLength();

                                        content = remainingContent;

                                        tokens.push(token);

                                        continue;
                                }

                                var whitespaceTokenPosition = WhitespaceToken.position(content);

                                if (whitespaceTokenPosition === 0) {
                                        var whitespaceToken = WhitespaceToken.fromContent(content, line);

                                        token = whitespaceToken; ///

                                        tokenLength = token.getLength();

                                        content = content.substring(tokenLength);

                                        tokens.push(token);

                                        continue;
                                }

                                tokenLength = util.minBarMinusOne(startOfMultiLineCommentTokenPosition, whitespaceTokenPosition, contentLength);

                                remainingContent = content.substring(tokenLength);

                                content = content.substring(0, tokenLength);

                                var significantContentToken = SignificantContentToken.fromContent(content);

                                token = significantContentToken; ///

                                content = remainingContent;

                                tokens.push(token);

                                continue;
                        }

                        return tokens;
                }
        }]);

        return NonSignificantTokens;
}();

module.exports = NonSignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL25vblNpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiV2hpdGVzcGFjZVRva2VuIiwiU2lnbmlmaWNhbnRDb250ZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lIiwidG9rZW5zIiwicmVtYWluaW5nQ29udGVudCIsInRva2VuTGVuZ3RoIiwidG9rZW4iLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuUG9zaXRpb24iLCJwb3NpdGlvbiIsInN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJmcm9tQ29udGVudCIsImdldExlbmd0aCIsInN1YnN0cmluZyIsImluY3JlYXNlTXVsdGlMaW5lQ29tbWVudERlcHRoIiwicHVzaCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aUxpbmVDb21tZW50RGVwdGgiLCJnZXRNdWx0aUxpbmVDb21tZW50RGVwdGgiLCJlbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlblBvc2l0aW9uIiwiZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJkZWNyZWFzZU11bHRpTGluZUNvbW1lbnREZXB0aCIsIm1pbkJhck1pbnVzT25lIiwibWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Qb3NpdGlvbiIsIndoaXRlc3BhY2VUb2tlbiIsInNpZ25pZmljYW50Q29udGVudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCO0FBQUEsSUFF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UVksU0FBUixDQUFrQlAsV0FBbEIsQ0FBbkI7O0FBRUFMLDBDQUFVQSxRQUFRWSxTQUFSLENBQWtCLENBQWxCLEVBQXFCUCxXQUFyQixDQUFWOztBQUVBLG9DQUFJcUIsMEJBQTBCL0Isd0JBQXdCZSxXQUF4QixDQUFvQ1YsT0FBcEMsQ0FBOUI7O0FBRUFNLHdDQUFRb0IsdUJBQVIsQ0FwRnFCLENBb0ZhOztBQUVsQzFCLDBDQUFVSSxnQkFBVjs7QUFFQUQsdUNBQU9XLElBQVAsQ0FBWVIsS0FBWjs7QUFFQTtBQUNEOztBQUVELCtCQUFPSCxNQUFQO0FBQ0Q7Ozs7OztBQUdId0IsT0FBT0MsT0FBUCxHQUFpQjdCLG9CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKSxcclxuICAgIFNpZ25pZmljYW50Q29udGVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Q29udGVudCcpLFxyXG4gICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2NvbW1lbnQvZW5kT2ZNdWx0aUxpbmUnKSxcclxuICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2NvbW1lbnQvc3RhcnRPZk11bHRpTGluZScpLFxyXG4gICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2NvbW1lbnQvbWlkZGxlT2ZNdWx0aUxpbmUnKTtcclxuXHJcbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gW10sXHJcbiAgICAgICAgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgICB0b2tlbkxlbmd0aCxcclxuICAgICAgICB0b2tlbjtcclxuICAgIFxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIHZhciBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuUG9zaXRpb24gPSBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW5Qb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5pbmNyZWFzZU11bHRpTGluZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoLFxyXG4gICAgICAgICAgbXVsdGlMaW5lQ29tbWVudERlcHRoID0gY29udGV4dC5nZXRNdWx0aUxpbmVDb21tZW50RGVwdGgoKTtcclxuXHJcbiAgICAgIGlmIChtdWx0aUxpbmVDb21tZW50RGVwdGggPiAwKSB7XHJcbiAgICAgICAgdmFyIGVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuUG9zaXRpb24gPSBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5wb3NpdGlvbihjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuUG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHZhciBlbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIHRva2VuID0gZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICAgICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgY29udGV4dC5kZWNyZWFzZU11bHRpTGluZUNvbW1lbnREZXB0aCgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW5Qb3NpdGlvbiwgZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW5Qb3NpdGlvbiwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbkxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuTGVuZ3RoKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID0gV2hpdGVzcGFjZVRva2VuLnBvc2l0aW9uKGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHdoaXRlc3BhY2VUb2tlblBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudChjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSB3aGl0ZXNwYWNlVG9rZW47IC8vL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdG9rZW5MZW5ndGggPSB1dGlsLm1pbkJhck1pbnVzT25lKHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW5Qb3NpdGlvbiwgd2hpdGVzcGFjZVRva2VuUG9zaXRpb24sIGNvbnRlbnRMZW5ndGgpO1xyXG4gICAgICBcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuTGVuZ3RoKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCB0b2tlbkxlbmd0aCk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgc2lnbmlmaWNhbnRDb250ZW50VG9rZW4gPSBTaWduaWZpY2FudENvbnRlbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRDb250ZW50VG9rZW47ICAvLy9cclxuICAgICAgXHJcbiAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG5cclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW5zO1xyXG4iXX0=