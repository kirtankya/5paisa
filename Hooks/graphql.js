import { gql } from "graphql-request";
export const UserTrack = gql`
  query {
    topCtas {
      data {
        attributes {
          Title
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const AssignmentTools = gql`
  query ($pagination: PaginationArg) {
    assignmentTools(pagination: $pagination) {
      data {
        attributes {
          title
          text
          icon {
            data {
              attributes {
                url
              }
            }
          }
          hoverIcon {
            data {
              attributes {
                url
              }
            }
          }
          count
          slug
        }
      }
    }
  }
`;
export const BLOGS = gql`
  query Blogs_Query(
    $filters: PostFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    posts(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        attributes {
          Card_Description
          Card_Poster {
            data {
              attributes {
                url
              }
            }
          }
          Author {
            Biography
            Name
            Picture {
              data {
                attributes {
                  url
                }
              }
            }
            Title
          }
          SEO {
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Keywords
            Title
          }
          appName
          Category
          excerpt
          slug
          publishedAt
          tags
          title
        }
      }
      meta {
        pagination {
          total
          pageSize
          pageCount
          page
        }
      }
    }
  }
`;
export const BLOG_FIND = gql`
  query Blogs_Find_Query($filters: PostFiltersInput) {
    posts(filters: $filters) {
      data {
        attributes {
          Faq_Schema
          Card_Description
          Card_Poster {
            data {
              attributes {
                url
              }
            }
          }
          Author {
            Biography
            Name
            Picture {
              data {
                attributes {
                  url
                }
              }
            }
            Title
          }
          SEO {
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Keywords
            Title
          }
          appName
          Category
          Table_Of_Contents
          MarkDown_Content
          excerpt
          publishedAt
          slug
          tags
          title
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const FindSubCategoryBySlug = gql`
  query FindSubCategoryBy_Slug($filters: AssignmentsGptFeaturesFiltersInput) {
    assignmentGptFeatures(filters: $filters) {
      data {
        attributes {
          FeatureName
          FeatureShortDescription
          FeatureImgLink
          title
          slug
          poster {
            data {
              attributes {
                url
              }
            }
          }
          mainCategory
          featuresDetail
          publishedAt
          Author {
            Biography
            Name
            Title
            Picture {
              data {
                attributes {
                  url
                }
              }
            }
          }
          SEO {
            Description
            Keywords
            Title
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const Get_Review = gql`
  query Get_Review_Query($pagination: PaginationArg) {
    assignmentGptReviews(pagination: $pagination) {
      data {
        attributes {
          Name
          Review
          Star
          Country
          Date
        }
      }
    }
  }
`;
export const Get_Dynamic_Content = gql`
  query Get_Dynamic_Content_Query {
    assignmentGptLandingPage {
      data {
        attributes {
          Safest_AI_Humanizer {
            Title {
              Top_Title
              Top_Sub_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          Humanize_AI_Steps {
            Title {
              Top_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          AI_Bypass_Humanize_Text {
            Img_titlt_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          Why_Choose_Assignment_Convertor {
            Title_Sub_Title {
              Top_Title
              Top_Sub_Title
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          AI_To_Human_Text_Convertor {
            Img_Title {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
            }
            Title_disc {
              Title
              Description
            }
          }
          Humanizer_Benefits {
            Title_Sub_Title {
              Top_Title
              Top_Sub_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          FAQ_Humanizer {
            Title {
              Top_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          CTA {
            Title_Sub_Title {
              Top_Title
              Top_Sub_Title
            }
          }

          Why_should_you_detect_ai_content {
            Title {
              Top_Title
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          How_To_Detect_AI_Genereted_Content_Online {
            Title {
              Top_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          How_Does_AI_Content_Detector_Work {
            Title {
              Top_Title
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          Why_Choose_Our_AI_Detector {
            Title {
              Top_Title
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          Getting_Start_With_Our_AI_Detector {
            Title {
              Top_Title
            }
            Img_title_disc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Description
            }
          }
          AI_Content_Detector_Use_Cases {
            Title {
              Top_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          Award_Winning_AI_Content_Detection {
            Title_Sub_Title {
              Top_Title
              Top_Sub_Title
            }
          }
          The_AI_Detector_Is_Perfect_For {
            Title {
              Top_Title
            }
            Title_SubTitle_Desc {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title
              Sub_Title
              Desc1
              Desc2
              Desc3
            }
          }
          Did_You_Know {
            Title_Sub_Title {
              Top_Title
              Top_Sub_Title
            }
            Title_disc {
              Title
              Description
            }
          }
          Review_Sec_Detector {
            Title {
              Top_Title
            }
          }
          FAQ_AI_Content_Detector {
            Title {
              Top_Title
            }
            Que_Ans {
              Title
              Description
            }
          }
          University_Section {
            Title
            Description
            Image(pagination: { limit: 20 }) {
              data {
                attributes {
                  url
                }
              }
            }
          }
          AI_Content_Remover_Page {
            SubText
            Page_Title
            Discription
            Animation_text_array
            Animation_static_text
          }
          AI_Content_Detector_Page {
            SubText
            Page_Title
            Discription
            Animation_text_array
            Animation_static_text
          }
          Amazing_Features {
            Title_Description {
              Count
              Description
              Title
            }
            Top_Sub_Title
            Top_Title
          }
          Assignment_Tool_sec {
            Title
            Description
          }
          Blog_section {
            Description
            Title
          }
          ByPass_Ai_Detection {
            Title_Description {
              Count
              Description
              Title
            }
            Top_Title {
              Top_Title
            }
          }
          FAQ_Section {
            Quetion_Answer {
              Description
              Title
            }
            Top_Title
          }
          Hero_Section {
            Title_Description {
              Description
              Title
            }
            TitleWords
          }
          Marquee_Section {
            Description
            Title
          }
          Pricing_Section {
            Description
            Title
          }
          Testimonial {
            Title_Description {
              Count
              Description
              Title
            }
            Top_Title {
              Top_Title
            }
          }
          Unique_And_Human_Like {
            Image_Title_Desc {
              Description
              Title
            }
            Top_Title {
              Top_Sub_Title
              Top_Title
            }
          }
          Human_Like_Content_With_Click {
            Title_Description {
              Count
              Description
              Title
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            Top_Title {
              Top_Title
            }
          }
          Review_Section {
            Top_Title
          }
          Feature_Page_Title {
            TitleWords
            Title_Description {
              Title
            }
          }
          Footer_content {
            Address
            T_mark
          }
        }
      }
    }
  }
`;
export const AssignmentGPT_Seo = gql`
  query AssignmentGpt_Seo_Query($filters: AssignmentGptSeoFiltersInput) {
    assignmentGptSeos(filters: $filters) {
      data {
        attributes {
          AssignmentGPTseo {
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Keywords
            Title
            URL
            slug
          }
        }
      }
    }
  }
`;
export const Footer_Info = gql`
  query Get_Dynamic_Content_Query {
    assignmentGptLandingPage {
      data {
        attributes {
          Footer_content {
            Address
            T_mark
          }
        }
      }
    }
  }
`;
export const ALL_FILMS_QUERY = gql`
  query AllFilms($after: String) {
    allFilms(after: $after) {
      films {
        title
        created
        episodeID
        openingCrawl
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

export const CONTRIES_QUERY = gql`
  query Subdivisions(
    $filter: ContinentFilterInput
    $countriesFilter2: CountryFilterInput
  ) {
    continents(filter: $filter) {
      name
      code
    }
    countries(filter: $countriesFilter2) {
      name
    }
  }
`;
export const Page_QUERY = gql`
  query Page($page: Int, $search: String, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      users(search: $search) {
        name
        id
      }
    }
  }
`;
