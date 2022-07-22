import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project-preview";

const Home: NextPage = () => {
  const projectMetaDataArray = [];

  projectMetaDataArray.push({
    title: "Data Analysis App",
    desc: "Processes data in Python",
    linkUrl: "/data-analysi",
    image: "/coding.jpg",
  });

  const projectPreviewElements = [];
  // <ProjectPreview {...ProjectPreviewData} />

  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i]; //take the metaData
    const element = <ProjectPreview {...metaData} />; // create project preview element out of it
    projectPreviewElements.push(element); // push this into my array containing all my elements
  }

  return (
    <div>
      <Profile />
      <div className="mt-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
