import React from "react";
import Typograpghy from "@material-ui/core/Typography";

// https://stackoverflow.com/a/36733261/9599137
import { version } from "../../../../../package.json";

const versionDisplayer = () => {
  const versionNumber = `v${version}`;

  return <Typograpghy variant="subtitle2">{versionNumber}</Typograpghy>;
};

export default versionDisplayer;
