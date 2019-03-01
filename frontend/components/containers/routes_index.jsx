import React from "react";
import { Link } from 'react-router-dom';
import RouteIndexItem from "./route_index_item.jsx";

class RouteIndex extends React.Component {

    componentDidMount() {
        this.props.fetchRoutes();
    }

    render() {
        let routes = this.props.routes.map( route => {
            return (
                <RouteIndexItem
                    key={route.id}
                    route={route}
                />
            )
        })

        return (
            <div className="route-index">
                <h2 className="route-heading">
                    My Routes
                </h2>
                <button className="new-route-btn">
                    Create New Route
                </button>
                <ul className="route-list">
                    {routes}
                </ul>
            </div>
        )
    }
}

export default RouteIndex;