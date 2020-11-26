import Axios from "axios";

export async function userExist(username){
    let userAvailable= false
    const {data} = await Axios.get(`${process.env.REACT_APP_API_URL}/users`)
    data.map((us)=>{
        if(us.username === username){
            userAvailable= true;
        } 
    })
    return userAvailable;
}

export async function mailExist(mail){
    let mailAvailable= false
    const {data} = await Axios.get(`${process.env.REACT_APP_API_URL}/users`)
    data.map((us)=>{
        if(us.mail === mail){
            mailAvailable= true;
        } 
    })
    return mailAvailable;
}