import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import image from "../assets/shop.png";
import user from "../assets/user.png";
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,200;1,400;1,500&display=swap");
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 10px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  z-index: 99;
  height: 80px;

  background-color: white;
  /* &.scrolled {
    background-color: var(--main-color);
  } */
  .scrolled {
    background-color: black;
  }
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.p`
  margin-right: 30px;
  color: #857d67;
  font-size: 16;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #008080;
  }
`;
// const Logo = styled.div`
//   background-image: url(${image});
//   height: 100%;
//   width: 100%;
//   ${mobile({ fontSize: "24px" })}
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img
            src={image}
            alt="Logo"
            style={{ height: "40px", width: "110px" }}
          />
        </Left>
        <Center>
          <H1>TRANG CHỦ</H1>
          <H1>SẢN PHẨM</H1>
          <H1>GIỎ HÀNG</H1>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <MenuItem>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <a href="" style={{ listStyle: "none" }}>
              {" "}
              <img src={user} alt="" />
            </a>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
