import React from 'react';

const Loading = () => {
  return (
    <div className="text-center py-64">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;