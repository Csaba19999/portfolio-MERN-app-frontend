import Card from "../../../../shared/overlay/Card";
import classes from "./HardSkillsList.module.css";
import HardkillsItem from "./HardSkillItem";
import { useHttpClient } from "../../../../hooks/http-hook";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../../shared/loadingSpinner/LoadingSpinner";

function HardSkillsList() {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [hardSkills, setHardSkills] = useState([]);

  useEffect(() => {
    const fetchSoftSkills = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/skills/hard"
        );
        setHardSkills(responseData);
      } catch (error) {
        console.log(error.messege);
      }
    };
    fetchSoftSkills();
  }, [sendRequest]);

  return (
    <Card title="Hard skills" position="left">
      {isLoading && (
        <div className={classes.loading_spinner}>
          <LoadingSpinner spinnerSize={90} />
        </div>
      )}
      {!isLoading && (
        <ul className={classes.soft_skills_list}>
          {hardSkills.map((skill,index) => (
            <HardkillsItem
              key={skill._id+"_"+index}
              id={skill.id}
              title={skill.title}
              level={skill.level}
            />
          ))}
        </ul>)}
    </Card>
  );
}

export default HardSkillsList;
