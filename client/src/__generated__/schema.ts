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
    "/api/contact/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["api_contact_create"];
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
        Contact: {
            /** Format: email */
            email: string;
            subject: string;
            message: string;
            recaptcha: string;
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
            name: string;
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
    api_contact_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Contact"];
                "application/x-www-form-urlencoded": components["schemas"]["Contact"];
                "multipart/form-data": components["schemas"]["Contact"];
            };
        };
        responses: {
            /** @description No response body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
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
