export interface paths {
    "/api/categories/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["api_categories_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["api_projects_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CategorySerilizer: {
            /** Format: uuid */
            readonly id: string;
            name: string;
        };
        PaginatedProjectSerilizerList: {
            /** @example 123 */
            count: number;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
            next?: string | null;
            /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
            previous?: string | null;
            results: components["schemas"]["ProjectSerilizer"][];
        };
        ProjectSerilizer: {
            /** Format: uuid */
            readonly id: string;
            repository_name: string;
            display_name: string;
            description: string;
            /** Format: uri */
            icon: string;
            /** Format: uri */
            thumbnail: string;
            /** Format: uri */
            repository: string;
            /** Format: uri */
            deployment?: string | null;
            categories: string[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    api_categories_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategorySerilizer"][];
                };
            };
        };
    };
    api_projects_list: {
        parameters: {
            query?: {
                categories?: string[];
                /** @description A page number within the paginated result set. */
                page?: number;
                /** @description A search term. */
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedProjectSerilizerList"];
                };
            };
        };
    };
}
