"use client";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="********"
        className="h-full w-full py-1 px-3 border border-zinc-300 rounded-md min-h-[32px]"
      />
      <button
        className="absolute right-2 top-0 bottom-0 flex items-center text-zinc-700"
        type="button"
        onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </button>
    </div>
  );
}
