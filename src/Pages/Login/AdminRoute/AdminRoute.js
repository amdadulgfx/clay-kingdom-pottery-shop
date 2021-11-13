import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isDashLoading, admin } = useAuth();
    // console.log(admin);
    if (isDashLoading) {
        return <div className="my-5 spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;