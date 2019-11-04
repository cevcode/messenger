import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from './routes.json';
import { AuthPage } from 'modules/AuthPage';
import { EmptyPage } from 'modules/EmptyPage';
import { HomePage } from 'modules/HomePage';

interface IRenderComponent extends RouteComponentProps {
    component: string;
    data: any;
}

const RenderComponent: React.FC<IRenderComponent> = ({ component, data, ...props }) => {
    switch (component) {
        case 'AuthPage':
            return <AuthPage authType={data.authType} history={props.history} />;
        case 'HomePage':
            return <HomePage history={props.history} />;
        default:
            return <EmptyPage />;
    }
};

const App: React.FC = () => {
    return (
        <div className="app">
            <Switch>
                {routes.map(route => {
                    const { path, exact, component, data } = route;
                    return (
                        <Route
                            key={component}
                            path={path}
                            exact={exact}
                            component={props => <RenderComponent {...props} component={component} data={data} />}
                        />
                    );
                })}
            </Switch>
        </div>
    );
};

export { App };
