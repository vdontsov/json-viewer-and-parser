import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { loadData } from '../../store/slices/dataSlice';

export function FileUploader() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      setIsLoading(true);
      setErrorMessage(null);

      fileReader.readAsText(event.target.files[0], 'UTF-8');
      fileReader.onload = (e) => {
        setIsLoading(false);
        if (e.target && typeof e.target.result === 'string') {
          try {
            const jsonData = JSON.parse(e.target.result);
            dispatch(loadData(jsonData));
          } catch (error) {
            setErrorMessage(
              'Error parsing JSON. Please ensure the file is in the correct format.'
            );
            // eslint-disable-next-line no-console
            console.error('Error parsing JSON:', error);
          }
        }
      };

      fileReader.onerror = () => {
        setIsLoading(false);
        setErrorMessage('Error reading the file. Please try again.');
      };
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {isLoading && <p>Loading file...</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
