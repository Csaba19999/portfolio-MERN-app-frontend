import Card from "../../../../shared/overlay/Card";
import classes from "./SoftSkillsList.module.css";
import SoftSkillsItem from "./SoftSkillItem";
import { useHttpClient } from "../../../../hooks/http-hook";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";


function SoftSkillsList() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [softSkills, setSoftSkills] = useState([]);

  useEffect(() => {
    const fetchSoftSkills = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/skills/soft"
        );
        setSoftSkills(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchSoftSkills();
  }, [sendRequest]);

  return (
    <Card title="Soft skills" position="right">
      {isLoading && (
          <LoadingSpinner spinnerSize={90} />
      )}
      {!isLoading && (
        <ul className={classes.soft_skills_list}>
          {softSkills.map((skill, index) => (
            <SoftSkillsItem
              key={skill._id+"_"+index}
              id={skill.id}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>
      )}
      {error && (
        <div className={classes.error_message}>
          <p>{error.message}</p>
          <button onClick={clearError}>Close</button>
        </div>
      )}
    </Card>
  );
}

export default SoftSkillsList;
