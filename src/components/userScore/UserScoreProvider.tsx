import React from 'react';
import useUserContext from '../../hook/useUserContext';
import UserScore from './UserScore';
/**
 * @description UserScoreProvider Props interface
 * @property className Optional additional class names
 */
interface UserScoreProviderProps {
    className?: string;
}
/**
 * @description UserScoreProvider component to fetch and provide user score data
 *@param props
 * @returns
 */
export default function UserScoreProvider({ className = '' }: UserScoreProviderProps) {
    const { user } = useUserContext();
    return <UserScore data={user.scoreData} className={className} />;
}
