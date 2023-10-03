import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const Home = () => {
    const {name} = useContext(AuthContext);
    console.log(name);
    return (
        <div>
            <h1 className='text-3xl'>This is home components</h1>
        </div>
    );
};

export default Home;