import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import BgVideo from "../assets/System.mp4";
import { useNavigate } from "react-router-dom";
function Player() {
  const navigate = useNavigate();
  return (
    <Conatiner>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={BgVideo} autoPlay loop controls muted></video>
      </div>
    </Conatiner>
  );
}

const Conatiner = styled.div``;
export default Player;
