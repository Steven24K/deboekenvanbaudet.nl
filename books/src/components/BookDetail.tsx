import * as React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { Book } from '../data/book';
import { Either } from '../data/Either';
import { NotFound } from './NotFound';


export const BookDetail = () => {
    let book = useLoaderData() as Either<Book, Error>
    if (book.kind == 'a') {

        return <div className='container'>
            <Link to="/">Terug naar overzicht</Link>
            <div className="row">

                <div className="col-md-8">
                    <img className="img-fluid" src={book.value.image_url} alt="book" />
                </div>

                <div className="col-md-4">
                    <h3 className="my-3">{book.value.title}</h3>
                    <div>{book.value.description}</div>
                    <h4 className="my-4">{book.value.author}</h4>
                    <h5>{book.value.price}</h5>
                </div>

            </div>
        </div>
    }
    return <NotFound title='Oeps!' msg={book.value.message} descr='Dit boek moet nog geschreven worden'/>
} 