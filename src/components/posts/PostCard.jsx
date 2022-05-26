import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";

import Card from "../base/Card";
import { AiOutlineEllipsis, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function PostCard() {
  const [like, setLike] = useState(false);
  const [moreBtn, setMoreBtn] = useState(true);

  const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
  ];

  const word =
    "Tahukah Anda, pada tahun 2021 lalu ekspor pinang biji di seluruh Tanah Air mencapai lebih dari Rp5 triliun? Angka yang besar sekali. Buah-buah pinang itu dipanen dari 152.000 hektare lahan pohon pinang di seluruh Tanah Air, 22.000 hektare di antaranya ada di Provinsi Jambi. Pinang biji banyak dibutuhkan di negara-negara Thailand, Iran, India, China, sampai Pakistan. Itulah yang membawa saya hari ini ke Kabupaten Muaro Jambi, melepas ekspor komoditas pinang biji di pabrik CV Indokara. Sebanyak tujuh kontainer pinang biji seberat 126 ton dengan nilai ekonomi mencapai Rp4,069 miliar itu diekspor ke Pakistan. Kementerian Pertanian mencatat ekspor pinang Jambi pada Januari-Maret 2022 sebanyak 17.174 ton dengan nilai mencapai Rp416,4 miliar. Saya berharap nantinya volume ekspor pinang biji bisa meningkat lagi. Saya pun sudah memerintahkan Menteri Pertanian untuk menyiapkan varietas pinang yang unggul, baik, dan berkualitas bagus.";

  const clickLike = () => setLike(!like);
  const clickMore = () => setMoreBtn(!moreBtn);

  return (
    <Card>
      <div className="flex justify-between px-4">
        <div className="flex justify-between items-center">
          <div className="avatar mr-4">
            <div className="w-10 rounded-full">
              <img
                src="https://cdn.discordapp.com/attachments/785540914323914785/961555377063882792/unknown.png"
                alt="avatar"
              />
            </div>
          </div>
          <Link to="/">Jowowi</Link>
        </div>
        <button className="btn btn-ghost btn-circle">
          <AiOutlineEllipsis className="w-6 h-6" />
        </button>
      </div>

      <div className="my-4">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex justify-start flex-col px-4 py-4">
        <div className="flex justify-start">
          {like ? (
            <AiFillHeart
              className="w-6 h-6 text-[#FD5D5D] hover:cursor-pointer"
              onClick={clickLike}
            />
          ) : (
            <AiOutlineHeart
              className="w-6 h-6 hover:cursor-pointer"
              onClick={clickLike}
            />
          )}
        </div>
        <span className="text-xs font-medium py-2">3 Likes</span>
        <p className="text-xs py-2 font-normal">
          <span className="text-md font-bold mr-2">Jokowi</span>
          {moreBtn
            ? word.substr(0, 20) + (word.length > 20 ? "... " : "")
            : word}
          {moreBtn && (
            <span
              className="font-medium hover:cursor-pointer text-[#9ca3af]"
              onClick={clickMore}
            >
              more
            </span>
          )}
        </p>
        <p className="text-xs font-thin text-[#9ca3af]">8 HOURS AGO</p>
      </div>

      <div className="divider"></div>
      <form className="px-4">
        <input
          type="text"
          placeholder="Add to comment"
          className="input w-full bg-primary-gray"
        />
      </form>
    </Card>
  );
}

export default PostCard;
