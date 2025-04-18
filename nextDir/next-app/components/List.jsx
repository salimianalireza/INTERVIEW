'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function List({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (id) => {
    console.log('clicked', id);
    const params = new URLSearchParams(searchParams);
    router.push(`/todos/${id}`);
  };

  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li 
          className="cursor-pointer hover:text-blue-500" 
          onClick={() => handleClick(item.id)} 
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
