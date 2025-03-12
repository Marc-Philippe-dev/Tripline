 "use client";

import { convertBase64, uploadSingleImage } from "@/utils/uploadImage";
import axios from "axios";
 
import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    bio: "",
    photo: "", // Store uploaded image URL here
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const base64 = await convertBase64(file);
      await uploadSingleImage(
        base64,
        (url) => {
          setFormData((prev:any) => ({ ...prev, photo: url })); // Store Cloudinary URL
        },
        setLoading
      );
    } catch (error) {
      console.error("Image processing failed:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.photo) {
      alert("Please upload an image before submitting the form.");
      return;
    }

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/profile`,
        formData, 
        {
          withCredentials: true,
        }
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px] bg-white p-10 rounded-lg">
          <form
            className="py-4 px-9"
            onSubmit={ handleSubmit }
          >
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Mettre à jour votre profil
              </label>
              <input
                type="text"
                placeholder="Votre bio"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="bio"
                value={formData.bio }
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Ajouter un photo
              </label>
              <input
                type="file"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                multiple
                onChange={handleFileChange}
                accept="image/*"
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
