import {useAppSelector} from "../redux/hooks";

export const useAuth = () => {
    const {email,name} = useAppSelector(state => state.user)

    return {
        isAuth:!!email,
        email,
        name
    }
}