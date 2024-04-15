import Link from "next/link";
import styled from "styled-components";

export const StyledContainer = styled.main`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(161, 161, 161, 0.5);
  box-shadow: 0px 0px 50px 15px rgba(161, 161, 161, 0.5);
  display: flex;
  flex-direction: column;
  grid-area: content;
  justify-content: center;
  padding: 15px;
`;

export const StyledHeadline = styled.h1`
  animation: fadeIn 2s ease-in-out forwards;
  animation-delay: 13.5s;
  color: rgba(161, 161, 161, 0.7);
  font-size: 3rem;
  font-family: "Roboto";
  line-height: 1.5;
  margin-bottom: 1rem;
  opacity: 0;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Roboto-Light";
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledSubheadline = styled.h2`
  animation: fadeIn 2s ease-in-out forwards;
  animation-delay: 13s;
  font-size: 72px;
  font-family: "Roboto-Light";
  line-height: 1.5;
  opacity: 0;
`;

export const StyledLink = styled(Link)`
  animation: fadeIn 2s ease-in-out forwards;
  animation-delay: 13.5s;
  opacity: 0;
  background: transparent;
  font-size: 20px;
  font-family: "Roboto";
  transition: 0.5s;
  color: rgba(161, 161, 161, 0.7);
  cursor: pointer;
  position: relative;
  width: 150px;
  border: none;
  text-align: center;

  rect {
    stroke-dasharray: 150 200;
    stroke-dashoffset: 10;
    stroke-width: 8px;
    fill: transparent;
    stroke: rgba(161, 161, 161, 0.8);
    border-bottom: 5px solid black;
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;

    &:hover {
      stroke: rgba(255, 255, 255, 0.8);
      stroke-width: 2px;
      stroke-dashoffset: 0;
      stroke-dasharray: 760;
    }
  }

  div {
    font-family: "Roboto";
    font-size: 20px;
    line-height: 32px;
    color: #fff;
    top: -48px;
    position: relative;
    pointer-events: none;
    text-transform: uppercase;
  }
`;

export const StyledParagraph = styled.p`
  animation: blinkTextCursor 1s steps(10) infinite normal, fadeOut 13s linear;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  height: 36px;
  font-size: 1.5rem;
  font-family: "Roboto";
  line-height: 1.5;
  margin-bottom: 1rem;

  &:after {
    content: "whoweare_";
    color: rgba(161, 161, 161, 0.7);
    animation: write 10s linear;
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }

  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes write {
    0% {
      content: "whoweare_";
    }
    11% {
      content: "whoweare";
    }
    12% {
      content: "whowear";
    }
    13% {
      content: "whowea";
    }
    14% {
      content: "whowe";
    }
    15% {
      content: "whow";
    }
    16% {
      content: "who";
    }
    17% {
      content: "wh";
    }
    18% {
      content: "w";
    }
    19% {
      content: " ";
    }
    20% {
      content: "L";
    }
    21% {
      content: "Le";
    }
    22% {
      content: "Leg";
    }
    23% {
      content: "Legi";
    }
    24% {
      content: "Legio";
    }
    34% {
      content: "Legion ";
    }
    35% {
      content: "Legion";
    }
    36% {
      content: "Legio";
    }
    37% {
      content: "Legi";
    }
    38% {
      content: "Leg";
    }
    39% {
      content: "Le";
    }
    40% {
      content: "L";
    }
    41% {
      content: " ";
    }
    42% {
      content: "F";
    }
    43% {
      content: "Fe";
    }
    44% {
      content: "Fea";
    }
    45% {
      content: "Feat";
    }
    46% {
      content: "Featu";
    }
    47% {
      content: "Featur";
    }
    48% {
      content: "Feature";
    }
    49% {
      content: "Feature ";
    }
    59% {
      content: "Feature";
    }
    60% {
      content: "Featur";
    }
    61% {
      content: "Featu";
    }
    62% {
      content: "Feat";
    }
    63% {
      content: "Fea";
    }
    64% {
      content: "Fe";
    }
    65% {
      content: "F";
    }
    66% {
      content: " ";
    }
    67% {
      content: "C";
    }
    68% {
      content: "C.";
    }
    69% {
      content: "C.L";
    }
    70% {
      content: "C.L.";
    }
    71% {
      content: "C.L.F";
    }
    72% {
      content: "C.L.F.";
    }
    73% {
      content: "C.L.F..";
    }
    74% {
      content: "C.L.F...";
    }
    75% {
      content: "C.L.F..";
    }
    76% {
      content: "C.L.F.";
    }
    86% {
      content: "C.L.F";
    }
    87% {
      content: "C.L.";
    }
    88% {
      content: "C.L";
    }
    89% {
      content: "C.";
    }
    90% {
      content: "C";
    }
    100% {
      content: "";
    }
  }
`;
