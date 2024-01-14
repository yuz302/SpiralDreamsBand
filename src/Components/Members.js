import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { allMembers } from '../data/Members';

class Members extends Component {
  render() {
    const members = allMembers.map(function (member, id) {
      let memberImage = "images/members/" + member.image;

      return (
        <div key={id} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={member.name} src={memberImage} />
            <div className="member-info">
              <em>{member.name} - {member.position}</em>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="members">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Band Members</h1>

              <div
                id="members-wrapper"
                className="bgrid-thirds s-bgrid-full cf"
              >
                {members}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Members;
