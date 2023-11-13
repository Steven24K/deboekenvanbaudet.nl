import { Either, ThisIsA, ThisIsB } from "./Either"
import { Book } from "./book"
import { data } from "./dataset"

export const getAllbooks = (): Promise<Book[]> => {
    return Promise.resolve(data.toIndexedSeq().toArray())
}

export const getBookById = (id: number): Promise<Either<Book, Error>> => {
    return Promise.resolve(data).then(books => {
        if (books.has(id)) {
            return ThisIsA<Book, Error>(books.get(id)!)
        }
        throw 'Boek niet gevonden'
    })
        .catch(reason => ThisIsB(new Error(reason)))
}