import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    padding: 0 40px;
`

const GlobalContainer = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
}
export default GlobalContainer;