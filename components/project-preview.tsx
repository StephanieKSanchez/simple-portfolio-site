import Image from "next/image";

const ProjectPreview = () => {
  const title: string = "Data Analysis App";
  const desc: string = "Processes data in Python";

  return (
    <div>
      <div className="relative">
        <Image src={"/coding.jpg"} layout="fill" />
      </div>
      <a href={"/"} className="font-bold underline hover:text-indigo-600">
        {title}
      </a>
      <div>{desc}</div>
    </div>
  );
};

export default ProjectPreview;
