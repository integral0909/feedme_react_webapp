import React from 'react';
import ReactLoading from 'react-loading';

function extractHostname(url) {
  let hostname = (url.indexOf("://") > -1) ? url.split('/')[2] : url.split('/')[0];
  hostname = hostname.split(':')[0].split('?')[0];
  return hostname;
}
function secondsToDisplayTime(seconds) {
  return `${seconds/60} mins`;
}
function getLoadingSpinner(isLoading, type, color, width) {
  return isLoading ? <span><ReactLoading type={type || 'bubbles'}
                                         color={color || '#E73D57'}
                                         width={width || '120px'}
                                         className="center-block" /></span> : null;
};

export {extractHostname, secondsToDisplayTime, getLoadingSpinner};
