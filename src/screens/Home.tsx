import {authors} from "../db";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Best Seller Authors</h1>
            <ul>
                {
                    authors.map((author)=> (
                        <li key={author.name}>
                            <Link to={`/author/${author.name}`}>{author.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Home;