import React from 'react';
import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: bold;
`;


const List = ({ items }) => {
    return (
        <ListWrapper>
            {
                items.map(item => (
                    <ListItem><Label>{item.label}</Label>{item.value}</ListItem>
                ))
            }
        </ListWrapper>
    );
};

export default List;