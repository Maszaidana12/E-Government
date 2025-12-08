"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  laki: number;
  perempuan: number;
}

export default function DonutGenderChart({ laki, perempuan }: Props) {
  const data = [
    { name: "Laki-laki", value: laki },
    { name: "Perempuan", value: perempuan },
  ];

  const COLORS = ["#3b82f6", "#ec4899"]; // biru dan pink

  return (
    <div className="w-full h-[250px] flex flex-col items-center justify-center">
      <h2 className="font-semibold text-center mb-2">Komposisi Gender</h2>

      <div className="w-full h-[200px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-2">
        <div className="flex items-center gap-2">
          <span className="block w-3 h-3 rounded-full bg-blue-500"></span>
          <p className="text-sm">Laki-Laki: {laki}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="block w-3 h-3 rounded-full bg-pink-500"></span>
          <p className="text-sm">Perempuan: {perempuan}</p>
        </div>
      </div>
    </div>
  );
}
