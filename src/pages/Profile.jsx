import React from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/layouts/Layout";
import Header from "../components/profile/Header";
import Tab from "../components/profile/Tab";

function Profile() {
  const { username } = useParams();

  console.log(username);

  return (
    <Layout>
      <Header />
      <Tab />
    </Layout>
  );
}
export default Profile;
