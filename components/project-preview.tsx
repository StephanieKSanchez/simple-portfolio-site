const ProjectPreview = () => {
  const title: string = "Data Analysis App";
  const desc: string = "Processes data in Python";

  return (
    <div>
      <a href={"/"} className="font-bold underline">
        {title}
      </a>
      <div>{desc}</div>
    </div>
  );
};

export default ProjectPreview;
