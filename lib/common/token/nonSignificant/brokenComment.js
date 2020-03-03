'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var types = require('../../types'),
    NonSignificantToken = require('../../token/nonSignificant');

var brokenCommentType = types.brokenCommentType;

var BrokenCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(BrokenCommentToken, _NonSignificantToken);

  function BrokenCommentToken() {
    _classCallCheck(this, BrokenCommentToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrokenCommentToken).apply(this, arguments));
  }

  _createClass(BrokenCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(BrokenCommentToken.prototype), "clone", this).call(this, BrokenCommentToken, startPosition, endPosition);
    }
  }], [{
    key: "match",
    value: function match(content) {
      return NonSignificantToken.match(BrokenCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(BrokenCommentToken, content);
    }
  }]);

  return BrokenCommentToken;
}(NonSignificantToken);

var type = brokenCommentType,
    ///
regularExpression = /^\//;
Object.assign(BrokenCommentToken, {
  type: type,
  regularExpression: regularExpression
});
module.exports = BrokenCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlbkNvbW1lbnQuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImJyb2tlbkNvbW1lbnRUeXBlIiwiQnJva2VuQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUFyQjtBQUFBLElBQ01DLG1CQUFtQixHQUFHRCxPQUFPLENBQUMsNEJBQUQsQ0FEbkM7O0lBR1FFLGlCLEdBQXNCSCxLLENBQXRCRyxpQjs7SUFFRkMsa0I7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDJGQUFtQkYsa0JBQW5CLEVBQXVDQyxhQUF2QyxFQUFzREMsV0FBdEQ7QUFBcUU7OzswQkFFNUZDLE8sRUFBUztBQUFFLGFBQU9MLG1CQUFtQixDQUFDTSxLQUFwQixDQUEwQkosa0JBQTFCLEVBQThDRyxPQUE5QyxDQUFQO0FBQWdFOzs7Z0NBRXJFQSxPLEVBQVM7QUFBRSxhQUFPTCxtQkFBbUIsQ0FBQ08sV0FBcEIsQ0FBZ0NMLGtCQUFoQyxFQUFvREcsT0FBcEQsQ0FBUDtBQUFzRTs7OztFQUxyRUwsbUI7O0FBUWpDLElBQU1RLElBQUksR0FBR1AsaUJBQWI7QUFBQSxJQUFpQztBQUMzQlEsaUJBQWlCLEdBQUcsS0FEMUI7QUFHQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNULGtCQUFkLEVBQWtDO0FBQ2hDTSxFQUFBQSxJQUFJLEVBQUpBLElBRGdDO0FBRWhDQyxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRmdDLENBQWxDO0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBicm9rZW5Db21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIEJyb2tlbkNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQnJva2VuQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChCcm9rZW5Db21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQnJva2VuQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gYnJva2VuQ29tbWVudFR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8vO1xuXG5PYmplY3QuYXNzaWduKEJyb2tlbkNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQnJva2VuQ29tbWVudFRva2VuO1xuIl19