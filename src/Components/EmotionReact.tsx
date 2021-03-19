/**@jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

const EmotionReact: React.VFC = () => {
  const containerStylle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStylle = css`
    margin: 0;
    color: #3d84a8;
  `;
  const buttonStylle = css`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;
  return (
    <div css={containerStylle}>
      <p css={titleStylle}>Emotion React</p>
      <button css={buttonStylle}>PUSH!!</button>
    </div>
  );
};

export default EmotionReact;
