import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Project = ({description, title, github, stack, url, image, index}) => {

  return (
    <article className="project">
      <GatsbyImage image={getImage(image.localFile)} className="project-img" alt={title} />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">
          {description.data === null ? null : description.data.description}
        </p>
        <div className="project-stack">
          {
            stack.map((stack) => {
              return <span key={stack.id}>{stack.title}</span>
            })
          }
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"/>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"/>
          </a>
        </div>
      </div>

    </article>
  )
}

export default Project