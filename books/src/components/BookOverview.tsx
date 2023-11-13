import * as React from 'react'
import { Link, useLoaderData } from "react-router-dom";
import { Book } from '../data/book';


export const BookOverview = () => {
    let books = useLoaderData() as Book[]
    return <div className='container'>
        <div className="row">
            {
                books.map(book => <div key={book.id} className="col-md-4 mb-5 mb-md-0">
                    <div className="card d-block">
                        <div className="card-body d-flex align-items-center p-0">
                            <Link to={`boek/${book.id}/${book.title.toLocaleLowerCase().replaceAll(' ', '-')}/`}>
                                <div className="w-100 border-right">
                                    <img className="img-fluid" src={book.image_url} alt="Image Description" />
                                </div>
                            </Link>
                        </div>
                        <div className="card-footer text-center py-4">
                            <h3 className="h5 mb-1">{book.title}</h3>
                            <b className="mb-1">{book.author}</b>
                            <span className="d-block text-muted font-size-1 mb-3">{book.price}</span>
                            <Link className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" to={`boek/${book.id}/${book.title.toLocaleLowerCase().replaceAll(' ', '-')}/`}>Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}