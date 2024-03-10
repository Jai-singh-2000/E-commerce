import Loader from "../Tools/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useState } from "react";
import { tokenVerificationAsync } from "../../redux/reducers/userSlice";


const ADMINROUTESOBJ = Object.freeze({
    DASHBOARD: '/dashboard',
    PRODUCT_ADD: '/addProduct',
    EDIT_PRODUCT: '/editProduct',
    CONTACT_EMAIL: '/mails',
})

const USERROUTESOBJ = Object.freeze({
    SINGLE_ORDER: "/order",
    ORDERS: "/orders"
})

const NORMALROUTES = Object.freeze({
    LANDING: '/',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    SHOP: '/shop',
    ABOUT: '/about',
    CONTACT: '/contact',
    CART: "/cart",
})



//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { status, isUserLogged, isAdminLogged } = useSelector((state) => state?.user)

    const fetchUserData = () => {
        if (status === "success") {

            if (isAdminLogged) {
                checkInAdminRoutes()
            }
            else if (isUserLogged) {
                checkInUserRoutes()
            }
            else {
                checkInUnprotectedRoutes()
            }
            setIsLoading(false)

        } else if (status === "error") {
            checkInUnprotectedRoutes()
            setIsLoading(false)
        }

    }


    const checkInAdminRoutes = () => {
        // Admin logged In
        let myRoutes = [
            ADMINROUTESOBJ.DASHBOARD,
            ADMINROUTESOBJ.PRODUCT_ADD,
            ADMINROUTESOBJ.EDIT_PRODUCT,
            ADMINROUTESOBJ.CONTACT_EMAIL,
            ADMINROUTESOBJ.SERVICE_DETAIL
        ];

        let currentPath = location.pathname;
        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        //If path not found then redirect admin to dashboard
        if (isBrowser() && pathNotFound) {
            navigate(ADMINROUTESOBJ.DASHBOARD);
        }
    }


    const checkInUserRoutes = () => {
        // User logged In
        let myRoutes = [
            NORMALROUTES.LANDING,
            NORMALROUTES.SHOP,
            NORMALROUTES.ABOUT,
            NORMALROUTES.CONTACT,
            NORMALROUTES.CART,
            USERROUTESOBJ.ORDERS,
            USERROUTESOBJ.SINGLE_ORDER,
        ];

        let currentPath = location.pathname;

        // Our order path is /order/12345 something, so we have to slice path to compare
        if (currentPath.slice(0, 6) === USERROUTESOBJ.SINGLE_ORDER) {
            currentPath = "/order"
        }

        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        // When path not found in my routes make it redirect to index page
        if (isBrowser() && pathNotFound) {
            navigate(NORMALROUTES.LANDING);
        }
    }


    const checkInUnprotectedRoutes = () => {
        // User not logged In
        let myRoutes = [
            NORMALROUTES.LANDING,
            NORMALROUTES.LOGIN,
            NORMALROUTES.SIGN_UP,
            NORMALROUTES.FORGET,
            NORMALROUTES.SHOP,
            NORMALROUTES.ABOUT,
            NORMALROUTES.CONTACT,
            NORMALROUTES.CART,
        ];

        let currentPath = location.pathname;

        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        // When path not found in my routes make it redirect to index page
        if (isBrowser() && pathNotFound) {
            navigate(NORMALROUTES.LANDING);
        }


    }


    useEffect(() => {
        // Fetch user details when render
        fetchUserData()
    }, [isUserLogged, isAdminLogged, status])

    useLayoutEffect(() => {
        // Set loading true
        setIsLoading(true)
        dispatch(tokenVerificationAsync());
    }, [])

    if (isLoading) {
        return <Loader />
    } else {
        return children;
    }

};

export default ProtectedRoute;


