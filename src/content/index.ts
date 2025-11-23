const checkForAds = (() => {
  const AD_SELECTOR = '.ad-showing';
  const VIDEO_SELECTOR = 'video';
  const MAX_PLAYBACK_RATE = 16.0;
  const NORMAL_PLAYBACK_RATE = 1.0;
  const MUTE_MESSAGE_TYPE = 'MUTE_TAB';
  const UNMUTE_MESSAGE_TYPE = 'UNMUTE_TAB';

  let isMutedByExtension = false;

  return () => {
    const adShowing = document.querySelector(AD_SELECTOR);
    const videoElement = document.querySelector<HTMLVideoElement>(VIDEO_SELECTOR);

    if (adShowing && videoElement) {
      if (!isMutedByExtension) {
        chrome.runtime.sendMessage({ type: MUTE_MESSAGE_TYPE });
        isMutedByExtension = true;
      }

      if (videoElement.playbackRate !== MAX_PLAYBACK_RATE) {
        videoElement.playbackRate = MAX_PLAYBACK_RATE;
      }
    } else {
      if (isMutedByExtension) {
        chrome.runtime.sendMessage({ type: UNMUTE_MESSAGE_TYPE });
        isMutedByExtension = false;
      }

      if (videoElement && videoElement.playbackRate === MAX_PLAYBACK_RATE) {
        videoElement.playbackRate = NORMAL_PLAYBACK_RATE;
      }
    }
  };
})();

const observer = new MutationObserver(() => {
  checkForAds();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
