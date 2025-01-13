import axios from 'axios';

const BASE_URL = 'https://en.wikipedia.org/w/api.php';
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/200';
const FETCH_ERROR_MSG = 'Error fetching bear data. Please try again later.';
const IMAGE_FETCH_ERROR_MSG = 'Error fetching image URL. Using placeholder image.';

// API-Response-Interfaces
interface ApiResponse {
  parse?: {
    wikitext: { [key: string]: string };
  };
}

interface ImageApiResponse {
  query?: {
    pages: {
      [key: string]: {
        imageinfo?: { url: string }[];
      };
    };
  };
}

// Funktion für Bear-Daten vom Backend
export const fetchBearData = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>('http://localhost:3000/api/bears');
    return response.data;
  } catch (error) {
    console.error(FETCH_ERROR_MSG, error);
    throw new Error(FETCH_ERROR_MSG);
  }
};

// Interface für die API-Antwort speziell für Bilder
interface ImageApiResponse {
  query?: {
    pages: {
      [key: string]: {
        imageinfo?: { url: string }[];
      };
    };
  };
}

// Funktion zum Abrufen der Bild-URL
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
    const res = await axios.get<ImageApiResponse>(url); // Typisierung der Axios-Antwort
    const pages = res.data.query?.pages;
    const imageInfo = pages && Object.values(pages)[0]?.imageinfo;

    return imageInfo && imageInfo.length > 0
      ? imageInfo[0].url
      : PLACEHOLDER_IMAGE_URL; // Platzhalter-URL, falls kein Bild gefunden wird
  } catch (error) {
    console.error(IMAGE_FETCH_ERROR_MSG, error);
    return PLACEHOLDER_IMAGE_URL; // Fehlerfall
  }
};

