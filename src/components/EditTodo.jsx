import styled from 'styled-components';
import MyButton from './MyButton';
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {delete_todo, edit_todo} from '../reducers/actions'

const EditContainer = styled.div`
background: rgba(0,0,0,.5);
width: 100%;
height: 100vh;

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;  

z-index:1;
display: flex;
  justify-content: center;
  align-items: center;
`

const Edit = styled.div`
  background-color:#deb7ca;
border:none;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,.3);
position: absolute;
width:300px;
height:200px;
text-align: center;
margin-bottom:10%;
padding:20px;
display: flex;
flex-direction:column;

justify-content:space-around;

& .content {
    font-size:30px;
    color:white;
    margin-top:10px;
    margin-bottom: 15px;
}

& .buttons > button {
    margin-top: 15px;
    &:first-child{
    margin-right: 15px;
    }
}

& .titleInput{
    border:none;
    border-radius: 5px;
    /* background-color: #deb7ca; */
    font-family: 'Poor Story';
    font-size:25px;
    /* color:white; */
    margin-top:10px;
    margin-left: 35px;
    margin-right: 35px;
   
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

}
`

const EditTodo = ({modalClose,todo}) => {
    const sorted = useSelector((state) => state.todos.find((el)=>el.id ===todo.id));
    // const {id,title, isDone} = sorted;
    const [editTitle, setEditTitle] = useState(sorted.title);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    
    const closeModal = ()=>{
        modalClose()
    }

    const handleRemove = () => {
        if(window.confirm('정말 삭제하시겠습니까?')){
            dispatch(delete_todo(sorted))
            setEditTitle('');
            closeModal();
        } else {
            closeModal();
        }
    }
    
     /*EDIT
      * 1. 수정 버튼을 누르면 div가 input으로 바뀐다.
      * 2. input에 content를 입력하고 확인 버튼을 누르면 
      * 3. setEditData가 실행돼서  handleSubmit이 실행된다
      */

  const handleSubmit = () => {
    // console.log({id,editTitle,isDone});
    if(window.confirm('수정..?')) {
    dispatch(edit_todo(sorted.id,editTitle,sorted.isDone));
    closeModal();

    } else {
        closeModal();
    }
  };
  
    return (
        <>
        {sorted && <EditContainer onClick={closeModal}>
            {/* 모달 창은 클릭해도 사라지지 않게 함 */}
            <Edit onClick={(e)=>e.stopPropagation()} >
            {isEdit
                ? <input className="titleInput"type="text" value={editTitle}  onChange={(e) => setEditTitle(e.target.value)} />
                : <div className="content">{sorted.title}</div>
            }
                <div className="buttons">
                    {isEdit? <MyButton type={"positive"} text={"수정하기"} onClick={handleSubmit} /> :
                    <MyButton type={"positive"} text={"수정하기"} onClick={()=>setIsEdit(!isEdit)}/>
                     }
                    <MyButton type={"negative"} text={"삭제하기"} onClick={handleRemove} />
                </div>
            </Edit>
        </EditContainer> }
        </>
    )
}

export default EditTodo;

