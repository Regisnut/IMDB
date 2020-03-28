/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {whileStatement} from '@babel/types';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <View
          style={{
            marginTop: 30,
            height: 60,
            backgroundColor: '#393939',
            justifyContent: 'center',
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 100,
              height: 80,
              marginLeft: 10,
              marginTop: 5,
              tintColor: 'white',
            }}
            source={require('./Assets/IMDB.png')}
          />
        </View>
        <View style={{backgroundColor: '#222222', marginBottom: 10}}>
          <View style={styles.description}>
            <Text style={styles.title}>FILM : </Text>
            <Text style={styles.title}>Interstellar</Text>
          </View>
          <View style={styles.description}>
            <Text style={{color: 'grey', marginHorizontal: 5}}>2014</Text>
            <Text style={{color: 'grey', marginHorizontal: 5}}>PG-13</Text>
            <Text style={{color: 'grey', marginHorizontal: 5}}>2H49</Text>
            <Text style={{color: 'grey', marginHorizontal: 5}}>
              Adventure, Drama, Sci-Fi
            </Text>
          </View>

          <View style={styles.description2}>
            <View>
              <Image
                style={{width: 100, height: 150}}
                source={require('./Assets/interstellar-movie.jpg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                maxWidth: 280,
                paddingLeft: 12,
                paddingRight: 20,
              }}
            >
              <Text style={styles.textwhite}>
                A Team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>

              <TouchableOpacity
                style={styles.bouton}
                onPress={() => console.log('+ ADD TO WATCHLIST')}
              >
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    + ADD TO WATCHLIST
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',

              marginHorizontal: 30,
              marginVertical: 15,
            }}
          >
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require('./Assets/yellowStar-removebg-preview.png')}
              />
              <Text style={styles.textwhite}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>8.6</Text>
                /10
              </Text>
              <Text style={styles.textgrey}> 1.1M</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  tintColor: 'white',
                  width: 20,
                  height: 20,
                  borderColor: 'white',
                }}
                source={require('./Assets/star-transparent-removebg-preview.png')}
              />

              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                RATE THIS
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  width: 20,
                  height: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{color: 'white'}}>74</Text>
              </View>

              <Text style={styles.textwhite}>Metascore</Text>
              <Text style={{fontSize: 12, color: 'grey', height: 20}}>
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: '#222222'}}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 20,
              paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <Text style={{fontSize: 20, color: 'white'}}>Top Billed Cast</Text>
            <Text style={{fontSize: 15, color: '#3e9ee8', fontWeight: 'bold'}}>
              SEE ALL
            </Text>
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.paddingL10}>
              <Image
                style={{
                  width: 140,
                  height: 160,
                  resizeMode: 'cover',
                  marginBottom: 10,
                }}
                source={require('./Assets/Matthew.jpg')}
              />
              <Text style={styles.textwhite} numberOfLines={1}>
                Matthew Mcconaughey
              </Text>
              <Text style={styles.textgrey}> Cooper</Text>
            </View>
            <View style={styles.paddingL10}>
              <Image
                style={styles.image}
                source={require('./Assets/annehathaway.jpg')}
              />
              <Text style={styles.textwhite}> Anne Hathaway</Text>
              <Text style={styles.textgrey}> Brand</Text>
            </View>

            <View style={styles.paddingL10}>
              <Image
                style={styles.image}
                source={require('./Assets/jessica-chastain.jpg')}
              />
              <Text style={styles.textwhite}> Jessica Chastain</Text>
              <Text style={styles.textgrey}> Murph</Text>
            </View>

            <View style={styles.paddingL10}>
              <Image
                style={styles.image}
                source={require('./Assets/MichaelCaine.jpg')}
              />
              <Text style={styles.textwhite}> Michael Caine</Text>
              <Text style={styles.textgrey}> Murph</Text>
            </View>
          </ScrollView>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Text style={styles.textwhite}>Director</Text>
            <Text style={styles.textgrey}>Christopher Nolan</Text>
          </View>
          <View style={{marginHorizontal: 10, marginBottom: 10}}>
            <Text style={styles.textwhite}>Writers</Text>
            <Text style={styles.textgrey}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// app style
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
  },
  scrollView: {
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  description: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  textgrey: {
    color: 'grey',
  },
  textinfos2: {
    color: 'white',
  },

  textwhite: {
    color: 'white',
    fontSize: 12,
  },
  description2: {
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  bouton: {
    backgroundColor: '#1f76bc',
    height: 28,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  description3: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  image: {
    width: 120,
    height: 160,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  paddingL10: {paddingLeft: 10},
});

export default App;
