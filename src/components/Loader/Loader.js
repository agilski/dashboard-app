import PropTypes from "prop-types";
import { Dimmer, Loader as LoaderUI } from "semantic-ui-react";

export default function Loader({ active }) {
  return (
    <Dimmer active={active}>
      <LoaderUI></LoaderUI>
    </Dimmer>
  );
}

Loader.propTypes = {
  active: PropTypes.bool,
};

Loader.defaultProps = {
  active: false,
};
