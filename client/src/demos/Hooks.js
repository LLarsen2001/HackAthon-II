import Card from "../components/shared/Card";
import Button from "../styledComponents/Button";
import {
    useToggle,
    useLocalStorage,
    useMedia,
    useAxiosOnMount,
} from "../hooks";

const Hooks = () => {
    const { isToggled, toggle } = useToggle(false);
    const [age, setAge, removeAge] = useLocalStorage("age", 38);
    const { isMobile, screenHeight, screenWidth } = useMedia();
    const { data, error, loading } = useAxiosOnMount(
        "https://reqres.in/api/users?delay=2"
    );

    const renderAxiosOnMountBody = () => {
        if (loading) {
            return <p>loading data</p>
        }
        if (error) {
            return (
                <>
                    <p>Error occured</p>
                    <p>{JSON.stringify(error)}</p>
                </>
            )
        }

        return (
            <>
                <p>Success</p>

                <p>page: {data.page}</p>
                {data.data.map(u => {
                    return (
                        <div key={u.id}>
                            <p>{u.email}</p>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <h1>Hooks</h1>
            {/* 1 */}
            <Card header={"useToggle Hook"}>
                <>
                    {isToggled && <p>show/hide this</p>}
                    <Button className="ButtonContainer" onClick={toggle}>toggle</Button>
                </>
            </Card>

            {/* 2 */}
            <Card header={"useLocalStorage Hook"}>
                <>
                    <p>my age: {age}</p>
                    <Button onClick={() => { setAge(parseInt(age) + 1) }}>add to age</Button>
                    <Button onClick={removeAge}>Remove from localstorage</Button>
                    <p>age from local storage</p>
                    <p>{window.localStorage.getItem("age")}</p>
                </>
            </Card>

            {/* 3 */}
            <Card header={"useMedia Hook"}>
                <>
                    {isMobile ? <p>mobile size yo</p> : <p>not mobile size</p>}
                    <p>screenWidth: {screenWidth}</p>
                    <p>screenHeight: {screenHeight}</p>
                </>
            </Card>

            {/* 3 */}
            <Card header={"useAxiosOnMount Hook"}>
                <>
                    {renderAxiosOnMountBody()}
                </>
            </Card>
        </div >
    );
};
export default Hooks;
