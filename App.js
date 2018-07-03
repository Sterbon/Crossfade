import React, { Component } from 'react';
import { ScrollView, PermissionsAndroid } from 'react-native';
import MusicFiles from 'react-native-get-music-files';
import AlbumDetail from './List';
import { Header } from './src/components/common';

class AlbumList extends Component {
  state = { albums: [] };
  
  async componentWillMount() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
          title: 'Cool Photo App Camera Permission',
          message: 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }

  MusicFiles.getAll({
		blured: true, // works only when 'cover' is set to true
		artist: true,
		duration: true, //default : true
		genre: true,
    title: true,
    cover: true,
		minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
		fields: ['title', 'albumTitle', 'genre', 'lyrics', 'artwork', 'duration'] // for iOs Version
	})
    .then(response => { 
      console.log('HUA?');
      this.setState({ albums: response });
    })
		.catch((error) => {
			console.log(error);
		});
  }
  
  async requestStorageAccess() {
   
  }

	renderAlbums() {
		return this.state.albums.map(album => {
			console.log(album);
    return (
        <AlbumDetail key={album.title} album={album} />
      );
		}
		);
	}
    render() {
        console.log(this.state);
        return (
			<ScrollView>
        <Header headerText='gg' />
				{this.renderAlbums()}
			</ScrollView>
        );
    }
}

export default AlbumList;
