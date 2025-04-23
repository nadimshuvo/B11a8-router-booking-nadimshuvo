import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function ReChart({lawyerArray }) {
  const isMobile = window.innerWidth < 768;

  const chartData = lawyerArray.map( lawyer => ({
    name: lawyer.name,
    uv: parseInt(lawyer.fee, 10)
  }))

  return (
    <ResponsiveContainer width="100%" height={538}>
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
          tick={{ angle: isMobile ? -45 : 0, fontSize: 12 }}
          interval={0}
          height={isMobile ? 80 : 60}
        />

        <YAxis
          domain={[0, 1800]}
          tickCount={10}
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: "#ccc" }}
          tickLine={{ stroke: "#ccc" }}
        />

        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
