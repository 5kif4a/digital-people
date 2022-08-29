import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import TGButton from "../../components/TGButton";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="logo">
          <Logo />
        </div>

        <div className="text">
          <p>
            Digital People are friends, a team of experts and a company
            specializing in blockchain development and web 3.0 solutions.
            <br />
            We have been creating DAP, DEFI, NAT, P2P and other blockchain
            projects of any complexity since 2016.
            <br />
            We share about What and how we do <TGButton />
          </p>
        </div>

        <div className="info">
          a little info for the advanced{" "}
          <Link className="link" to="detailed">
            here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
