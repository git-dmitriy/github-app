import React from "react";

export const Repositories = ({ repositories }) => (
  <>
    {repositories.map((repository) => (
      <div className="card mb-3" key={repository.id}>
        <div className="card-body">
          <h5>
            <a
              href={repository.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {repository.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </>
);
