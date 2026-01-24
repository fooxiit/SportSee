import { ReactNode } from 'react';
import './mainContent.css';
interface MainContentProps {
    children: ReactNode;
}
export default function MainContent({ children }: MainContentProps) {
    return <div className="main-content">{children}</div>;
}
