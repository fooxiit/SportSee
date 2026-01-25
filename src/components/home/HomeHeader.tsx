import STRING from '../../constante/String';
import useUserContext from '../../hook/useUserContext';
/**
 * @description hero section of the home page
 * @returns
 */
export default function HomeHeader() {
    const { user } = useUserContext();
    return (
        <div className="flex flex--column home__header">
            <div className="home__header__title">
                <h1>
                    {STRING.FR.TITLE}
                    <span> {user.userInfos.firstName}</span>
                </h1>
            </div>
            <span className="home__header__catchphrase">{STRING.FR.CATCHPHRASE}</span>
        </div>
    );
}
