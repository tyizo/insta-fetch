const fetch = require("node-fetch");
module.exports = {
  fetchUser: async function (user) {
    let url = `https://www.instagram.com/${user}/?__a=1`;
    let results = await fetch(url);
    if (results.status !== 200) {
      return false;
    }
    results = await results.json();
    let data = {
      username: results.graphql.user.username,
      name: results.graphql.user.full_name,
      bio: results.graphql.user.biography,
      followers: results.graphql.user.edge_followed_by.count,
      following: results.graphql.user.edge_follow.count,
      profilePic: results.graphql.user.profile_pic_url_hd,
      bioUrl: results.graphql.user.external_url,
      id: results.graphql.user.id,
      isPrivate: results.graphql.user.is_private,
    };
    return data;
  },
};
