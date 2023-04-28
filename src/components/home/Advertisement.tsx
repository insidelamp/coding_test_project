import { useEffect, useState, useRef } from "react";
import "../../styles/Advertisement.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useAppSelector } from "../../reduxstore/hooks";

function Advertisement() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef<HTMLInputElement | null>(null);
  const getImgdata = useAppSelector((state) => state?.users?.imgs?.ads);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      if (getImgdata != undefined) {
        if (currentIndex === getImgdata.length - 1) {
          setCurrentIndex(0);
        }
      }
    }, 3000);
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  return (
    <div className="AdvertisementWrapper" ref={slideRef}>
      {getImgdata?.map((item) => (
        <div key={item?.adid} className="AdvertisementContents">
          <img className="AdvertisementImg" src={item?.imageLink} />
          <div className="AdvertisementTitle">{item?.title}</div>
          <div className="LeftBtn">
            <AiOutlineLeft />
          </div>
          <div className="RightBtn">
            <AiOutlineRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advertisement;
