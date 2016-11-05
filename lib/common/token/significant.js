'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(content, line, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line));

    _this.type = type;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          type = this.getType();

      return new SignificantToken(content, line, type);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          type = this.getType(),
          innerHTML = content,
          ///
      className = type,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  WHITESPACE: 'WHITESPACE',
  END_OF_LINE: 'END_OF_LINE'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImh0bWwiLCJ0eXBlcyIsIldISVRFU1BBQ0UiLCJFTkRfT0ZfTElORSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEsb0lBQ3pCRixPQUR5QixFQUNoQkMsSUFEZ0I7O0FBRy9CLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUgrQjtBQUloQzs7Ozs0QkFFTztBQUNOLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixPQUFPLEtBQUtHLE9BQUwsRUFGWDs7QUFJQSxhQUFPLElBQUlOLGdCQUFKLENBQXFCQyxPQUFyQixFQUE4QkMsSUFBOUIsRUFBb0NDLElBQXBDLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUQsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxZQUFZTixPQUZoQjtBQUFBLFVBRXlCO0FBQ3JCTyxrQkFBWUwsSUFIaEI7QUFBQSxVQUd1QjtBQUNuQk0sK0JBQXVCRCxTQUF2QixVQUFxQ0QsU0FBckMsWUFKSjs7QUFNQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUEzQjRCWCxLOztBQThCL0JFLGlCQUFpQlUsS0FBakIsR0FBeUI7QUFDdkJDLGNBQWEsWUFEVTtBQUV2QkMsZUFBYztBQUZTLENBQXpCOztBQUtBQyxPQUFPQyxPQUFQLEdBQWlCZCxnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZW50LCBsaW5lKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gbmV3IFNpZ25pZmljYW50VG9rZW4oY29udGVudCwgbGluZSwgdHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBXSElURVNQQUNFIDogJ1dISVRFU1BBQ0UnLFxuICBFTkRfT0ZfTElORSA6ICdFTkRfT0ZfTElORSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==