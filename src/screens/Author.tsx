import {Link, Outlet, useParams} from "react-router-dom";
import {authors} from "../db";

function Author() {
    const { name } = useParams();

    const author = authors.find((a) => a.name === name);


    if(!author) {
        return <p>Not Found Author</p>
    }

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {
                    author.books.map((book) => (
                        <li key={book.name}>
                            <Link to={`${book.name}`}>{book.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    );
}

export default Author;