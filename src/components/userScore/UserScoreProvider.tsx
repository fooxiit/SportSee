import React from 'react';
import useUserContext from '../../hook/useUserContext';
import UserScore from './UserScore';
interface UserScoreProviderProps {
    className?: string;
}
export default function UserScoreProvider({ className = '' }: UserScoreProviderProps) {
    const { user } = useUserContext();
    return <UserScore data={user.scoreData} className={className} />;
}
