import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Bg1 from "../assets/bgImages/01.webp";
import MovieLogo from "../assets/film.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const Navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={Bg1} alt="Background" className="background-image" />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="MovieLogo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center play-button"
              onClick={() => Navigate("/Player")}
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center info-button">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(60%);
    }
    .container {
      position: absolute;
      bottom: 5rem;
      left: 3rem;
      .logo {
        img {
          width: 20%;
          height: auto;
        }
      }
      .buttons {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          gap: 0.5rem;
          border-radius: 0.2rem;
          padding: 0.5rem 1.5rem;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
        }
        .play-button {
          background-color: white;
          color: black;
          svg {
            font-size: 1.2rem;
          }
        }
        .info-button {
          background-color: rgba(109, 109, 110, 0.7);
          color: white;
          svg {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default Netflix;
