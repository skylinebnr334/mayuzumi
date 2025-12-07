import React from "react";

import LeftButtons from "./buttons/left";
import RightButtons from "./buttons/right";
import { platform } from "os";
import LeftButtons_Darwin from "./buttons/darwin/left_darwin";
import RightButtons_Darwin from "./buttons/darwin/right_darwin";

type Props = {
  hidden: boolean;
  onClickSetting: () => void;
};

const TitleBar = ({ hidden, onClickSetting }: Props): JSX.Element => {
  // NOTE: タイトルバークリック時にビューがフォーカスを失うのを防止（主に macOS）
  const handleMouseDown = () => {
    window.api.focusView();
  };
  if (window.api.os_info === 'darwin') {

    return (
      <div
        className={`${hidden ? "hidden" : "flex"
          } justify-between fixed top-0 min-w-full h-6 bg-rinze text-luca drag`}
        onMouseDown={handleMouseDown}
      >

        <LeftButtons_Darwin />
        <RightButtons_Darwin onClick={onClickSetting} />
      </div>
    );
  } else {
    return (
      <div
        className={`${hidden ? "hidden" : "flex"
          } justify-between fixed top-0 min-w-full h-6 bg-rinze text-luca drag`}
        onMouseDown={handleMouseDown}
      >

        <LeftButtons onClick={onClickSetting} />
        <RightButtons />
      </div>
    );
  }
};

export default TitleBar;
