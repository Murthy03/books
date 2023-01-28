import React from "react";
import ReactDOM from "react-dom/client";
import  {books} from  "./books.js";
import BookStore from "./BookStore";
import  "./index.css";
const BookList=()=>{
    return <>
    <h1 align="center">Amazon Fantasy Books</h1>
    <div className="bookstore">
        {books.map((b)=>{
            return <BookStore {...b} key={b.id}/>
        })}
        </div></>
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);