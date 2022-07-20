import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview from "../components/project-preview";

const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Home;
