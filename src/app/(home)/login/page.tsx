"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrors({
        email: !formData.email ? "E-mail is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        

        console.log("Login successful");
        
        toast.success("Connexion réussie");
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        setErrors({
          email: errorData.email || "",
          password: errorData.password || "",
        });
        toast.error("Login failed: " + (errorData.message || "Unknown error"));

        console.log("Login failed", errorData);
      }
    } catch (error) {
      console.error("Error logging in", error);
      toast.error("Error logging in: " + error);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="container m-auto grid justify-items-center">
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 w-96">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary/50 my-10 space-y-4 w-96"
            >
              Se connecter
            </Button>
          </form>
          <p className="text-sm">
            Vous n'avez pas de compte ?
            <Link className="mx-3 text-blue-500" href="/register">
              Inscrivez-vous !
            </Link>
          </p>
        </div>
        <div>
          <Image
            src="/hero-image.svg"
            alt="checkmark"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
    </section>
  );
}
