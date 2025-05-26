import { graphcms } from "@/Hooks/graphQLClient";
import { AssignmentGPT_Seo } from "@/Hooks/graphql";
import { STRAPI_BASE_URL } from "@/config";
export async function GET_SEO(params) {
  const AssignmentGPT_Seo_var = {
    filters: {
      AssignmentGPTseo: {
        slug: {
          eq: params,
        },
      },
    },
  };
  const { assignmentGptSeos } = await graphcms?.request(
    AssignmentGPT_Seo,
    AssignmentGPT_Seo_var
  );
  if (
    assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo &&
    STRAPI_BASE_URL
  ) {
    const seoData = {
      Title: assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo?.Title,
      Description:
        assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo?.Description,
      KeyWords:
        assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo?.Keywords?.map(
          (item) => item?.name
        )?.join(", "),
      url: assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo?.URL,
      OG_Img: `${STRAPI_BASE_URL}${assignmentGptSeos?.data[0]?.attributes?.AssignmentGPTseo?.Image?.data?.attributes?.url}`,
    };
    return seoData;
  } else {
    const seoData = {
      Title: "Auto Homework Assignment Generator for Students",
      Description:
        "AssignmentGPT AI is outstanding AI platform that give many option like assignments by ai,autowrite,homework ai,ai homework helper that student can use.",
      KeyWords:
        "AI Homework Solver, Assignment Writing, Code Generator Tool, Plagiarism Checker, AI Content Detection and Removal, Image-Based Answers, Code Maker, Essay Writing Assistance, Homework Helper",
      url: `https://assignmentgpt.ai${params}`,
      OG_Img:
        "https://assignment-gptv1.s3.ap-south-1.amazonaws.com/1701760125987-loader.webp",
    };
    return seoData;
  }
}
