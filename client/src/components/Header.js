import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  top: 0px;
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Header</h2>
    </HeaderContainer>
  );
};

export default Header;