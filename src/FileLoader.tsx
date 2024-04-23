// FileLoader.tsx
import React, { useState } from 'react';

interface FileLoaderProps {
  onFileLoaded: (fileContents: string) => void;
}

const FileLoader: React.FC<FileLoaderProps> = ({ onFileLoaded }) => {
  const [fileContents, setFileContents] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        setFileContents(contents);
        onFileLoaded(contents);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileLoader;
