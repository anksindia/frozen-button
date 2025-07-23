"use client";

import React, { useState } from 'react';
import FrozenButton from './components/FrozenButton';
import { FaGithub, FaReact, FaCss3Alt, FaCode, FaClipboard, FaSnowflake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiJavascript } from "react-icons/si";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md"
import { SiNextdotjs } from "react-icons/si";
import { PiFolderSimpleStarLight } from "react-icons/pi";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 font-mono text-sm p-4 rounded-lg mb-6 overflow-x-auto"
    >
      <button
        onClick={copyCode}
        className="absolute top-3 right-3 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-1 rounded-md text-xs flex items-center gap-1 transition-colors"
      >
        <FaClipboard className="text-gray-300" />
        <span className="text-gray-300">{copied ? "Copied!" : "Copy"}</span>
      </button>
      <pre className="overflow-x-auto">{code}</pre>
    </motion.div>
  );
};

const TechStackItem = ({ icon: Icon, color, name }) => (
  <motion.li 
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
  >
    <Icon className={`text-${color} text-lg`} />
    <span className="text-gray-200">{name}</span>
  </motion.li>
);

const SectionHeader = ({ icon: Icon, children }) => (
  <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
    <Icon className="text-white" />
    {children}
  </h2>
);

const Page = () => {
  const installCommand = `npm install frozen-button`;
  const usageExample = `import { FrozenButton } from 'frozen-button';

function App() {
  return (
    <FrozenButton 
      text="Click Me"
      onClick={() => console.log('Button clicked!')}
      color="white    dropCount={5}
    />
  );
}`;

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0" />
      
      {/* Radial glow background */}
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0" />

      {/* Main content */}
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-20 pt-10"
          >
            <div className="flex justify-center mb-4">
              <FaSnowflake className="text-white text-4xl" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Frozen Button
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              A React button component with dripping ice animations. Perfect for adding cool interactions to your projects.
            </p>
            <div className="flex justify-center">
              <FrozenButton 
                text="Click Me" 
                onClick={() => alert('Button clicked!')} 
                className="text-lg"
              />
            </div>
          </motion.section>

          {/* Content Sections */}
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SectionHeader icon={PiFolderSimpleStarLight}>Features</SectionHeader>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Dripping Animation', desc: 'Smooth animated drops that freeze on hover' },
                  { title: 'Customizable', desc: 'Control colors, drop count, and animations' },
                  { title: 'Lightweight', desc: 'Just 5kb gzipped with zero dependencies' },
                  { title: 'JavaScript', desc: 'Fully typed for better developer experience' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Installation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <SectionHeader icon={FaGithub}>Installation</SectionHeader>
              <p className="text-gray-400 mb-4">
                Add Frozen Button to your project with npm or yarn:
              </p>
              <CodeBlock code={installCommand} />
            </motion.section>

            {/* Usage */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <SectionHeader icon={FaReact}>Usage</SectionHeader>
              <p className="text-gray-400 mb-4">
                Import the component and customize it with props:
              </p>
              <CodeBlock code={usageExample} />
            </motion.section>

            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <SectionHeader icon={FaCode}>Tech Stack</SectionHeader>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <TechStackItem icon={SiNextdotjs} color="white" name="NextJs" />
                <TechStackItem icon={SiJavascript} color="yellow-300" name="JavaScript" />
                <TechStackItem icon={FaCss3Alt} color="cyan-400" name="Tailwind CSS" />
                <TechStackItem icon={MdOutlineAutoAwesomeMotion} color="gray-400" name="Framer Motion" />
                <TechStackItem icon={FaReact} color="blue-400" name="React Icons" />
              </ul>
            </motion.section>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-500 text-sm pt-12 border-t border-gray-800"
            >
              <p>
                Created by <a href="https://github.com/anksindia" className="text-white hover:underline">Ankit Suyal</a> • MIT Licensed
              </p>
            </motion.footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
