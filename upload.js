document.getElementById('uploader').onchange = async (e) => {
  const file = e.target.files[0];
  console.log("Selected:", file);

  // Convert to Base64 to send via PandaSuite API
  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    console.log("Base64:", base64);
  };
  reader.readAsDataURL(file);
};
