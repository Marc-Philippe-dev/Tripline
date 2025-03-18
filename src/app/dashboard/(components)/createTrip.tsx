import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { convertBase64, uploadSingleImage } from "@/utils/uploadImage";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateTrip() {
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const base64 = await convertBase64(file);
      await uploadSingleImage(
        base64,
        (url) => {
          setFormData((prev: any) => ({ ...prev, coverImage: url }));
        },
        setLoading
      );
    } catch (error) {
      console.error("Image processing failed:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.coverImage) {
      alert("Please upload an image before submitting the form.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trips`,
        formData,
        { withCredentials: true }
      );

      router.push("/dashboard/trips");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Créer un nouveau voyage</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Détails du voyage </h4>
              <p className="text-sm text-muted-foreground">
                Entrez les détails de votre voyage
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="coverImage">Image de couverture</Label>
              <Input id="coverImage" type="file" onChange={handleFileChange} />
              {loading && <p className="text-sm text-blue-500">Uploading...</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="startDate">Date de début </Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="endDate">Date de Fin</Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
