import MyCalendar from '../components/MyCalendar';
import Header from '../components/Header';
import styled from 'styled-components';
import Todo from '../components/Todo';

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #495464;
    width:393px;
    height: 852px;
    position: relative;
    align-items: center;
 
`

 const Calendar = () =>{
    return (
        <CalendarContainer>
            <Header />
            <MyCalendar />
            <p></p>
            <Todo />
        </CalendarContainer>
    )
}

export default Calendar;