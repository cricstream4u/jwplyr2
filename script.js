<script>
  // Function to get URL parameter by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get 'file' param from URL or fallback to default URL
  const videoUrl = getQueryParam('file') || "https://jdou5wo6ffta.acek-cdn.com/hls2/01/06223/e85ww2zrhvvj_h/master.m3u8?t=hEJ4NRmAlCJcHulyAXs0mgW2ANiBzPmY9hwrJeboi0A&s=1756762667&e=129600&f=31115563&srv=pmjx9cjae94d&i=0.4&sp=500&p1=pmjx9cjae94d&p2=pmjx9cjae94d&asn=55836";

  // Basic validation to check if URL is valid (optional)
  if(videoUrl && videoUrl.startsWith('http')) {
    jwplayer("jwplayerDiv").setup({
      file: videoUrl,
      width: "100%",
      aspectratio: "16:9",
      autostart: false,
      mute: false,
      preload: "auto",
    });
  } else {
    document.getElementById('jwplayerDiv').innerHTML = "<p>Invalid or missing video URL.</p>";
  }
</script>
