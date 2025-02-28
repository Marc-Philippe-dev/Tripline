"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { validateForm } from "@/utils/validation";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { valid, errors } = validateForm(formData);

    setErrors(errors);

    if (valid) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        if (response.ok) {
          console.log("Form successfully saved");
          // Redirect to dashboard
          router.push("/dashboard");
        } else {
          console.log(response.json());
          console.log("Form submission failed");
          // Handle error response from server
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <section>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="container m-auto grid justify-items-center">
          <h2>S'inscrire</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 w-96">
            <div>
              <Input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
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
            <div>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary/50 my-10 space-y-4 w-96"
            >
              S'inscrire
            </Button>
          </form>
          <p className="text-sm">
            Vous avez déjà un compte ?
            <Link className="mx-3 text-blue-500" href="/login">
              Connectez-vous !
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
