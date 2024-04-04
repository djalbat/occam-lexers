"use strict";

import Token from "../token";

export default class SignificantToken extends Token {
  static match(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;  ///

      Class = SignificantToken; ///
    }

    const significant = true,
          significantToken = Token.match(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;  ///

      Class = SignificantToken; ///
    }

    const significant = true,
          significantToken = Token.fromContent(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContentAndType(Class, content, type, ...remainingArguments) {
    if (type === undefined) {
      type = content; ///

      content = Class;  ///

      Class = SignificantToken; ///
    }

    const significant = true,
          significantToken = Token.fromContentAndType(Class, content, type, significant, ...remainingArguments);

    return significantToken;
  }
}
