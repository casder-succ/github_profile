import React, {useEffect, useState} from 'react';
import List from "../components/List/List";
import Link from "../components/Link/Link";
import styled from "styled-components";

const Profile = () => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({status: false, message: ''});
    const [repos, setRepos] = useState([]);
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
            setError({
                status: false,
                message: '',
            });
            setIsLoading(true);

            try {
                const result = await fetch('https://api.github.com/users/casder-succ');
                const profileJson = await result.json();

                if (profileJson) {
                    const repositories = await fetch(profileJson.repos_url);
                    const repositoriesJSON = await repositories.json();

                    setIsLoading(false);
                    setState(profileJson);
                    setRepos(repositoriesJSON);
                }
            } catch (e) {
                setError({
                    status: true,
                    message: 'Oops......'
                })
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

    const projects = repos.map(repo => ({
        label: repo.name,
        value: <Link url={repo.html_url} title='Github URL'/>
    }));

    return (
        <ProfileWrapper>
            <Avatar src={state.avatar_url} alt=""/>
            <List title='Profile' items={items}/>
            <List title='Projects' items={projects}/>
        </ProfileWrapper>
    );
};

export default Profile;