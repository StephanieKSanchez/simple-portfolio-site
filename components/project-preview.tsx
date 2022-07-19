const ProjectPreview = () => {
  const title: string = "Data Analysis App";
  const desc: string = "Processes data in Python";

  return (
    <div>
      <div className="font-bold underline">{title}</div>
      <div>{desc}</div>
    </div>
  );
};

export default ProjectPreview;
