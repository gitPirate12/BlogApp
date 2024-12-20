import React from "react";

function post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/10/GettyImages-2169504261-e1729802377786.jpg?w=1024"
          alt="random"
        />
      </div>
      <div className="texts">
        <h2>Perplexity has reportedly closed a $500M funding round</h2>
        <p className="info">
          <a className="author">Aneeq Shaffy</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          AI-powered search engine Perplexity has reportedly closed a $500
          million funding round, valuing the startup at $9 billion. Bloomberg,
          citing sources familiar, reports that the round was led by
        </p>
      </div>
    </div>
  );
}

export default post;
