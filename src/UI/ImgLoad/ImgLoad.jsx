import { useEffect, useState } from "react";
import { PostLoader } from "../../UI/PostLoader/PostLoader";
import s from "./ImgLoad.module.scss";

export const ImgLoad = ({ src, name }) => {
  const [loading, setLoad] = useState(true);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoad(false);
    };
  }, [src, loading]);

  return loading ? <PostLoader /> : <img src={src} alt={name} className={s.img}></img>;
};
