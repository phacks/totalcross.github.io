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
        title="TotalCross · Enjoy Our Community"
        description="Join the TotalCross Community. We invite you to start a connection with us and with all developers using our tool."
      ></SEO>
      <HeroCommunity />
      <OurEvents />
      <Contribute />
      <JoinTheConversation />
    </Layout>
  );
}

export default Community;
