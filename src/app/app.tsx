import React, {useEffect} from 'react';
import {Alert, Layout} from 'antd';
import {useAppSuspendedData} from "../utils/hooks/useAppData";
import {thunks} from "../redux/thunks/thunks";
import {Preloader} from "../common/preloader/preloader";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./header/header";
import {AppContent} from "./content/content";
import {Footer} from "./footer/footer";
import {getIsAuth} from "../utils/selectors/auth-selectors/auth-selectors";
import {Login} from "../pages/login/login";

const App = () => {

    const {isInitialized} = useAppSuspendedData()
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)


    useEffect(() => {
        dispatch(thunks.initialized());
        window.addEventListener('unhandledrejection', catchAllHandleErrors);

        return () => {
            window.removeEventListener('unhandledrejection', catchAllHandleErrors);
        };
    }, [dispatch]);
    const catchAllHandleErrors = (e: PromiseRejectionEvent) => {
        <Alert message="Some error occurred, check console" type="error"/>;
        console.error(e);
    };

    if (!isInitialized) {
        return <Preloader/>;
    }

    if (!isAuth) return <Login/>

    return (

        <Layout style={{}}>
            <Header/>
            <Layout>
                <AppContent/>
            </Layout>
            <Footer/>
        </Layout>


    );
};

export default App;