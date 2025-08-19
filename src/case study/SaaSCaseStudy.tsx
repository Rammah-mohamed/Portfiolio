import CaseStudy from "../components/CaseStudy"

const SaaSCaseStudy = () => {
    return (
        <CaseStudy
            title="SaaS Spend Dashboard"
            subtitle="Built a license optimization tool that saved BrightWave Tech 26% of their SaaS budget"
            problem="BrightWave Tech’s operations team struggled with redundant tools, unused licenses, and surprise auto-renewals—leading to nearly 22% of their annual SaaS budget going to waste."
            solution="I designed and developed a centralized dashboard that integrates with Supabase to track all SaaS licenses, detect redundancies, and send proactive renewal alerts. This gave the operations team full visibility and control over their software spend."
            findings={[
                {
                    title: "Redundant Tools Identified",
                    items: [
                        "Overlapping project management tools: Jira vs Linear",
                        "Duplicated version control: GitHub vs GitLab",
                        "Multiple HR platforms: BambooHR vs Workday"
                    ],
                },
                {
                    title: "Inactive Licenses Flagged",
                    items: [
                        "Slack: 1 inactive license",
                        "Zoom: 1 inactive license",
                        "Figma: 1 inactive license"
                    ],
                },
            ]}
            impact={[
                "Eliminated redundant tools: $24,060 annual savings",
                "Removed inactive licenses: $750 annual savings",
                "Total Savings: $24,810 annually (~26% of SaaS budget)",
            ]}
            techStack={[
                "React",
                "TypeScript",
                "TailwindCSS",
                "Supabase",
                "Recharts",
                "Vercel"
            ]}
        />
    )
}

export default SaaSCaseStudy
