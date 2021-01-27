import React from "react";

export const About = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Github Клиент</h1>
      <p className="lead">Приложение созданное для знакомства с github api.</p>
      <hr className="my-4" />
      <p>
        Позволяет находить пользователей, получать краткую информацию и
        открывать первые десять репозиториев пользователя.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
};
