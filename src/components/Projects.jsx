import { useEffect, useState } from "react"
import axios from "axios"
import Project from "./Project"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProjects() {
      const res = await axios.get("https://dummyjson.com/products?limit=4")
      const data = await res.data.products
      setProjects(data)
    }
    getProjects()
  }, [])
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="container">
        {projects.map((project, index) => {
          return <Project key={index} name={project.title} thumbnail={project.thumbnail}></Project>
        })}
      </div>
    </section>
  )
}

export default Projects