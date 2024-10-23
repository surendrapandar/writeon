// Card.tsx
import React, { ReactNode } from 'react';

export const Card = ({ className = "", children }: { className?: string; children: ReactNode }) => {
    return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }: { children: ReactNode }) => <div className="card-header">{children}</div>;

export const CardContent = ({ className = "", children }: { className?: string; children: ReactNode }) => (
    <div className={`card-content ${className}`}>{children}</div>
);

export const CardFooter = ({ children }: { children: ReactNode }) => <div className="card-footer">{children}</div>;

export const CardTitle = ({ children }: { children: ReactNode }) => <h2 className="card-title">{children}</h2>;



