import React from "react";
import styled from "styled-components";
import LogoImage from "./assets/logo.png";
import Shape1Image from "./assets/shape1.png";
import Shape2Image from "./assets/shape2.png";
import SearchBar from "../../../components/SearchBar";

const Shape1 = styled.img`
  position: absolute;
  width: 402px;
  right: 0;
  top: 0;
`;

const Shape2 = styled.img`
  position: absolute;
  width: 100%;
  height: 379px;
  right: 0;
  bottom: 0;
`;

const Header = styled.div`
  position: absolute;
  top: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.img`
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-left: 38px;
  margin-right: 59px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Logo = styled.img`
  width: 142px;
  height: 37px;
  margin-left: 69px;
`;

const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Shape1 src={Shape1Image} alt="bg-shape-1" />
      <Shape2 src={Shape2Image} alt="bg-shape-2" />
      <Header>
        <Logo src={LogoImage} alt="logo" />
        <div className="header-right">
          <SearchBar />
          <Avatar src="https://picsum.photos/100/100" />
        </div>
      </Header>
    </div>
  );
};

export default styled(Home)`
  height: 100%;
  background-color: #eff1f7;
  * {
    font-family: "Poppins", sans-serif;
  }
  .header-right {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
