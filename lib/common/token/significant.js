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

    var updateHTML = false;

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line, updateHTML));

    _this.type = type;

    _this.updateHTML();
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'clone',
    value: function clone(Class) {
      Class = Class || SignificantToken;

      var content = this.getContent(),
          line = this.getLine(),
          type = this.getType(),
          significantToken = new Class(content, line, type);

      return significantToken;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      this.type = type;
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML() {
      var content = this.getContent(),
          type = this.type,
          innerHTML = content,
          ///
      className = type,
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<span class="' + className + '">' + sanitisedInnerHTML + '</span>';

      this.setHTML(html);
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsInVwZGF0ZUhUTUwiLCJDbGFzcyIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZWRJbm5lckhUTUwiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwic2V0SFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFFBQUlDLGFBQWEsS0FBakI7O0FBRCtCLG9JQUd6QkgsT0FIeUIsRUFHaEJDLElBSGdCLEVBR1ZFLFVBSFU7O0FBSy9CLFVBQUtELElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxVQUFMO0FBUCtCO0FBUWhDOzs7OzBCQUVLQyxLLEVBQU87QUFDWEEsY0FBUUEsU0FBU0wsZ0JBQWpCOztBQUVBLFVBQUlDLFVBQVUsS0FBS0ssVUFBTCxFQUFkO0FBQUEsVUFDSUosT0FBTyxLQUFLSyxPQUFMLEVBRFg7QUFBQSxVQUVJSixPQUFPLEtBQUtLLE9BQUwsRUFGWDtBQUFBLFVBR0lDLG1CQUFtQixJQUFJSixLQUFKLENBQVVKLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQUh2Qjs7QUFLQSxhQUFPTSxnQkFBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtOLElBQVo7QUFDRDs7OzRCQUVPQSxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUYsVUFBVSxLQUFLSyxVQUFMLEVBQWQ7QUFBQSxVQUNJSCxPQUFPLEtBQUtBLElBRGhCO0FBQUEsVUFFSU8sWUFBWVQsT0FGaEI7QUFBQSxVQUV5QjtBQUNyQlUsa0JBQVlSLElBSGhCO0FBQUEsVUFHdUI7QUFDbkJTLDJCQUFxQmQsTUFBTWUsWUFBTixDQUFtQkgsU0FBbkIsQ0FKekI7QUFBQSxVQUtJSSx5QkFBdUJILFNBQXZCLFVBQXFDQyxrQkFBckMsWUFMSjs7QUFPQSxXQUFLRyxPQUFMLENBQWFELElBQWI7QUFDRDs7OztFQXZDNEJoQixLOztBQTBDL0JFLGlCQUFpQmdCLEtBQWpCLEdBQXlCO0FBQ3ZCQyxVQUFTLFFBRGM7QUFFdkJDLGFBQVksV0FGVztBQUd2QkMsY0FBYTtBQUhVLENBQXpCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCckIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgdmFyIHVwZGF0ZUhUTUwgPSBmYWxzZTtcblxuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIHVwZGF0ZUhUTUwpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgfVxuXG4gIGNsb25lKENsYXNzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBTaWduaWZpY2FudFRva2VuO1xuICAgIFxuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuICBcbiAgdXBkYXRlSFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdGhpcy50eXBlLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgIC8vL1xuICAgICAgICBzYW5pdGlzZWRJbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKSxcbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7c2FuaXRpc2VkSW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgdGhpcy5zZXRIVE1MKGh0bWwpO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZyA6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmUgOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZSA6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19