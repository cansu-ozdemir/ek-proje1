import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => setUsers(data.data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {users.map(user => (
                    <div 
                        key={user.id} 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
                        onClick={() => history.push(`/product/${user.id}`)}
                    >
                        <img 
                            src={user.avatar} 
                            alt={user.first_name}
                            className="w-32 h-32 rounded-full mx-auto mb-4" 
                        />
                        <h3 className="text-xl font-semibold text-center">
                            {user.first_name} {user.last_name}
                        </h3>
                        <p className="text-gray-600 text-center mt-2">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;