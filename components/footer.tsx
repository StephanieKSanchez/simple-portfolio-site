import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faCoffee} />;
  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      <div>Designed and built Stephanie</div>
      {icon}
    </div>
  );
};

export default Footer;
