'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line) {
    var updateHTML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;

    this.html = undefined; ///

    if (updateHTML) {
      this.updateHTML();
    }
  }

  _createClass(Token, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;

      this.updateHTML();
    }
  }, {
    key: 'setLine',
    value: function setLine(line) {
      this.line = line;
    }
  }, {
    key: 'setHTML',
    value: function setHTML(html) {
      this.html = html;
    }
  }, {
    key: 'getTrimmedContent',
    value: function getTrimmedContent(startPosition, endPosition) {
      var trimmedContent = this.content.substring(startPosition, endPosition);

      return trimmedContent;
    }
  }, {
    key: 'trimContentToPosition',
    value: function trimContentToPosition(position) {
      this.content = this.content.substr(position);

      this.updateHTML();
    }
  }, {
    key: 'trimContentFromPosition',
    value: function trimContentFromPosition(position) {
      this.content = this.content.substr(0, position);

      this.updateHTML();
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokens = this.line.getTokens(),
          index = tokens.indexOf(this);

      tokens.splice(index, 1, token);
    }
  }, {
    key: 'updateHTML',
    value: function updateHTML() {
      var html = this.content; ///

      this.html = Token.sanitiseHTML(html);
    }
  }], [{
    key: 'trimmedToPosition',
    value: function trimmedToPosition(token, position) {
      var tokenTrimmedToPosition = null,
          tokenLength = token.getLength();

      if (position !== tokenLength) {
        tokenTrimmedToPosition = token.clone().trimContentToPosition(position); ///
      }

      return tokenTrimmedToPosition;
    }
  }, {
    key: 'trimmedFromPosition',
    value: function trimmedFromPosition(token, position) {
      var tokenTrimmedFromPosition = null;

      if (position !== 0) {
        tokenTrimmedFromPosition = token.clone().trimContentFromPosition(position); ///
      }

      return tokenTrimmedFromPosition;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      var sanitisedHTML = html.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedHTML;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsInVwZGF0ZUhUTUwiLCJodG1sIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidHJpbW1lZENvbnRlbnQiLCJzdWJzdHJpbmciLCJwb3NpdGlvbiIsInN1YnN0ciIsInRva2VuIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic2FuaXRpc2VIVE1MIiwidG9rZW5UcmltbWVkVG9Qb3NpdGlvbiIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiY2xvbmUiLCJ0cmltQ29udGVudFRvUG9zaXRpb24iLCJ0b2tlblRyaW1tZWRGcm9tUG9zaXRpb24iLCJ0cmltQ29udGVudEZyb21Qb3NpdGlvbiIsInNhbml0aXNlZEhUTUwiLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQThDO0FBQUEsUUFBbkJDLFVBQW1CLHVFQUFOLElBQU07O0FBQUE7O0FBQzVDLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxTQUFLRSxJQUFMLEdBQVlDLFNBQVosQ0FKNEMsQ0FJcEI7O0FBRXhCLFFBQUlGLFVBQUosRUFBZ0I7QUFDZCxXQUFLQSxVQUFMO0FBQ0Q7QUFDRjs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRSxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0gsT0FBTCxDQUFhSyxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7K0JBRVVMLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsV0FBS0UsVUFBTDtBQUNEOzs7NEJBRU9ELEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7NEJBRU9FLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7c0NBRWlCRyxhLEVBQWVDLFcsRUFBYTtBQUM1QyxVQUFJQyxpQkFBaUIsS0FBS1IsT0FBTCxDQUFhUyxTQUFiLENBQXVCSCxhQUF2QixFQUFzQ0MsV0FBdEMsQ0FBckI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7MENBRXFCRSxRLEVBQVU7QUFDOUIsV0FBS1YsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYVcsTUFBYixDQUFvQkQsUUFBcEIsQ0FBZjs7QUFFQSxXQUFLUixVQUFMO0FBQ0Q7Ozs0Q0FFdUJRLFEsRUFBVTtBQUNoQyxXQUFLVixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhVyxNQUFiLENBQW9CLENBQXBCLEVBQXVCRCxRQUF2QixDQUFmOztBQUVBLFdBQUtSLFVBQUw7QUFDRDs7O2dDQUVXVSxLLEVBQU87QUFDakIsVUFBSUMsU0FBUyxLQUFLWixJQUFMLENBQVVhLFNBQVYsRUFBYjtBQUFBLFVBQ0lDLFFBQVFGLE9BQU9HLE9BQVAsQ0FBZSxJQUFmLENBRFo7O0FBR0FILGFBQU9JLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQixDQUFyQixFQUF3QkgsS0FBeEI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSVQsT0FBTyxLQUFLSCxPQUFoQixDQURXLENBQ2U7O0FBRTFCLFdBQUtHLElBQUwsR0FBWUosTUFBTW1CLFlBQU4sQ0FBbUJmLElBQW5CLENBQVo7QUFDRDs7O3NDQUV3QlMsSyxFQUFPRixRLEVBQVU7QUFDeEMsVUFBSVMseUJBQXlCLElBQTdCO0FBQUEsVUFDSUMsY0FBY1IsTUFBTVMsU0FBTixFQURsQjs7QUFHQSxVQUFJWCxhQUFhVSxXQUFqQixFQUE4QjtBQUM1QkQsaUNBQXlCUCxNQUFNVSxLQUFOLEdBQWNDLHFCQUFkLENBQW9DYixRQUFwQyxDQUF6QixDQUQ0QixDQUM0QztBQUN6RTs7QUFFRCxhQUFPUyxzQkFBUDtBQUNEOzs7d0NBRTBCUCxLLEVBQU9GLFEsRUFBVTtBQUMxQyxVQUFJYywyQkFBMkIsSUFBL0I7O0FBRUEsVUFBSWQsYUFBYSxDQUFqQixFQUFvQjtBQUNsQmMsbUNBQTJCWixNQUFNVSxLQUFOLEdBQWNHLHVCQUFkLENBQXNDZixRQUF0QyxDQUEzQixDQURrQixDQUMwRDtBQUM3RTs7QUFFRCxhQUFPYyx3QkFBUDtBQUNEOzs7aUNBRW1CckIsSSxFQUFNO0FBQ3hCLFVBQUl1QixnQkFBZ0J2QixLQUFLd0IsT0FBTCxDQUFhLEdBQWIsRUFBaUIsT0FBakIsRUFBMEJBLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDLE1BQXZDLEVBQStDQSxPQUEvQyxDQUF1RCxHQUF2RCxFQUE0RCxNQUE1RCxDQUFwQjs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCOUIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdXBkYXRlSFRNTCA9IHRydWUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG5cbiAgICB0aGlzLmh0bWwgPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIGlmICh1cGRhdGVIVE1MKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcbiAgfVxuXG4gIHNldExpbmUobGluZSkge1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBzZXRIVE1MKGh0bWwpIHtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0VHJpbW1lZENvbnRlbnQoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICB2YXIgdHJpbW1lZENvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB0cmltbWVkQ29udGVudDtcbiAgfVxuXG4gIHRyaW1Db250ZW50VG9Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIocG9zaXRpb24pO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG4gIH1cblxuICB0cmltQ29udGVudEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHIoMCwgcG9zaXRpb24pO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICB1cGRhdGVIVE1MKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5jb250ZW50OyAgLy8vXG5cbiAgICB0aGlzLmh0bWwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZFRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uKSB7XG4gICAgdmFyIHRva2VuVHJpbW1lZFRvUG9zaXRpb24gPSBudWxsLFxuICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSB0b2tlbkxlbmd0aCkge1xuICAgICAgdG9rZW5UcmltbWVkVG9Qb3NpdGlvbiA9IHRva2VuLmNsb25lKCkudHJpbUNvbnRlbnRUb1Bvc2l0aW9uKHBvc2l0aW9uKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuVHJpbW1lZFRvUG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgdHJpbW1lZEZyb21Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24pIHtcbiAgICB2YXIgdG9rZW5UcmltbWVkRnJvbVBvc2l0aW9uID0gbnVsbDtcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gMCkge1xuICAgICAgdG9rZW5UcmltbWVkRnJvbVBvc2l0aW9uID0gdG9rZW4uY2xvbmUoKS50cmltQ29udGVudEZyb21Qb3NpdGlvbihwb3NpdGlvbik7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlblRyaW1tZWRGcm9tUG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHtcbiAgICB2YXIgc2FuaXRpc2VkSFRNTCA9IGh0bWwucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkSFRNTDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19