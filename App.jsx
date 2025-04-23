/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import colors from './constants/colors/colors';
import {Text} from 'react-native';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import {scaleFontSize} from './assets/styles/scaling';
function App() {
  const userStories = [
    {
      id: 1,
      firstName: 'akshita',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      firstName: 'akshat',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      firstName: 'ankita',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'ankit',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      firstName: 'anjali',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'deep',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      firstName: 'Bhavi',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Bhavesh',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'shiv',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 10,
      firstName: 'parvati',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userPost = [
    {
      firstName: 'Akshita',
      lastName: 'Tiwari',
      location: 'Indore, India',
      likes: '5000',
      comments: '50',
      bookmarks: '55',
      id: 1,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Anjali',
      lastName: 'Tiwari',
      location: 'Indore, India',
      likes: '500',
      comments: '25',
      bookmarks: '35',
      id: 2,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ankit',
      lastName: 'Tiwari',
      location: 'uttrakhand, India',
      likes: '4000',
      comments: '60',
      bookmarks: '45',
      id: 3,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Bhavesh',
      lastName: 'sharma',
      location: 'Guna, India',
      likes: '800',
      comments: '20',
      bookmarks: '15',
      id: 4,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Akshat',
      lastName: 'Dave',
      location: 'Indore, India',
      likes: '500',
      comments: '10',
      bookmarks: '25',
      id: 5,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingPosts, setIsLoadingUserPosts] = useState(false);

  const Pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitalData = Pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitalData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitalDataPost = Pagination(userPost, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitalDataPost);
    setIsLoadingUserPosts(false);
  }, []);
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={globalStyle.header}>
              <Title text="Let's explore" />
              <TouchableOpacity style={globalStyle.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={scaleFontSize(20)}
                  color={colors.lightGrey}
                />
                <View style={globalStyle.messageNumberConatiner}>
                  <Text style={globalStyle.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.userStoryConatiner}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) return;
                  setIsLoadingUserStories(true);

                  const nextPage = userStoriesCurrentPage + 1;
                  const contentToAppend = Pagination(
                    userStories,
                    nextPage,
                    userStoriesPageSize,
                  );

                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(nextPage);
                    setUserStoriesRenderedData(prev => [
                      ...prev,
                      ...contentToAppend,
                    ]);
                  }

                  setIsLoadingUserStories(false);
                }}
                data={userStoriesRenderedData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <UserStory
                    key={'userStory' + item.id}
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingPosts) return;
          setIsLoadingUserPosts(true);

          const nextPage = userStoriesCurrentPage + 1;
          const contentToAppend = Pagination(
            userPost,
            nextPage,
            userPostsPageSize,
          );

          if (contentToAppend.length > 0) {
            setUserPostsCurrentPage(nextPage);
            setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
          }

          setIsLoadingUserPosts(false);
        }}
        showsVerticalScrollIndicator={false}
        data={userPostsRenderedData}
        renderItem={({item}) => (
          <View style={globalStyle.userPostConatiner}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              image={item.image}
              profileImage={item.profileImage}
            />
          </View>
        )}
      />
    </View>
  );
}

export default App;
