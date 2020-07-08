import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroCommunity from "../components/hero-community";
import OurEvents from "../components/community-our-events";
import Contribute from "../components/community-contribute";
import JoinTheConversation from "../components/community-join-the-conversation";

function Community() {
  return (
    <Layout>
      <SEO
        title="TotalCross Community"
        description="Join events organized by TotalCross, become an open source contributor or engage with us on social media. Join the TotalCross Community."
      ></SEO>
      <HeroCommunity />
      <OurEvents />
      <Contribute />
      <JoinTheConversation />
    </Layout>
  );
}

export default Community;
