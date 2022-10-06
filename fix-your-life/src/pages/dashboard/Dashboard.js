import { useState } from "react";
import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import ProjectFilter from "./ProjectFilter";

import "./Dashboard.css";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((document) => {
      let assignedToMe = false;
      switch (currentFilter) {
        case "all":
          return true;
        case "mine":
          document.assignedUsersList.forEach((u) => {
            if (user.uid === u.id) {
              assignedToMe = true;
            }
          });
          return assignedToMe;
        case "development":
        case "design":
        case "marketing":
        case "sales":
          console.log(document.category, currentFilter);
          return document.category === currentFilter;
        default:
          return true;
      }
    })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}
