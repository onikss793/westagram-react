import React, { Component } from "react";
import "./StoryContent.scss";

class StoryContent extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }
  idCount = 0;

  renderStoryList = list => {
    return list.map((el, i) => {
      return (
        <li key={i}>
          <img className="story-user-img" src={el.imgUrl} alt={el.userInfo} />
          <span className="story-user">{el.userInfo}</span>
          <span className="story-timeline">{el.timeStamp}</span>
        </li>
      );
    });
  };

  render() {
    const { renderStoryList } = this;
    const { storyContentInfo } = this.state;

    return <ul className="story-list">{renderStoryList(storyContentInfo)}</ul>;
  }
}

export default StoryContent;
