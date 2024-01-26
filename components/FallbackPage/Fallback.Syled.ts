import styled from "styled-components";
import { NavItem } from "components/NavBar/NavLinks/NavLinks.styled";
import {
  SubtleText,
  SubtleDiv,
} from "components/DescriptionSections/Description.styled";

export const FallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  padding: 1em;
  gap: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SocialLink = styled(NavItem)`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  #youtube {
    :hover {
      color: ${(props) => props.theme.colors.textMain};
    }
  }
`;

export const BackArrow = styled(NavItem)`
  font-size: 24px;
  cursor: pointer;
`;

export const BackLink = styled(NavItem)`
  cursor: pointer;
  margin-bottom: 3em;
`;

export const TextDiv = styled(SubtleDiv)``;

export const Text = styled(SubtleText)`
  font-size: 20px;
  text-align: center;
`;

export const CLTitle = styled.h1`
  font-size: 68px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 48px;
  }

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;
