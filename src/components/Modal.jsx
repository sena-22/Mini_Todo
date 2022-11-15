import styled from "styled-components"
import {AiOutlinePlus}  from 'react-icons/ai'
import {useState,useRef} from 'react'

const ModalContainer = styled.div`
    background-color: #BBBFCA;
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
//모달 컴포넌트
const Modal = ({onCreate,setIsModalOpen}) =>{

    const titleInput = useRef();

    const [title,setTitle] = useState('') 
  
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {

      //아무것도 입력하지 않았을 때 입력창에 포커싱 주고 리턴;
     if(title.length <1) {
        titleInput.current.focus();
        return;
     }

      onCreate(title);
      setTitle('');
      setIsModalOpen(false);
    }
  
    return(
    <ModalContainer>
    <TodoInput 
    type="text" 
    name="title" 
    value={title} 
    ref={titleInput}
    onChange={handleChangeTitle}
    placeholder="Write Todo.."
    ></TodoInput>
    <button onClick={handleSubmit}><AiOutlinePlus/></button>
    </ModalContainer>
    )
  }

  export default Modal;