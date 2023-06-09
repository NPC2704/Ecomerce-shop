// import styled from "styled-components";
// import {mobile} from "../responsive";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Login = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input placeholder="username" />
//           <Input placeholder="password" />
//           <Button>LOGIN</Button>
//           <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Login;

import React from "react";
import styled from "styled-components";
import bg from "../assets/bgg.jpg";
// const Container = styled.div`
//   position: relative;
//   top: 200px;
//   left: 35%;
//   display: block;
//   margin-bottom: 80px;
//   width: 500px;
//   height: 360px;
//   background: transparent;
//   border-radius: 5px;
//   overflow: hidden;
//   z-index: 1;
// `;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bg}) center;
  background-size: cover;
`;
const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 35%;
  display: block;
  margin-bottom: 80px;
  width: 500px;
  height: 360px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
`;
const Title = styled.h2`
  padding: 40px;
  font-weight: lighter;
  text-transform: uppercase;
  color: #414141;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  margin: 0 auto;
  border: none;

  &::placeholder {
    transform: translateY(0);
    transition: 0.5s;
  }

  &:hover,
  &:focus,
  &:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;

    &::placeholder {
      color: #ff5722;
      position: relative;
      transform: translateY(-20px);
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 27px 28%;
  text-transform: uppercase;
  color: #858585;
  font-weight: lighter;
  transition: 0.5s;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 250px;
  height: 60px;
  margin-top: -10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;

  &:nth-of-type(1) {
    background: #673ab7;
  }

  &:nth-of-type(2) {
    background: #ff5722;
  }

  span {
    position: absolute;
    display: block;
    margin: -10px 20%;
    transform: translateX(0);
    transition: 0.5s;
  }

  &:hover {
    span {
      transform: translateX(30px);
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%) scale(1);
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: ${(props) => props.color};
  z-index: 5;
  transition: 0.8s ease-in-out;
`;

const Heading = styled.h3`
  position: absolute;
  top: -100%;
  left: 20%;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.3);
  transition: 0.3s ease-in-out 1.2s;
`;

const Login = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const regCircle = e.target.parentElement.querySelector(".reg");
    const regHeading = e.target.parentElement.querySelector(
      ".container h3:nth-of-type(1)"
    );
    regCircle.style.transform = "translateY(40%) scale(5)";
    regCircle.style.borderRadius = "0";
    regCircle.style.width = "100%";
    regCircle.style.height = "100%";
    regHeading.style.top = "40%";
    regHeading.style.zIndex = "8";
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const sigCircle = e.target.parentElement.querySelector(".sig");
    const sigHeading = e.target.parentElement.querySelector(
      ".container h3:nth-of-type(2)"
    );
    sigCircle.style.transform = "translateY(40%) scale(5)";
    sigCircle.style.borderRadius = "0";
    sigCircle.style.width = "100%";
    sigCircle.style.height = "100%";
    sigHeading.style.top = "40%";
    sigHeading.style.zIndex = "8";
  };

  return (
    <Wrapper>
      <Container>
        <Title>login</Title>
        <form>
          <Input type="text" className="email" placeholder="Email" />
          <br />
          <Input type="text" className="pwd" placeholder="Password" />
        </form>
        <Link href="#" className="link">
          forgot your password ?
        </Link>
        <br />
        <Button className="register" onClick={handleRegister}>
          <span>register</span>
        </Button>
        <Button className="signin" onClick={handleSignIn}>
          <span>Login</span>
        </Button>
        <Heading>your registration is complete !</Heading>
        <Heading>your sign in is complete !</Heading>
        <Circle className="reg" color="#673ab7" />
        <Circle className="sig" color="#ff5722" />
      </Container>
    </Wrapper>
  );
};

export default Login;
