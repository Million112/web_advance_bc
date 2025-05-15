import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import { Link } from 'react-router-dom'; // ✅ import Link để điều hướng

const Recommened = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    return (
        <div className='py-16'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-semibold'>Khuyến nghị dành cho bạn</h2>
                <Link
                    to="/books"
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    Xem tất cả
                </Link>
            </div>

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
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Recommened;
