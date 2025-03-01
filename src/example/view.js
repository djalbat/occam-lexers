"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import TokensTextarea from "./view/textarea/tokens";
import EntriesTextarea from "./view/textarea/entries";
import ContentTextarea from "./view/textarea/content";

class View extends Element {
  keyUpHandler = (event, element) => {
    try {
      const tokens = this.getTokens();

      this.setTokens(tokens);
    } catch (error) {
      console.log(error);

      this.clearTokens();
    }
  }

  getTokens() {
    const { Lexer } = this.constructor,
          entries = this.getEntries(),
          content = this.getContent(),
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  childElements() {
    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Entries
            </SubHeading>
            <EntriesTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Tokens
            </SubHeading>
            <TokensTextarea />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContent, Lexer } = this.constructor,
          { entries } = Lexer,
          content = initialContent; ///

    this.setContent(content);

    this.setEntries(entries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;