const getUA = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  const ver = window.navigator.appVersion.toLowerCase();

  const isMSIE = ua.indexOf('msie') !== -1 && ua.indexOf('opera') === -1;
  const isIE11 = ua.indexOf('trident/7') !== -1;

  const data = {
    Tablet:
      (ua.indexOf('windows') !== -1 && ua.indexOf('touch') !== -1 && ua.indexOf('tablet pc') === -1) ||
      ua.indexOf('ipad') !== -1 ||
      (ua.indexOf('macintosh') > -1 && 'ontouchend' in document) ||
      (ua.indexOf('android') !== -1 && ua.indexOf('mobile') === -1) ||
      (ua.indexOf('firefox') !== -1 && ua.indexOf('tablet') !== -1) ||
      ua.indexOf('kindle') !== -1 ||
      ua.indexOf('silk') !== -1 ||
      ua.indexOf('playbook') !== -1,
    Mobile:
      (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) ||
      ua.indexOf('iphone') !== -1 ||
      ua.indexOf('ipod') !== -1 ||
      (ua.indexOf('android') !== -1 && ua.indexOf('mobile') !== -1) ||
      (ua.indexOf('firefox') !== -1 && ua.indexOf('mobile') !== -1) ||
      ua.indexOf('blackberry') !== -1,
    iOS:
      ua.indexOf('iphone') !== -1 ||
      ua.indexOf('ipod') !== -1 ||
      ua.indexOf('ipad') !== -1 ||
      (ua.indexOf('macintosh') > -1 && 'ontouchend' in document),
    iPad: ua.indexOf('ipad') !== -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document),
    iPhone: ua.indexOf('iphone') !== -1,
    Android: ua.indexOf('android') !== -1,
    MSIE: isMSIE, // IE11以外
    IE6: isMSIE && ver.indexOf('msie 6.') !== -1,
    IE7: isMSIE && ver.indexOf('msie 7.') !== -1,
    IE8: isMSIE && ver.indexOf('msie 8.') !== -1,
    IE9: isMSIE && ver.indexOf('msie 9.') !== -1,
    IE10: isMSIE && ver.indexOf('msie 10.') !== -1,
    IE11: isIE11,
    IE: isMSIE || isIE11,
    Edge: ua.indexOf('edge') !== -1,
    Chrome: ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1,
    Firefox: ua.indexOf('firefox') !== -1,
    Safari: ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1,
    Opera: ua.indexOf('opera') !== -1,
  };
  data.isSP = data.Mobile || data.Tablet;
  data.isPC = !data.isSP;

  return data;
};

export default getUA();
