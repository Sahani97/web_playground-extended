const BASE_URL = 'https://en.wikipedia.org/w/api.php';
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/200';
const FETCH_ERROR_MSG = 'Error fetching data. Please try again later.';

interface Params {
  action: string;
  page?: string;
  prop?: string;
  section?: number;
  format: string;
  origin: string;
  titles?: string;
}

interface ApiResponse {
  query?: {
    pages: {
      [key: string]: {
        imageinfo?: { url: string }[];
      };
    };
  };
  parse?: {
    wikitext: { [key: string]: string };
  };
}

/**
 * Fetches generic data from the Wikipedia API based on provided parameters.
 * @param params Query parameters for the API request.
 * @returns Parsed JSON response from the API.
 */
export const fetchBearData = async (params: Params): Promise<ApiResponse> => {
  const url = `${BASE_URL}?${new URLSearchParams(params as any).toString()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(FETCH_ERROR_MSG, error);
    throw new Error(FETCH_ERROR_MSG);
  }
};

/**
 * Fetches the image URL for a given file name from Wikipedia.
 * @param fileName The name of the file (e.g., "File:Bear.jpg").
 * @returns The URL of the image or a placeholder if not found.
 */
export const fetchImageUrl = async (fileName: string): Promise<string> => {
  const imageParams = {
    action: 'query',
    titles: `File:${fileName}`,
    prop: 'imageinfo',
    iiprop: 'url',
    format: 'json',
    origin: '*',
  };

  const url = `${BASE_URL}?${new URLSearchParams(imageParams as any).toString()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: ApiResponse = await res.json();
    const pages = data.query?.pages;
    const imageInfo = pages && Object.values(pages)[0]?.imageinfo;

    return imageInfo && imageInfo.length > 0
      ? imageInfo[0].url
      : PLACEHOLDER_IMAGE_URL;
  } catch (error) {
    console.error('Error fetching image URL:', error);
    return PLACEHOLDER_IMAGE_URL;
  }
};
