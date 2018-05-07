import * as React from 'react';

interface Props {

}

interface State {
  Component: any;
}

export default function asyncComponent(getComponent: any) {

  return class AsyncComponent extends React.Component<Props, State> {
    private static Component = 'div';
    constructor(props: Props) {
      super(props)
    }

    public componentWillMount() {
      this.setState(() => ({ Component: AsyncComponent.Component }));
      getComponent().then(({ default: Component }: any) => {
        AsyncComponent.Component = Component
        this.setState(() => ({ Component: AsyncComponent.Component }))
      })
    }

    public render() {
      const Component = this.state.Component
      if (Component) {
        return <Component {...this.props} />
      }
      return AsyncComponent.Component
    }

  }
}
