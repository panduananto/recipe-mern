import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import ImageUpload from './ImageUpload';

function Steps({ step: steps, setRecipe }) {
  const handleChangeSteps = (event, callback, index) => {
    let { name, value, files } = event.target;
    const stepsListTemp = [...steps];

    if (callback !== null) {
      callback(files).then((results) => {
        stepsListTemp[index][name] = results;
      });
    } else {
      stepsListTemp[index][name] = value;
    }

    setRecipe((recipe) => ({ ...recipe, step: stepsListTemp }));
  };

  const handleAddMoreSteps = () => {
    setRecipe((recipe) => ({ ...recipe, step: [...steps, { id: uuidv4(), description: '', image: '' }] }));
  };

  const handleRemoveSteps = (id) => {
    const stepsListTemp = [...steps];
    stepsListTemp.splice(
      steps.findIndex((step) => step.id === id),
      1,
    );

    setRecipe((recipe) => ({ ...recipe, step: stepsListTemp }));
  };

  const handleTextAreaHeightResize = (event) => {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <>
      <fieldset>
        <legend className="font-medium text-gray-700">Steps to cook</legend>
        <div className="mt-1 grid grid-cols-3 gap-x-2 gap-y-4">
          {steps.map((step, index) => {
            return (
              <div key={step.id} className="col-span-3 sm:col-span-2">
                <label htmlFor={`step-description-${index + 1}`} className="sr-only">
                  Step-{index + 1}
                </label>
                <div className="flex items-stretch gap-1 rounded-md">
                  <span className="inline-flex justify-center items-center self-start rounded-md h-6 w-6 mr-1 bg-gray-200 text-gray-700 font-medium">
                    {index + 1}
                  </span>
                  <div className="flex flex-1 gap-1">
                    <div className="flex flex-col flex-1 gap-y-2">
                      <textarea
                        id={`step-description-${index + 1}`}
                        name="description"
                        rows="1"
                        autoComplete="off"
                        className="overflow-hidden resize-none block w-full px-4 py-2 border border-solid border-gray-300 rounded-md bg-gray-50 shadow-sm font-thin focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
                        placeholder="Chopped the chicken into pieces, set aside"
                        value={step.name}
                        onChange={(event) => handleChangeSteps(event, null, index)}
                        onKeyDown={(event) => handleTextAreaHeightResize(event)}
                      ></textarea>
                      <ImageUpload
                        setImage={handleChangeSteps}
                        containerStyle={
                          'flex self-start justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'
                        }
                        fieldIdentity={`step-thumbnail-${index + 1}`}
                        fieldName={'image'}
                        fieldHelperText={'Optional step image'}
                        width={'w-44'}
                        index={index}
                      ></ImageUpload>
                    </div>
                    <div className="flex gap-1 ml-1 self-start h-[42px]">
                      {steps.length !== 1 && (
                        <button
                          className="border-none shadow-none bg-red-200 hover:bg-red-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                          onClick={() => {
                            handleRemoveSteps(step.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                      {steps.length - 1 === index && (
                        <button
                          className="border-none shadow-none bg-green-200 hover:bg-green-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                          onClick={handleAddMoreSteps}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
}

export default Steps;
