import React, { Component } from "react";
import "./Suggestion.scss";
import SuggestionList from "./SuggestionList/SuggestionList";

class Suggestion extends Component {
  constructor() {
    super();
    this.state = {
      suggestionInfo: [
        {
          userId: "James Johnson",
          imgUrl:
            "https://img.bleacherreport.net/img/images/photos/003/674/961/hi-res-6122e5f0ba5f4b9b7201096071d6acaa_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
        },
        {
          userId: "Luka Doncic",
          imgUrl:
            "http://thumbor-prod-us-east-1.photo.aws.arc.pub/xkfw8gs_XlFJp9Gaz-M_2bx6Fdk=/arc-anglerfish-arc2-prod-dmn/public/G5PJ4VRL4WUXTLLH4CDNHGRGAI.jpg"
        },
        {
          userId: "Paul George",
          imgUrl:
            "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F2019%2F07%2F06%2Fpaul-george-clips-thunder.jpg%3Fitok%3DioeLW9V8&w=1000&q=70"
        }
      ]
    };
  }

  render() {
    const { suggestionInfo } = this.state;
    return (
      <div className="right-suggestion">
        <div className="right-suggestion-nav">
          <span className="suggestion-nav-left">회원님을 위한 추천</span>
          <span className="suggestion-nav-right">모두 보기</span>
        </div>
        <SuggestionList suggestionInfo={suggestionInfo} />
      </div>
    );
  }
}

export default Suggestion;
