import React, {useEffect, useState} from 'react';
import List from "../components/List/List";
import Link from "../components/Link/Link";
import styled from "styled-components";

const Profile = () => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const items = [];

    const ProfileWrapper = styled.div`
      max-width: 80%;
      margin: 0 auto;
    `;

    const Avatar = styled.img`
      width: 150px;
    `;

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
                label: item, value: <Link title='Github page' url={state[item]}/>
            })
        } else {
            items.push({
                label: item, value: state[item]
            })
        }
    }

    return (
        <ProfileWrapper>
            <Avatar src={state.avatar_url} alt=""/>
            <List items={items}/>
        </ProfileWrapper>
    );
};

export default Profile;