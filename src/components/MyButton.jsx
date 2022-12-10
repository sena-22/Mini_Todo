import styled from 'styled-components'

const Button =styled.button`

&.MyButton{
    cursor: pointer;
    border:none;
    border-radius: 5px;

    padding: 10px 20px 10px 20px;

    font-size: 20px;
    font-family: 'Poor Story';
    /*버튼 안의 글자가 잘려서 두 줄이 되지 않게 함*/
    white-space: nowrap;
    }

    &.MyButton_default{
        background-color: #ececec;
        color:black;
    }

    &.MyButton_positive{
        background-color: aliceblue;
        color:slategray;
    }

    &.MyButton_negative{
        background-color:#164f55;
        color:aliceblue;
    }
`

const MyButton = ({type,text,onClick})=>{

    //이상한 타입이면 강제로 디폴트 타입으로 변경
    const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

    return  (
    <Button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
        {text}
    </Button>
    )
}

MyButton.defaultProps = {
    type: "default",
}

export default MyButton;

