import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'blue'}}>Go back</Text>
        </TouchableOpacity>
        <Text>Welcome to profile page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
