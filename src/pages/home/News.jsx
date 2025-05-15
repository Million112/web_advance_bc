import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "Triệu Quang Hưng đã dành 10 năm để viết cuốn sách này",
        "description": "Một kỉ lục chưa từng có về thời gian viết sách khi mà tác giả Triệu Quang Hưng đã dành 1 nửa thời gian mà anh sống trên đời để hoàn thành tuyệt phẩm này.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Sách đạo nhái sử dụng AI ?",
        "description": "Mới đây chiêu trò sử dung AI để viết sách đã bị phát hiện và lên án mạnh mẽ từ các nhà xuất bản và tác giả.",
        "image": news2
    },
    {
        "id": 3,
        "title": "Sứ mệnh không gian mới nhằm mục đích khám phá các thiên hà xa xôi",
        "description": "NASA đã công bố kế hoạch cho một sứ mệnh không gian mới nhằm khám phá các thiên hà xa xôi, với hy vọng tìm ra hiểu biết sâu sắc về nguồn gốc của vũ trụ.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Thị trường chứng khoán đạt mức cao kỷ lục trong bối cảnh phục hồi kinh tế",
        "description": "Thị trường chứng khoán toàn cầu đã đạt mức cao kỷ lục khi những dấu hiệu phục hồi kinh tế tiếp tục xuất hiện sau những thách thức do đại dịch toàn cầu gây ra.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Chấn động Hoàng Hải Dương là fan cuồng của sách trinh thám",
        "description": "Mới đây nhà diễn thuyết Hoàng Hải Dương đã tiết lộ rằng anh là một fan cuồng của thể loại sách trinh thám và đã đọc hơn 1000 cuốn sách trong thể loại này.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  )
}

export default News