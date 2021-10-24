import Nav from "components/Nav";
import MainPage from "components/MainPage";
import Footer from "components/Footer/Footer";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import ContactsPage from "components/ContactsPage/ContactsPage";
export default function App() {
    return (
        <div className="wrapper">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/contacts" component={ContactsPage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}
