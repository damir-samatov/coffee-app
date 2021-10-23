import Nav from "components/Nav";
import MainPage from "components/MainPage";
import Footer from "components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ContactsPage from "components/ContactsPage/ContactsPage";
export default function App() {
    return (
        <div className="wrapper">
            <Router>
                <Nav />

                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/contacts">
                        <ContactsPage />
                    </Route>
                </Switch>
                <Footer />
                <br />
                <br />
                <Link to="/">HOME</Link>
                <br />
                <br />
                <Link to="/contacts">CONTACTS</Link>
                <br />
                <br />
            </Router>
        </div>
    );
}
