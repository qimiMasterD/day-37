import Spinner from "../components/Spinner";

function withLoading(Component) {
    const WrappedComponent = ({ isLoading, ...props }) => {
        if (isLoading) return <Spinner />;
        return <Component {...props} />;
    };
    return WrappedComponent;
}

export default withLoading;
