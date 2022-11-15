import Header from "./Header";
import TodoItem from "./TodoItem";
import styled from "styled-components"
import {AiOutlinePlus}  from 'react-icons/ai'
import {useState} from 'react';
import Modal from './Modal';

const HomeContainer = styled.div`
  
  background-color: #495464;
  width:393px;
  height: 852px;
  position: relative;

  .addItem {
    width:40px;
    height:40px;
    color:#EEEEEE;
    position: absolute;
    left: 77.95%;
    right: 11.79%;
    top: 90.49%;
    bottom: 4.81%;

    cursor: pointer;

  }

`

const Home = ({data, onCreate}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
  <HomeContainer>
  <Header/>
  <div>
   {data.map((el)=> (
    <TodoItem key={el.id} title={el.title} />
    ))}
   </div>
  <AiOutlinePlus className="addItem" onClick={()=>setIsModalOpen(true)}/>
  
  {isModalOpen && <Modal onCreate={onCreate} setIsModalOpen={setIsModalOpen}/> }
  
  </HomeContainer>
  )
  };
  
  
  export default Home;
  