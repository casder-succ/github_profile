import React, {useEffect, useState} from 'react';
import './Profile.css';

const Profile = () => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            const result = await fetch('https://api.github.com/users/casder-succ');
            const profileJson = await result.json();

            if (profileJson) {
                setIsLoading(false);
                setState(profileJson);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className="Profile-wrap">
            <img className="Profile-avatar" src={state.avatar_url} alt=""/>
            <ul>
                <li><strong>avatar_url:</strong> {state.avatar_url}</li>
                <li><strong>html_url:</strong> {state.html_url}</li>
                <li><strong>repos_url:</strong> {state.repos_url}</li>
                <li><strong>name:</strong> {state.name}</li>
                <li><strong>company:</strong> {state.company}</li>
                <li><strong>location:</strong> {state.location}</li>
                <li><strong>email:</strong> {state.email}</li>
                <li><strong>bio:</strong> {state.bio}</li>
            </ul>
        </div>
    );
};

export default Profile;