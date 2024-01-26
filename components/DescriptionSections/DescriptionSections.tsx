import React, { useState, useEffect } from "react";
import { useMintDetails } from "hooks/useMintDetails";
import {
  section1Text,
  section1AText,
  section2Text,
  section2AText,
} from "./SectionText";
import * as St from "./Description.styled";

const DescriptionSections: React.FC = () => {
  const { discountPrice, mintPrice, publicStart } = useMintDetails();
  const [activeSection, setActiveSection] = useState<1 | 2>(2);

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? "" : "inactive"}
        >
          ZEN. MINT
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? "" : "inactive"}
        >
          PUBLIC{" "}
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>
        <br />
        <br />
        {activeSection === 1
          ? "Zen. Mint has closed."
          : "1 Mint per transaction"}{" "}
        <br />
        {activeSection === 1
          ? `Token IDs 0 - 123 are Zen. Mints.`
          : `Cost Per Mint: ${mintPrice} ETH`}
      </St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText>
          {" "}
          {activeSection === 2 ? section2Text : section1Text}{" "}
        </St.SubtleText>
        <St.SubtleText className={activeSection === 1 ? "one" : "two"}>
          {activeSection === 2 ? section2AText : section1AText}{" "}
          {activeSection === 2 ? (
            <a
              href="https://docs.chainlife.xyz/"
              target="blank"
              rel="noreferrer"
              style={{
                textDecoration: "underline",
                color: "#3a3a3a",
                fontWeight: "500",
              }}
            >
              docs.
            </a>
          ) : null}
        </St.SubtleText>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default DescriptionSections;
