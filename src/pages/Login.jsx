import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({history, setUser}) => {

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='card-title text-center mb-4'>Login</h3>
                            <LoginForm history={history} setUser={setUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;