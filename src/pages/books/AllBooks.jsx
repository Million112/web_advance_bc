import React from 'react';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from './BookCard';

const AllBooks = () => {
  const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-150px)]">
        <div className="text-center py-10">
          <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg font-medium text-gray-700">Đang tải sách...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-150px)]">
        <div className="text-center py-10 px-6 bg-red-50 rounded-lg shadow">
           <svg className="h-10 w-10 text-red-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-red-600">Đã xảy ra lỗi khi tải sách!</p>
          <p className="text-sm text-gray-500 mt-1">Vui lòng thử lại sau.</p>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-150px)]">
        <div className="text-center py-10 px-6 bg-yellow-50 rounded-lg shadow">
          <svg className="h-10 w-10 text-yellow-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-yellow-700">Hiện chưa có sách nào trong kho.</p>
          <p className="text-sm text-gray-500 mt-1">Vui lòng quay lại sau.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
        Tất cả sách trong kho
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {books.map(book => (
          // Wrapper cho BookCard không cần nhiều style nữa vì BookCard đã tự chứa
          // `flex` ở đây giúp `h-full` trên BookCard hoạt động nếu cần để các card bằng chiều cao.
          <div key={book._id} className="flex">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;