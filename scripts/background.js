chrome.webRequest.onBeforeRequest.addListener(function(content) {
  const { url } = content;
  const link;
  if(url.include('query')) {
    let post = ((url.split('shortcode')[1]).split('%22%3A%22')[1]).split('%')[0]
    link = `https://instagram.com/p/${post}`;
  }else {
    link = content.requestHeaders.referer;
  }

  //identificar instex

  //rodar em segundo plano

  //baixar automaticamente 

}, {
      urls: ["https://www.instagram.com/graphql/query/*", "https://www.instagram.com/direct_v2/web/threads/broadcast/story_share/"],
      types: ["XHR"]
}, /*["RequestBody"]*/)
