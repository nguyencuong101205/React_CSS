import React, { useState } from "react";
import { clsx } from "clsx";
import classNames from "classnames";
import { cva } from "class-variance-authority";
import { cn } from "./utils/cn";

// Ví dụ tạo variant với CVA
const buttonVariants = cva(
  "px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6 font-sans">
      <h1 className="text-2xl font-bold text-gray-800">
        Demo React + Tailwind + clsx / classnames
      </h1>

      {/* 1. Ví dụ dùng cn (clsx + tailwind-merge) */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Dùng helper cn()</h2>
        <div
          className={cn(
            "p-4 rounded-md border text-sm transition-all",
            isActive
              ? "bg-green-100 border-green-500 text-green-800"
              : "bg-gray-50 border-gray-300 text-gray-600"
          )}
        >
          Trạng thái: <strong>{isActive ? "Đang bật (Active)" : "Đang tắt (Inactive)"}</strong>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className={cn(
            "px-4 py-2 rounded text-white font-medium",
            isActive ? "bg-red-500 hover:bg-red-600" : "bg-emerald-600 hover:bg-emerald-700"
          )}
        >
          Chuyển đổi trạng thái
        </button>
      </div>

      {/* 2. Ví dụ dùng CVA (class-variance-authority) */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">2. Dùng CVA (Variants)</h2>
        <div className="flex gap-3">
          <button className={buttonVariants({ variant: "primary", size: "sm" })}>
            Primary SM
          </button>
          <button className={buttonVariants({ variant: "secondary", size: "md" })}>
            Secondary MD
          </button>
          <button className={buttonVariants({ variant: "outline", size: "lg" })}>
            Outline LG
          </button>
        </div>
      </div>

      {/* 3. Ví dụ dùng classnames truyền thống */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Dùng classnames</h2>
        <p className={classNames("text-sm", { "text-blue-600 font-bold": isActive })}>
          Dòng chữ này đổi màu khi Active qua thư viện classnames.
        </p>
      </div>
    </div>
  );
}
