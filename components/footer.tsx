import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      <div>Designed and built Stephanie</div>
      <div className="text-3xl text-slate-300">{icon}</div>
    </div>
  );
};

export default Footer;
