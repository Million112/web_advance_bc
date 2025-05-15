import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl'; // Đảm bảo đường dẫn này chính xác
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice'; // Đảm bảo đường dẫn này chính xác

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // Có thể thêm thông báo toast ở đây
    };

    if (!book) return null; // Hoặc một UI fallback

    const description = book?.description || '';
    const truncatedDescription = description.length > 70 ? `${description.slice(0, 70)}...` : description;

    return (
        // CARD CONTAINER: Thêm background, shadow, overflow-hidden và h-full
        // h-full giúp card chiếm toàn bộ chiều cao của grid cell (nếu grid cell là flex item)
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* Nội dung card như bạn cung cấp, với một vài điều chỉnh nhỏ */}
            <div className="flex flex-col sm:flex-row sm:items-stretch p-3 sm:p-4 gap-3 sm:gap-4 flex-grow">
                {/* IMAGE SECTION */}
                {/* sm:h-auto để nó theo chiều cao của parent (sm:items-stretch) thay vì cố định sm:h-72 (chiều cao này đã có trên parent) */}
                {/* Thêm group để hover image từ Link */}
                <div className="w-full sm:w-1/3 flex-shrink-0 rounded-md overflow-hidden">
                    <Link to={`/books/${book._id}`} className="block w-full h-48 sm:h-full group">
                        <img
                            src={getImgUrl(book?.coverImage)}
                            alt={book?.title || "Bìa sách"}
                            // object-cover để ảnh lấp đầy mà không méo, h-full để chiếm hết chiều cao container
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* TEXT CONTENT SECTION */}
                {/* flex flex-col để các item text xếp chồng và mt-auto cho button hoạt động */}
                <div className="flex flex-col flex-grow pt-2 sm:pt-0 sm:w-2/3">
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-base sm:text-lg font-semibold hover:text-blue-600 mb-1 line-clamp-2">
                            {book?.title || "Không có tiêu đề"}
                        </h3>
                    </Link>
                    {/* line-clamp-3 (cần plugin @tailwindcss/line-clamp) hoặc giữ slice của bạn */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-4 flex-grow min-h-[4.5em]">
                        {/* Nếu không dùng line-clamp plugin, bạn có thể dùng lại logic slice */}
                        {/* {truncatedDescription} */}
                        {description} {/* Sử dụng line-clamp sẽ tốt hơn */}
                    </p>

                    {/* Price and Button at the bottom */}
                    <div className="mt-auto">
                        <p className="font-semibold text-base sm:text-lg text-blue-600 mb-2 sm:mb-3">
                            ${book?.newPrice?.toFixed(2) || '0.00'}
                            {book?.oldPrice && (
                                <span className="line-through text-gray-500 font-normal text-xs sm:text-sm ml-2">
                                    ${book?.oldPrice?.toFixed(2)}
                                </span>
                            )}
                        </p>
                        <button
                            onClick={() => handleAddToCart(book)}
                            // btn-primary của bạn có thể đã có style, đây là gợi ý thêm
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-md flex items-center justify-center gap-1.5 text-sm transition-colors duration-200"
                        >
                            <FiShoppingCart size={16} />
                            <span>Thêm vào giỏ</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;