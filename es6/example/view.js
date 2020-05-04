"use strict";

import { Element } from "easy";
import { ColumnsDiv } from "easy-layout";

import Heading from "./heading";
import BackLink from "./link/back";
import Paragraph from "./paragraph";
import ColumnDiv from "./div/column";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import TokensTextarea from "./textarea/tokens";
import EntriesTextarea from "./textarea/entries";
import ContentTextarea from "./textarea/content";
import VerticalSplitterDiv from "./div/splitter/vertical";

export default class View extends Element {
  getTokens() {
    const entries = this.getEntries(),
          content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  keyUpHandler() {
    try {
      const tokens = this.getTokens();

      this.setTokens(tokens);
    } catch (error) {
      console.log(error);

      this.clearTokens();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <Heading>
        {this.heading}
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Entries
          </SubHeading>
          <EntriesTextarea onKeyUp={keyUpHandler} />
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Tokens
          </SubHeading>
          <TokensTextarea />
        </ColumnDiv>
      </ColumnsDiv>,
      <Paragraph>
        <BackLink />
      </Paragraph>

    ]);
  }

  initialise(properties) {
    this.assignContext();

    const content = this.initialContent, ///
          { entries } = this.Lexer;

    this.setContent(content);
    this.setEntries(entries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}
