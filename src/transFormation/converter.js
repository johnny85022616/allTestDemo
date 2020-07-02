import React, { useState} from 'react';
import styled from '@emotion/styled'


const Converter = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;


function Conveter() {
    const [inputValue , setInputValue] = useState(0);

    const handleChange = (e)=>{
        let inputValue = e.target.value;
        setInputValue(inputValue);
    }

  return (
    <Converter>
        set <input type='number' value={inputValue} onChange={handleChange}/>
        <div>-------</div>
        trans <input type='text' value={inputValue/5} readOnly/>
    </Converter>
  );
}

export default Conveter;