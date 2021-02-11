import {
    HttpMethod,
    HttpRequest,
    HttpRequestHeaders,
    HttpRequestParams,
    HttpRequestQuery
} from "@azure/functions";

export function createInputBinding() {
    throw new Error('Http cannot be an input binding');
}

export function createOutputBinding() {

}

export function createTrigger(
    method: HttpMethod = 'GET',
    url: string = 'http://example.com/',
    headers: HttpRequestHeaders = {},
    params: HttpRequestParams = {},
    body?: any,
    query?: HttpRequestQuery,
    originalUrl?: string,
    rawBody?: string,
): HttpRequest {
    const outBody = body ?? (rawBody ? JSON.parse(rawBody) : undefined);
    const outRawBody = rawBody ?? (body ? JSON.stringify(body) : undefined);
    return {
        method,
        url: url || originalUrl || (url ?? ''),
        originalUrl: originalUrl || url,
        headers: headers || {},
        query: query || {},
        params: params || {},
        body: outBody,
        rawBody: outRawBody,
    };
}
