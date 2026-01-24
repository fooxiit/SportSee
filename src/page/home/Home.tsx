import HomeHeader from '../../components/home/HomeHeader';
import UserActivity from '../../components/userActivity/UserActivity';
import UserAverageSessions from '../../components/userAverageSession/UserAverageSessions';
import UserInfo from '../../components/userInfo/UserInfo';
import UserScore from '../../components/userScore/UserScore';
import UserStats from '../../components/userStats/UserStats';
import UserContextWarpper from '../../contexte/UserContextWarpper';
import './home.css';

export default function Home() {
    return (
        <UserContextWarpper userId={18}>
            <div className="home grid">
                <HomeHeader />
                <UserInfo className="home__chart home__user-info" />
                <UserActivity className="home__chart home__user-activity" />
                <UserAverageSessions className="home__chart home__user-average-sessions" />
                <UserStats className="home__chart home__user-stats" />
                <UserScore className="home__chart home__user-score" />
            </div>
        </UserContextWarpper>
    );
}
