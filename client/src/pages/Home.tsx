//fetch and list all blog posts

import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";


const Home = () => {

    const dummyPosts = [
        {
          id: "1",
          title: "Getting Started with React 1",
          content: "Learn the basics of building UIs with React.dhwudhwjdwjdiwbdujwpodjiown ujwnijoxk wjsuijs9 uisnisjnk",
          tags: ["react", "frontend"],
          coverImage: "https://via.placeholder.com/300x150",
        },
        {
          id: "2",
          title: "Exploring AI Agents 3",
          content: "Dive into AI agents and multi-agent systems.",
          tags: ["AI", "agents"],
          coverImage: "https://via.placeholder.com/300x150",
        },
      ];

    return(
        <main>
            <h1 className="text-">STACKLOG</h1>
            <NavBar />
            <p>Welcome to the StackLog Blog <br /> 
            StackLog is an educative Blog that scsics;l skdskcsp skcmscspool</p>

            <h4>Get Started</h4>

            <section>
                <article>
                    {dummyPosts.map((post) => (
                        <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        excerpt={post.content}
                        coverImage={post.coverImage}
                        tags={post.tags}
                        />
                    ))}

                </article>
            </section>
        </main>
    );
};

export default Home;