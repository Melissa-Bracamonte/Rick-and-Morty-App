import React from "react";

const Pages = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious}>
                Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li>
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default Pages;
