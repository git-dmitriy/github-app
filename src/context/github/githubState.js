import axios from "axios";
import React, { useReducer } from "react";
import {
  CLEAR_USERS,
  GET_REPOSITORIES,
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repositories: [],
  };

  const withCreds = (url) => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  };

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading();

    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();

    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    );

    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  };

  const getRepositories = async (name) => {
    setLoading();

    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
    );

    dispatch({
      type: GET_REPOSITORIES,
      payload: response.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repositories, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        getUser,
        getRepositories,
        clearUsers,
        setLoading,
        user,
        users,
        repositories,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
