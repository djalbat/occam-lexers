'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantContentToken = function () {
  function SignificantContentToken(content) {
    _classCallCheck(this, SignificantContentToken);

    this.content = content;
  }

  _createClass(SignificantContentToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var significantContentToken = new SignificantContentToken(content);

      return significantContentToken;
    }
  }]);

  return SignificantContentToken;
}();

module.exports = SignificantContentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pZmljYW50Q29udGVudFRva2VuIiwiY29udGVudCIsInNpZ25pZmljYW50Q29udGVudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSx1QjtBQUNKLG1DQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7OztnQ0FFa0JBLE8sRUFBUztBQUMxQixVQUFJQywwQkFBMEIsSUFBSUYsdUJBQUosQ0FBNEJDLE9BQTVCLENBQTlCOztBQUVBLGFBQU9DLHVCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCSix1QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTaWduaWZpY2FudENvbnRlbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIHNpZ25pZmljYW50Q29udGVudFRva2VuID0gbmV3IFNpZ25pZmljYW50Q29udGVudFRva2VuKGNvbnRlbnQpO1xuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudENvbnRlbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50Q29udGVudFRva2VuO1xuIl19