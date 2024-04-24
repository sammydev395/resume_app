import React from 'react';

const ResultsField = ({ results, question }: { results: string, question: string }) => {
  return (
    <div>
      <h2>Results for "{question}"</h2>
      <textarea
        value={results}
        rows={20} // Set the number of rows to display
        cols={150} // Set the number of columns to display
        style={{ resize: 'none' }} // Disable resizing of textarea
      />      
    </div>
  );
};

export default ResultsField;
