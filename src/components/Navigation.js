import React from "react";
import styled from "styled-components";
import Button from "./Button";

// Components and sections
import Logo from "./Logo";

/*====================== STYLED COMPONENTS CODE ======================== */
const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
/*====================== STYLED COMPONENTS CODE ======================== */

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text={"Connect to wallet"} link={"https://google.com"} />
      </NavBar>
    </Section>
  );
};

export default Navigation;
