import { Project } from "./definitions";

export const projects: Project[] = [
  {
    id: "self-driving-car",
    title: "Self-Driving Car Project",
    summary: "An autonomous vehicle simulation using reinforcement learning in Unity",
    description: "Using reinforcement learning to navigate a 2d road environments in Unity. I have been using curriculum training to advanced the agents ability to handle difficult tasks. Currently I have trained the agent successfully with a number of scenes. My next steps are to code the training algorithms rather than use ML Agents.",
    technologies: ["Python", "TensorFlow", "Unity ML-Agents", "PyTorch", "C#"],
    features: [
      "Implemented curriculum learning for basic navigation",
      "Trained using Unity ML-Agents with progressive difficulty",
      "Analyzed performance with TensorBoard visualizations",
      "Integrated real-time visualization tools"
    ],
    image: "/self-drive.png?height=600&width=800",
    github: 'https://github.com/lgvw3/CarGOSPACE',
    //demo: "https://your-demo-link.com",
  },
  {
    id: "1st-q",
    title: "1st Q",
    summary: "Powerful AI tools to advance a green loan officer to the level of the most experienced in the nation",
    description: "Built out an agentic workflow to handle a number of adminstrative and operations tasks, relieving our back office staff. But, more excitingly, enabling originators and processors the ability to quickly qualify and borrower based on their info and our investor guidelines, and not only that but find strategies to make the deal work most advantageously for the borrower whether thats restructuring debt, loan terms, or better product selection.",
    technologies: ["Nextjs", "Python", "MongoDB", "FastAPI", "OpenAI Assistants"],
    features: [
      "Context-aware conversation handling",
      "Insightful UI streaming",
      "Integration with external knowledge bases",
      "Real-time response generation",
      "Conversation history analytics",
      "Deal making and deep reasoning"
    ],
    image: "/1st-q.png?height=600&width=800",
    //github: "https://github.com/lgvw3",
  },
  {
    id: "profitability-tool",
    title: "Profitability Tool",
    summary: "Enabling corporate and branch leaders to lead branches profitability in a way we never could before",
    description: "This is one of, if not the largest project I've ever built. When I started working here, we had only one way of getting insights into branch performance and profitability, and even that wasn't a complete reporting. So, I built out pipelines from our major 3rd party apps and services, including a pipeline to summarize all accounting data, an org tree, and a guided accountability and budgeting tool. The tool was only part of the equation, I also had to train our sales leaders and their direct reports for several months on how to properly conduct these accountability sessions and to make effective plans, but we are, bit by bit, improving profitability company wide.",
    technologies: ["Nextjs", "Python", "MongoDB", "Data Pipelines", "3rd Party Integrations", "Recharts", "Cron Jobs", "Ubuntu Server Management", "Java"],
    features: [
      "Well architected data pipelines, started to get a lot better after v2 and v3",
      "Clear and powerful data exploration",
      "Planning and reporting tools",
      "Easy to understand dashboards to stay ontop of it all",
      "Insights into our company we never had before",
      "Improved leadership action and accountability"
    ],
    image: "/profitability-shot.png?height=600&width=800",
    //github: "https://github.com/lgvw3",
  },
  {
    id: "front-door",
    title: "Front Door",
    summary: "Onboarding, recruiting, training, all enabled from a single tool",
    description: "We have been working to improve and bring a standard of excellence to our onboarding and training. This was in response to that desire. Now all of our new recruits move through the Front Door. It allows for discovery, creation of proformas, and soon contract management (currently it provides the details to HR who manages it other systems which is a bit of a pain). This makes the proformas and discovery conversations actually matter and be real data both parties can agree to and act on.",
    technologies: ["Nextjs", "MongoDB", "Recharts", "Cron Jobs", "Sendgrid Tools"],
    features: [
      "Enabling of non-employees to have a safe access point, with limited abilities",
      "Gives clear communication to recruiter and recruit as to current completion in the process and what remains and who you are working with next",
      "Planning and reporting tools",
      "Easy to understand dashboards",
      "Improved accountability"
    ],
    image: "/front-door.png?height=600&width=800",
    //github: "https://github.com/lgvw3",
  },
  {
    id: "family-plates",
    title: "Family Plates",
    summary: "Building the family gospel insights and collaboration platform I've always wanted",
    description: "I had this idea to make like a family Bible of sorts, but allow for real time updating and collaboration, along with a super intuitive and fast UX so that we can record the thoughts we often just text to each other that get lost after that.",
    technologies: ["Nextjs", "MongoDB", "Search Optimization", "Real Time", "Data Preprocessing"],
    features: [
      "Super fast and intuitive search",
      "Easy to make annotations",
      "Genuinely enjoyable UI for reading scriptures",
    ],
    image: "/family-plates.png?height=600&width=800",
    github: "https://github.com/lgvw3/familyplates",
  },
]

