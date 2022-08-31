import nookies from "nookies";
import {User} from "../src/interfaces";
import jwt_decode from "jwt-decode";
import {setUser} from "../src/redux/slices/userSlice";

export const checkLogin = (ctx: any, store: any):void => {
    const {token} = nookies.get(ctx)

    if (token) {
        const {email, name}: User = jwt_decode(token)
        store.dispatch(setUser({email, name}))
    }
}

