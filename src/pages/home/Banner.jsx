import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Sách mới mở bán tuần này</h1>
            <p className='mb-10'>Đã đến lúc cập nhật danh sách đọc của bạn với một số tác phẩm mới nhất và tuyệt vời nhất trong thế giới văn học. Từ những tác phẩm ly kỳ đến những hồi ký hấp dẫn, những tác phẩm mới phát hành trong tuần này sẽ mang đến cho mọi người những điều thú vị</p>

            <button className='btn-primary'>Đăng ký</button>
        </div>

       
    </div>
  )
}

export default Banner