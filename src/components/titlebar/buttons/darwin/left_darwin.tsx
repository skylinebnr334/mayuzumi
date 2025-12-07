import React, { useReducer } from "react";
import {RiCloseLine, RiFullscreenExitLine, RiFullscreenLine, RiLayoutRowLine, RiSettings3Line, RiZoomInLine, RiZoomOutLine,} from "react-icons/ri";

import UIButton, { Button } from "../button";
import { AiOutlineMinus } from "react-icons/ai";


const LeftButtons_Darwin = (): JSX.Element => {

  const [isMaximized, toggleMaximized] = useReducer((prev) => !prev, false);
  const buttons: Button[] = [
      {
        title: "終了",
        children: <RiCloseLine />,
        onClick: () => window.api.close()
      },
      {
        title: "最小化",
        children: <AiOutlineMinus />,
        onClick: () => window.api.minimize()
      },
      {
        title: isMaximized ? "最大化を解除" : "最大化",
        children: isMaximized ? <RiFullscreenExitLine /> : <RiFullscreenLine />,
        onClick: async () => {
          window.api.toggleMaximize();
          toggleMaximized();
        }
      },
  ];

  return (
    <div className="flex items-center overflow-hidden">
      {buttons.map((e) => (
        <UIButton key={e.title} {...e}>
          {e.children}
        </UIButton>
      ))}
    </div>
  );
}


export default LeftButtons_Darwin;
