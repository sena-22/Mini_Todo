
/* icons */
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import {MdOutlineArrowForwardIos} from 'react-icons/md'

import styled from "styled-components"
import React from 'react';
import {useState} from 'react'
import EditTodo from './EditTodo';

const  Item = styled.div`
    position:relative;
    width:393px;
    height:90px;
    background-color: #495464;
    display: flex;
    align-items: center;
    text-align: center;
    :first-child{
        margin-top: 15px;
    }

:hover {
    background-color: #EEEEEE;
    .title, .circle  {
        color:#727783;
    }
    .done {
        text-decoration-color :  #727783;
    }
    .editItem {
        color:#727783;
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
    font-size: 30px;
    margin-left: 100px;
    position:absolute;
}

.done {
    text-decoration: line-through;
    text-decoration-color :  #EEEEEE;
    color:#BBBBBE;
}

.editItem {
    color:#fff;
    font-size: 25px;
    position: absolute;
    top:37%;
    left:81%;
}

`

const TodoItem = ({todo,handleComplete}) => {

    const  [isEdit, setIsEdit]= useState(false);

    return (
        <Item>
            {todo.isDone ? 
            <>
                <BsCheckCircle className='circle' onClick={()=>handleComplete(todo)} />
                <div className="title done">
                {todo.title}
                </div>
                <MdOutlineArrowForwardIos className="editItem"  onClick={()=>setIsEdit(!isEdit) }/>
            </>
            : 
            <>
                <BsCircle className='circle' onClick={()=>handleComplete(todo)}/>
                <div className="title">
                {todo.title}
                </div>
                <MdOutlineArrowForwardIos className="editItem" onClick={()=>setIsEdit(!isEdit)}/>
            </>
             }
            {isEdit ? <EditTodo modalClose={()=>setIsEdit(!isEdit)} todo={todo}/> : null}
            </Item>
    )
}

export default TodoItem;