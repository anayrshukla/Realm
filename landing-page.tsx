"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Grid } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Manrope } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

const manrope = Manrope({ subsets: ["latin"] })

function SpinningLogo() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-0.5, -0.5, -0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
    </group>
  )
}

function AnimatedBox({ initialPosition }: { initialPosition: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition))
  const currentPosition = useRef(new THREE.Vector3(...initialPosition))

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    return new THREE.Vector3(current.x + randomDirection[0] * 3, 0.5, current.z + randomDirection[1] * 3)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current)
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x))
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z))
      setTargetPosition(newPosition)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1)
      meshRef.current.position.copy(currentPosition.current)
    }
  })

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
      </lineSegments>
    </mesh>
  )
}

function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ]

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={[0.5, 0.5, 0.5]}
        fadeDistance={50}
      />
      {initialPositions.map((position, index) => (
        <AnimatedBox key={index} initialPosition={position} />
      ))}
    </>
  )
}

export default function Component() {
  return (
    <div className={`relative w-full h-screen bg-black text-white overflow-hidden ${manrope.className}`}>
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <circle cx="8" cy="8" r="2.5" fill="currentColor" />
              <circle cx="20" cy="14" r="2.5" fill="currentColor" />
              <circle cx="32" cy="20" r="2.5" fill="currentColor" />
              <circle cx="20" cy="28" r="2.5" fill="currentColor" />
              <line x1="8" y1="10.5" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="16.5" x2="32" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="16.5" x2="20" y2="25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
            <span className="text-2xl font-bold transition-colors group-hover:text-gray-300">Realm</span>
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="relative">
                <motion.span
                  className="block text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.span>
              </Link>
            </li>
            <li>
              <Link href="/features" className="relative">
                <motion.span
                  className="block text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Features
                </motion.span>
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="relative">
                <motion.span
                  className="block text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Pricing
                </motion.span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-6xl font-bold mb-8 max-w-4xl mx-auto">Interactive Git for Agentic Workflows</h1>
        <h2 className="text-xl mb-10">
          Edit agent decisions, test changes side-by-side, and roll out safely with version control for your automations
        </h2>
        <motion.button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScE-YG9lP9uOc1k_YFno66dyQ4AC_NPPp98_rozfP7JpxSbSg/viewform?usp=dialog",
              "_blank",
            )
          }
          className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Join waitlist
        </motion.button>
      </div>
      <Canvas shadows camera={{ position: [30, 30, 30], fov: 50 }} className="absolute inset-0">
        <Scene />
      </Canvas>
    </div>
  )
}
