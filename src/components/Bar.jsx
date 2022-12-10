import styled from "styled-components";

const BarContainer = styled.div`
        width:40px;
        height:50px;
       cursor: pointer;
       display: block;
       margin-top: 20px;
       margin-left: 20px;;
       padding : 10px;

span{
    border-radius: 5px;
    width:100%;
    display: block;
    height: 3px;
    background-color:aliceblue;
    margin-top: 8px;
    transition:all 0.3s ease-in-out;
}
&:hover{

    span{
      &:first-child{
        transform:rotate(-45deg) translate(-6px,3px);
        width:15px;
        border-radius: 0;
      }
      &:last-child{
        transform:rotate(45deg) translate(-6px,-3px);
        width:15px;
        border-radius: 0;
      }
    }
  }


`;

const Bar = () => {
  return (
    <>
      <BarContainer className="bar">
            <span />
            <span />
            <span />
        </BarContainer>
    </>
  );
};

export default Bar;
