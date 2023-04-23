import {useQuery} from "@tanstack/react-query";
import {IArticle} from "../../interfaces/IArticle.ts";
import {log} from "../../utils.ts";
import {deserializeArticle} from "../../mapping/article.mapper.ts";

export function useArticles() {
    return useQuery<IArticle[], Error>({
        queryKey: ['articles'],
        queryFn: () =>
            fetch(import.meta.env.VITE_API_URL).then(async (res) => {
                log("app.component.tsx", "useQuery", "fetch", "res", res);
                const json =  await res.json();
                return json.map((article: any) => deserializeArticle(article));
            }),
    });
}
