
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: false,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    modern: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/feature/Food_Blog",
        destination: "/feature/food-blog-generator",
        permanent: true,
      },
      {
        source:
          "/feature/Fashion_and_Beauty_Blog((?!63e5e5800d77461ef457486b).*)",
        destination: "/feature/fashion-and-beauty-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Health_and_Fitness_Blog",
        destination: "/feature/health-and-fitness-blog-generator",
        permanent: true,
      },
      {
        source:
          "/feature/Health_and_Fitness_Blog((?!63a689bf9c740a58bc99364c).*)",
        destination: "/feature/health-and-fitness-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Lifestyle_Blog",
        destination: "/feature/lifestyle-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/News_Blog",
        destination: "/feature/news-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Parenting_Blog((?!63a689f39c740a58bc993658).*)",
        destination: "/feature/parenting-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Personal_Blog",
        destination: "/feature/personal-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Personal_Finance_Blog",
        destination: "/feature/personal-finance-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/personal-finance-blog",
        destination: "/feature/personal-finance-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Photography_Blog",
        destination: "/feature/photography-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Sports_Blog((?!63a68a489c740a58bc993672).*)",
        destination: "/feature/sports-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Travel_Blog((?!63a689b69c740a58bc99364a).*)",
        destination: "/feature/travel-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Travel_Blog",
        destination: "/feature/travel-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Job_Post",
        destination: "/feature/job-post",
        permanent: true,
      },
      {
        source: "/feature/Text_Rewriter",
        destination: "/feature/text-rewriter",
        permanent: true,
      },
      {
        source: "/feature/Text_Rewriter((?!63b575f994e00d1e3401b490).*)",
        destination: "/feature/text-rewriter",
        permanent: true,
      },
      {
        source: "/feature/Text_Summarizer",
        destination: "/feature/text-summarizer",
        permanent: true,
      },
      {
        source:
          "/feature/Facebook_Ads_Generator((?!63b26a3c2760b3d53b88b64c).*)",
        destination: "/feature/facebook-ads-generator",
        permanent: true,
      },
      // {
      //   source:
      //     "/feature/facebook-ads-generator((?!63b26a3c2760b3d53b88b64c=).*)",
      //   destination: "/feature/facebook-ads-generator",
      //   permanent: true,
      // },
      // {
      //   source:
      //     "/feature/fashion-and-beauty-blog-generator((?!63e5e5800d77461ef457486b).*)",
      //   destination: "/feature/fashion-and-beauty-blog-generator",
      //   permanent: true,
      // },
      {
        source: "/feature/AI_Diagram_Generator",
        destination: "/feature/ai-diagram-generator",
        permanent: true,
      },
      {
        source: "/feature/Upload_Image_and_Get_Answer",
        destination: "/feature/upload-image-and-get-answer",
        permanent: true,
      },
      {
        source: "/feature/Make_Content_Feel_Human",
        destination: "/feature/make-content-feel-human",
        permanent: true,
      },
      {
        source: "/feature/Instant_Code_Solver",
        destination: "/feature/instant-code-solver",
        permanent: true,
      },
      {
        source: "/feature/food-blog",
        destination: "/feature/food-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/general-essay-writing",
        destination: "/feature/essay-writing-generator",
        permanent: true,
      },
      {
        source: "/feature/travel-blog",
        destination: "/feature/travel-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/general-blog",
        destination: "/feature/general-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Facebook_Ads_Headline_Generator",
        destination: "/feature/facebook-ads-headline-generator",
        permanent: true,
      },
      {
        source: "/feature/Facebook_Ads_Generator",
        destination: "/feature/facebook-ads-generator",
        permanent: true,
      },
      {
        source:
          "/blog/Introduces-a%20new-option-of%20OpenAI-called-%E2%80%9CGPTs%E2%80%9D",
        destination: "/blog/introduces-a-new-option-of-openAI-called-GPTs",
        permanent: true,
      },
      {
        source:
          "/blog/how-to-dress-for-your-body-type-A-fashion-guide-to-use-AssignmentGPT-AI",
        destination: "/blog ",
        permanent: true,
      },
      {
        source: "/feature/sports-blog",
        destination: "/feature/sports-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/health-and-fitness-blog",
        destination: "/feature/health-and-fitness-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/interior-design-blog",
        destination: "/feature/interior-design-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/lifestyle-blog",
        destination: "/feature/lifestyle-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/movie-blog",
        destination: "/feature/movie-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/music-blog",
        destination: "/feature/music-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/news-blog",
        destination: "/feature/news-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/parenting-blog",
        destination: "/feature/parenting-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/personal-blog",
        destination: "/feature/personal-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/photography-blog",
        destination: "/feature/photography-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/political-blog",
        destination: "/feature/political-blog-generator",
        permanent: true,
      },
      {
        source:
          "/blog/google-launches-their-new-ai-model-called-gemini-ai-will-it-take-down-gpt-4",
        destination: "/blog/google-gemini-llm-ai-model",
        permanent: true,
      },
      {
        source: "/blog/openAI-announces-new-interim-ceo-mira-murati",
        destination: "/blog/open-ai-announces-new-interim",
        permanent: true,
      },
      {
        source:
          "/blog/humane-launches-their-new-AI-powered-project-called-ai-pin",
        destination: "/blog/humane-ai-pin-launch-date-price-openai",
        permanent: true,
      },
      {
        source: "/blog/the-benefits-of-using-homework-AI-for-Assignments",
        destination: "/blog/benefits-of-using-homework-ai",
        permanent: true,
      },
      {
        source: "/blog/openai-new-model-is-Gpt-4-Turbo-for-developer",
        destination: "/blog/openai-new-model-is-gpt-4",
        permanent: true,
      },
      {
        source: "/blog/create-custom-versions-of-ChatGPT-using-GPTs",
        destination: "/blog/custom-chatgpt",
        permanent: true,
      },
      {
        source: "/blog/introduces-a-new-option-of-openAI-called-GPTs",
        destination:
          "/blog/openai-announces-new-feature-called-gpts-in-chatgpt",
        permanent: true,
      },
      {
        source:
          "/blog/introduction-to-the-rise-of-AI-homework-helpers-in-education",
        destination: "/blog/rise-of-ai-in-education",
        permanent: true,
      },
      {
        source:
          "/blog/enhancing-efficiency-and-productivity-with-an-AI-response-generator",
        destination: "/blog/enhancing-efficiency-and-productivity-with-an-ai",
        permanent: true,
      },
      {
        source:
          "/blog/the-next-generation-learning-tool-homework-AI-helps-the-student",
        destination: "/blog/the-next-generation-learning-tool",
        permanent: true,
      },
      {
        source:
          "/blog/enhancing-students-curiosity-and-productivity-with-aI-tools-like-assignmentgpt-ai",
        destination:
          "/blog/boosting-student-curiosity-and-productivity-with-ai-tools",
        permanent: true,
      },
      {
        source:
          "/blog/exploring-the-power-of-assignmentgpt-vs-writesonic-in-crafting-content",
        destination:
          "/blog/comparing-assignmentgpt-and-writesonic-for-content-creation",
        permanent: true,
      },
      {
        source:
          "/blog/meta-announced-their-new-AI-video-editing-tool-call-Emu-Video-generates",
        destination: "/blog/meta-launches-ai-based-video-editing-tools",
        permanent: true,
      },
      {
        source:
          "/blog/openai-launched-their-new-gpt-4-turbo-version-and-made-it-cheaper",
        destination: "/blog/openai-gpt-4-turbo-generative-ai-new-model",
        permanent: true,
      },
      {
        source: "/blog/rise-of-ai-in-educatio0n",
        destination: "/blog/rise-of-ai-in-education",
        permanent: true,
      },
      {
        source: "/feature/art-and-design-blog",
        destination: "/feature/art-and-design-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/book-and-writing-blog",
        destination: "/feature/book-and-writing-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/diy-and-craft-blog",
        destination: "/feature/diy-and-craft-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/fashion-and-beauty-blog",
        destination: "/feature/fashion-and-beauty-blog-generator",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feature/Writing_Assistant",
        destination: "/feature/writing-assistant",
        permanent: true,
      },
      {
        source: "/feature/Assignment_Writer",
        destination: "/feature/assignment-writer",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feature/business-blog",
        destination: "/feature/business-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/DIY_and_Craft_Blog",
        destination: "/feature/diy-and-craft-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/religion-blog",
        destination: "/feature/religion-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Business_Blog",
        destination: "/feature/business-blog-generator",
        permanent: true,
      },
      {
        source: "/feature/Art_and_Design_Blog",
        destination: "/feature/art-and-design-blog-generator",
        permanent: true,
      },
      {
        source: "/features",
        destination: "/feature",
        permanent: true,
      },
      // {
      //   source: "/contact-Us",
      //   destination: "/contact-us",
      //   permanent: true,
      // },
    ];
  },
};



module.exports = nextConfig;