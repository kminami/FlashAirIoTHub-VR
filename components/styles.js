import { StyleSheet } from 'react-360';

export default styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1300,
    height: 600,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  header: {
    width: 1300,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  content: {
    width: 1300,
    height: 460,
    flexDirection: 'row',
  },
  left: {
    width: 330,
    padding: 20,
    marginRight: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  right: {
    width: 950,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  imageList: {
    flexDirection: 'row',
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 1,
  },
  thumbnail: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
  },
});

