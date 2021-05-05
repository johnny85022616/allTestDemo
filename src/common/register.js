export const nameIllegalRegister = (name)=>{
    let reg = /[^\w]/g;
    return name.match(reg);
}

export const identityRegister = (id)=>{
    let reg = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
    return id.match(reg);
}

export const phoneRigister = (phone)=>{
    let reg = /^[0-9]{8}$/
    return phone.match(reg)
}

