import {Link, Outlet, useOutletContext, useParams} from "react-router-dom";

interface BookList {
    bookList: Array<string>;
}
function Book() {
    const { book } = useParams();


    return (
        <div>
            <h2>{book}</h2>
            <ul>
                <li><Link to={"chapters"}>Chapters</Link></li>
                <li><Link to={"characters"}>Characters</Link></li>
            </ul>
            <Outlet context={{bookName: book}}/>
        </div>
    );
}

export default Book;