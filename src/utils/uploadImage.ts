// import axios from "axios";

// export const convertBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);

//     fileReader.onload = () => resolve(fileReader.result);
//     fileReader.onerror = (error) => reject(error);
//   });
// };

// export const uploadSingleImage = async (base64, setUrl, setLoading) => {
//   try {
//     setLoading(true);
//     const { data } = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/uploadImage`,
//       {
//         image: base64,
//       }
//     );
//     setUrl(data);
//     alert("Image uploaded successfully");
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };

// export const uploadMultipleImages = async (images, setUrl, setLoading) => {
//   try {
//     setLoading(true);
//     const { data } = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/uploadMultipleImages`,
//       { images }
//     );
//     setUrl(data);
//     alert("Images uploaded successfully");
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };

import axios from "axios";

/**
 * Converts an image file to Base64 format
 * @param {File} file - The image file to convert
 * @returns {Promise<string>} A promise that resolves with the Base64 string
*/

export const convertBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.onerror = (error) => reject(error);
  });
};

/**
 * Uploads a single image to the backend and retrieves its URL
 * @param {string} base64 - The Base64-encoded image string
 * @param {(url: string) => void} setUrl - Callback function to store the uploaded image URL
 * @param {(loading: boolean) => void} setLoading - Callback function to manage loading state
 */

export const uploadSingleImage = async (
  base64: string,
  setUrl: (url: string) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    setLoading(true);
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/uploadImage`,
      { image: base64 }
    );
    setUrl(data);
    alert("Image uploaded successfully!");
  } catch (error) {
    console.error("Error uploading image:", error);
  } finally {
    setLoading(false);
  }
};

/**
 * Uploads multiple images to the backend and retrieves their URLs
 * @param {string[]} images - An array of Base64-encoded image strings
 * @param {(urls: string[]) => void} setUrl - Callback function to store the uploaded image URLs
 * @param {(loading: boolean) => void} setLoading - Callback function to manage loading state
 */
export const uploadMultipleImages = async (
  images: string[],
  setUrl: (urls: string[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    setLoading(true);
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/uploadMultipleImages`,
      { images }
    );
    setUrl(data);
    alert("Images uploaded successfully!");
  } catch (error) {
    console.error("Error uploading images:", error);
  } finally {
    setLoading(false);
  }
};

