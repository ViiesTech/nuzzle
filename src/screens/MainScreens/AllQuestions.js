import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/CustomButton';
import theme from '../../theme';
import WelcomeHeader from '../../components/WelcomeHeader';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const DailyQuiz = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 28,
      room: 2,
      question: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      correct_answer: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      options: [
          "Sed ut perspiciatis unde omnis iste natus error",
          "sit voluptatem accusantium doloremque laudantium",
          "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
          "et quasi architecto beatae vitae dicta sunt explicabo"
      ],
    },
    {
      id: 29,
      room: 2,
      question: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      correct_answer: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      options: [
          "Sed ut perspiciatis unde omnis iste natus error",
          "sit voluptatem accusantium doloremque laudantium",
          "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
          "et quasi architecto beatae vitae dicta sunt explicabo"
      ],
    },
    {
      id: 30,
      room: 2,
      question: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      correct_answer: "Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr?",
      options: [
          "Sed ut perspiciatis unde omnis iste natus error",
          "sit voluptatem accusantium doloremque laudantium",
          "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
          "et quasi architecto beatae vitae dicta sunt explicabo"
      ],
    },
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState(null);
  const flatListRef = useRef(null);


  function getCurrentDateInFormattedString() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const checkAnswers = () => {
    flatListRef.current.scrollTo({ x: 0, y: 0, animated: true });
    setResult(0);
    for (let eachQuestion of questions) {
      if (
        eachQuestion['correct answer'] === selectedAnswers[`${eachQuestion.id}`]
      ) {
        setResult(oldResult => oldResult + 1);
      }
    }

  };



  const renderEachQuestion = (item, index) => {
    return (
      <View key={index} style={{width: wp('86%'), alignSelf: 'center', padding: 18, borderRadius: 14, borderWidth: 1, borderColor: 'lightgrey', marginBottom: 20 }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: hp('2.5%'),
            marginTop: 20,
            marginBottom: 10,
          }}>
          Q. {item.question}
        </Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {item.options.map((each, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedAnswers(answers => {
                    return {...answers, [item.id]: each};
                  });
                }}
                style={[
                  {
                    marginVertical: 6,
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    width: '90%'
                  },
                ]}>
                <BouncyCheckbox
                  fillColor="black"
                  isChecked={selectedAnswers[item.id] === each ? true : false}
                  disabled={true}
                />
                <Text
                  style={{
                      fontSize: hp('2%'),
                      color: 'black',
                    }}>{`${each}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <WelcomeHeader headerText={'Welcome Stephen'} />
      <ScrollView ref={flatListRef} contentContainerStyle={{flexGrow: 1, paddingVertical: 25}}>


        {loading ? (
          <ActivityIndicator
            size={80}
            color={'white'}
            style={{marginVertical: 30}}
          />
        ) : null}
        {result !== null ? (
          <View
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 22,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: theme.primaryGreen,
                fontWeight: 'bold',
                fontSize: hp('2%'),
              }}>
              RESULT
            </Text>
            <Text
              style={{
                color: theme.primaryGreen,
                fontWeight: 'bold',
                fontSize: hp('2%'),
              }}>
              {result}/{questions.length}
            </Text>
          </View>
        ) : null}

        {
          questions.map(renderEachQuestion)
        }

        {/* {
            Object.values(selectedAnswers).length === questions.length &&
            !loading && questions.length > 0 ? ( */}
              <CustomButton
                btnText={'Check your result'}
                onPress={() => navigation.navigate('Congrats')}
                style={{width: '85%', marginTop: -5}}
              />
            {/* ) : null
        } */}

        {
          questions.length <= 0 ? (
            <Text style={{color: 'black', fontSize: hp('2%'), alignSelf:'center', textAlign: 'center', marginTop: 10}}>Sorry there are no quizes</Text>
          ) : null
        }
          
      </ScrollView>
    </View>
  );
};

export default DailyQuiz;

const styles = StyleSheet.create({
  topBtn: {
    backgroundColor: theme.primaryGreen,
    width: '46%',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quizBtn: {
    backgroundColor: theme.primaryGreen,
    width: wp('90%'),
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 6,
  },
});
