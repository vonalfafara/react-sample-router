const Project = ({name, thumbnail}) => {
  return (
    <div className="project">
      <img src={thumbnail} alt="" />
      <div className="project-overlay">
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Project