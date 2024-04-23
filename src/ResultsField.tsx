import React from 'react';

const ResultsField = ({ results }: { results: string }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>{results}</p>
    </div>
  );
};

export default ResultsField;
