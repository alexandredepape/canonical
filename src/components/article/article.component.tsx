import {IArticle} from "../../interfaces/IArticle";
import './article.scss';
import * as utils from "../../utils";
import {flatten} from "lodash";

interface IArticleProps {
    article: IArticle
}


export function Article({article}: IArticleProps) {
    function getTopicName() {
        const topics = flatten(article._embedded['wp:term']);
        const topicId = article.topic.length > 0 ? article.topic[0] : article.categories[0];
        const topic = topics.find((topic) => topic.id === topicId);
        return topic?.name;
    }

    return (
        <div className='col-4 card'>
            <header className="header">
                {getTopicName()}
            </header>
            <div className="content">
                <img alt="" height="185" src={article.featured_media}/>
                <h3 className="p-heading--4">
                    <a>{article.title.rendered}</a>
                </h3>
                <div>
                    {'By '}
                    <a>{article._embedded.author[0].name}</a>
                    {
                        ' on ' + new Date(article.date).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }
                </div>
            </div>
            <div className="footer">
                {utils.upperCaseFirstLetter(article.type)}
            </div>
        </div>
    );
}
