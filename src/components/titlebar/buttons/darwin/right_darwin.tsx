import React, { useReducer } from "react";
import {
  AiOutlineCamera,
  AiOutlineMinus,
  AiOutlineReload
} from "react-icons/ai";
import {
  RiCheckboxCircleFill,
  RiCloseLine,
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiLayoutRowLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiSettings3Line,
  RiVolumeMuteFill,
  RiVolumeUpLine,
  RiZoomInLine,
  RiZoomOutLine
} from "react-icons/ri";

import UIButton, { Button } from "../button";

type Props = {
  onClick: () => void;
};
const RightButtons_Darwin = ({onClick}: Props): JSX.Element => {
  const [isCaptured, toggleCaptured] = useReducer((prev) => !prev, false);
  const [isPinned, togglePinned] = useReducer((prev) => !prev, false);
  const [isMaximized, toggleMaximized] = useReducer((prev) => !prev, false);
  const [isMuted, toggleMuted] = useReducer((prev) => !prev, false);

  const buttons: Button[] = [
    {
      title: "スクリーンショットを撮影",
      children: isCaptured ? <RiCheckboxCircleFill /> : <AiOutlineCamera />,
      onClick: () => {
        window.api.capture();
        toggleCaptured();
        setTimeout(() => toggleCaptured(), 1500);
      }
    },
    {
      title: isMuted ? "ミュート解除" : "ミュート",
      children: isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpLine />,
      onClick: () => {
        window.api.toggleMute();
        toggleMuted();
      }
    },
    {
      title: "再読み込み",
      children: <AiOutlineReload />,
      onClick: () => {
        window.api.reloadView();
      }
    },
    {
      title: isPinned ? "固定を解除" : "最前面に固定",
      children: isPinned ? <RiPushpin2Fill /> : <RiPushpin2Line />,
      onClick: async () => {
        window.api.togglePinned();
        togglePinned();
      }
    },
    {
      title: "縮小",
      children: <RiZoomOutLine/>,
      onClick: () => window.api.zoomOut()
    },
    {
      title: "拡大",
      children: <RiZoomInLine/>,
      onClick: () => window.api.zoomIn()
    },
    {
      title: "分割表示",
      children: <RiLayoutRowLine/>,
      onClick: () => window.api.cycleSubScreenMode()
    },
    {
      title:"設定",
      children:<RiSettings3Line/>,
      onClick:onClick
    }
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
};

export default RightButtons_Darwin;
