import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
const loginSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is Required!"),
    password: yup.string().min(6, "Password must be at least 6 characters.").required("Password is Required!"),
});

const registerSchema = yup.object({
    name: yup.string().required("Name is Required!"),
    email: yup.string().email("Invalid Email").required("Email is Required!"),
    password: yup.string().min(6, "Password must be at least 6 characters.").required("Password is Required!"),
});

const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(true);

    const schema = isLogin ? loginSchema : registerSchema;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);

        if (isLogin) {
            // Call login API
            console.log("Login API Call");
        } else {
            // Call register API
            console.log("Register API Call");
        }

        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Sign In" : "Sign Up"}
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Name (Register only) */}
                    {!isLogin && (
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register("name")}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <p className="text-red-500 text-sm">{errors.name?.message}</p>
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email")}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-red-500 text-sm">{errors.password?.message}</p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition hover:cursor-pointer"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                {/* Toggle */}
                <p className="text-center mt-5 text-medium">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-gray-600 font-semibold hover:cursor-pointer text-lg"
                    >
                        {isLogin ? "Sign Up" : "Sign In"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthPage;