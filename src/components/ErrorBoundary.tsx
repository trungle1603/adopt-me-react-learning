import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.error(
            "ErrorBoundary component caught an error",
            error,
            info.componentStack
        );
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing.{" "}
                    <Link to="/">Back to home page</Link>
                </h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
