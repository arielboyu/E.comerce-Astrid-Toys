import Axios from "axios";

export function userExist(username){
    let userAvailable= false
    Axios.get(`${process.env.REACT_APP_API_URL}/users`)
    .then((res)=>{
        res.map((us)=>{
            if(us.username === username){
                userAvailable = true
            }
        })
    })
    .catch(err => console.log(err))
    return userAvailable;
}