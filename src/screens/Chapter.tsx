import {useOutletContext} from "react-router-dom";
import {authors} from "../db";


interface Book {
    bookName: string;
}


function Chapter() {
    const { bookName } = useOutletContext<Book>();

    const getChapters = ()=> {
        for (const author of authors) {
            const book = author.books.find(b => b.name === bookName);
            if (book) {
                return book.chapters;
            }
        }
        return [];
    };


    return (
        <div>
            <h3>Chapters</h3>
            <ul>
                {
                    getChapters().map((chapter) => (
                        <li key={chapter}>{chapter}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Chapter;