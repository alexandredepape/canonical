import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {IArticle} from "../../interfaces/IArticle";
import {Article} from "./article.component";

describe('Article Component', () => {
    test('renders article component', () => {
        const article: IArticle = {
            id: 1,
            date: '2021-01-01',
            title: {
                rendered: 'article-title'
            },
            featured_media: '',

            type: 'article-post',
            topic: [1],
            categories: [2],
            _embedded: {
                author: [
                    {
                        id: 1,
                        name: 'article-author',
                        link: '',
                    }],
                'wp:term': [
                    [
                        {
                            id: 1,
                            name: 'article-topic',
                            link: '',
                        }
                    ]]
            }
        };


        render(<Article article={article}/>);

        expect(screen.getByText('article-title')).toBeInTheDocument();
        expect(screen.getByText('article-author')).toBeInTheDocument();
        expect(screen.getByText('article-topic')).toBeInTheDocument();
        expect(screen.getByText('Article-post')).toBeInTheDocument();
    });
});
