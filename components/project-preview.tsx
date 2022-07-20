import Image from "next/image";

const ProjectPreview = () => {
  const title: string = "Data Analysis App";
  const desc: string = "Processes data in Python";

  return (
    <div className="flex">
      <div className="relative w-32 h-16">
        <Image src={"/coding.jpg"} layout="fill" />
      </div>
      <div>
        <a href={"/"} className="font-bold underline hover:text-indigo-600">
          {title}
        </a>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
