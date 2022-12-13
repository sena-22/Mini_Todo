import styled from "styled-components";
import {AiOutlinePlus}  from 'react-icons/ai';
import {useState,useRef} from 'react';
import { useDispatch } from "react-redux";


import { add_todo } from "../reducers/actions";


const ModalContainer = styled.div`
    background-color: #deb7ca;
    display:flex;
    width:350px;
    height:100px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:40%;
    left:5%;
`
const TodoInput = styled.input`
    background-color: transparent;
    border:none;
    
    color:#fff;
    font-size:25px;
    text-align: center;

    //placeholder 글자 색상은 따로 줘야 한다. 
    ::placeholder{
        color:#fff;
    }

    //input 창 클릭 시 생기는 테두리 없애기 
    :focus {
        outline : none;
    }
`

const TodoInputButton = styled.button`
    border:none;
    background-color: transparent;

    .submitButton {
        width:40px;
        height:40px;
        color:#fff;
    }
    cursor: pointer;
`
//모달 컴포넌트
const Modal = ({setIsModalOpen}) =>{



    const dispatch = useDispatch();

    const titleInput = useRef();

    const [title,setTitle] = useState('') 
  
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const dataId = useRef(5);

    const handleSubmit = () => {
      //아무것도 입력하지 않았을 때 입력창에 포커싱 주고 리턴;
     if(title.length <1) {
        titleInput.current.focus();
        return;
     }
     const todo = {
        id: dataId.current,
        title,
        isDone: false,
        date:new Date()
      };
      dispatch(add_todo(todo));
      setTitle('');
      setIsModalOpen(false);
      dataId.current += 1;
        console.log("submit!!")
    }
  
    return(
    <ModalContainer>
        <TodoInput 
            type="text" 
            name="title" 
            value={title} 
            ref={titleInput}
            onChange={handleChangeTitle}
            placeholder="Add Todo.."
        ></TodoInput>
        <TodoInputButton >
            <AiOutlinePlus className="submitButton" onClick={handleSubmit}/>
        </TodoInputButton>
    </ModalContainer>
    )
  }

  export default Modal;