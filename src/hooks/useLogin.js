import { useState } from 'react';
import {userData} from '../utils/userData'

const useLogin = (user, pass)=>{
    const [text, setText] = useState();

    const verify = (user, pass)=>{
        const str = "the user is "+user+" and the pass is "+pass;
        setText(str);
    }

    return {text, verify}
}

export default useLogin;