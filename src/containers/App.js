import Header from "../components/Header/Header";
import Profile from "./Profile";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`

function App() {
    return (
        <AppWrapper>
            <Header />
            <Profile/>
        </AppWrapper>
    );
}

export default App;
