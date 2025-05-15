import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import Swal from 'sweetalert2';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [addBook, {isLoading, isError}] = useAddBookMutation()
    const [imageFileName, setimageFileName] = useState('')
    const onSubmit = async (data) => {
 
        const newBookData = {
            ...data,
            coverImage: imageFileName
        }
        try {
            await addBook(newBookData).unwrap();
            Swal.fire({
                title: "Sách đã được thêm",
                text: "Tải thành công sách của bạn!",
                icon: "hoàn thành",
                //showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xác nhận!"
              });
              reset();
              setimageFileName('')
              setimageFile(null);
        } catch (error) {
            console.error(error);
            alert("Không thêm được sách. Vui lòng thử lại.")   
        }
      
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setimageFile(file);
            setimageFileName(file.name);
        }
    }
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Thêm sách mới</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        {/* Reusable Input Field for Title */}
        <InputField
          label="Tiêu đề"
          name="title"
          placeholder="Nhập tiêu đề sách"
          register={register}
        />

        {/* Reusable Textarea for Description */}
        <InputField
          label="Mô tả"
          name="description"
          placeholder="Nhập mô tả sách"
          type="textarea"
          register={register}

        />

        {/* Reusable Select Field for Category */}
        <SelectField
          label="Thể loại"
          name="category"
          options={[
            { value: '', label: 'Chọn thể loại sách' },
            { value: 'business', label: 'Doanh nhân' },
            { value: 'technology', label: 'Công nghệ' },
            { value: 'fiction', label: 'Huyễn hoặc' },
            { value: 'horror', label: 'Kinh dị' },
            { value: 'adventure', label: 'Phiêu lưu' },
            // Add more options as needed
          ]}
          register={register}
        />

        {/* Trending Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Xu hướng</span>
          </label>
        </div>

        {/* Old Price */}
        <InputField
          label="Giá cũ"
          name="oldPrice"
          type="number"
          placeholder="Giá cũ"
          register={register}
         
        />

        {/* New Price */}
        <InputField
          label="Giá mới"
          name="newPrice"
          type="number"
          placeholder="Giá mới"
          register={register}
          
        />

        {/* Cover Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ảnh đính kèm</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
          {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
         {
            isLoading ? <span className="">Adding.. </span> : <span>Thêm sách</span>
          }
        </button>
      </form>
    </div>
  )
}

export default AddBook