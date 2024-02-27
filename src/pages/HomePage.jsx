import CreateProject from "../components/Home/CreateProject";
import ProjectsList from "../components/Home/ProjectsList";
import Dialog from "../components/Dialog/Dialog";
import "../styling/home-page.scss";

function Home() {
    return (
        <div className="home-container">
            <WelcomeMessage />
            <CreateProject />
            <ProjectsList />
            <Dialog />
        </div>
    );
}

const WelcomeMessage = () => {
    return (
        <div className="welcome-message">
            <h1>Welcome to Our Project Management App!</h1>
            <p>
                Manage your projects with ease using our Gantt Chart app.
                Visualize project timelines, track progress, and collaborate
                seamlessly with your team.
            </p>
            <p>
                Get started by creating a new project. Use the Gantt Chart to
                plan tasks, and ensure your projects stay on track.
            </p>
        </div>
    );
};
export default Home;
