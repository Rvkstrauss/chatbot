import React, {Component} from 'react';
// import BotProvider from './utils/userProvider'
import ChatPage from './components/Chat/ChatPage';
import { theme } from './theme';

class App extends Component {
  public render() {
    return (
      // <BotProvider>
        <StyledAppContainer theme={theme}>
          <ChatPage/>
        </StyledAppContainer>
      // </BotProvider>
    )
  }
}

export default App;

import styled from 'styled-components';

const StyledAppContainer = styled("div")`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.secondaryDarkColor}
`;