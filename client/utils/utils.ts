import nookies from "nookies";
import {IUser} from "../src/interfaces";
import jwt_decode from "jwt-decode";
import {setUser} from "../src/redux/slices/userSlice";

export const checkLogin = (ctx: any, store: any) => {
    const {token} = nookies.get(ctx)

    if (token) {
        const {email, name}: IUser = jwt_decode(token)
        store.dispatch(setUser({email, name}))
    }
}