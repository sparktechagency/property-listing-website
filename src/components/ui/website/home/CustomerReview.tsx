"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useGetReviewQuery } from "@/redux/features/reviewApi";
import { imageUrl } from "@/redux/base/baseApi";

const CustomerReview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: reviews } = useGetReviewQuery({});
  console.log(reviews);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        style={{
          width: i === activeIndex ? "12px" : "10px",
          height: i === activeIndex ? "12px" : "10px",
          borderRadius: "100%",
          backgroundColor: i === activeIndex ? "#000000" : "#D3D3D3",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "20px",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          padding: "1px",
        }}
        className="flex items-center justify-center"
      >
        {dots}
      </div>
    ),
  };
  return (
    <div className="pb-[60px]">
      <section className="container w-full">
        <div className="flex lg:flex-row flex-col-reverse  items-center w-full lg:gap-[73px] gap-[20px]">
          <div className="space-y-6 lg:w-1/2 w-full">
            <div className="space-y-2">
              <div
                className={` text-[#000000]  font-[600] lg:text-[48px] text-[28px] `}
              >
                Customer Reviews
              </div>
              <p className=" text-[#757575] font-normal lg:text-[20px] text-[16px]">
                {" "}
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form by
                injected humour or randomised.{" "}
              </p>
            </div>

            <Slider {...settings}>
              {reviews?.data?.map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-100 shadow rounded-2xl p-[25px] space-y-4 w-[485px]"
                >
                  <div className="text-gray-700 tracking-wider ">
                    <RiDoubleQuotesL size={20} color="#ED6923" className="" />
                    <div>
                      <p className="ps-5">
                        {review?.comment}
                        <span className="flex">
                          <sub>
                            <RiDoubleQuotesR
                              size={20}
                              color="#ED6923"
                              className=""
                            />
                          </sub>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {review?.user?.profile && (
                      <Image
                        src={review?.user?.profile?.startsWith("https") ? review?.user?.profile : `${imageUrl}${review?.user?.profile}`  }
                        alt="Customer avatar"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    )}

                    <div>
                      <h3 className="font-semibold">{review?.user?.name}</h3>
                      <p className="text-sm text-gray-600">
                        Satisfied Customer
                      </p>
                    </div>
                    <div className="ml-auto flex bg-primary p-1 gap-0.5">
                      {Array(review.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={15}
                            className="fill-[#ffffff] text-[#ffffff] "
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <Image
              src="/customer.svg"
              alt=""
              height={522}
              width={638}
              className=" h-auto w-auto object-cover "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
