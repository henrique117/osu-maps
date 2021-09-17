import { Switch, Route } from "react-router-dom"
import { Home, StreamMaps } from "pages"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/streamMaps" component={StreamMaps} />
        </Switch>
    )
}

export default Routes