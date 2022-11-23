import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className="NotFound">
        <div className="NotFound-item">
          <h1
            style={{
              color: '#fff',
            }}
          >
            Bad request.
          </h1>
          <p
            style={{
              fontSize: '16px',
              margin: '1em 0',
              color: '#fff',
            }}
          >
            We’re sorry but something appears to be wrong with the request you
            made, please try again.
          </p>
          <span className="go-back">
            <a
              href="/"
              style={{
                display: 'inline-block',
                margin: '3em',
                padding: '10px',
                color: '#fff',
                fontweight: '700',
                textDecoration: 'none',
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {' <-- Go back'}
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
