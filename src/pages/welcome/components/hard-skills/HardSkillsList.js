import Card from "../../../../shared/overlay/Card";
import classes from "./HardSkillsList.module.css";
import HardkillsItem from "./HardSkillItem";

let skills = [
  {
    id: "S1",
    title: "Kritiklkodás",
    level: 4,
  },
  {
    id: "S2",
    title: "Kritikus gondolkodás",
    level: 3,
  },
  {
    id: "S3",
    title: "Kritikus gondolkodás",
    level: 5,
  },
  {
    id: "S4",
    title: "Kritikus gondolkodás",
    level: 1,
  },
  {
    id: "S5",
    title: "Kritikkodás",
    level: 3,
  },
  {
    id: "S6",
    title: "Kritikdás",
    level: 3,
  },
  {
    id: "S7",
    title: "Kritikus godás",
    level: 3,
  },
  {
    id: "S8",
    title: "Kritikus gondolkodás",
    level: 3,
  },
  {
    id: "S9",
    title: "Kritikukodás",
    level: 3,
  },
  {
    id: "S10",
    title: "Kritikus gondolkodás",
    level: 5,
  },
];

function HardSkillsList() {
  return (
    <Card title="Hard skills" position="left">
        <ul className={classes.soft_skills_list}>
          {skills.map((hardSkill) => (
            <HardkillsItem
              key={hardSkill.id+"_"+hardSkill.level.toString()}
              id={hardSkill.id}
              title={hardSkill.title}
              level={hardSkill.level}
            />
          ))}
        </ul>
    </Card>
  );
}

export default HardSkillsList;
