import React, { useState} from 'react';
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';


const ResultList = styled.div`
    display:inline-block;
    width:100%;
    text-align:center;
`;


export function MemberList() {

    const dataList = useSelector(state => state.FormReducer.member);
    console.log(dataList)
    const [memberList , setMemeberList] = useState(dataList);
    

   


  return (
    <ResultList>
        名單
    </ResultList>
  );
}

