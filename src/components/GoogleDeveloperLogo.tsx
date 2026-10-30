import React from 'react';

interface GoogleDeveloperLogoProps {
  className?: string;
  size?: number;
  width?: number | string;
  height?: number | string;
}

/**
 * Official Google Developer Program Infinity Ribbon Logo
 * Uses the exact official image uploaded by the user: /official-google-dev.png
 */
export const GoogleDeveloperLogo: React.FC<GoogleDeveloperLogoProps> = ({
  className = '',
  size = 28,
  width,
  height,
}) => {
  const calculatedWidth = width || (size ? size * 2.38 : 'auto');
  const calculatedHeight = height || size;

  return (
    <img
      src="/official-google-dev.png"
      alt="Google Developer Program"
      width={typeof calculatedWidth === 'number' ? calculatedWidth : undefined}
      height={typeof calculatedHeight === 'number' ? calculatedHeight : undefined}
      style={{
        width: typeof calculatedWidth === 'string' ? calculatedWidth : `${calculatedWidth}px`,
        height: typeof calculatedHeight === 'string' ? calculatedHeight : `${calculatedHeight}px`,
      }}
      className={`object-contain inline-block shrink-0 transition-transform duration-200 ease-out hover:scale-105 ${className}`}
    />
  );
};
