import styled from 'styled-components';

const MenuContainer = styled.div`
  max-width: 1200px;
  border: 2px solid black;
  margin: 120px auto 20px;
  min-height: 690px;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <h1>container</h1>
    </MenuContainer>
  );
};

export default Menu;