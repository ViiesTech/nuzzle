import ImagePicker from "react-native-image-crop-picker"

export const handleImagePicker = () => {
    return ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        console.log(image.path);
        return image;
    }).catch(error => {
        console.error('Error picking image:', error);
        throw error;
    });
}