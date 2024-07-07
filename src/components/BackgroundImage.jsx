import React from "react";
import Backgroundimg from "../assets/Home_Background_Img.jpg";
import styled from "styled-components";
function BackgroundImage() {
  return (
    <>
      <Container>
        <img src={Backgroundimg} alt="" />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
export default BackgroundImage;
