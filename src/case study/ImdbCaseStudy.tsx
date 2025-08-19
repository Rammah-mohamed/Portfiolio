import CaseStudy from "../components/CaseStudy"

const ImdbCaseStudy = () => {
    return (
        <CaseStudy
            title="IMDb Clone"
            subtitle="Built a full-stack movie discovery platform with real-time data and personalized dashboards"
            problem="Movie enthusiasts needed a platform that goes beyond static listings, enabling them to search, rate, and curate their own watchlists in a personalized way."
            solution="I engineered a full-stack IMDb clone that integrates with the TMDB API for live movie data, supports user authentication and profiles, and provides ratings, reviews, and watchlist functionality within a mobile-first, responsive UI."
            findings={[
                {
                    title: "Key Features",
                    items: [
                        "Real-time movie browsing powered by TMDB API",
                        "User authentication, profiles, and personalized dashboards",
                        "Ratings, reviews, and watchlist management",
                        "Responsive mobile-first design for seamless access"
                    ],
                },
                {
                    title: "Technical Highlights",
                    items: [
                        "Optimized API calls with React Query caching",
                        "Dynamic routing and SSR with Next.js",
                        "Modular, reusable UI component architecture"
                    ],
                },
            ]}
            impact={[
                "Strengthened expertise in building API-driven consumer apps",
                "Demonstrated ability to handle full-stack data fetching and authentication flows",
                "Delivered a production-level platform showcasing scalability and user experience design"
            ]}
            techStack={[
                "React",
                "TypeScript",
                "Next.js",
                "Express.js",
                "GraphQL",
                "MongoDB",
                "Node.js",
                "TailwindCSS"
            ]}
        />
    )
}

export default ImdbCaseStudy
