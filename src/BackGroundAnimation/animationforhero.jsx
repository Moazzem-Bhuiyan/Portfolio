// src/components/animationforhero.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimationForHero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles;

    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Particle setup
    const particleCount = 1000; // You can adjust the number of particles
    const particleGeometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < particleCount; i++) {
      positions.push((Math.random() - 0.5) * 2);
      positions.push((Math.random() - 0.5) * 9);
      positions.push((Math.random() - 0.5) * 10);
    }

    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({ color: 0x88ccff, size: 0.1 });
    particles = new THREE.Points(particleGeometry, particleMaterial);

    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.002; // Adjust rotation speed
      particles.rotation.y += 0.002; // Adjust rotation speed
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default AnimationForHero;
