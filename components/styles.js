import { StyleSheet } from 'react-360';

export default styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
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
    width: 1000,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  content: {
    width: 1000,
    height: 400,
    flexDirection: 'row',
  },
  left: {
    width: 400,
    padding: 20,
    marginRight: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  right: {
    width: 580,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
  },
});

