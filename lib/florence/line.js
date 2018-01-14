'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('../common/tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var FlorenceLine = function (_CommonLine) {
    _inherits(FlorenceLine, _CommonLine);

    function FlorenceLine() {
        _classCallCheck(this, FlorenceLine);

        return _possibleConstructorReturn(this, (FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine)).apply(this, arguments));
    }

    _createClass(FlorenceLine, [{
        key: 'initialise',
        value: function initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
            _get(FlorenceLine.prototype.__proto__ || Object.getPrototypeOf(FlorenceLine.prototype), 'initialise', this).call(this, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

            var florenceLine = this,
                ///
            line = florenceLine,
                ///
            tokens = line.getTokens();

            var endOfLineToken = EndOfLineToken.fromLine(line);

            tokens.push(endOfLineToken);

            this.setTokens(tokens);
        }
    }], [{
        key: 'fromContentRulesAndConfiguration',
        value: function fromContentRulesAndConfiguration(content, rules, configuration) {
            var florenceLine = _get(FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine), 'fromContentRulesAndConfiguration', this).call(this, FlorenceLine, content, rules, configuration);

            florenceLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

            return florenceLine;
        }
    }]);

    return FlorenceLine;
}(CommonLine);

module.exports = FlorenceLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsIkZsb3JlbmNlTGluZSIsImZsb3JlbmNlTGluZSIsImxpbmUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJlbmRPZkxpbmVUb2tlbiIsImZyb21MaW5lIiwicHVzaCIsInNldFRva2VucyIsImNvbnRlbnQiLCJydWxlcyIsImNvbmZpZ3VyYXRpb24iLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEsNkJBQVIsQ0FGekI7QUFBQSxJQUdNRyxzQkFBc0JILFFBQVEsZ0NBQVIsQ0FINUI7QUFBQSxJQUlNSSwwQkFBMEJKLFFBQVEsNEJBQVIsQ0FKaEM7QUFBQSxJQUtNSyxpQkFBaUJMLFFBQVEsdUNBQVIsQ0FMdkI7O0lBT01NLFk7Ozs7Ozs7Ozs7O21DQUNPTCxhLEVBQWVHLHVCLEVBQXlCRCxtQixFQUFxQkQsZ0IsRUFBa0I7QUFDeEYsbUlBQWlCRCxhQUFqQixFQUFnQ0csdUJBQWhDLEVBQXlERCxtQkFBekQsRUFBOEVELGdCQUE5RTs7QUFFQSxnQkFBTUssZUFBZSxJQUFyQjtBQUFBLGdCQUE0QjtBQUN0QkMsbUJBQU9ELFlBRGI7QUFBQSxnQkFDNEI7QUFDdEJFLHFCQUFTRCxLQUFLRSxTQUFMLEVBRmY7O0FBSUEsZ0JBQU1DLGlCQUFpQk4sZUFBZU8sUUFBZixDQUF3QkosSUFBeEIsQ0FBdkI7O0FBRUFDLG1CQUFPSSxJQUFQLENBQVlGLGNBQVo7O0FBRUEsaUJBQUtHLFNBQUwsQ0FBZUwsTUFBZjtBQUNEOzs7eURBRXVDTSxPLEVBQVNDLEssRUFBT0MsYSxFQUFlO0FBQ3JFLGdCQUFNVix3SUFBc0RELFlBQXRELEVBQW9FUyxPQUFwRSxFQUE2RUMsS0FBN0UsRUFBb0ZDLGFBQXBGLENBQU47O0FBRUFWLHlCQUFhVyxVQUFiLENBQXdCakIsYUFBeEIsRUFBdUNHLHVCQUF2QyxFQUFnRUQsbUJBQWhFLEVBQXFGRCxnQkFBckY7O0FBRUEsbUJBQU9LLFlBQVA7QUFDRDs7OztFQXJCd0JSLFU7O0FBd0IzQm9CLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIHN1cGVyLmluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGluZSA9IHRoaXMsICAvLy9cclxuICAgICAgICAgIGxpbmUgPSBmbG9yZW5jZUxpbmUsICAvLy9cclxuICAgICAgICAgIHRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTGluZShsaW5lKTtcclxuXHJcbiAgICB0b2tlbnMucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgZmxvcmVuY2VMaW5lID0gc3VwZXIuZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oRmxvcmVuY2VMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgZmxvcmVuY2VMaW5lLmluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGluZTtcclxuIl19