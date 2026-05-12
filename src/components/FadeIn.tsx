import { useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    delay?: number;
}

export default function FadeIn({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}s` }}>
            {children}
        </div>
    );
}
