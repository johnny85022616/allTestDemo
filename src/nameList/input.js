import React, { useState} from 'react';
import styled from '@emotion/styled'


const Converter = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;


function Input() {
    
    const dispatch = useDispatch();
    const [inputValue , setInputValue] = useState(originalState);

    const handleChange = (e)=>{
        let inputValue = e.target.value;
        setInputValue(inputValue);
    }

    const handleButtonClick = ()=>{
        dispatch({
            name : inputValue
        });
    }
    
  return (
    <Converter>
        輸入姓名 : <input type='number' value={inputValue} onChange={handleChange}/>
        <div onClick={handleButtonClick}>新增</div>
    </Converter>
  );
}

export default Input;