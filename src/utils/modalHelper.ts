export function getScrollWidth(target = document.documentElement): number {
  const anchoVentana = window.innerWidth;
  const anchoDocumento = target.clientWidth;
  const anchoScroll = anchoVentana - anchoDocumento;

  return anchoScroll;
}
