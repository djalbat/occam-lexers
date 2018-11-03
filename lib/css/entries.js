'use strict';

var entries = [{
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
  "special": ";|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
}, {
  "colour": "#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})"
}, {
  "keyword": "(?:!important|@media)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvZW50cmllcy5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsVUFBVSxDQUVkO0FBQ0UsZ0JBQWM7QUFEaEIsQ0FGYyxFQUtkO0FBQ0UsZUFBYTtBQURmLENBTGMsRUFRZDtBQUNFLFlBQVU7QUFEWixDQVJjLEVBV2Q7QUFDRSxXQUFTO0FBRFgsQ0FYYyxFQWNkO0FBQ0UsVUFBUTtBQURWLENBZGMsRUFpQmQ7QUFDRSxVQUFRO0FBRFYsQ0FqQmMsRUFvQmQ7QUFDRSxTQUFPO0FBRFQsQ0FwQmMsRUF1QmQ7QUFDRSxZQUFVO0FBRFosQ0F2QmMsRUEwQmQ7QUFDRSxhQUFXO0FBRGIsQ0ExQmMsRUE2QmQ7QUFDRSxZQUFVO0FBRFosQ0E3QmMsRUFnQ2Q7QUFDRSxhQUFXO0FBRGIsQ0FoQ2MsRUFtQ2Q7QUFDRSxjQUFZO0FBRGQsQ0FuQ2MsRUFzQ2Q7QUFDRSxnQkFBYztBQURoQixDQXRDYyxFQXlDZDtBQUNFLG1CQUFpQjtBQURuQixDQXpDYyxFQTRDZDtBQUNFLGdCQUFjO0FBRGhCLENBNUNjLENBQWhCOztBQWtEQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakIiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHtcclxuICAgIFwicGVyY2VudGFnZVwiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylcXFxcJVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZyZXF1ZW5jeVwiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpoenxraHopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibGVuZ3RoXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnB4fGNtfG1tfGlufHB0fHBjKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImFuZ2xlXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ0aW1lXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnN8bXMpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVtc1wiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylyZW1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJlbXNcIjogXCIoPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJbMC05XSt8WzAtOV0qXFxcXC5bMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiO3w6Onw6fFxcXFwufCx8L3xcXFxcfD18fj18PXw+fFxcXFx7fFxcXFx9fFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29sb3VyXCI6IFwiIyg/OlswLTlhLWZBLUZdezN9fFswLTlhLWZBLUZdezZ9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCIoPzohaW1wb3J0YW50fEBtZWRpYSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl5hbmR8bm90fG9ubHl8bm90JFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJbX2Etel1bX2EtejAtOS1dKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXJ5T3BlcmF0b3JcIjogXCJcXFxcK3xcXFxcLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeLiokXCJcclxuICB9XHJcblxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzO1xyXG4iXX0=