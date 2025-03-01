interface OpenGraphMetadata {
    title: string;
    image: string;
    description: string;
}

interface OpenGraphApiResponse {
    title: string;
    description: string;
    type: string;
    image: string;
    url: string;
    site_name: string;
    favicon: string;
}

async function getFromOpenGraphApi(
    encodedUrl: string,
    apiKey: string
): Promise<OpenGraphApiResponse> {
    const response = await fetch(
        `https://opengraph.io/api/1.1/site/${encodedUrl}?app_id=${apiKey}`
    );
    const data = await response.json();
    return data.hybridGraph;
}

function encodeUrl(url: string) {
    return encodeURIComponent(url);
}

export async function extractOpenGraphMetadata(
    url: string
): Promise<OpenGraphMetadata> {
    const apiKey = process.env.OPENGRAPH_API_KEY;
    if (!apiKey) throw new Error("OPENGRAPH_API_KEY is not set");

    const encodedUrl = encodeUrl(url);
    const data = await getFromOpenGraphApi(encodedUrl, apiKey);

    return {
        title: data.title || "No title",
        image: data.image,
        description: data.description,
    };
}
