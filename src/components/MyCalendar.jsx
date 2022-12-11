import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react'
import styled from 'styled-components';

import moment from 'moment';
import { getStringDate } from '../util/date.js';

const CalenedarContainer = styled.div`
    height: 300px;
    margin-top: 20px; 
    margin-bottom:100px;
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const StyledCalendar = styled(Calendar)`
background-color: #495464;
border:none;


button {
    font-family: 'Poor Story';
}

//< > 버튼
.react-calendar__navigation button {
 color: aliceblue;
 background: none;
 /* margin-top: 8px; */
 font-size: 40px;
}
.react-calendar__navigation__next2-button,
.react-calendar__navigation__prev2-button{
    display: none;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background : none;
 border-radius: 10px;
color:#B9848C;
}
//요일
.react-calendar__month-view__weekdays__weekday{
    font-family: 'Poor Story';
    font-size:16px;
    color:aliceblue;
}
//각 요일 
abbr {
    text-decoration: none;
}
//각 날짜
.react-calendar__month-view__days__day > abbr{
    font-size: 20px;
}

//오늘 날짜
  .react-calendar__tile--now {
    background-color:whitesmoke;
    color: white;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: aliceblue;
    background-color:#B9848C;
  }
  //연월 표시 글씨
  .react-calendar__navigation__label > span {
    font-size:  30px;
    /* font-weight: ; */
    color: aliceblue;
  }

  //평일
  .react-calendar__month-view__days__day{
    color: aliceblue;
  }
  //주말
  .react-calendar__month-view__days__day--weekend{
    color:#f095bd;
  }
  //저번 달
.react-calendar__month-view__days__day--neighboringMonth{
    color:grey;
}

//day 타일
  .react-calendar__tile {
    /* border-radius: 100%; */
    font-size:18px;
  }
//dat hover
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color:#B2D3E1;
    color: midnightblue;
  }
 .react-calendar__year-view__months__month{
  color:aliceblue;
  font-size: 23px;
  padding:25px;
 }
//연간달력..현재 월 
.react-calendar__tile--hasActive {
  color:midnightblue;
}
`

const CurrentDate = styled.div`
  color:white;
  font-size : 30px;
  position:absolute;
  height:30px;
  top:100%;
  margin-top:50px;
  
`

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());
    const stringDate = getStringDate(date);
    console.log(stringDate);

    return (
        <CalenedarContainer>
            <StyledCalendar
            onChange={setDate} 
            value={date}
            minDetail="year"
            maxDetail="month"
            //상단 월을 영어로 (December 2022)
            formatMonthYear={(locale, date) => moment(date).format('MMMM YYYY')}
            //day에서 "일" 빼기
            formatDay={(locale, date) => moment(date).format("D")}
            //연도 페이지에서 연 형식 변경
            formatYear={(locale, date) => moment(date).format('YYYY')}
            //요일 형식 mon...tue..
            formatShortWeekday={(locale, date) => moment(date).format('ddd')}
           />
           <CurrentDate>
             {`${stringDate}   `}
            </CurrentDate>
        </CalenedarContainer>
    )
}

export default MyCalendar;