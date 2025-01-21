PlexIt = {

1: function () {
	const url = 'javascript:%20var%20s=document.createElement("script");s.type="text/javascript";s.src="//plex.tv/queue/bookmarklet_payload";var%20h=document.getElementsByTagName("head")[0];h.appendChild(s);void(0);'

document
  .getElementById("content")
  .webNavigation
  .loadURI(url, 0, null, null, null)
  },

}