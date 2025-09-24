import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item ${className}`}>
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <div className="main-container">
            <div className="w-full max-w-6xl z-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-8">Your Features Title</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground">Feature 1 Title</h2>
                            <p className="mt-2 text-muted-foreground">Replace with your main feature description. This is the largest card, so use it for your most important feature.</p>
                        </div>
                        <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                            Your Visual Placeholder
                        </div>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-foreground">Feature 2 Title</h2>
                        <p className="mt-2 text-muted-foreground text-sm">Replace with your second feature description. Keep it concise and impactful.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-foreground">Feature 3 Title</h2>
                        <p className="mt-2 text-muted-foreground text-sm">Replace with your third feature description. Highlight key benefits.</p>
                    </BentoItem>
                    <BentoItem className="row-span-2">
                        <h2 className="text-xl font-bold text-foreground">Feature 4 Title</h2>
                        <p className="mt-2 text-muted-foreground text-sm">Replace with your fourth feature description. This card spans two rows, so you can add more detail here.</p>
                    </BentoItem>
                    <BentoItem className="col-span-2">
                        <h2 className="text-xl font-bold text-foreground">Feature 5 Title</h2>
                        <p className="mt-2 text-muted-foreground text-sm">Replace with your fifth feature description. This card spans two columns, perfect for a broader feature explanation.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-foreground">Feature 6 Title</h2>
                        <p className="mt-2 text-muted-foreground text-sm">Replace with your sixth feature description. Keep it short and sweet.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
