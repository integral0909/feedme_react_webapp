function extractHostname(url) {
  let hostname = (url.indexOf("://") > -1) ? url.split('/')[2] : url.split('/')[0];
  hostname = hostname.split(':')[0].split('?')[0];
  return hostname;
}
function secondsToDisplayTime(seconds) {
  return `${seconds/60} mins`;
}

export {extractHostname, secondsToDisplayTime};
