import {useOutletContext} from "react-router-dom";
import {authors} from "../db";

interface Book {
    bookName:string;
}

function Character() {
    const { bookName } = useOutletContext<Book>();

    const getCharacters = ()=> {
        for (const author of authors) {
            const book = author.books.find(b => b.name === bookName);
            if (book) {
                return book.characters;
            }
        }
        return [];
    };

    return (
        <div>
            <h3>Characters</h3>
            <ul>
                {
                    getCharacters().map((character) => (
                        <li key={character}>{character}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Character;