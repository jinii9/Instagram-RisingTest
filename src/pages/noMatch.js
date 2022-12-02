const { useLocation } = require("react-router-dom");


const NoMatchPage = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No Match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NoMatchPage