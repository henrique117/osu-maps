import { Switch, Route } from "react-router-dom"
import { Home, StreamMaps, JumpMaps, TechMaps } from "pages"

const Routes = () => {
    return (
        <Switch>
            <Route path="//" component={Home} />
            <Route path="/streamMaps" component={StreamMaps} />
            <Route path="/techMaps" component={TechMaps} />
            <Route path="/jumpMaps" component={JumpMaps} />
        </Switch>
    )
}

export default Routes