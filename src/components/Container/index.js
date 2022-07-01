import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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