/**
   * Select which default message should be posted.
   *
   * @param  {String} eventName Name of GitHub event.
   * @param  {Object} payload Payload of GitHub event.
   * @return {String} 
   */
function getDefaultMessage(eventName, payload) {
  let tweetingStatus;
  switch (eventName) {
  case 'push':
    tweetingStatus = `${payload.commits[0].url}`;
    break;
  case 'pull_request':
    tweetingStatus = `${payload.pull_request.html_url}`;
    break;
  case 'release':
    tweetingStatus = `${payload.release.html_url}`;
    break;
  case 'issues':
    tweetingStatus = `${payload.issue.html_url}`;
    break;
  default:
    throw new Error(`${eventName} is not supported with default message. Provide custom message using tweeter_status input parameter.`);
    break;
  }
  return tweetingStatus;
} 
module.exports.getDefaultMessage = getDefaultMessage;
