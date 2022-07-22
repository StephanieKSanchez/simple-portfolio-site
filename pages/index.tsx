import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project-preview";

const Home: NextPage = () => {
  const ProjectPreviewData: ProjectPreviewInterface = {
    title: "Data Analysis App",
    desc: "Processes data in Python",
    linkUrl: "/data-analysi",
    image: "/coding.jpg",
  };

  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview {...ProjectPreviewData} />
        {/* spread operator breaks the object into its seperate elements & submits them as individual fields */}
      </div>
    </div>
  );
};

export default Home;
