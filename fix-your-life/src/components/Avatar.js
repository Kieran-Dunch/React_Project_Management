import { PropTypes } from "prop-types";
import "./Avatar.css";

export default function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} alt="User avatar" />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string
}
