
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UploadHelper = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">How to Upload Images</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Image Upload Guide</DialogTitle>
          <DialogDescription>
            Follow these steps to replace placeholder images with your own
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <h3 className="font-semibold">Step 1: Create folders</h3>
          <p>Create these folders in your project's public directory:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>public/images/gallery</li>
            <li>public/images/hero</li>
            <li>public/images/rooms</li>
            <li>public/images/amenities</li>
          </ul>

          <h3 className="font-semibold mt-4">Step 2: Upload your images</h3>
          <p>Upload your images to the appropriate folders:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>For gallery images: public/images/gallery/</li>
            <li>For hero section: public/images/hero/</li>
            <li>For room images: public/images/rooms/</li>
            <li>For amenity images: public/images/amenities/</li>
          </ul>

          <h3 className="font-semibold mt-4">Step 3: Update image references</h3>
          <p>Once uploaded, update the Gallery.tsx file to reference your images:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {`const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/image1.jpg",
    alt: "Image description",
    caption: "Image caption"
  },
  // Add all your images here
];`}
          </pre>

          <div className="bg-amber-50 border border-amber-300 p-3 rounded-md mt-4">
            <p className="text-amber-800 font-medium">Image Optimization Tips:</p>
            <ul className="list-disc pl-5 text-amber-700">
              <li>Resize large images to max 2000px width</li>
              <li>Use JPG for photos (better compression)</li>
              <li>Use descriptive filenames (bedroom.jpg, kitchen.jpg)</li>
              <li>Keep file sizes under 500KB when possible</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadHelper;
