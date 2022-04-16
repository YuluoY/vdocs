export function isMobile() {
    const ua = navigator.userAgent;
    // return ((ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) ||
    //     (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)));
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}