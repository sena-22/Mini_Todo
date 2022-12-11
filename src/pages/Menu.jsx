import React from "react";
import { Link} from "react-router-dom";
import { BiHome } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import styled, { keyframes } from "styled-components"

// const animate = keyframes`
//   0% {
//     background-color: #495464;
//   }
//   50% {
//     background-color: #fff;
//   }
//   100% {
//     background-color: #495464;
//   }

// `
const Circle = styled.div`
/* margin-top : 126px; */
margin-left:-70px;
width : 300px;
height : 600px; 
/* border: 3px solid rgba(249,247,250,1);
border-left-style: hidden;
border-radius : 0px 300px  300px 0px; */
position : relative;
top :15%;

.border {
  margin-left:-300px;
  width : 600px;
  height : 600px;
  border: 3px solid rgba(249,247,250,1);
  border-left-style: hidden;
  border-radius : 300px;
  position : relative;
  transition: transform 2s cubic-bezier(0.620, 0.005, 0.000, 1.005) , background-color 2s;

  :hover { 
    transform: rotate(360deg); 
    border-color: #E4E5EA;
  }
   :hover:before {
    -webkit-animation: shine .75s;
     animation: shine .75s;
   } 
  @-webkit-keyframes shine {
      100% {
        left: 125%;
      }
  }
  @keyframes shine {
    100% {
      left: 125%;
    } 
      }
    }
`

const MenuTitle = styled.div`
position:absolute;
width:75px;
height :30px;
color:#EEEEEE;
font-size: 25px;
:hover {
  font-size: 35px;
  color:#C0CFD6;

  &:nth-child(2) {
    font-size: 30px;
  }
}
`
const  MenuContainer = styled.div`
    background-color: #495464;
    width:390px;
    height:852px;
    position: relative;

     .title{
    position: absolute;
    top:35%;
    left:35%;
    color: #eeeeee;
    font-size: 30px;
    /* 텍스트 세로 정렬 */
    writing-mode: vertical-lr;
    text-orientation: upright;
    /* 자간 */
    letter-spacing: 10px;
    }

    .logo {
        color:#eeeeee;
        width:40px;
        height:40px;
        position: absolute;
        background-color: #495464;
        padding:10px;
        cursor: pointer;   
        :hover {
          width:50px;
          height:50px;
          color:#C0CFD6;
        }
    }

    .home {
        left: 50%;
        top:4%;   
    }

    .calendar {        
        left: 87%;
        top :30%;
    }

    .done {
        left: 83%;
        bottom:25%;
    }

    .profile {
        left: 50%;
        bottom:6%;
    }
    .homemenu{
        left:70%;
        top:5%;
    }
    .calendarmenu{
        left:110%;
        top:30%;
    }
    .donemenu{
        left:110%;
        top:70%;
    }
    .profilemenu{
        left:70%;
        top:95%;
    }
`

const Menu = () => {
  return (
    <MenuContainer>
    <Circle>
    <div className="border"></div>
    <div className= "title">
        TODO
    </div>
    <div className="menu">
      <Link to="/home">
        <BiHome className="logo home"/>
        <MenuTitle className="homemenu">
        HOME
        </MenuTitle>
      </Link>
      <Link to="/calendar">
        <FiSun className="logo calendar"/>
        <MenuTitle className="calendarmenu">
        CALENDAR
        </MenuTitle>
      </Link>
      <Link to="/done">
        <FiMoon className="logo done"/>
        <MenuTitle className="donemenu">
        DONE
        </MenuTitle>
      </Link>
      <Link to="/profile">
        <BsPerson className="logo profile"/>
        <MenuTitle className="profilemenu">
       PROFILE
        </MenuTitle>
      </Link>
    </div>
    </Circle>
    </MenuContainer>
  );
};

export default Menu;
