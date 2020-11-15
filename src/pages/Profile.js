import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Repositories } from "../components/Repositories";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({ match }) => {
  const { getUser, getRepositories, loading, user, repositories } = useContext(
    GithubContext
  );
  const values = useContext(GithubContext);

  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepositories(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <div>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 text-center">
              <img src={avatar_url} alt={name} style={{ width: "200px" }} />
              <h1>Name</h1>
              {location && <p>Местоположение: {location}</p>}
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark mb-3"
              >
                Открыть профиль
              </a>
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <ul>
                {login && (
                  <li>
                    {" "}
                    <strong>Пользователь: </strong> {login}{" "}
                  </li>
                )}
                {company && (
                  <li>
                    {" "}
                    <strong>Компания: </strong> {company}{" "}
                  </li>
                )}
                {blog && (
                  <li>
                    {" "}
                    <strong>Вебсайт: </strong> {blog}{" "}
                  </li>
                )}
              </ul>
              <span className="badge badge-primary">
                Подписчики: {followers}
              </span>{" "}
              <span className="badge badge-success">Подписан: {following}</span>{" "}
              <span className="badge badge-info">
                Репозитории: {public_repos}
              </span>{" "}
              <span className="badge badge-dark">Gists: {public_gists}</span>
            </div>
          </div>
        </div>
      </div>
      <Repositories repositories={repositories} />
    </div>
  );
};
