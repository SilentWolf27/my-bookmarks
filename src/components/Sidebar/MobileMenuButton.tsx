"use client";

import { MenuOutlined } from "@ant-design/icons";

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md">
      <MenuOutlined className="text-gray-600" />
    </button>
  );
}
