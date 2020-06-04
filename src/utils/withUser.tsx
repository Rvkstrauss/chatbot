import * as React from 'react';
import { AppContextConsumer } from './userProvider';


export const withUser = (WrappedComponent: React.ComponentClass | React.FunctionComponent) => {
  class BoundComponentHOC extends React.Component {
    public render() {
      return <AppContextConsumer>
        {value => <WrappedComponent
          {...this.props as any}
          messages={value.state.messages}
          username={value.state.username}
          changeUsername={value.changeUsername}
        />}
      </AppContextConsumer>;
    }
  }

  return BoundComponentHOC;
};