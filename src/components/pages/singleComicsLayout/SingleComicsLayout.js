import { Link } from 'react-router-dom';

import './singleComicsLayout.scss';

const SingleComicsLayout = ({data}) => {

    const {title, description, pageCount, thumbnail, language, price} = data;

    return (
        <div className="single-comics">
            <img src={thumbnail} alt={title} className="single-comics__img"/>
            <div className="single-comics__info">
                <h2 className="single-comics__name">{title}</h2>
                <p className="single-comics__descr">{description}</p>
                <p className="single-comics__descr">{pageCount}</p>
                <p className="single-comics__descr">Language: {language}</p>
                <div className="single-comics__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comics__back">Back to all</Link>
        </div>
    )
}

export default SingleComicsLayout;