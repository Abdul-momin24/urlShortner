import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <div className="h-[92vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-indigo-600 hover:underline font-medium"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
