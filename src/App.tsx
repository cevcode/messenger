import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { AuthPage } from 'modules/AuthPage';
import { EmptyPage } from 'modules/EmptyPage';

const RenderComponent = ({ route, ...props }) => {
    const { component, data } = route;
    switch (component) {
        case 'AuthPage':
            return <AuthPage authType={data.authType} history={props.history} />;
        default:
            return <EmptyPage />;
    }
};

const App: React.FC = () => {
    return (
        <div className="app">
            <Switch>
                    {routes.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                component={props => <RenderComponent {...props} route={route} />}
                            />
                        );
                    })}
            </Switch>
        </div>
    );
};

export { App };
