import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import BgVideo from "../assets/ShowtimeOfficial_Trailer.mp4";
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

const Conatiner = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
export default Player;
