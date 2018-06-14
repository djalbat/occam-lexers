'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    SignificantToken = require('../significant');

var stringLiteralType = types.stringLiteralType;

var StringLiteralToken = function (_SignificantToken) {
      _inherits(StringLiteralToken, _SignificantToken);

      function StringLiteralToken() {
            _classCallCheck(this, StringLiteralToken);

            return _possibleConstructorReturn(this, (StringLiteralToken.__proto__ || Object.getPrototypeOf(StringLiteralToken)).apply(this, arguments));
      }

      _createClass(StringLiteralToken, [{
            key: 'clone',
            value: function clone(startPosition, endPosition) {
                  return _get(StringLiteralToken.prototype.__proto__ || Object.getPrototypeOf(StringLiteralToken.prototype), 'clone', this).call(this, StringLiteralToken, startPosition, endPosition);
            }
      }, {
            key: 'getString',
            value: function getString() {
                  var content = this.getContent(),
                      contentLength = content.length,
                      start = 1,
                      end = contentLength - 1,
                      string = content.substring(start, end);

                  return string;
            }
      }], [{
            key: 'fromContent',
            value: function fromContent(content) {
                  return SignificantToken.fromContent(StringLiteralToken, content);
            }
      }, {
            key: 'fromWithinContent',
            value: function fromWithinContent(content) {
                  return SignificantToken.fromWithinContent(StringLiteralToken, content);
            }
      }, {
            key: 'positionWithinContent',
            value: function positionWithinContent(content) {
                  return SignificantToken.positionWithinContent(StringLiteralToken, content);
            }
      }]);

      return StringLiteralToken;
}(SignificantToken);

var type = stringLiteralType,
    ///
regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(StringLiteralToken, {
      type: type,
      regularExpression: regularExpression
});

module.exports = StringLiteralToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJTdHJpbmdMaXRlcmFsVG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInN0cmluZyIsInN1YnN0cmluZyIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxhQUFSLENBQWQ7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsZ0JBQVIsQ0FEekI7O0lBR1FFLGlCLEdBQXNCSCxLLENBQXRCRyxpQjs7SUFFRkMsa0I7Ozs7Ozs7Ozs7O2tDQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHVKQUFtQkYsa0JBQW5CLEVBQXVDQyxhQUF2QyxFQUFzREMsV0FBdEQ7QUFBcUU7Ozt3Q0FFN0Y7QUFDVixzQkFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsc0JBQ01DLGdCQUFnQkYsUUFBUUcsTUFEOUI7QUFBQSxzQkFFTUMsUUFBUSxDQUZkO0FBQUEsc0JBR01DLE1BQU1ILGdCQUFnQixDQUg1QjtBQUFBLHNCQUlNSSxTQUFTTixRQUFRTyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QkMsR0FBekIsQ0FKZjs7QUFNQSx5QkFBT0MsTUFBUDtBQUNEOzs7d0NBRWtCTixPLEVBQVM7QUFBRSx5QkFBT0wsaUJBQWlCYSxXQUFqQixDQUE2Qlgsa0JBQTdCLEVBQWlERyxPQUFqRCxDQUFQO0FBQW1FOzs7OENBRXhFQSxPLEVBQVM7QUFBRSx5QkFBT0wsaUJBQWlCYyxpQkFBakIsQ0FBbUNaLGtCQUFuQyxFQUF1REcsT0FBdkQsQ0FBUDtBQUF5RTs7O2tEQUVoRkEsTyxFQUFTO0FBQUUseUJBQU9MLGlCQUFpQmUscUJBQWpCLENBQXVDYixrQkFBdkMsRUFBMkRHLE9BQTNELENBQVA7QUFBNkU7Ozs7RUFqQnRGTCxnQjs7QUFvQmpDLElBQU1nQixPQUFPZixpQkFBYjtBQUFBLElBQWdDO0FBQzFCZ0Isb0JBQW9CLGlCQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjakIsa0JBQWQsRUFBa0M7QUFDaENjLGdCQURnQztBQUVoQ0M7QUFGZ0MsQ0FBbEM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJuQixrQkFBakIiLCJmaWxlIjoic3RyaW5nTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi90eXBlcycpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFN0cmluZ0xpdGVyYWxUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGgsXG4gICAgICAgICAgc3RhcnQgPSAxLFxuICAgICAgICAgIGVuZCA9IGNvbnRlbnRMZW5ndGggLSAxLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFN0cmluZ0xpdGVyYWxUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBzdHJpbmdMaXRlcmFsVHlwZSwgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cIig/OlxcXFwufFteXCJdKSpcIi87XG5cbk9iamVjdC5hc3NpZ24oU3RyaW5nTGl0ZXJhbFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW47XG4iXX0=