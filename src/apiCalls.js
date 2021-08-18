import axios from 'axios';


export const loginCall = async (userCredential, dispatch) =>{
    dispatch({ type: "LOGIN_START"});

    try{
        const res = await axios.post("http://localhost:8800/api/users/login", userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err){
        dispatch({type:"LOGIN_FAILED", payload:err});
    }
};

export const signupCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START"});

    try{
        const res = await axios.post("http://localhost:8800/api/users/signup", userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err){
        dispatch({type:"LOGIN_FAILED", payload:err});
    }

}