export interface IArticle {
    id: number;
    date: string;
    type: string;
    title: {
        rendered: string;
    };
    topic: number[]
    categories: number[]
    featured_media: string;
    _embedded: {
        'wp:term': any[];
        author: [
            {
                id: number;
                link: string;
                name: string;
            }
        ]
    }
}
