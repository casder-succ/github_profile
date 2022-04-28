import React, {useEffect, useState} from 'react';
import './Profile.css';
import List from "../components/List/List";
import Link from "../components/Link/Link";

const Profile = () => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const items = [];

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

    for (const item of Object.keys(state)) {
        if (item === 'html_url') {
            items.push({
                label: item, value: <Link title='Github page' url={state[item]} />
            })
        } else {
            items.push({
                label: item, value: state[item]
            })
        }
    }

    return (
        <div className="Profile-wrap">
            <img className="Profile-avatar" src={state.avatar_url} alt=""/>
            <List items={items} />
        </div>
    );
};

export default Profile;