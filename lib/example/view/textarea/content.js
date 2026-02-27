"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentTextarea extends _textarea.default {
    getContent() {
        const value = this.getValue(), content = value; ///
        return content;
    }
    setContent(content) {
        const value = content; ///
        this.setValue(value);
    }
    parentContext() {
        const getContent = this.getContent.bind(this), setContent = this.setContent.bind(this);
        return {
            getContent,
            setContent
        };
    }
    static defaultProperties = {
        className: "content",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50OyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldENvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHNldENvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGVudFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0Q29udGVudCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLHdCQUF3QkMsaUJBQVE7SUFDbkRDLGFBQWE7UUFDWCxNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsVUFBVUYsT0FBTyxHQUFHO1FBRTFCLE9BQU9FO0lBQ1Q7SUFFQUMsV0FBV0QsT0FBTyxFQUFFO1FBQ2xCLE1BQU1GLFFBQVFFLFNBQVUsR0FBRztRQUUzQixJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7SUFDaEI7SUFFQUssZ0JBQWdCO1FBQ2QsTUFBTU4sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDdENILGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRTVDLE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==