"use strict";

import { ESCAPED_AMPERSAND, ESCAPED_LESS_THAN, ESCAPED_GREATER_THAN } from "../constants";

export function sanitiseContent(content) {
  const sanitisedContent = content
                             .replace(/&/g, ESCAPED_AMPERSAND)
                             .replace(/</g, ESCAPED_LESS_THAN)
                             .replace(/>/g, ESCAPED_GREATER_THAN);

  return sanitisedContent;
}
