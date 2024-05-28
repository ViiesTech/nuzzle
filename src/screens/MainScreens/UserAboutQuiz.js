import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../theme';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import WelcomeHeader from '../../components/WelcomeHeader';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const UserAboutQuiz = ({navigation}) => {
  const [form, setForm] = useState({
    address: '',
    currentEmployer: '',
    sinceYear: '',
    sinceMonth: '',
    officeAddress: '',
    certifications: '',
  });
  const [gender, setGender] = useState('');
  const [experience, setExperience] = useState([]);
  const [comfortableWith, setComfortableWith] = useState([]);

  const handleInputChange = (key, value) => {
    setForm(oldForm => ({...oldForm, [key]: value}));
  };

  const handleExperienceCheckbox = (selectedExperience) => {
    if(experience.includes(selectedExperience)){
        const filteredExperience = experience.filter(eachExperience => eachExperience !== selectedExperience)
        setExperience(filteredExperience)
    }else {
        setExperience(oldExperiences => [...oldExperiences, selectedExperience])
    }
  }
  const handleComfortableWithCheckbox = (selectedComfortableWith) => {
    if(comfortableWith.includes(selectedComfortableWith)){
        const filteredComfortableWith = comfortableWith.filter(eachComfortableWith => eachComfortableWith !== selectedComfortableWith)
        setComfortableWith(filteredComfortableWith)
    }else {
        setComfortableWith(oldComfortableWith => [...oldComfortableWith, selectedComfortableWith])
    }
  }
  console.log(comfortableWith)

  return (
    <View style={{flex: 1, backgroundColor: 'white', alignSelf: 'center'}}>
      <WelcomeHeader headerText={'Welcome Stephen'} />
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <View style={styles.internalCont}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '92%',
              alignSelf: 'center',
              marginVertical: 15,
            }}>
            <View style={styles.numberCont}>
              <Text style={{fontSize: hp('2%'), color: 'black'}}>2</Text>
            </View>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              Tell Us About Yourself
            </Text>
          </View>

          <Text style={styles.inputLabel}>Home Address</Text>
          <CustomInput
            placeholder="Type Here"
            value={form.address}
            onChange={changedText => handleInputChange('address', changedText)}
          />

          <Text style={styles.inputLabel}>Current Employer</Text>
          <CustomInput
            placeholder="Type Here"
            value={form.currentEmployer}
            onChange={changedText =>
              handleInputChange('currentEmployer', changedText)
            }
          />

          <Text style={styles.inputLabel}>Since</Text>

          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomInput
              placeholder="Years"
              value={form.sinceYear}
              style={{width: '45%'}}
              onChange={changedText =>
                handleInputChange('sinceYear', changedText)
              }
            />
            <Text
              style={{fontSize: hp('3%'), color: 'black', fontWeight: 'bold'}}>
              --
            </Text>
            <CustomInput
              placeholder="Months"
              value={form.sinceMonth}
              style={{width: '45%'}}
              onChange={changedText =>
                handleInputChange('sinceMonth', changedText)
              }
            />
          </View>

          <Text style={styles.inputLabel}>Last/ Present Office Address</Text>
          <CustomInput
            placeholder="Type Here"
            value={form.officeAddress}
            onChange={changedText =>
              handleInputChange('officeAddress', changedText)
            }
          />


          {/* Gender Radio Buttons */}
          <Text style={styles.inputLabel}>Gender</Text>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setGender('male')}
              style={[
                styles.genderContainer,
                gender === 'male' ? {backgroundColor: 'black'} : null,
              ]}>
              <Text
                style={[
                  {color: 'grey', fontSize: hp('2%')},
                  gender === 'male' ? {color: 'white'} : null,
                ]}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('female')}
              style={[
                styles.genderContainer,
                gender === 'female' ? {backgroundColor: 'black'} : null,
              ]}>
              <Text
                style={[
                  {color: 'grey', fontSize: hp('2%')},
                  ,
                  gender === 'female' ? {color: 'white'} : null,
                ]}>
                Female
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('other')}
              style={[
                styles.genderContainer,
                {width: '48%'},
                gender === 'other' ? {backgroundColor: 'black'} : null,
              ]}>
              <Text
                style={[
                  {color: 'grey', fontSize: hp('1.8%')},
                  ,
                  gender === 'other' ? {color: 'white'} : null,
                ]}>
                Prefer Not To Say
              </Text>
            </TouchableOpacity>
          </View>


          {/* Experiences Checklist */}
          <Text style={styles.inputLabel}>Shifts/Experience In</Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('daycare')}
                onPress={() => handleExperienceCheckbox('daycare')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Daycare (Group Play)
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('bathing')}
                onPress={() => handleExperienceCheckbox('bathing')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Bathing
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('ennel')}
                onPress={() => handleExperienceCheckbox('ennel')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Ennel (Dog Handling/Feeding/Health)
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('reception')}
                onPress={() => handleExperienceCheckbox('reception')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Reception
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('training')}
                onPress={() => handleExperienceCheckbox('training')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Training
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('grooming')}
                onPress={() => handleExperienceCheckbox('grooming')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Grooming
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={experience.includes('other')}
                onPress={() => handleExperienceCheckbox('other')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Other
              </Text>
            </View>
          </View>

          <Text style={styles.inputLabel}>Certifications</Text>
          <CustomInput
            placeholder="Type Here"
            value={form.certifications}
            onChange={changedText =>
              handleInputChange('certifications', changedText)
            }
          />


        {/* Comfortable With Checklist */}
        <Text style={styles.inputLabel}>Comfortable With:</Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('smallDog')}
                onPress={() => handleComfortableWithCheckbox('smallDog')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Small Dog
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('largeDog')}
                onPress={() => handleComfortableWithCheckbox('largeDog')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Large Dog
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('allBreeds')}
                onPress={() => handleComfortableWithCheckbox('allBreeds')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                All Breeds
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('leashReactivity')}
                onPress={() => handleComfortableWithCheckbox('leashReactivity')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Leash Reactivity
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('cats')}
                onPress={() => handleComfortableWithCheckbox('cats')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Cats
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('birds')}
                onPress={() => handleComfortableWithCheckbox('birds')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Birds
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('reptiles')}
                onPress={() => handleComfortableWithCheckbox('reptiles')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Reptiles
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('rodents')}
                onPress={() => handleComfortableWithCheckbox('rodents')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Small Furries/Rodents
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('horses')}
                onPress={() => handleComfortableWithCheckbox('horses')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Horses
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 5}}>
              <BouncyCheckbox
                fillColor="black"
                innerIconStyle={{borderRadius: 8}}
                iconStyle={{borderRadius: 8}}
                isChecked={comfortableWith.includes('farmAnimals')}
                onPress={() => handleComfortableWithCheckbox('farmAnimals')}
              />
              <Text
                style={{color: 'black', fontSize: hp('2%'), marginLeft: -8}}>
                Farm Animals
              </Text>
            </View>
            
          </View>

          <CustomButton
            onPress={() => navigation.navigate('PetQuiz')}
            btnText={'Submit'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserAboutQuiz;

const styles = StyleSheet.create({
  internalCont: {
    width: wp('90%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  numberCont: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputLabel: {
    color: 'black',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    width: '88%',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  genderContainer: {
    width: '24%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
  },
});
