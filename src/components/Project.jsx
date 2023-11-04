import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import projectsData from "@/utils/data/projects.json";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const typeMatches = selectedType ? project.type.toLowerCase() === selectedType.toLowerCase() : true;
    const searchMatches = project.name.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatches && searchMatches;
  });

  return (
    <section>
      <div className="mb-3">
        
        <div className="btn-group" role="group" aria-label="Filter by type">
          <button
            type="button"
            className={`btn ${selectedType === "nature" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setSelectedType("nature")}
          >
            Nature
          </button>
          <button
            type="button"
            className={`btn ${selectedType === "modern" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setSelectedType("modern")}
          >
            Modern
          </button>
          <button
            type="button"
            className={`btn ${selectedType === "classic" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setSelectedType("classic")}
          >
            Classic
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setSelectedType("")}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        {filteredProjects.map((data, index) => {
          return (
            <div className="col-md-3" key={index}>
              <CardItem
                name={data.name}
                cover={data.cover}
                summary={data.summary}
                link={data.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
