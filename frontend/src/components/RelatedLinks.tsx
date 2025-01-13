import React from 'react';

interface RelatedLink {
  href: string;
  label: string;
}

const RelatedLinks: React.FC = () => {
  const relatedLinks: RelatedLink[] = [
    { href: '#', label: 'The trouble with Bees' },
    { href: '#', label: 'The trouble with Otters' },
    { href: '#', label: 'The trouble with Penguins' },
    { href: '#', label: 'The trouble with Octopi' },
    { href: '#', label: 'The trouble with Lemurs' },
  ];

  return (
    <div className="secondary" aria-label="Related articles">
      <h2>Related</h2>
      <ul id="troubleLinks">
        {relatedLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} aria-label={`Read more about ${link.label}`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
