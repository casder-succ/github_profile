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
    })

    return (
        <div>

        </div>
    );
};

export default Profile;