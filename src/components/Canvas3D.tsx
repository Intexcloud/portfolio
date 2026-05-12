import { useEffect, useRef } from 'react';

interface Particle {
    x: number; y: number; z: number;
    baseX: number; baseY: number; baseZ: number;
    color: string;
}

export default function Canvas3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let W = 0, H = 0;
        let mouseX = 0, mouseY = 0;
        
        const particles: Particle[] = [];
        const numParticles = 1200;
        const FOV = 600;

        function resize() {
            W = canvas!.width = window.innerWidth;
            H = canvas!.height = window.innerHeight;
        }

        function init() {
            particles.length = 0;
            for (let i = 0; i < numParticles; i++) {
                const x = (Math.random() - 0.5) * 2000;
                const z = (Math.random() - 0.5) * 2000;
                const y = (Math.random() - 0.5) * 1000;
                
                // Darker blue/grey for white background
                const hue = 217;
                const saturation = 40 + Math.random() * 30;
                const lightness = 30 + Math.random() * 20;
                const color = `hsla(${hue}, ${saturation}%, ${lightness}%, `;
                
                particles.push({ x, y, z, baseX: x, baseY: y, baseZ: z, color });
            }
        }

        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX - W / 2) / (W / 2);
            mouseY = (e.clientY - H / 2) / (H / 2);
        };

        function project(x: number, y: number, z: number) {
            const scale = FOV / (FOV + z + 600);
            return { sx: x * scale + W / 2, sy: y * scale + H / 2, scale };
        }

        function draw(time: number) {
            ctx!.clearRect(0, 0, W, H);
            
            const rotationY = mouseX * 0.4;
            const rotationX = mouseY * 0.4;
            
            const cosY = Math.cos(rotationY), sinY = Math.sin(rotationY);
            const cosX = Math.cos(rotationX), sinX = Math.sin(rotationX);

            particles.forEach(p => {
                const dist = Math.sqrt(p.baseX * p.baseX + p.baseZ * p.baseZ);
                const wave = Math.sin(dist * 0.005 - time * 0.002) * 50;
                
                let curX = p.baseX;
                let curY = p.baseY + wave;
                let curZ = p.baseZ;

                let x1 = curX * cosY - curZ * sinY;
                let z1 = curX * sinY + curZ * cosY;
                let y2 = curY * cosX - z1 * sinX;
                let z2 = curY * sinX + z1 * cosX;

                const proj = project(x1, y2, z2);

                if (proj.scale > 0 && proj.sx > 0 && proj.sx < W && proj.sy > 0 && proj.sy < H) {
                    const alpha = Math.max(0.05, proj.scale * 0.35); // Lower alpha for white background
                    ctx!.beginPath();
                    ctx!.arc(proj.sx, proj.sy, 1.8 * proj.scale, 0, Math.PI * 2);
                    ctx!.fillStyle = p.color + `${alpha})`;
                    ctx!.fill();
                }
            });

            animId = requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove);
        resize();
        init();
        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hero-canvas"
            style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', background: '#F7F6F2' }}
        />
    );
}
