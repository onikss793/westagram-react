import React, { Component } from "react";
import Nav from "../component/Nav";
import Post from "../component/Post";
import Story from "../component/Story";
import Suggestion from "../component/Suggestion";
import "./Main.css";
import "../style/common.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        userId: "wecode_bootcamp",
        img:
          "https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
      },
      post: {
        userInfo: {
          userId: "wecode_bootcamp",
          img:
            "https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        },
        imageUrl:
          "https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1",
        mainDesc: {
          userId: "wecode_bootcamp",
          desc: "저희 수강생이랍니다. ",
          timeStamp: "42분전"
        },
        commentInfo: [
          {
            userId: "Lebron James",
            desc: "Nice Picture!"
          },
          {
            userId: "Derrick Rose",
            desc: "Hello!"
          }
        ]
      },
      storyContentInfo: [
        {
          userInfo: "박주호",
          imgUrl:
            "https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
          timeStamp: "16분전"
        },
        {
          userInfo: "WeWork",
          imgUrl:
            "https://scontent-icn1-1.cdninstagram.com/vp/b53b10a8028d28cfdef1bfed70b18ae0/5DFBB2D3/t51.2885-19/s150x150/49724010_236895490557524_3249308360478031872_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
          timeStamp: "26분전"
        },
        {
          userInfo: "류준열",
          imgUrl:
            "https://scontent-icn1-1.cdninstagram.com/vp/ae8b4e447a9151324a749b4627d887d8/5DF50544/t51.2885-19/s320x320/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
          timeStamp: "40분전"
        }
      ],
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
      ],
      searchList: ["wecode", "wecoder", "wework", "walmart"]
    };
  }

  createComment = data => {
    const commentInfo = this.state.post;
    this.setState({ post: commentInfo.commentInfo.concat(data) });
    console.log(this.state);
  };

  render() {
    const {
      post,
      userInfo,
      storyContentInfo,
      suggestionInfo,
      searchList
    } = this.state;
    const { createComment } = this;
    return (
      <div className="main-container">
        <Nav searchList={searchList} />
        <div className="main-align">
          <div className="post-story-align">
            <Post
              onCreate={createComment}
              userInfo={post.userInfo}
              postImageUrl={post.imageUrl}
              mainDesc={post.mainDesc}
              commentInfo={post.commentInfo}
            />
            <div className="story-suggestion-align">
              <Story
                className="story-container"
                userInfo={userInfo}
                storyContentInfo={storyContentInfo}
              />
              <Suggestion suggestionInfo={suggestionInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
