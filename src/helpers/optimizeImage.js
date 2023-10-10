export const optimizeImage = async file => {
  const maxWidth = 200;
  const maxHeight = 200;

  return new Promise(resolve => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      let newWidth, newHeight;

      if (img.width > img.height) {
        newWidth = maxWidth;
        newHeight = (img.height * maxWidth) / img.width;
      } else {
        newWidth = (img.width * maxHeight) / img.height;
        newHeight = maxHeight;
      }

      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      canvas.toBlob(blob => {
        resolve(new File([blob], file.name, { type: file.type }));
      }, file.type);
    };
  });
};
