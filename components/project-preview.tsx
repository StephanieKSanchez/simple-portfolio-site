import Image from "next/image";
import Link from "next/link";

interface ProjectPreviewInterface {
  title: string;
  desc: string;
  linkUrl: string;
  image: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
  return (
    <div className="flex gap-4">
      <div className="relative w-32 h-16">
        <Image src={props.image} layout="fill" />
      </div>
      <div className="my-auto">
        <Link href={props.linkUrl}>
          <a className="font-bold underline hover:text-indigo-600">
            {props.title}
          </a>
        </Link>

        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
