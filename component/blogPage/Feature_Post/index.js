const Feature_Card1 = "assets/images/Feature_card_2_1.jpg";
const Feature_Card2 = "assets/images/Feature_card_2_2.png";
const Feature_Card3 = "assets/images/Feature_card_3_1.png";
const Feature_Card4 = "assets/images/Feature_card_3_2.png";
const Feature_Card5 = "assets/images/Feature_card_3_3.jpg";
const Feature_Card6 = "assets/images/Feature_card_3_4.jpg";

export default function FeaturePost() {
  return (
    <section className="feature_post">
      <div className="container">
        <div className="feature_post_heading">
          <h1 className="heading">Featured posts</h1>
        </div>
        <div className="feature_card_grid">
          <div className="feature_card_item">
            <div className="feature_card_item_content_bg">
              <div className="feature_card_item_content">
                <h2 className="feature_card_head">
                  Optimizing our post page performance
                </h2>
                <p className="feature_card_desc">
                  Discover how daily.dev improved their post pages' performance
                  by leveraging
                </p>
              </div>
            </div>
          </div>
          <div className="feature_card_item_row2">
            <div className="feature_card_sub_item">
              <img src={Feature_Card1} alt="Features" />
              <div className="card_desc">
                <h3 className="h3">
                  Adding the daily.dev DevCard to your GitHub profile
                </h3>
                <p>
                  In this article, we will cover two ways of showing your
                  reading interests through your GitHub profile: manually adding
                  your DevCard by copying the code and automatically updating
                  DevCard by leveraging GitHub actions.
                </p>
              </div>
            </div>
            <div className="feature_card_sub_item">
              <img src={Feature_Card2} alt="Features" />
              <div className="card_desc">
                <h3 className="h3">
                  Adding the daily.dev DevCard to your GitHub profile
                </h3>
                <p>
                  In this article, we will cover two ways of showing your
                  reading interests through your GitHub profile: manually adding
                  your DevCard by copying the code and automatically updating
                  DevCard by leveraging GitHub actions.
                </p>
              </div>
            </div>
          </div>
          <div className="feature_card_item_row4">
            <div className="feature_card_sub_item">
              <p>Under the Hood: daily.dev weekly digest</p>
              <img src={Feature_Card3} alt="Features" />
            </div>
            <div className="feature_card_sub_item">
              <p>Exploring the Archipelago Architecture</p>
              <img src={Feature_Card4} alt="Features" />
            </div>
            <div className="feature_card_sub_item">
              <p>Moving back to React</p>
              <img src={Feature_Card5} alt="Features" />
            </div>
            <div className="feature_card_sub_item">
              <p>Scaling a side project: The story of daily.dev</p>
              <img src={Feature_Card6} alt="Features" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
