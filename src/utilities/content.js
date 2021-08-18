"use strict";

import { LESS_THAN, AMPERSAND, GREATER_THAN } from "../constants";

export function sanitiseContent(content) {
  const sanitisedContent = content
                            .replace(/&/, AMPERSAND)
                            .replace(/</, LESS_THAN)
                            .replace(/>/, GREATER_THAN);

  return sanitisedContent;
}
