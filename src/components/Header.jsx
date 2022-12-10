import styled from "styled-components"
import {FiMenu}  from 'react-icons/fi';
import {RiMoonFill}  from 'react-icons/ri';
import { Link } from "react-router-dom";
import Bar from './Bar'

const Navi = styled.nav`
    background-color:#deb7ca;
    width:393px;
    height:76px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    /* .menu {
        color:#EEEEEE;
        width:49.62px;
        height:50px;
       margin-left: 30px;
       cursor: pointer;
    } */

    .darkMode {
        color:#495464;;
        width:40px;
        height:40px;
        margin-right: 30px;   
    }
`

const Header = ()=>{
    
    return (
        <>
        <Navi>
            <Link to ='/'>
           {/* <FiMenu className="menu" /> */}
           <Bar />
           </Link>
           <RiMoonFill className="darkMode" />
        </Navi>
           </>
    )
}
export default Header;