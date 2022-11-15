import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import styled from "styled-components"
import React, {useState} from 'react';


const  Item = styled.div`
width:393px;
height:90px;
background-color: #495464;
display: flex;
align-items: center;
:first-child{
     margin-top: 50px;
}

:hover {
    background-color: #EEEEEE;
    .title, .circle  {
        color:#727783;
    }
    .done {
        text-decoration-color :  #727783;
    }
}


.circle {
    color:#fff;
    width:34px;
    height:34px;
    margin-left: 30px;
}

.title{
    color:#fff;
    font-size: 25px;
    margin-left: 100px;
}

.done {
    text-decoration: line-through;
    text-decoration-color :  #EEEEEE;
    color:#BBBBBE;
}
`

const TodoItem = ({id,title}) => {
   const [isDone, setIsDone] = useState(false)


    return (
            <Item>
               {isDone ? 
                <>
                  <BsCheckCircle className='circle'  onClick={()=>setIsDone(!isDone)}/>
                  <div className="title done">
                    {title}
                  </div>
                </>
               : 
               <>
                 <BsCircle className='circle' onClick={()=>setIsDone(!isDone)}/>
                 <div className="title">
                    {title}
                 </div>
               </>

                }
           
             
            </Item>

    )
}

export default TodoItem;