import React, {useEffect, useState} from 'react';

const Profile = () => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            const result = await fetch('https://api.github.com/users/octocat');
            const profileJson = await result.json();

            if (profileJson) {
                setIsLoading(false);
                setState(profileJson);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? <h3>Loading...</h3> : (<ul>
                <li>avatar_url: {state.avatar_url}</li>
                <li>html_url: {state.html_url}</li>
                <li>repos_url: {state.repos_url}</li>
                <li>name: {state.name}</li>
                <li>company: {state.company}</li>
                <li>location: {state.location}</li>
                <li>email: {state.email}</li>
                <li>bio: {state.bio}</li>
            </ul>)}
        </div>
    );
};

export default Profile;