import React from "react";
import { Link } from 'react-router-dom';

const Header = ({ user, team }) => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div>{user?.email}</div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                        Login
                    </Link>
                    <Link to="/home" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                        Home
                    </Link>
                    <span className="bg-gray-700 px-3 py-1 rounded">
                        Team: {team.length}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;