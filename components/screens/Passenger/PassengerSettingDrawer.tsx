import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PassengerSettingDrawer = () => {
  const handleImageSelection = async () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const [selectedImage, setSelectedImage] = useState(
    'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png',
  );

  return (
    <View style={{alignItems: 'center', marginVertical: 22}}>
      <TouchableOpacity onPress={handleImageSelection}>
        <Image
          source={{uri: selectedImage}}
          style={{
            height: 170,
            width: 170,
            borderRadius: 85,
            borderWidth: 5,
            borderColor: '#fc0303',
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

const styles = StyleSheet.create({});
