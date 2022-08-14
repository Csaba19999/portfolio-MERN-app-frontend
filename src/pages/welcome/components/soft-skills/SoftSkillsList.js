import Card from "../../../../shared/overlay/Card";
import classes from "./SoftSkillsList.module.css";
import SoftSkillsItem from "./SoftSkillItem";

let skills = [
  {
    id: "S1",
    title: "Kritindolkodás",
    description: "Kritikuodás Kritikus gondolkodás",
  },
  {
    id: "S2",
    title: "Kritikus gondolkodás",
    description: "Kritikus gondolkodás Kritikus gondolkodás",
  },
  {
    id: "S3",
    title: "Kritikus golkodás",
    description: "Kritikus gonkus gondolkodás",
  },
  {
    id: "S4",
    title: "Kritikus gondolkodás",
    description: "Kritikus  gondolkodás",
  },
  {
    id: "S5",
    title: "Kritikus gonddás",
    description: "Kritikus gondolkodás Kritikus gondolkodás",
  },
  {
    id: "S6",
    title: "Kritikus gondolkodás",
    description: "Kritikus gKritikus gondolkodás",
  },
  {
    id: "S7",
    title: "Kritikkodás",
    description: "Kritikus gondolkodás Kritikus gondolkodás",
  },
  {
    id: "S8",
    title: "Kritikus kodás",
    description: "Kritikus gos Kritikus gondolkodás",
  },
];

function SoftSkillsList() {
  return (
    <Card title="Soft skills" position="right">
        <ul className={classes.soft_skills_list}>
          {skills.map((softSkill) => (
            <SoftSkillsItem
            key={softSkill.id}
            id={softSkill.id}
            title={softSkill.title}
            description={softSkill.description}
          />
          ))}
        </ul>
    </Card>
  );
}

export default SoftSkillsList;
