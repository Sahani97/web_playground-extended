import React, { useEffect, useState } from 'react';
import { fetchBearData } from '../utils/apiUtils';
import { extractBears } from '../utils/bearUtils';

interface Bear {
  name: string;
  binomial: string;
  image: string;
  range: string;
}

function MoreBears(): React.JSX.Element {
  // State-Management
  const [bears, setBears] = useState<Bear[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Datenabruf und Bearbeitung
  useEffect(() => {
    const fetchAndSetBears = async () => {
      setLoading(true);
      setError(null);

      const params = {
        action: 'parse',
        page: 'List_of_ursids',
        prop: 'wikitext',
        section: 3,
        format: 'json',
        origin: '*',
      };

      try {
        const data = await fetchBearData(params);
        const wikitext = data.parse?.wikitext?.['*'];
        if (wikitext) {
          const extractedBears = await extractBears(wikitext); // Funktion liefert Bear[]
          setBears(extractedBears); // State aktualisieren
        }
      } catch (err) {
        console.error('Error fetching bears:', err);
        setError('Failed to load bear data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetBears();
  }, []);

  // Rendering
  return (
    <section className="more_bears">
      <h3>More Bears</h3>
      {loading && <p>Loading bear data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="bear-list">
        {!loading &&
          !error &&
          bears.map((bear) => (
            <div key={bear.name} className="bear-item">
              <h4>{bear.name} ({bear.binomial})</h4>
              <img
                src={bear.image}
                alt={bear.name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>Range:</strong> {bear.range}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MoreBears;
