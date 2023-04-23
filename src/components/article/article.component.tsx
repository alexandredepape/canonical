import {IArticle} from "../../interfaces/IArticle";
import './article.scss';
import * as utils from "../../utils";

interface IArticleProps {
    article: IArticle
}


function getToLocaleDateString(article: IArticle) {
    return new Date(article.date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export function Article({article}: IArticleProps) {


    return (
        <div className='col-4 card'>
            <div className="header">
                {article.topic.toUpperCase()}
            </div>
            <div className="content">
                <img alt={`Image for ${article.title}`} height="185" src={article.imgUrl}/>
                <a href={article.link} className="p-heading--4">{utils.capitalise(article.title)}</a>
                <em>
                    {'By '}
                    <a>{utils.capitalise(article.authorName)}</a>
                    {
                        ' on ' + getToLocaleDateString(article)
                    }
                </em>
            </div>
            <div className="footer">
                {utils.capitalise(article.type)}
            </div>
        </div>
    );
}
