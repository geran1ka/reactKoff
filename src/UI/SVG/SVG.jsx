import ArrowIcon from "./svg/arrow.svg?react";
import CartIcon from "./svg/cart.svg?react";
import FavoriteIcon from "./svg/favorite.svg?react";
import LogoIcon from "./svg/logo.svg?react";
import PhoneIcon from "./svg/phone.svg?react";
import SearchIcon from "./svg/search.svg?react";
import TelegrammIcon from "./svg/telegram.svg?react";
import VKIcon from "./svg/vk.svg?react";
import YouTubeIcon from "./svg/youtube.svg?react";
import PropTypes from "prop-types";

export const SVG = (prop) => {
  const svgs = {
    arrowIcon: ArrowIcon,
    cartIcon: CartIcon,
    favoriteIcon: FavoriteIcon,
    logoIcon: LogoIcon,
    phoneIcon: PhoneIcon,
    searchIcon: SearchIcon,
    telegrammIcon: TelegrammIcon,
    vkIcon: VKIcon,
    youtubeIcon: YouTubeIcon,
  };

  const { iconName, As = svgs[iconName], className, alt, width, height } = prop;

  return <As className={className} alt={alt} width={width} height={height} />;
};

SVG.propTypes = {
  As: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
