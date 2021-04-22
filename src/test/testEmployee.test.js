import {employee} from "./test1.js" 

test('拿200元買127元套餐應找回73元',()=>{
    const bill = 200;
    const price = 127 ;
    expect(employee.makeChange(bill,price)).toBe(73);
})