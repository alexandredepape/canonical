import {IArticle} from "../interfaces/IArticle.ts";
import {flatten} from "lodash";

function getTopicName(articleJson: any) {
    const topics = flatten(articleJson._embedded['wp:term']);
    const topicId = articleJson.topic.length > 0 ? articleJson.topic[0] : articleJson.categories[0];
    const topic : any = topics.find((topic: any) => topic.id === topicId);
    return topic?.name.toUpperCase();
}

export function deserializeArticle(articleJson: any): IArticle {
    return {
        id: articleJson.id,
        date: articleJson.date,
        type: articleJson.type,
        title: articleJson.title.rendered,
        topic: getTopicName(articleJson),
        imgUrl: articleJson.featured_media,
        link: articleJson.link,
        authorName: articleJson._embedded.author[0].name,
    };
}
