import React from "react";
import styled from "styled-components";
import Avatar from '../Avatar/Avatar';
import config from 'src/config';
// import config from "src/config";
// import Message from "../Message";

const Loader = (props: { show: boolean }) => {
  const { show } = props;
  // const message = { from: config.MAYA, content: "", type: "greet" };
  return show ? (
    <StyledLoader>
      <Avatar sender={config.MAYA}/>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
      {/* <Message message={message} showAvatar={true} /> */}
    </StyledLoader>
  ) : null;
};

export default Loader;

const StyledLoader = styled("div")`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  .spinner {
    width: 70px;
    text-align: center;
    background-color: ${props => props.theme.secondaryLightColor};
    border-radius: 14px 14px 14px 4px;
    height: 40px;
    margin-left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner > div {
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.primaryDarkColor};
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(0.8);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
`;
