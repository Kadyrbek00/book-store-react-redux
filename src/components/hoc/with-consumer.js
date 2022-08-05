import React from "react";
import { BookConsumer } from "../bookservice-context";

const WithConsumer = () => (Wrapped) => {
    return (props) => {
        return (
            <BookConsumer>
                {(bookService) => {
                  return <Wrapped {...props} bookService={bookService} />
                }}
            </BookConsumer>
        )
    }
};


export default WithConsumer