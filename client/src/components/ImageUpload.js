import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { imgCompress } from '../utils/image';

const ImageUpload = forwardRef((props, ref) => {
  const { setImage, containerStyle, fieldIdentity, fieldName, fieldHelperText, width, index = 0 } = props;
  const imageInputEl = useRef();

  useImperativeHandle(ref, () => ({
    clearImageFileName() {
      imageInputEl.current = undefined;
    },
  }));

  return (
    <div className={containerStyle}>
      <div className={`space-y-1 ${width ? width : 'w-44'} text-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mx-auto text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <div className="flex justify-center text-sm sm:text-base">
          <label
            htmlFor={fieldIdentity}
            className="relative cursor-pointer bg-white rounded-md font-medium text-red-700 hover:text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-700"
          >
            <span>Upload a file</span>
            <input
              id={fieldIdentity}
              name={fieldName}
              type="file"
              className="sr-only"
              ref={imageInputEl}
              onChange={(event) => setImage(event, imgCompress, index)}
            ></input>
          </label>
        </div>
        <p className="text-sm sm:text-base truncate">
          {imageInputEl.current !== undefined && imageInputEl.current.files[0]
            ? imageInputEl.current.files[0].name
            : 'No File Chosen'}
        </p>
        {fieldHelperText ? <p className="text-sm sm:text-base text-gray-500">{fieldHelperText}</p> : ''}
      </div>
    </div>
  );
});

export default ImageUpload;
