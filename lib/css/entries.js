'use strict';

var entries = [{
  "special": ";|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
}, {
  "keyword": "(?:!important|@media)"
}, {
  "colour": "#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})"
}, {
  "percentage": "(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
}, {
  "frequency": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
}, {
  "length": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
}, {
  "angle": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
}, {
  "time": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
}, {
  "rems": "(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
}, {
  "ems": "(?:[0-9]+|[0-9]*\\.[0-9]+)em"
}, {
  "number": "[0-9]+|[0-9]*\\.[0-9]+"
}, {
  "pseudoElement": "::[_a-z][_a-z0-9-]*"
}, {
  "pseudoClass": ":[_a-z][_a-z0-9-]*"
}, {
  "class": "\\.[_a-z][_a-z0-9-]*"
}, {
  "operator": "^and|not|only|not$"
}, {
  "identifier": "[_a-z][_a-z0-9-]*"
}, {
  "unaryOperator": "\\+|\\-"
}, {
  "unassigned": "^.*$"
}];

module.exports = entries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvZW50cmllcy5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsVUFBVSxDQUVkO0FBQ0UsYUFBVztBQURiLENBRmMsRUFLZDtBQUNFLGFBQVc7QUFEYixDQUxjLEVBUWQ7QUFDRSxZQUFVO0FBRFosQ0FSYyxFQVdkO0FBQ0UsZ0JBQWM7QUFEaEIsQ0FYYyxFQWNkO0FBQ0UsZUFBYTtBQURmLENBZGMsRUFpQmQ7QUFDRSxZQUFVO0FBRFosQ0FqQmMsRUFvQmQ7QUFDRSxXQUFTO0FBRFgsQ0FwQmMsRUF1QmQ7QUFDRSxVQUFRO0FBRFYsQ0F2QmMsRUEwQmQ7QUFDRSxVQUFRO0FBRFYsQ0ExQmMsRUE2QmQ7QUFDRSxTQUFPO0FBRFQsQ0E3QmMsRUFnQ2Q7QUFDRSxZQUFVO0FBRFosQ0FoQ2MsRUFtQ2Q7QUFDRSxtQkFBaUI7QUFEbkIsQ0FuQ2MsRUFzQ2Q7QUFDRSxpQkFBZTtBQURqQixDQXRDYyxFQXlDZDtBQUNFLFdBQVM7QUFEWCxDQXpDYyxFQTRDZDtBQUNFLGNBQVk7QUFEZCxDQTVDYyxFQStDZDtBQUNFLGdCQUFjO0FBRGhCLENBL0NjLEVBa0RkO0FBQ0UsbUJBQWlCO0FBRG5CLENBbERjLEVBcURkO0FBQ0UsZ0JBQWM7QUFEaEIsQ0FyRGMsQ0FBaEI7O0FBMkRBQyxPQUFPQyxPQUFQLEdBQWlCRixPQUFqQiIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiO3wsfC98XFxcXHw9fH49fD18PnxcXFxce3xcXFxcfXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCIoPzohaW1wb3J0YW50fEBtZWRpYSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb2xvdXJcIjogXCIjKD86WzAtOWEtZkEtRl17M318WzAtOWEtZkEtRl17Nn0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicGVyY2VudGFnZVwiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylcXFxcJVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZyZXF1ZW5jeVwiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpoenxraHopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibGVuZ3RoXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnB4fGNtfG1tfGlufHB0fHBjKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFuZ2xlXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0aW1lXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnN8bXMpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVtc1wiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylyZW1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJlbXNcIjogXCIoPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJbMC05XSt8WzAtOV0qXFxcXC5bMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwc2V1ZG9FbGVtZW50XCI6IFwiOjpbX2Etel1bX2EtejAtOS1dKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInBzZXVkb0NsYXNzXCI6IFwiOltfYS16XVtfYS16MC05LV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY2xhc3NcIjogXCJcXFxcLltfYS16XVtfYS16MC05LV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwib3BlcmF0b3JcIjogXCJeYW5kfG5vdHxvbmx5fG5vdCRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiW19hLXpdW19hLXowLTktXSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFyeU9wZXJhdG9yXCI6IFwiXFxcXCt8XFxcXC1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXi4qJFwiXHJcbiAgfVxyXG5cclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW50cmllcztcclxuIl19