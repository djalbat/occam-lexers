'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('../common/tokens/regularExpression');

var BNFLine = function (_CommonLine) {
  _inherits(BNFLine, _CommonLine);

  function BNFLine() {
    _classCallCheck(this, BNFLine);

    return _possibleConstructorReturn(this, (BNFLine.__proto__ || Object.getPrototypeOf(BNFLine)).apply(this, arguments));
  }

  _createClass(BNFLine, null, [{
    key: 'fromContent',
    value: function fromContent(content, rules, configuration) {
      var line = _get(BNFLine.__proto__ || Object.getPrototypeOf(BNFLine), 'fromContent', this).call(this, BNFLine, content, rules, configuration, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

      return line;
    }
  }]);

  return BNFLine;
}(CommonLine);

module.exports = BNFLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGluZS5qcyJdLCJuYW1lcyI6WyJDb21tb25MaW5lIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiU3RyaW5nTGl0ZXJhbFRva2VucyIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zIiwiQk5GTGluZSIsImNvbnRlbnQiLCJydWxlcyIsImNvbmZpZ3VyYXRpb24iLCJsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEsNkJBQVIsQ0FGekI7QUFBQSxJQUdNRyxzQkFBc0JILFFBQVEsZ0NBQVIsQ0FINUI7QUFBQSxJQUlNSSwwQkFBMEJKLFFBQVEsb0NBQVIsQ0FKaEM7O0lBTU1LLE87Ozs7Ozs7Ozs7O2dDQUNlQyxPLEVBQVNDLEssRUFBT0MsYSxFQUFlO0FBQ2hELFVBQU1DLGlHQUF5QkosT0FBekIsRUFBa0NDLE9BQWxDLEVBQTJDQyxLQUEzQyxFQUFrREMsYUFBbEQsRUFBaUVQLGFBQWpFLEVBQWdGRyx1QkFBaEYsRUFBeUdELG1CQUF6RyxFQUE4SEQsZ0JBQTlILENBQU47O0FBRUEsYUFBT08sSUFBUDtBQUNEOzs7O0VBTG1CVixVOztBQVF0QlcsT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBCTkZMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7IFxyXG4gICAgY29uc3QgbGluZSA9IHN1cGVyLmZyb21Db250ZW50KEJORkxpbmUsIGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uLCBDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxpbmU7XHJcbiJdfQ==