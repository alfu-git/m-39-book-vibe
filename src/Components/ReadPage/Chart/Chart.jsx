import React, { useContext } from "react";
import { BookContext } from "../../../Context/BookContextP";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) return null;

  const getPath = (x, y, width, height) =>
    `M${x},${y + height} 
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
     Z`;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

const Chart = () => {
  const { readBooksList } = useContext(BookContext);
  const colors = ["#0085F6", "#00C29C", "#FBB929", "#FB0100", "#FC8042"];

  if (readBooksList.length === 0) {
    return (
      <section className="container mx-auto px-5">
        <div>
          <div className="mb-10 py-20 bg-[#131313]/5 rounded-2xl">
            <h6 className="text-3xl text-zinc-400 font-bold text-center">
              No Read Books Available
            </h6>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-5">
      <div>
        <div className="p-5 bg-[#131313]/3 rounded-3xl">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={readBooksList}>
              <XAxis dataKey="bookName" />
              <YAxis domain={[0, 350]} />

              <Bar dataKey="totalPages" shape={TriangleBar}>
                {readBooksList.map((list, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
                <LabelList dataKey="totalPages" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Chart;
