import HomeHeader from '../../components/home/HomeHeader';
import UserActivityProvider from '../../components/userActivity/UserActivityProvider';
import UserAverageSessionsProvider from '../../components/userAverageSession/UserAverageSessionsProvider';
import UserInfoProvider from '../../components/userInfo/UserInfoProvider';
import UserScoreProvider from '../../components/userScore/UserScoreProvider';
import UserStatsProvider from '../../components/userStats/UserStatsProvider';
import UserContextWarpper from '../../contexte/UserContextWarpper';
import './home.css';

export default function Home() {
    return (
        <UserContextWarpper userId={18}>
            <div className="home grid">
                <HomeHeader />
                <UserInfoProvider className="home__chart home__user-info" />
                <UserActivityProvider className="home__chart home__user-activity" />
                <UserAverageSessionsProvider className="home__chart home__user-average-sessions" />
                <UserStatsProvider className="home__chart home__user-stats" />
                <UserScoreProvider className="home__chart home__user-score" />
            </div>
        </UserContextWarpper>
    );
}
