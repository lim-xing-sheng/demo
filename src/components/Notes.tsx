"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Notes() {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];

  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const existingDataString = localStorage.getItem("myData");

    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {data.map((item: any, index: any) => (
            <div key={index} style={{ color: colors[index % colors.length] }}>
              <div
                className="px-4 py-3 font-bold text-slate-950"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                Note - {index + 1}
              </div>
              <div
                className="PropsMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
