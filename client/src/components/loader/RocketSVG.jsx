import { motion } from "framer-motion";

const PROPULSION_PATHS = [
  "M3.471,432.083c-4.628-4.628-4.628-12.133,0-16.761l45.234-45.234 c4.628-4.628,12.133-4.628,16.761,0c4.628,4.628,4.628,12.133,0,16.761l-45.234,45.234C15.604,436.711,8.099,436.712,3.471,432.083 z",
  "M79.917,508.528c-4.628-4.628-4.628-12.133,0-16.761l45.234-45.234 c4.628-4.628,12.133-4.628,16.761,0s4.628,12.133,0,16.761l-45.234,45.234C92.049,513.157,84.545,513.157,79.917,508.528z",
  "M22.632,487.679c-4.628-4.628-4.628-12.133,0-16.761l63.45-63.45c4.628-4.628,12.133-4.628,16.761,0 c4.628,4.628,4.628,12.133,0,16.761l-63.45,63.45C34.765,492.307,27.261,492.307,22.632,487.679z",
];

const RocketSVG = (props) => (
  <svg
    height="200px"
    width="200px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-102.4 -102.4 716.80 716.80"
    xmlSpace="preserve"
    fill="#000000"
    stroke="#000000"
    transform="rotate(-45)"
    strokeWidth={10.24}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <motion.g
        animate={{ x: [5,-5,5], scale: [0.98,1,0.98], rotate: [0,1,-1,0]}}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          type: "keyframes",
          ease: "easeInOut",
        }}
      >
        <polygon
          style={{
            fill: "#707070",
          }}
          points="121.796,269.608 73.119,344.219 167.78,438.881 242.391,390.203 "
        />
        <polygon
          style={{
            fill: "#ff000d",
          }}
          points="403.094,264.221 247.778,108.905 110.445,130.358 25.05,215.753 136.255,220.429 291.571,375.745 296.246,486.95 381.641,401.555 "
        />
        <path
          style={{
            fill: "#d1d1d1",
          }}
          d="M504.825,7.176c-91.794-25.474-177.32,22.004-217.459,62.143 c-11.993,11.992-191.31,191.309-191.31,191.309l155.316,155.316c0,0,162.336-162.336,191.309-191.309 C482.819,184.496,530.298,98.969,504.825,7.176z"
        />
        <path
          style={{
            fill: "#ff000d",
          }}
          d="M152.269,359.731c-4.628-4.628-4.628-12.133,0-16.761l164.787-164.787 c4.628-4.628,12.133-4.628,16.761,0c4.628,4.628,4.628,12.133,0,16.761L169.03,359.731 C164.401,364.359,156.897,364.36,152.269,359.731z"
        />
        <circle
          style={{
            fill: "#FFFFFF",
          }}
          cx={403.105}
          cy={108.895}
          r={43.796}
        />
      </motion.g>
      <g>
        {PROPULSION_PATHS.map((path, idx) => (
          <motion.path
            key={idx}
            id="Vector"
            d={path}
            fill="#ffbb00"
            animate={{ x: [15,-15,15], y: [-15,0,-15], opacity: [0.8, 0] }}
            transition={{
              duration: 0.5 + idx / PROPULSION_PATHS.length,
              repeat: Infinity,
            }}
          />
        ))}
      </g>
    </g>
  </svg>
)
export { RocketSVG }
