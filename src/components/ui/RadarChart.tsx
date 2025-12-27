"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface RadarChartProps {
  variant?: "seeker" | "employer";
  size?: number;
}

export default function RadarChart({ variant = "seeker", size = 200 }: RadarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Add padding for labels
  const padding = 40;
  const viewBoxSize = size;
  const center = viewBoxSize / 2;
  const radius = (viewBoxSize - padding * 2) / 2 * 0.7;

  // 5 points for pentagon
  const points = 5;
  const angleOffset = -Math.PI / 2; // Start from top

  // Generate polygon points
  const getPoint = (index: number, r: number) => {
    const angle = (2 * Math.PI * index) / points + angleOffset;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Create grid lines
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];
  const gridPolygons = gridLevels.map((level) => {
    const pts = [];
    for (let i = 0; i < points; i++) {
      const pt = getPoint(i, radius * level);
      pts.push(`${pt.x},${pt.y}`);
    }
    return pts.join(" ");
  });

  // Data values (0-1)
  const seekerData = [0.85, 0.7, 0.9, 0.6, 0.75];
  const employerData = [0.9, 0.8, 0.75, 0.85, 0.7];

  const data = variant === "seeker" ? seekerData : employerData;

  // Generate data polygon
  const dataPolygon = data
    .map((value, i) => {
      const pt = getPoint(i, radius * value);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");

  // Labels
  const seekerLabels = ["워라밸", "성장", "급여", "복지", "분위기"];
  const employerLabels = ["경력", "역량", "적합성", "잠재력", "추천"];
  const labels = variant === "seeker" ? seekerLabels : employerLabels;

  const colors = {
    seeker: {
      fill: "rgba(72, 203, 176, 0.3)",
      stroke: "#48CBB0",
      glow: "#48CBB0",
    },
    employer: {
      fill: "rgba(26, 43, 69, 0.3)",
      stroke: "#1A2B45",
      glow: "#1A2B45",
    },
  };

  const color = colors[variant];

  return (
    <div ref={ref} className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="overflow-visible"
      >
        {/* Grid */}
        {gridPolygons.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: points }).map((_, i) => {
          const pt = getPoint(i, radius);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={pt.x}
              y2={pt.y}
              stroke="#E5E7EB"
              strokeWidth="1"
              opacity={0.5}
            />
          );
        })}

        {/* Data polygon with animation */}
        <motion.polygon
          points={dataPolygon}
          fill={color.fill}
          stroke={color.stroke}
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Data points */}
        {data.map((value, i) => {
          const pt = getPoint(i, radius * value);
          return (
            <motion.circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="4"
              fill={color.stroke}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            />
          );
        })}

        {/* Labels */}
        {labels.map((label, i) => {
          const pt = getPoint(i, radius + 25);
          return (
            <text
              key={i}
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[11px] fill-[#6B7280] font-medium"
            >
              {label}
            </text>
          );
        })}
      </svg>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl opacity-20"
        style={{ backgroundColor: color.glow }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
