'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    SpecialTokens = require('./specialTokens'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var GallinaLine = function (_CommonLine) {
  _inherits(GallinaLine, _CommonLine);

  function GallinaLine(content, multiLineCommentDepth) {
    _classCallCheck(this, GallinaLine);

    var _this = _possibleConstructorReturn(this, (GallinaLine.__proto__ || Object.getPrototypeOf(GallinaLine)).call(this, content));

    _this.multiLineCommentDepth = multiLineCommentDepth;
    return _this;
  }

  _createClass(GallinaLine, [{
    key: 'getMultiLineCommentDepth',
    value: function getMultiLineCommentDepth() {
      return this.multiLineCommentDepth;
    }
  }, {
    key: 'increaseMultiLineCommentDepth',
    value: function increaseMultiLineCommentDepth() {
      this.multiLineCommentDepth++;
    }
  }, {
    key: 'decreaseMultiLineCommentDepth',
    value: function decreaseMultiLineCommentDepth() {
      this.multiLineCommentDepth--;
    }
  }, {
    key: 'getContentSubstring',
    value: function getContentSubstring(length) {
      var content = this.getContent(),
          contentSubString = content.substring(0, length);

      return contentSubString;
    }
  }, {
    key: 'chopContent',
    value: function chopContent(length) {
      var content = this.getContent();

      content = content.substring(length);

      this.setContent(content);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, multiLineCommentDepth) {
      var line = new GallinaLine(content, multiLineCommentDepth);

      NonSignificantTokens.pass(line);

      SpecialTokens.pass(line);

      SignificantTokens.pass(line);

      line.setContent(content); ///

      return line;
    }
  }]);

  return GallinaLine;
}(CommonLine);

module.exports = GallinaLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xpbmUuanMiXSwibmFtZXMiOlsiQ29tbW9uTGluZSIsInJlcXVpcmUiLCJTcGVjaWFsVG9rZW5zIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkdhbGxpbmFMaW5lIiwiY29udGVudCIsIm11bHRpTGluZUNvbW1lbnREZXB0aCIsImxlbmd0aCIsImdldENvbnRlbnQiLCJjb250ZW50U3ViU3RyaW5nIiwic3Vic3RyaW5nIiwic2V0Q29udGVudCIsImxpbmUiLCJwYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGdCQUFSLENBQWpCO0FBQUEsSUFDSUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFSUUsb0JBQW9CRixRQUFRLHFCQUFSLENBRnhCO0FBQUEsSUFHSUcsdUJBQXVCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtNSSxXOzs7QUFDSix1QkFBWUMsT0FBWixFQUFxQkMscUJBQXJCLEVBQTRDO0FBQUE7O0FBQUEsMEhBQ3BDRCxPQURvQzs7QUFHMUMsVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUgwQztBQUkzQzs7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQSxxQkFBWjtBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtBLHFCQUFMO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0EscUJBQUw7QUFDRDs7O3dDQUVtQkMsTSxFQUFRO0FBQzFCLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUMsbUJBQW1CSixRQUFRSyxTQUFSLENBQWtCLENBQWxCLEVBQXFCSCxNQUFyQixDQUR2Qjs7QUFHQSxhQUFPRSxnQkFBUDtBQUNEOzs7Z0NBRVdGLE0sRUFBUTtBQUNsQixVQUFJRixVQUFVLEtBQUtHLFVBQUwsRUFBZDs7QUFFQUgsZ0JBQVVBLFFBQVFLLFNBQVIsQ0FBa0JILE1BQWxCLENBQVY7O0FBRUEsV0FBS0ksVUFBTCxDQUFnQk4sT0FBaEI7QUFDRDs7O2dDQUVrQkEsTyxFQUFTQyxxQixFQUF1QjtBQUNqRCxVQUFJTSxPQUFPLElBQUlSLFdBQUosQ0FBZ0JDLE9BQWhCLEVBQXlCQyxxQkFBekIsQ0FBWDs7QUFFQUgsMkJBQXFCVSxJQUFyQixDQUEwQkQsSUFBMUI7O0FBRUFYLG9CQUFjWSxJQUFkLENBQW1CRCxJQUFuQjs7QUFFQVYsd0JBQWtCVyxJQUFsQixDQUF1QkQsSUFBdkI7O0FBRUFBLFdBQUtELFVBQUwsQ0FBZ0JOLE9BQWhCLEVBVGlELENBU3ZCOztBQUUxQixhQUFPTyxJQUFQO0FBQ0Q7Ozs7RUE5Q3VCYixVOztBQWlEMUJlLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBTcGVjaWFsVG9rZW5zID0gcmVxdWlyZSgnLi9zcGVjaWFsVG9rZW5zJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKSxcclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9ub25TaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgR2FsbGluYUxpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBtdWx0aUxpbmVDb21tZW50RGVwdGgpIHtcclxuICAgIHN1cGVyKGNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICB0aGlzLm11bHRpTGluZUNvbW1lbnREZXB0aCA9IG11bHRpTGluZUNvbW1lbnREZXB0aDtcclxuICB9XHJcblxyXG4gIGdldE11bHRpTGluZUNvbW1lbnREZXB0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpTGluZUNvbW1lbnREZXB0aDtcclxuICB9XHJcblxyXG4gIGluY3JlYXNlTXVsdGlMaW5lQ29tbWVudERlcHRoKCkge1xyXG4gICAgdGhpcy5tdWx0aUxpbmVDb21tZW50RGVwdGgrKztcclxuICB9XHJcblxyXG4gIGRlY3JlYXNlTXVsdGlMaW5lQ29tbWVudERlcHRoKCkge1xyXG4gICAgdGhpcy5tdWx0aUxpbmVDb21tZW50RGVwdGgtLTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRTdWJzdHJpbmcobGVuZ3RoKSB7XHJcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgIGNvbnRlbnRTdWJTdHJpbmcgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZW5ndGgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29udGVudFN1YlN0cmluZztcclxuICB9XHJcblxyXG4gIGNob3BDb250ZW50KGxlbmd0aCkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGxlbmd0aCk7XHJcbiAgICBcclxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBtdWx0aUxpbmVDb21tZW50RGVwdGgpIHtcclxuICAgIHZhciBsaW5lID0gbmV3IEdhbGxpbmFMaW5lKGNvbnRlbnQsIG11bHRpTGluZUNvbW1lbnREZXB0aCk7XHJcblxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMucGFzcyhsaW5lKTtcclxuXHJcbiAgICBTcGVjaWFsVG9rZW5zLnBhc3MobGluZSk7XHJcbiAgICBcclxuICAgIFNpZ25pZmljYW50VG9rZW5zLnBhc3MobGluZSk7XHJcbiAgICBcclxuICAgIGxpbmUuc2V0Q29udGVudChjb250ZW50KTsgLy8vXHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hTGluZTtcclxuIl19