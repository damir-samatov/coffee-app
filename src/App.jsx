import Nav from "components/Nav";
import MainPage from "components/MainPage";
import Footer from "components/Footer/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ContactsPage from "components/ContactsPage/ContactsPage";
import BlogPage from "components/BlogPage/BlogPage/BlogPage";
export default function App() {
    return (
        <Router>
            <div className="wrapper">
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <MainPage />
                    </Route>
                    <Route path="/contacts">
                        <ContactsPage />
                    </Route>
                    <Route path="/blog">
                        <BlogPage />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
