
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState({});
   const history = useHistory();

   const validateForm = () => {
       const tempErrors = {};
       
       if (!email) {
           tempErrors.email = 'Email adresi gerekli!';
       } else if (!/\S+@\S+\.\S+/.test(email)) {
           tempErrors.email = 'Email adresi geçersiz!';
       }

       if (!password) {
           tempErrors.password = 'Parola gerekli!';
       } else if (password.length < 6) {
           tempErrors.password = 'Parola en az 6 karakter olmalı!';
       }

       setErrors(tempErrors);
       return Object.keys(tempErrors).length === 0;
   };

   const handleLogin = (e) => {
       e.preventDefault();
       
       if (validateForm()) {
           setUser({ email, password });
           history.push('/home');
       }
   };

   return (
       <form onSubmit={handleLogin} className="w-96 mx-auto mt-10 p-5 bg-white rounded">
           <h2 className="text-xl mb-4 text-center">Login</h2>
           <div className="mb-4">
               <input
                   type="email"
                   placeholder="Email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   className={`w-full p-2 border rounded ${
                       errors.email ? 'border-red-500' : 'border-gray-300'
                   }`}
               />
               {errors.email && (
                   <div className="text-red-500 text-sm">{errors.email}</div>
               )}
           </div>
           <div className="mb-4">
               <input
                   type="password"
                   placeholder="Password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   className={`w-full p-2 border rounded ${
                       errors.password ? 'border-red-500' : 'border-gray-300'
                   }`}
               />
               {errors.password && (
                   <div className="text-red-500 text-sm">{errors.password}</div>
               )}
           </div>
           <button 
               type="submit" 
               className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
           >
               Login
           </button>
       </form>
   );
};

export default LoginForm;