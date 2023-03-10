// Note: gatsby-config 에서 함께 사용하기 위해 CommonJS 스타일로 전환
exports.linkResolver = (doc) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log('linkReslover doc ::', doc);
  switch (doc.type) {
    case 'site_navigation': {
      return '/';
    }
    case 'post': {
      return '/';
    }
  }
  return '/';
};
