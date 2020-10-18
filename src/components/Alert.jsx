import React from 'react';

const Alert = ({ message, type, category }) => {
  return (
    <div className="Alert">
      {
        type === 'error' &&
        <div className="Alert__Error">
          <i className="fas fa-times"></i>
          <p>{ message } <strong className="Categroy">{category}</strong></p>
        </div>
      }
      {
        type === 'warning' &&
        <div className="Alert__Warning">
          <i className="fas fa-exclamation-triangle"></i>
          <p>{ message } <strong className="Categroy">{category}</strong></p>
        </div>
      }
      {
        type === 'success' &&
        <div className="Alert__Success">
          <i className="fas fa-check-circle"></i>
          <p>{ message } <strong className="Categroy">{category}</strong></p>
        </div>
      }
    </div>
  );
}

export default Alert;
