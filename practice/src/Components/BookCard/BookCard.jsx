import { Link } from "react-router-dom";

export const BookCard = ({ id, img, title, price }) => {
   

    return (

        <Link to={`/books/${id}`}>

            <img src={img} alt="" />

            <h4>{title}</h4>

            <h4>{price}</h4>
            
        </Link>

    )
};