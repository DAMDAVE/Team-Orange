export const preloadImages = (imageArray) => {
  const promises = imageArray.map((images) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = images;
      image.onload = resolve;
      image.onerror = reject;
    });
  });
  return Promise.all(promises);
};
