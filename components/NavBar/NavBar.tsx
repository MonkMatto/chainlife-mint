/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWeb3React } from '@web3-react/core';
import { useWindowSize } from 'hooks/useWindowSize';
import ConnectDropDown from 'components/Modals/ConnectDropDown';
import ConnectModal from 'components/Modals/ConnectModal';
import MarketsDropDown from 'components/Modals/MarketsDropDown';
import { useEagerConnect } from 'hooks/useEagerConnect';
import MarketsModal from 'components/Modals/MarketsModal';
import { IoLogoYoutube } from 'react-icons/io';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showMarketsModal, setShowMarketsModal] = useState(false);
  const { windowWidth } = useWindowSize();

  const handleConnectClick = () => {
    setShowMarketsModal(false);
    setShowConnectModal(!showConnectModal);
  };

  const handleMarketsClick = () => {
    setShowConnectModal(false);
    setShowMarketsModal(!showMarketsModal);
  };

  const renderDropDown = () => {
    if (windowWidth < 850 && showConnectModal === true) {
      return (
        <>
          <ConnectModal setShowModal={setShowConnectModal} />
        </>
      );
    } else if (windowWidth > 850 && showConnectModal === true) {
      return (
        <>
          <ConnectDropDown setShowModal={setShowConnectModal} />{' '}
        </>
      );
    }
  };

  const renderMarketsDropDown = () => {
    if (windowWidth < 850 && showMarketsModal === true) {
      return (
        <>
          <MarketsModal setShowModal={setShowMarketsModal} />{' '}
        </>
      );
    } else if (windowWidth > 850 && showMarketsModal === true) {
      return (
        <>
          <MarketsDropDown setShowModal={setShowMarketsModal} />
        </>
      );
    }
  };

  return (
    <>
      <St.NavContainer>
        <St.logoDiv>
          <Image
            src={'/chainlife/chainlife.png'}
            height={50}
            width={50}
            alt="ChainLife logo"
          />
          <St.TitleDiv>
            <St.NavLink href="/">
              <St.NavTitle>Chainlife</St.NavTitle>
            </St.NavLink>
          </St.TitleDiv>
        </St.logoDiv>
        <St.SocialsAndLinks>
          <St.SocialContainer>
            <St.NavLink
              href="https://twitter.com/MonkMatto"
              target="blank"
              rel="noreferrer"
            >
              <Image src={'/icons/Twitter.svg'} height={21} width={21} alt="logo" />
            </St.NavLink>
            <St.NavLink
              href="https://discord.com/invite/AQDwjAa3g2"
              target="blank"
              rel="noreferrer"
            >
              <Image
                src={'/icons/Discord-Logo-White.svg'}
                height={24}
                width={24}
                alt="logo"
              />
            </St.NavLink>
            <St.NavLink
              href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
              target="blank"
              rel="noreferrer"
            >
              <IoLogoYoutube id="youtube" style={{ height: '24px', width: '24px' }} />
            </St.NavLink>
          </St.SocialContainer>
          <St.NavLinksDiv>
            <St.NavLink href="https://docs.chainlife.xyz/" target="blank">
              DOCS
            </St.NavLink>
            <Link href="/world" target="blank">
              <St.NavLink>WORLD</St.NavLink>
            </Link>
            <Link href="/mint" target="blank">
              <St.NavLink>MINT</St.NavLink>
            </Link>
            <St.NavConnect onClick={handleMarketsClick}>LINKS</St.NavConnect>
            <St.NavConnect
              className={windowWidth > 450 && active ? 'small-connect' : ''}
              onClick={handleConnectClick}
            >
              {windowWidth > 450 && !active
                ? 'CONNECT WALLET'
                : windowWidth < 450 && !active
                ? 'CONNECT'
                : windowWidth > 450 && active
                ? 'WALLET CONNECTED'
                : 'CONNECTED'}
            </St.NavConnect>
          </St.NavLinksDiv>
        </St.SocialsAndLinks>
        {showConnectModal ? renderDropDown() : renderMarketsDropDown()}
      </St.NavContainer>
    </>
  );
};

export default NavBar;
