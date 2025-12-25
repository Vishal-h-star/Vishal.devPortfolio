export const decisions = [
  {
    key: "problem",
     shortTitle: "Problem",
    title: "Understanding the Problem",
    headline: {
      recruiter:
        "I start by understanding what actually needs to be solved.",
      developer:
        "I begin by clarifying requirements, user flow, and edge cases before writing code.",
    },
    body: {
      recruiter:
        "Before jumping into implementation, I focus on the real problem and user expectations to avoid building unnecessary features.",
      developer:
        "I map user journeys, identify constraints, and clarify edge cases early so the solution remains focused and doesn’t break later.",
    },
    bullets: {
      recruiter: [
        "Focus on real user needs",
        "Avoid building without clear purpose",
        "Reduce rework by thinking early",
      ],
      developer: [
        "Define user flow and constraints",
        "Identify edge cases upfront",
        "Translate requirements into clear UI decisions",
      ],
    },
  },
  {
    key: "structure",
    shortTitle: "UI Structure",
    title: "Structuring the UI",
    headline: {
      recruiter:
        "A clear structure makes interfaces easier to build and maintain.",
      developer:
        "I separate layout, components, and state to keep the UI scalable.",
    },
    body: {
      recruiter:
        "I organize interfaces into clean, reusable parts so changes are easier and safer to make.",
      developer:
        "I design UI with clear boundaries between layout, components, and state to improve readability and reuse.",
    },
    bullets: {
      recruiter: [
        "Reusable and consistent UI",
        "Easier long-term maintenance",
        "Cleaner collaboration",
      ],
      developer: [
        "Component-driven architecture",
        "Clear responsibility boundaries",
        "Predictable data flow",
      ],
    },
  },
  {
    key: "simplicity",
    shortTitle: "Simplicity",
    title: "Choosing Simplicity First",
    headline: {
      recruiter:
        "Simple solutions are easier to understand and maintain.",
      developer:
        "I avoid over-engineering and add complexity only when justified.",
    },
    body: {
      recruiter:
        "I prefer straightforward solutions that are easy to read and change over time.",
      developer:
        "I start with basic React patterns and introduce abstractions only when there’s a clear need.",
    },
    bullets: {
      recruiter: [
        "Readable and maintainable code",
        "Lower risk of bugs",
        "Faster iteration",
      ],
      developer: [
        "Hooks and context before extra libraries",
        "Readable code over clever tricks",
        "Complexity added intentionally",
      ],
    },
  },
  {
    key: "iteration",
    shortTitle: "Iteration",
    title: "Iteration & Learning",
    headline: {
      recruiter:
        "Good interfaces improve through feedback and iteration.",
      developer:
        "I refine UI and structure as requirements evolve.",
    },
    body: {
      recruiter:
        "I continuously improve my work based on feedback and real usage.",
      developer:
        "I refactor components, improve structure, and adapt as the product grows.",
    },
    bullets: {
      recruiter: [
        "Continuous improvement mindset",
        "Adaptable to changing needs",
        "Learning from feedback",
      ],
      developer: [
        "Refactor for clarity",
        "Improve structure over time",
        "Learn from real constraints",
      ],
    },
  },
];
