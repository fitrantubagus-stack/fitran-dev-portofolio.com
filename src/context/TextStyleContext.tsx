import React, { createContext, useContext, useState, useEffect } from 'react';

export type TextStyleMode = 'formal' | 'coding';

interface TextStyleContextType {
  styleMode: TextStyleMode;
  isCodingMode: boolean;
  isFormalMode: boolean;
  toggleStyleMode: () => void;
}

const TextStyleContext = createContext<TextStyleContextType>({
  styleMode: 'formal',
  isCodingMode: false,
  isFormalMode: true,
  toggleStyleMode: () => {},
});

// 2 minutes in milliseconds (120,000 ms)
const TWO_MINUTES_MS = 120000;

export const TextStyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determine mode by real-time clock: alternates every 2 minutes without visible counter
  const computeModeFromTime = (): TextStyleMode => {
    const cycle = Math.floor(Date.now() / TWO_MINUTES_MS);
    return cycle % 2 === 0 ? 'formal' : 'coding';
  };

  const [styleMode, setStyleMode] = useState<TextStyleMode>(() => {
    if (typeof window !== 'undefined') {
      return computeModeFromTime();
    }
    return 'formal';
  });

  useEffect(() => {
    // Check every second to switch smoothly when the 2-minute boundary crosses
    const interval = setInterval(() => {
      const targetMode = computeModeFromTime();
      setStyleMode((prev) => (prev !== targetMode ? targetMode : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleStyleMode = () => {
    setStyleMode((prev) => (prev === 'formal' ? 'coding' : 'formal'));
  };

  return (
    <TextStyleContext.Provider
      value={{
        styleMode,
        isCodingMode: styleMode === 'coding',
        isFormalMode: styleMode === 'formal',
        toggleStyleMode,
      }}
    >
      {children}
    </TextStyleContext.Provider>
  );
};

export const useTextStyle = (): TextStyleContextType => {
  return useContext(TextStyleContext);
};
