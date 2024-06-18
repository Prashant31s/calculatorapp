"use client"
import { Provider } from "react-redux";
import History from "./History";
import store from "../store";
export default function Page(){
    return (
        <Provider store={store}>
        
        <History/>
         
        </Provider>
    )
}