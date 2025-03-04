import React from 'react'

export default function Profile() {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className="flex items-center justify-center">
        
        <div className="mx-auto w-full max-w-[550px] bg-white p-10 rounded-lg">
          <form className="py-4 px-9">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Mettre à jour votre profil
              </label>
              <input
                type="email"
                placeholder="Votre bio"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Ajouter un photo
              </label>
              <input
                type="file"
                 
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
