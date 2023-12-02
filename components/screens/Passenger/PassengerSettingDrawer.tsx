import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PassengerSettingDrawer = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const [firstName, setFirstName] = useState('Kamal');
  const [lastName, setLastName] = useState('Perera');
  const [phoneNumber, setPhoneNumber] = useState('0767089918');
  const [address, setAddress] = useState('No/42 Kandy Road, Nittambuwa');
  const [birthday, setBirthday] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [getCurrentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Fetch the current user asynchronously
    const fetchCurrentUser = () => {
      setCurrentDate(new Date().toLocaleDateString());
    };

    fetchCurrentUser();
  }, []);
  const handleOnPressBirthday = () => {
    setBirthday(!birthday);
  };
  const defaultImageURI =
    'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png';
  const handleImageSelection = async () => {
    await ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image.path);

        setSelectedImage(image.path);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
          console.log('User cancelled image picker');
        } else {
          console.error('ImagePicker Error: ', error);
        }
      });
  };

  const onDateChange: DateChangedCallback = date => {
    // Handle date change
    setSelectedDate(date.toDate());
    console.log('selectedDate', selectedDate?.toLocaleDateString());
    setCurrentDate(date.toDate().toLocaleDateString());
    console.log('date.toDate.getDay', date.toDate().getDay());
    setBirthday(false);
  };

  // const minDate = moment();
  // const maxDate = moment().add(7, 'days');
  // const disabledDates = calculateDisabledDates();
  const today = moment();
  const maxDate = today.toDate();
  console.log('maxDate', maxDate);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginVertical: 22}}>
          <TouchableOpacity onPress={handleImageSelection}>
            <View style={styles.circleOverlay} />
            <Image
              source={
                selectedImage ? {uri: selectedImage} : {uri: defaultImageURI}
              }
              style={{
                height: 90,
                width: 90,
                borderRadius: 45,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: -10,
                right: -10,
                zIndex: 9999,
              }}>
              <Icon
                name="add-a-photo"
                size={39}
                color="#cc2f2f"
                style={{padding: 2}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{flexDirection: 'column', marginBottom: 6}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fc0303',
              }}>
              First Name
            </Text>
            <View
              style={{
                height: 38,
                width: '100%',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={firstName}
                onChangeText={value => setFirstName(value)}
                editable={true}
              />
            </View>
          </View>
        </View>

        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{flexDirection: 'column', marginBottom: 6}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fc0303',
              }}>
              Last Name
            </Text>
            <View
              style={{
                height: 38,
                width: '100%',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={lastName}
                onChangeText={value => setLastName(value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{flexDirection: 'column', marginBottom: 6}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fc0303',
              }}>
              Phone Number
            </Text>
            <View
              style={{
                height: 38,
                width: '100%',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={phoneNumber}
                onChangeText={value => setPhoneNumber(value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{flexDirection: 'column', marginBottom: 6}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fc0303',
              }}>
              Address
            </Text>
            <View
              style={{
                height: 38,
                width: '100%',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                value={address}
                onChangeText={value => setAddress(value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{flexDirection: 'column', marginBottom: 6}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fc0303',
              }}>
              Date of Birthday
            </Text>
            <TouchableOpacity
              onPress={handleOnPressBirthday}
              style={{
                height: 38,
                width: '100%',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <Text>{getCurrentDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          isVisible={birthday}
          hasBackdrop={true}
          onBackdropPress={() => setBirthday(false)}
          animationOut={'slideOutDown'}
          style={{flex: 0.5, backgroundColor: '#fff'}}>
          <View>
            <CalendarPicker
              width={300}
              maxDate={maxDate}
              selectedStartDate={selectedDate}
              onDateChange={onDateChange}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default PassengerSettingDrawer;

const styles = StyleSheet.create({
  circleOverlay: {
    position: 'absolute',
    height: 110, // Slightly larger than the image size + border
    width: 110,
    borderRadius: 55, // Half of the width/height
    borderWidth: 4, // You can adjust this value
    borderColor: '#fc0303', // Set the color for the overlay border
    zIndex: 1, // Make sure it's below the Image
    top: -10, // Adjust these values to center the overlay on the image
    left: -10,
  },
  calender: {
    marginTop: 10,
    position: 'relative',
  },
});
