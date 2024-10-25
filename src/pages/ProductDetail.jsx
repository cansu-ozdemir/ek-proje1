import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ team, setTeam }) => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data.data));
    }, [id]);

    const handleSelectUser = () => {
        if (!team.find(member => member.id === user.id)) {
            setTeam([...team, user]);
        }
    };

    if (!user) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                    src={user.avatar} 
                    alt={user.first_name}
                    className="w-32 h-32 rounded-full mx-auto mb-4" 
                />
                <h2 className="text-2xl font-bold mb-2">
                    {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <button 
                    onClick={handleSelectUser}
                    disabled={team.find(member => member.id === user.id)}
                    className={`w-full p-2 rounded ${
                        team.find(member => member.id === user.id)
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                >
                    {team.find(member => member.id === user.id) 
                        ? 'Takımda bulunuyor.' 
                        : 'Takıma Ekle!'}
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;