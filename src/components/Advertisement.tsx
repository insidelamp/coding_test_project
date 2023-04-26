import React, { useEffect, useState, useRef } from "react";
import "../styles/Advertisement.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface DataType {
  adid?: number;
  imageLink: string;
  title: string;
}
interface Fetchtype {
  [ads: string]: DataType[];
}

function Advertisement() {
  const [fetchData, setFetchData] = useState<Fetchtype>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === fetchData?.ads?.length - 1) {
        setCurrentIndex(0);
      }
    }, 3000);
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);
  useEffect(() => {
    fetch(`http://34.22.82.239:8080/getAdList`)
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <div className="AdvertisementWrapper" ref={slideRef}>
      {fetchData?.ads?.map((item) => (
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
