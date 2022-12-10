import { createGlobalStyle } from "styled-components";
import PoorStoty from "./PoorStory-Regular";

export default createGlobalStyle`
    @font-face {
        font-family: "PoorStoty";
        src: local("PoorStoty"),
        url(${PoorStoty}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
