import { useState } from "react";
import axios from "axios";
import { convertBase64, uploadSingleImage, uploadMultipleImages } from "./uploadImage"; // Import helper functions

const useImageUpload = () => {
	const [loading, setLoading] = useState(false);
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [formData, setFormData] = useState<Record<string, any>>({});

	const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (!files) return;

		const base64s: string[] = [];
		for (const file of files) {
			const base64 = await convertBase64(file);
			base64s.push(base64 as string);
		}

		if (base64s.length === 1) {
			await uploadSingleImage(base64s[0], (url: string) => setImageUrls([url]), setLoading);
			console.log(imageUrls);
			
		} else {
			await uploadMultipleImages(base64s, setImageUrls, setLoading);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event: React.FormEvent, endpoint: string) => {
		event.preventDefault();
		if (imageUrls.length === 0) {
			alert("Please upload an image first!");
			return;
		}

		const payload = { ...formData, imgUrls: imageUrls };
		try {
			await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, payload);
			alert("Form submitted successfully!");
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return {
		loading,
		imageUrls,
		formData,
		handleImageUpload,
		handleChange,
		handleSubmit,
	};
};

export default useImageUpload;
