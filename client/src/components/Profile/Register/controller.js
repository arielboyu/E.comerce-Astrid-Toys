import Axios from "axios";

export async function userExist(username){
    let userAvailable= false
    const {data} = await Axios.get(`${process.env.REACT_APP_API_URL}/users`)
    data.map((us)=>{
        if(us.username === username){
            userAvailable= true;
        } 
    })
    // .then((res)=>{
    //     console.log(res.data)
    //     res.data.forEach((us)=>{
    //         console.log(us)
    //         if(us.username === username){
    //             userAvailable = true
    //         }
    //     })
    // })
    // .catch(err => console.log(err))
    return userAvailable;
}