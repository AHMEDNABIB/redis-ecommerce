import { pageCachekey } from "$services/keys";
import { client } from "$services/redis";


const cacheRoutes = ["/about", "/privacy", "/auth/signin", "/auth/signup"]

export const getCachedPage = (route: string) => { 
    if (cacheRoutes.includes(route)) {
        // return client.get('pagecache#'+route)
        return client.get(pageCachekey(route))
    }

    return null;
};

export const setCachedPage = (route: string, page: string) => {
    if (cacheRoutes.includes(route)) {
        // return client.set('pagecache#' + route, page,
        //     // {
        //     //     EX:2
        //     // }
        // )
        return client.set( pageCachekey(route), page,
            // {
            //     EX:2
            // }
        )
    }
};
