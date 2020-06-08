import React from "react";
import styled from "styled-components";
import mayaAvatar from '../../images/mayas_avatar.png';
import userAvatar from '../../images/user_avatar.png';
import config from 'src/config';

const Avatar = (props: {sender: string}) => {

  const image = props.sender === config.MAYA ? mayaAvatar : userAvatar; 
  return (<StyledAvatar sender={props.sender}>
      <img src={image}/>
  </StyledAvatar>)
};

export default Avatar;

const StyledAvatar = styled('div')<{ sender: string }>`
    margin: ${props => props.sender !== config.MAYA ? '0 10px 0 0' : '0 0 0 10px'}
    border-radius: 50%;
    width: 40px;
    img { 
        height: 40px
        width: 40px;
    }
`;
