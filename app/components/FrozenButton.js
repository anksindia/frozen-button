"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TfiUnlink, TfiLink } from "react-icons/tfi";

const frozenDrips = [
    { left: "10%", scaleY: 0.756719, height: 24, opacity: 0.02, translateY: 48.82 },
    { left: "57%", scaleY: 0.75, height: 10, opacity: 0, translateY: 50 },
    { left: "85%", scaleY: 0.964248, height: 16, opacity: 0.697593, translateY: 9.53 },
];

const dropOrigins = ["10%", "57%", "85%"];

const FrozenButton = ({ text = "Click Me", onClick, className }) => {
    const [activeDrop, setActiveDrop] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * dropOrigins.length);
            setActiveDrop(dropOrigins[random]);

            setTimeout(() => {
                setActiveDrop(null);
            }, 1600);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative inline-block">
            <button
                onClick={onClick}
                className={`group relative z-10 flex items-center gap-2 rounded px-4 py-2.5 font-semibold text-black backdrop-blur-md bg-white border border-black shadow-lg hover:bg-white transition-all duration-300 ${className || ''}`}
            >
                <span className="mr-1">{text}</span>

                {/* Icons toggle on hover */}
                <span className="relative w-5 h-5 inline-block">
                    {/* Default Link Icon */}
                    <TfiLink className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 text-[18px] font-bold" />

                    {/* Hover Unlink Icon */}
                    <TfiUnlink className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-[18px] font-bold" />
                </span>

                {/* Frozen drops */}
                {frozenDrips.map((drop, i) => (
                    <div
                        key={i}
                        className="absolute top-[99%] origin-top"
                        style={{
                            left: drop.left,
                            transform: `scaleY(${drop.scaleY}) translateZ(0px)`,
                        }}
                    >
                        <div
                            className="w-2 rounded-b-full bg-white backdrop-blur-sm transition-colors group-hover:bg-white"
                            style={{ height: `${drop.height}px` }}
                        ></div>

                        {/* Side curves */}
                        <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-full top-0"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                                className="fill-white transition-colors group-hover:fill-white"
                            />
                        </svg>

                        <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-full top-0 rotate-90"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                                className="fill-white transition-colors group-hover:fill-white"
                            />
                        </svg>
                    </div>
                ))}
            </button>

            {/* Falling animated drop */}
            {activeDrop && (
                <motion.svg
                    key={activeDrop + Date.now()}
                    className="absolute z-0"
                    style={{ top: "100%", left: `calc(${activeDrop} - 3px)` }}
                    width="12"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ y: 0, opacity: 1, scale: 1 }}
                    animate={{ y: 80, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                >
                    <path
                        d="M12 2C12 2 4 10 4 16C4 20.4183 7.58172 24 12 24C16.4183 24 20 20.4183 20 16C20 10 12 2 12 2Z"
                        fill="#ffffff"
                    />
                </motion.svg>
            )}
        </div>
    );
};

export default FrozenButton;
