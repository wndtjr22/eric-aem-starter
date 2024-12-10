
export default async function decorate(block) {
  const videoTags = block.querySelectorAll('a');

  [...videoTags].forEach((row) => {
    const video = document.createElement("iframe");
    video.src = row.href;
    video.width = "420";
    video.height = "315";
    video.frameBorder = "0";
    video.allowFullscreen = true;
    block.append(video);
  });
}