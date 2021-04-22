import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux';



const NumberButton = styled.div`
    width:20px;
    height:20px;
    display:flex;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    margin-right:5px;
    margin-left:5px;
    ${({nowPage,page})=>{
        return page===nowPage?"background-color:yellow":""}}
 `;

 const PrevOrNextButton = styled.div`
    width:20px;
    height:20px;
    display:flex;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    margin-right:5px;
    margin-left:5px;
`;

 const PaginationBlock = styled.div`
    display:flex;
    justify-content:center;
 `;

 export function Pagination({data}) {
  
  const dispatch = useDispatch();

  const [nowPage , setNowPage] = useState(1);
  
  const dataCount = data.length;

  const pageCount = (dataCount/5)+1;

  const producePageButton = ()=>{
    let arr = []
    for(let i=1 ; i<pageCount ; i++){
        arr.push(<NumberButton key={i} page={i} nowPage={nowPage} onClick={()=>{handleNumberButtonClick(i)}}>{i}</NumberButton>)
    }
    return arr;
  }

  useEffect(()=>{
      const stardNumber =(nowPage-1)*5;
      dispatch({type:'PAGINATION_DATA',data:stardNumber})
  },[nowPage,dispatch])

  const handleNumberButtonClick = (i)=>{
    setNowPage(i);
    
  }

  const handlePreOrNextButtonClick = (type)=>{
    if(type==="<"){
        if(nowPage>1){
            setNowPage(nowPage-1);
        }
    }else{
        if(nowPage<pageCount-1){
            setNowPage(nowPage+1);
        }
    }
  }


  return (
    <PaginationBlock>
        {dataCount>=1?<PrevOrNextButton onClick={()=>{handlePreOrNextButtonClick("<")}}>{"<"}</PrevOrNextButton>:""}
        {
            producePageButton()
        }
        {dataCount>=1?<PrevOrNextButton onClick={()=>{handlePreOrNextButtonClick(">")}}>{">"}</PrevOrNextButton>:""}
    </PaginationBlock>
    
  );
}

