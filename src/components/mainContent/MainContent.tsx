import { ReactNode } from 'react';
import './mainContent.css';
/**
 * @description MainContent Props interface
 * @property children Main content elements
 */
interface MainContentProps {
    children: ReactNode;
}
/**
 *
 * @description MainContent component displaying the main content area
 * @param props
 * @returns
 */
export default function MainContent({ children }: MainContentProps) {
    return <div className="main-content">{children}</div>;
}
