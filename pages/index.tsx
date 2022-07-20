import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview from "../components/project-preview";

const Home: NextPage = () => {
  const title: string = "Data Analysis App";
  const desc: string = "Processes data in Python";
  const linkUrl: string = "/data-analysis";

  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview title={title} desc={desc} linkUrl={linkUrl} />
      </div>
    </div>
  );
};

export default Home;
