import Image from "next/image";
import nextImage from "../../assets/nextImage.jpg";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Image Tag Use</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13ug1k4vtSgXDpbZc2EP2yr66-ZlW9kFm8Q&s"
        alt="norlam image"
        className="mx-auto"
        height={200}
        width={200}
      />

      <h1 className="mt-5">Image Tag Use form </h1>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13ug1k4vtSgXDpbZc2EP2yr66-ZlW9kFm8Q&s"
        alt="next image"
        width={200}
        height={200}
        className="mx-auto"
      />

      <h1 className="mt-5">Local Image Use from folder </h1>
      <Image
        src={nextImage}
        alt="next image"
        width={200}
        height={200}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
