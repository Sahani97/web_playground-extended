import { fetchBearData, fetchImageUrl } from './apiUtils';

interface Bear {
  name: string;
  binomial: string;
  image: string;
  range: string;
}

// Funktion zur Extraktion der Bären-Daten aus Wikitext
export const extractBears = async (): Promise<Bear[]> => {
  try {
    // Hole die Bären-Daten vom Backend
    const bearData = await fetchBearData();
    const wikitext = bearData.parse?.wikitext?.['*']; // Extrahiere den Wikitext, wenn vorhanden
    if (!wikitext) {
        throw new Error('Wikitext not found in bearData'); // Fehlermeldung, wenn wikitext fehlt
    }


    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears: Bear[] = [];

    for (const table of speciesTables) {
      const rows = table.split('{{Species table/row');
      for (const row of rows) {
        const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
        const binomialMatch = row.match(/\|binomial=(.*?)\n/);
        const imageMatch = row.match(/\|image=(.*?)\n/);
        const rangeMatch = row.match(/\|range=(.*?)(?=\n|$)/); // Anpassung für korrekten Range-Match

        if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
          const fileName = imageMatch[1].trim().replace('File:', '');
          const imageUrl = await fetchImageUrl(fileName);

          // Entferne zusätzliche Klammern oder ungewollte Zeichen in der Range-Information
          const cleanedRange = rangeMatch[1]
            .replace(/\[\[|\]\]/g, '') // Entferne doppelte eckige Klammern
            .replace(/\|.*$/, '') // Entferne alles nach einem '|', falls vorhanden
            .trim();

          const bear: Bear = {
            name: nameMatch[1].trim(),
            binomial: binomialMatch[1].trim(),
            image: imageUrl,
            range: cleanedRange,
          };

          bears.push(bear);
        }
      }
    }

    return bears; // Rückgabe der Bären-Liste
  } catch (error) {
    console.error('Error extracting bears:', error);
    throw new Error('Failed to extract bears data');
  }
};
