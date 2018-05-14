import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getRoutesState } from "./reducer";
import { fetchRoutes } from "./actions";
import ScrollToTop from "../components/navigation/scrollToTop";
import Layout from "../containers/layout/index";

import HomeScreen from "../screens/home/index";
import PageScreen from "../screens/page/index";

const routeComponents = {
  Home: HomeScreen,
  Page: PageScreen
};

class Routes extends React.PureComponent {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { routes } = this.props;

    return (
      <Layout>
        <ScrollToTop>
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.url}
                  exact
                  path={route.url}
                  component={getRouteComponent(route.name).component}
                />
              );
            })}
            <Route
              render={props => (
                <PageScreen {...props} path={"/page-not-found"} />
              )}
            />
            />
          </Switch>
        </ScrollToTop>
      </Layout>
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchRoutes());
  }
}

export const getRouteComponent = name => {
  let routeComponent = routeComponents[name];
  return {
    component: routeComponent,
    getReducer: routeComponent.getReducer,
    fetchData: routeComponent.fetchData
  };
};

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return getRoutesState(state).toJS();
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => {
  return {
    fetchData: data => dispatch(fetchRoutes(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
