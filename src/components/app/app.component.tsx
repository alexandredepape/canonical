import {Article} from "../article/article.component";
import {useArticles} from "./app.service.ts";

export function App() {
    const {isLoading, error, data} = useArticles();

    if (isLoading) {
        return <>Loading...</>
    }

    if (error) {
        return <>An error has occurred: + error.message</>
    }
    return (
        <div className="u-equal-height">
            {data?.map((article) => (
                <Article article={article} key={article.id}/>
            ))}
        </div>
    );
}

