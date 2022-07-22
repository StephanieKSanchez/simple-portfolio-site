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
    linkUrl: "/data-analysis",
    image: "/coding.jpg",
  });
  projectMetaDataArray.push({
    title: "Sound Processing App",
    desc: "Cleans up podcast audio",
    linkUrl: "/sound-processing",
    image: "/headphone.jpg",
  });
  projectMetaDataArray.push({
    title: "Social Media Tracker",
    desc: "Tracks time and usage",
    linkUrl: "/social-tracker",
    image: "/youtube.jpg",
  });

  const projectPreviewElements = [];
  // <ProjectPreview {...ProjectPreviewData} />

  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i]; //take the metaData
    const element = <ProjectPreview {...metaData} key={i} />; // create project preview element out of it
    projectPreviewElements.push(element); // push this into my array containing all my elements
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-2">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
