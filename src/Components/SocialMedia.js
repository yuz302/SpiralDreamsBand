import React, { Component } from "react";
import { allSocialMedias } from '../data/SocialMedia';

class SocialMedia extends Component {
  render() {
    const medias = allSocialMedias.map(function (media, id) {
      return (
        <div key={id} className="row item media-item" style={
          {
            textAlign: "center",
            marginBottom: "20px",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "28px",
            padding: "10px",
            maxWidth: "1020px",
          }
        }>
          <a href={media.link}>{media.name}</a>
        </div>
      );
    });

    return (
      <section id="social-media">
          <h1>
            <span>Find us on</span>
          </h1>
          <div style={{
            paddingRight: "10%",
            paddingLeft: "10%",
          }}>{medias}</div>
      </section>
    );
  }
}

export default SocialMedia;
