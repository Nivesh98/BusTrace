import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PassengerSettingDrawer = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const defaultImageURI =
    'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png';
  const handleImageSelection = async () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setSelectedImage(image.path);
    });
  };

  return (
    <View style={{alignItems: 'center', marginVertical: 22}}>
      <TouchableOpacity onPress={handleImageSelection}>
        <View style={styles.circleOverlay} />
        <Image
          source={selectedImage ? {uri: selectedImage} : {uri: defaultImageURI}}
          style={{
            height: 170,
            width: 170,
            borderRadius: 85,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 10,
            zIndex: 9999,
          }}>
          <Icon
            name="add-a-photo"
            size={43}
            color="#cc2f2f"
            style={{padding: 2}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PassengerSettingDrawer;

const styles = StyleSheet.create({
  circleOverlay: {
    position: 'absolute',
    height: 200, // Slightly larger than the image size + border
    width: 200,
    borderRadius: 100, // Half of the width/height
    borderWidth: 5, // You can adjust this value
    borderColor: '#fc0303', // Set the color for the overlay border
    zIndex: 1, // Make sure it's below the Image
    top: -15, // Adjust these values to center the overlay on the image
    left: -15,
  },
});
