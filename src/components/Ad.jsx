import {useEffect} from 'react';

export default function Ad({ad, onImpression, onClick}) {
  useEffect(() => {
    if (onImpression) {
      onImpression(ad.id);
    }
  }, [ad.id, onImpression]);

  const handleClick = () => {
    if (onClick) {
      onClick(ad.id);
    }
  };

  return (
    <a
      href={ad.link}
      target='_blank'
      rel='noopener noreferrer'
      onClick={handleClick}
    >
      <img
        src={ad.image}
        alt={ad.title}
        style={{width: '100%', height: 'auto'}}
      />
    </a>
  );
}
