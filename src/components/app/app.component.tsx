import {Article} from "../article/article.component";
import {useQuery} from "@tanstack/react-query";
import {IArticle} from "../../interfaces/IArticle.ts";
import {log} from "../../utils.ts";

export function App() {
    const {isLoading, error, data} = useQuery<IArticle[], Error>({
        queryKey: ['articles'],
        queryFn: () =>
            fetch(import.meta.env.VITE_API_URL).then((res) => {
                log("app.component.tsx", "useQuery", "fetch", "res", res);

                return res.json()
            }),
    });

    if (isLoading) {
        return <>'Loading...'</>
    }

    if (error) {
        return <>'An error has occurred: ' + error.message</>
    }
    return (
        <div className="u-equal-height">
            {data?.map((article) => (
                <Article article={article} key={article.id}/>
            ))}
        </div>
    );
}

