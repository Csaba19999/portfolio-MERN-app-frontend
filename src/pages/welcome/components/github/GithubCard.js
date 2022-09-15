import classes from "./GithubCard.module.css";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../hooks/http-hook";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";
import Card from "../../../../shared/overlay/Card";

function GithubCard(props) {
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [githubProfile, setGithubProfile] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPinnedProjects = async () => {
      const response = await sendRequest(
        "https://gh-pinned-repos.egoist.sh/?username=Csaba19999"
      );
      setPinnedProjects(response);
    };
    const fetchGithubAccount = async () => {
      const response = await sendRequest(
        "https://api.github.com/users/Csaba19999"
      );
      setGithubProfile(response);
    };
    fetchGithubAccount();
    fetchPinnedProjects();
  }, [sendRequest]);

  return (
    <Card>
      {isLoading && <LoadingSpinner />}
      {!isLoading && pinnedProjects && (
        <div className={classes.github_card}>
          <img
            src="./images/icons/GitHub_Logo.png"
            alt="avatar"
            className={classes.github_logo}
          />
          <img
            src={githubProfile.avatar_url}
            alt="avatar"
            className={classes.github_avatar}
          />
          <h2 className={classes.github_name}>{githubProfile.login}</h2>
          <div className={classes.pinned_list}>
            {pinnedProjects.map((project, index) => (
              <Card key={index + "_project"} className={classes.pinned_item}>
                <img className={classes.repo_icon} src="./images/icons/repo.svg" alt="repo icon" />
                <h4>{project.repo}</h4>
                <h5>{project.language}</h5>
                <div className={classes.rating}>
                  <a href={project.link} target="_blank">
                    Megtekintés
                  </a>
                  <div className={classes.forks}>
                    <img src="./images/icons/fork.svg" alt="fork icon" />
                    <p>{project.forks}</p>
                  </div>
                  <div className={classes.stars}>
                    <img src="./images/icons/star.svg" alt="star icon" />
                    <p>{project.stars}</p>
                  </div>
                </div>
                <div
                  className={classes.bottom_line}
                  style={{ backgroundColor: project.languageColor }}
                ></div>
              </Card>
            ))}
          </div>
          <div className={classes.commit_infos}></div>
        </div>
      )}
    </Card>
  );
}

export default GithubCard;
